export function setStaticText(t) {
  const textMap = {
    heroTitle: "#heroTitle",
    heroSubtitle: "#heroSubtitle",
    frequentProblems: "#frequentProblemsTitle",
    quickPaths: "#quickPathsTitle",
    toolsCatalog: "#toolsCatalogTitle",
    filtersTitle: "#filtersTitle"
  };

  Object.entries(textMap).forEach(([key, selector]) => {
    const node = document.querySelector(selector);
    if (node) node.textContent = t(key);
  });

  const searchInput = document.querySelector("#searchTools");
  if (searchInput) searchInput.placeholder = t("searchPlaceholder");

  const searchProblems = document.querySelector("#searchProblems");
  if (searchProblems) searchProblems.placeholder = t("searchPlaceholder");

  const heroWizard = document.querySelector("#heroWizardBtn");
  if (heroWizard) heroWizard.textContent = t("heroCtaPrimary");

  const wizardTitle = document.querySelector("#wizardTitle");
  if (wizardTitle) wizardTitle.textContent = t("wizardTitle");

  const wizardApply = document.querySelector("#wizardApply");
  if (wizardApply) wizardApply.textContent = t("wizardCta");

  const quickWizard = document.querySelector("#quickWizardBtn");
  if (quickWizard) quickWizard.textContent = t("heroCtaPrimary");

  const clearFiltersBtn = document.querySelector("#clearFilters");
  if (clearFiltersBtn) clearFiltersBtn.textContent = t("clearFilters");
}

export function renderProblemCards(problems, container, t, onSelect) {
  if (!container) return;
  container.innerHTML = "";

  problems.forEach((problem) => {
    const card = document.createElement("article");
    card.className = "problem-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", problem.title);

    card.innerHTML = `
      <div class="problem-meta">
        <span class="problem-category">${problem.category}</span>
      </div>
      <h3>${problem.title}</h3>
      <p>${problem.shortDescription}</p>
      <div class="problem-actions">
        <button class="btn ghost" aria-label="${problem.title}">${t("recommendedTools")}</button>
        <span class="chevron" aria-hidden="true">→</span>
      </div>
    `;

    const handleSelect = () => onSelect(problem.id);
    card.addEventListener("click", handleSelect);
    card.addEventListener("keypress", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleSelect();
      }
    });

    container.appendChild(card);
  });
}

export function renderQuickPaths(problems, container, t, onSelect) {
  if (!container) return;
  container.innerHTML = "";

  const topPaths = problems.slice(0, 5);
  topPaths.forEach((problem) => {
    const button = document.createElement("button");
    button.className = "chip";
    button.type = "button";
    button.textContent = problem.title;
    button.setAttribute("aria-label", `${t("quickPaths")} ${problem.title}`);
    button.addEventListener("click", () => onSelect(problem.id, true));
    container.appendChild(button);
  });
}

export function renderProblemDetail(problem, toolsIndex, t, onToolClick) {
  const detail = document.querySelector("#problemDetail");
  if (!detail || !problem) return;

  detail.innerHTML = `
    <div class="problem-hero">
      <div>
        <p class="problem-kicker">${problem.category}</p>
        <h2>${problem.title}</h2>
        <p>${problem.userProfile}</p>
      </div>
      <div class="cta-group">
        <button class="btn primary" id="openWizardFromProblem">${t("heroCtaPrimary")}</button>
        <button class="btn ghost" id="scrollToTools">${t("viewAllTools")}</button>
      </div>
    </div>
    <div class="problem-sections">
      <section>
        <h3>${t("overview")}</h3>
        <p>${problem.useCase}</p>
      </section>
      <section>
        <h3>${t("benefits")}</h3>
        <ul>${problem.benefits.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>
      <section>
        <h3>${t("steps")}</h3>
        <ol>${problem.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
      </section>
      <section>
        <h3>${t("warnings")}</h3>
        <ul>${problem.warnings.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>
      <section>
        <h3>${t("privacySecurity")}</h3>
        <p>${problem.privacyNotes}</p>
      </section>
      <section>
        <h3>${t("recommendedTools")}</h3>
        <div class="tools-inline">
          ${renderTopTools(problem.recommendedTools, toolsIndex, t)}
        </div>
      </section>
    </div>
  `;

  const scrollToToolsBtn = detail.querySelector("#scrollToTools");
  if (scrollToToolsBtn) {
    scrollToToolsBtn.addEventListener("click", () => {
      const target = document.querySelector("#toolsSection");
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  }

  const openWizardBtn = detail.querySelector("#openWizardFromProblem");
  if (openWizardBtn) {
    openWizardBtn.addEventListener("click", () => onToolClick(problem.id));
  }
}

export function renderTools(tools, container, t) {
  if (!container) return;
  container.innerHTML = "";

  tools.forEach((tool) => {
    const card = document.createElement("article");
    card.className = "tool-card";
    card.innerHTML = `
      <div class="tool-header">
        <div>
          <p class="eyebrow">${tool.type}</p>
          <h3>${tool.name}</h3>
        </div>
        <div class="pill">${tool.cost}</div>
      </div>
      <p class="muted">${tool.privacy}</p>
      <div class="tool-meta">
        <span>${t("onlineLabel")}: ${tool.online ? "✅" : "—"}</span>
        <span>${t("offlineLabel")}: ${tool.offline ? "✅" : "—"}</span>
        <span>${t("filterLanguage")}: ${tool.languages.join(", ")}</span>
        <span>Device: ${tool.deviceCompatibility.join(", ")}</span>
      </div>
      <div class="tool-actions">
        <a href="${tool.tutorialLink}" target="_blank" rel="noopener" class="btn ghost" aria-label="${t("tutorial")} ${tool.name}">${t("tutorial")}</a>
        <span class="pill subtle">${tool.difficulty}</span>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderTopTools(recommended, index, t) {
  if (!recommended || recommended.length === 0) return "<p>Nessun suggerimento</p>";

  return recommended
    .slice(0, 3)
    .map((toolId) => {
      const tool = index[toolId];
      if (!tool) return "";
      return `
        <div class="tool-chip">
          <div>
            <strong>${tool.name}</strong>
            <p class="muted">${tool.type} · ${tool.cost}</p>
          </div>
          <a href="${tool.tutorialLink}" class="mini-link" target="_blank" rel="noopener">${t("tutorial")}</a>
        </div>
      `;
    })
    .join("");
}

export function renderFilters(problems, t) {
  const categorySelect = document.querySelector("#filterProblemCategory");
  if (categorySelect) {
    categorySelect.innerHTML = `
      <option value="all">${t("filterCategory")} (${t("clearFilters")})</option>
      ${Array.from(new Set(problems.map((p) => p.category)))
        .map((cat) => `<option value="${cat}">${cat}</option>`)
        .join("")}
    `;
  }

  const typeSelect = document.querySelector("#filterToolType");
  if (typeSelect) {
    const toolTypes = ["mappe", "riassunti", "dettatura", "quiz", "lettura", "traduzione", "tutor", "planner"];
    typeSelect.innerHTML = `
      <option value="all">${t("filterType")} (${t("clearFilters")})</option>
      ${toolTypes.map((type) => `<option value="${type}">${type}</option>`).join("")}
    `;
  }

  const costSelect = document.querySelector("#filterCost");
  if (costSelect) {
    costSelect.innerHTML = `
      <option value="all">${t("filterCost")} (${t("clearFilters")})</option>
      <option value="gratuito">Gratuito</option>
      <option value="freemium">Freemium</option>
      <option value="licenza-scuola">Licenza scuola</option>
    `;
  }

  const languageSelect = document.querySelector("#filterLanguage");
  if (languageSelect) {
    const languages = ["it", "en", "fr", "es", "de"];
    languageSelect.innerHTML = `
      <option value="all">${t("filterLanguage")} (${t("clearFilters")})</option>
      ${languages.map((lang) => `<option value="${lang}">${lang.toUpperCase()}</option>`).join("")}
    `;
  }

  const searchInput = document.querySelector("#searchTools");
  if (searchInput) searchInput.placeholder = t("searchPlaceholder");
}
