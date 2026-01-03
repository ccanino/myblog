export class WizardController {
  constructor({ t, onApply }) {
    this.t = t;
    this.onApply = onApply;
    this.state = { need: null, context: null, output: null };
    this.modal = document.querySelector("#wizardModal");
    this.backdrop = document.querySelector("#wizardBackdrop");
    this.openers = document.querySelectorAll("[data-open-wizard]");
    this.closeBtn = document.querySelector("#wizardClose");
    this.applyBtn = document.querySelector("#wizardApply");
    this.stepper = document.querySelector("#wizardStepper");
    this.focusable = [];
    this.boundTrap = this.trapFocus.bind(this);
  }

  init() {
    this.bindOpeners();
    this.bindActions();
    this.renderStepper();
  }

  bindOpeners() {
    this.openers.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const problemId = btn.getAttribute("data-problem");
        if (problemId) {
          this.state.need = problemId;
        }
        this.open();
      });
    });
  }

  bindActions() {
    if (this.closeBtn) this.closeBtn.addEventListener("click", () => this.close());
    if (this.backdrop) this.backdrop.addEventListener("click", () => this.close());
    if (this.applyBtn) this.applyBtn.addEventListener("click", () => this.apply());

    document.querySelectorAll("[data-wizard-step]").forEach((container) => {
      container.addEventListener("click", (event) => {
        const target = event.target.closest("[data-value]");
        if (!target) return;
        const step = container.getAttribute("data-wizard-step");
        this.state[step] = target.getAttribute("data-value");
        this.highlightSelection(step);
      });
    });
  }

  renderStepper() {
    if (!this.stepper) return;
    this.stepper.innerHTML = `
      <div class="step">${this.t("wizardStepNeed")}</div>
      <div class="step">${this.t("wizardStepContext")}</div>
      <div class="step">${this.t("wizardStepOutput")}</div>
    `;
  }

  highlightSelection(step) {
    const container = document.querySelector(`[data-wizard-step="${step}"]`);
    if (!container) return;
    container.querySelectorAll("[data-value]").forEach((node) => node.classList.remove("selected"));
    const active = container.querySelector(`[data-value="${this.state[step]}"]`);
    if (active) active.classList.add("selected");
  }

  open() {
    if (!this.modal || !this.backdrop) return;
    this.highlightSelection("need");
    this.highlightSelection("context");
    this.highlightSelection("output");
    this.modal.classList.add("active");
    this.backdrop.classList.add("active");
    this.focusable = Array.from(this.modal.querySelectorAll("button, [href], input"));
    document.addEventListener("keydown", this.boundTrap);
    const first = this.focusable[0];
    if (first) first.focus();
  }

  close() {
    if (!this.modal || !this.backdrop) return;
    this.modal.classList.remove("active");
    this.backdrop.classList.remove("active");
    document.removeEventListener("keydown", this.boundTrap);
  }

  trapFocus(event) {
    if (event.key !== "Tab") return;
    const first = this.focusable[0];
    const last = this.focusable[this.focusable.length - 1];
    if (!first || !last) return;

    if (event.shiftKey && document.activeElement === first) {
      last.focus();
      event.preventDefault();
    } else if (!event.shiftKey && document.activeElement === last) {
      first.focus();
      event.preventDefault();
    }
  }

  apply() {
    this.close();
    if (this.onApply) this.onApply(this.state);
  }
}
