import { loadProblems, loadTools, buildToolsIndex } from "./dataService.js";
import { filterProblems, filterTools } from "./filterService.js";
import { renderProblemCards, renderQuickPaths, renderProblemDetail, renderTools, renderFilters, setStaticText } from "./renderService.js";
import { WizardController } from "./wizardController.js";
import { strings } from "./i18n/strings.js";
import { demoProblems, demoTools } from "./demoData.js";

class SchoolAIApp {
  constructor() {
    this.state = {
      problems: [],
      tools: [],
      toolsIndex: {},
      activeProblemId: null,
      filters: {
        category: "all",
        type: "all",
        cost: "all",
        language: "all",
        search: "",
        problemId: null
      },
      language: "it",
      theme: "light"
    };
  }

  t = (key) => strings[this.state.language]?.[key] || strings.it[key] || key;

  async init() {
    await this.loadData();
    this.cacheElements();
    this.bindEvents();
    this.render();
    this.initWizard();
    this.applyThemeFromStorage();
  }

  async loadData() {
    try {
      const [problems, tools] = await Promise.all([loadProblems(), loadTools()]);
      this.state.problems = problems;
      this.state.tools = tools;
      this.state.toolsIndex = buildToolsIndex(tools);
      this.state.activeProblemId = problems[0]?.id || null;
      this.state.filters.problemId = this.state.activeProblemId;
    } catch (error) {
      console.error("Errore nel caricamento dati", error);
      // Fallback per testing rapido senza server
      this.state.problems = [...demoProblems];
      this.state.tools = [...demoTools];
      this.state.toolsIndex = buildToolsIndex(this.state.tools);
      this.state.activeProblemId = this.state.problems[0]?.id || null;
      this.state.filters.problemId = this.state.activeProblemId;
    }
  }

  cacheElements() {
    this.problemsGrid = document.querySelector("#problemsGrid");
    this.quickPaths = document.querySelector("#quickPaths");
    this.toolsGrid = document.querySelector("#toolsGrid");
    this.themeToggle = document.querySelector("#themeToggle");
    this.langToggle = document.querySelector("#langToggle");
    this.searchToolsInput = document.querySelector("#searchTools");
    this.searchProblemsInput = document.querySelector("#searchProblems");
    this.filterProblemCategory = document.querySelector("#filterProblemCategory");
    this.filterToolType = document.querySelector("#filterToolType");
    this.filterCost = document.querySelector("#filterCost");
    this.filterLanguage = document.querySelector("#filterLanguage");
    this.clearFiltersBtn = document.querySelector("#clearFilters");
  }

  bindEvents() {
    if (this.themeToggle) {
      this.themeToggle.addEventListener("click", () => this.toggleTheme());
    }
    if (this.langToggle) {
      this.langToggle.addEventListener("click", () => this.toggleLanguage());
    }

    if (this.searchToolsInput) {
      this.searchToolsInput.addEventListener("input", (e) => {
        this.state.filters.search = e.target.value;
        this.updateTools();
      });
    }

    if (this.searchProblemsInput) {
      this.searchProblemsInput.addEventListener("input", (e) => {
        this.renderProblems(e.target.value);
      });
    }

    const filterHandlers = [
      [this.filterProblemCategory, "category"],
      [this.filterToolType, "type"],
      [this.filterCost, "cost"],
      [this.filterLanguage, "language"]
    ];

    filterHandlers.forEach(([node, key]) => {
      if (node) {
        node.addEventListener("change", (event) => {
          this.state.filters[key] = event.target.value;
          if (key === "category") {
            this.state.activeProblemId = null;
            this.state.filters.problemId = null;
          }
          this.updateTools();
        });
      }
    });

    if (this.clearFiltersBtn) {
      this.clearFiltersBtn.addEventListener("click", () => {
        this.state.filters = { category: "all", type: "all", cost: "all", language: "all", search: "", problemId: null };
        this.syncFiltersUI();
        this.updateTools();
      });
    }
  }

  render() {
    setStaticText(this.t);
    renderFilters(this.state.problems, this.t);
    this.renderProblems();
    this.renderQuickPaths();
    this.renderProblemDetail();
    this.syncFiltersUI();
    this.updateTools();
  }

  renderProblems(searchQuery = "") {
    const visibleProblems = filterProblems(this.state.problems, searchQuery, this.state.filters.category);
    if (!visibleProblems.find((p) => p.id === this.state.activeProblemId) && visibleProblems.length > 0) {
      this.state.activeProblemId = visibleProblems[0].id;
      this.state.filters.problemId = this.state.activeProblemId;
    }
    renderProblemCards(visibleProblems, this.problemsGrid, this.t, (id) => this.selectProblem(id));
  }

  renderQuickPaths() {
    renderQuickPaths(this.state.problems, this.quickPaths, this.t, (id, openWizard = false) => {
      this.selectProblem(id);
      if (openWizard && this.wizard) {
        this.wizard.state.need = id;
        this.wizard.highlightSelection("need");
        this.wizard.open();
      }
    });
  }

  renderProblemDetail() {
    const problem = this.state.problems.find((p) => p.id === this.state.activeProblemId);
    renderProblemDetail(problem, this.state.toolsIndex, this.t, (problemId) => {
      this.state.filters.problemId = problemId;
      if (this.wizard) {
        this.wizard.state.need = problemId;
        this.wizard.highlightSelection("need");
        this.wizard.open();
      }
    });
  }

  updateTools() {
    const filtered = filterTools(this.state.tools, this.state.filters, this.state.problems);
    renderTools(filtered, this.toolsGrid, this.t);
  }

  selectProblem(id) {
    this.state.activeProblemId = id;
    this.state.filters.problemId = id;
    const problem = this.state.problems.find((p) => p.id === id);
    if (problem) {
      this.state.filters.category = problem.category;
      this.syncFiltersUI();
    }
    this.renderProblemDetail();
    this.updateTools();
  }

  toggleTheme() {
    this.state.theme = this.state.theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", this.state.theme);
    localStorage.setItem("theme", this.state.theme);
  }

  applyThemeFromStorage() {
    const saved = localStorage.getItem("theme");
    if (saved) {
      this.state.theme = saved;
      document.documentElement.setAttribute("data-theme", saved);
    }
  }

  toggleLanguage() {
    this.state.language = this.state.language === "it" ? "en" : "it";
    this.render();
    if (this.wizard) {
      this.wizard.renderStepper();
    }
  }

  initWizard() {
    this.wizard = new WizardController({
      t: this.t,
      onApply: (state) => this.applyWizard(state)
    });
    this.wizard.init();
  }

  applyWizard(wizardState) {
    if (wizardState.need) {
      this.selectProblem(wizardState.need);
    }

    if (wizardState.context === "classe") {
      this.state.filters.cost = "licenza-scuola";
    } else if (wizardState.context === "casa") {
      this.state.filters.cost = "gratuito";
    } else if (wizardState.context === "multilingua") {
      this.state.filters.language = "en";
    }

    if (wizardState.output === "audio") {
      this.state.filters.type = "lettura";
    } else if (wizardState.output === "quiz") {
      this.state.filters.type = "quiz";
    } else if (wizardState.output === "modificabile") {
      this.state.filters.type = "mappe";
    }

    this.syncFiltersUI();
    this.updateTools();
  }

  syncFiltersUI() {
    if (this.searchToolsInput) this.searchToolsInput.value = this.state.filters.search;
    if (this.filterProblemCategory) this.filterProblemCategory.value = this.state.filters.category;
    if (this.filterToolType) this.filterToolType.value = this.state.filters.type;
    if (this.filterCost) this.filterCost.value = this.state.filters.cost;
    if (this.filterLanguage) this.filterLanguage.value = this.state.filters.language;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const app = new SchoolAIApp();
  app.init();
});
