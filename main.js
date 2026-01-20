let tools = [];

const cards = document.getElementById("cards");
const searchKeywords = document.getElementById("searchKeywords");
const resetBtn = document.getElementById("resetBtn");
const resultsCount = document.getElementById("resultsCount");
const emptyState = document.getElementById("emptyState");
const emptyStateTitle = emptyState?.querySelector("h3");
const emptyStateText = emptyState?.querySelector("p");
const chips = document.querySelectorAll(".chips button");
const showAllBtn = document.getElementById("showAllBtn");
const openSearch = document.getElementById("openSearch");
const openNews = document.getElementById("openNews");
const searchSection = document.getElementById("results");
const newsSection = document.getElementById("news");

let showAll = false;

const normalize = (value) => value.toLowerCase().trim();
const isEnabled = (tool) => tool.enabled === true;

const renderCards = (list, totalCount) => {
  cards.innerHTML = "";
  list.forEach((tool, index) => {
    const card = document.createElement("article");
    card.className = `card reveal delay-${index % 3}`;
    card.innerHTML = `
      <span class="badge">${tool.badge}</span>
      <h3>${tool.name}</h3>
      <p>${tool.description}</p>
      <a class="detail-link" href="detail.html?id=${encodeURIComponent(tool.id)}">Apri scheda</a>
    `;
    cards.appendChild(card);
  });

  emptyState.classList.toggle("hidden", totalCount !== 0);
  resultsCount.textContent = `${totalCount} strumenti consigliati`;
};

const matchesQuery = (tool, query) => {
  if (!query) return true;
  const fields = [
    tool.name,
    tool.description,
    tool.summary,
    tool.badge,
    ...(tool.tags || []),
    ...(tool.idealFor || []),
    ...(tool.features || []),
  ];
  const haystack = fields.join(" ").toLowerCase();
  return query
    .split(/\s+/)
    .filter(Boolean)
    .every((word) => haystack.includes(word));
};

const applyFilters = () => {
  const query = normalize(searchKeywords.value);
  const enabledTools = tools.filter((tool) => isEnabled(tool));
  const filtered = enabledTools.filter((tool) => matchesQuery(tool, query));
  const visible = showAll ? filtered : filtered.slice(0, 3);
  renderCards(visible, filtered.length);
  if (filtered.length === 0 && enabledTools.length === 0) {
    if (emptyStateTitle) emptyStateTitle.textContent = "Nessuno strumento disponibile";
    if (emptyStateText) emptyStateText.textContent = "Al momento non ci sono strumenti attivi.";
  } else {
    if (emptyStateTitle) emptyStateTitle.textContent = "Nessun risultato";
    if (emptyStateText)
      emptyStateText.textContent = "Prova a cambiare parole chiave o a descrivere meglio il bisogno.";
  }
  if (filtered.length > 3) {
    showAllBtn.classList.remove("hidden");
    showAllBtn.textContent = showAll ? "Mostra meno" : "Vedi tutti";
  } else {
    showAllBtn.classList.add("hidden");
  }
};

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    searchKeywords.value = chip.dataset.chip;
    showAll = false;
    applyFilters();
  });
});

resetBtn.addEventListener("click", () => {
  searchKeywords.value = "";
  showAll = false;
  applyFilters();
});

searchKeywords.addEventListener("input", applyFilters);

showAllBtn.addEventListener("click", () => {
  showAll = !showAll;
  applyFilters();
});

const activateSection = (target) => {
  const isSearch = target === "results";
  searchSection.classList.toggle("hidden", !isSearch);
  newsSection.classList.toggle("hidden", isSearch);
  openSearch.classList.toggle("active", isSearch);
  openNews.classList.toggle("active", !isSearch);
  openSearch.setAttribute("aria-expanded", String(isSearch));
  openNews.setAttribute("aria-expanded", String(!isSearch));
  document.body.classList.remove("no-scroll");
  document.body.classList.add("allow-scroll");
  const section = isSearch ? searchSection : newsSection;
  section.scrollIntoView({ behavior: "smooth", block: "start" });
};

openSearch.addEventListener("click", () => activateSection("results"));
openNews.addEventListener("click", () => activateSection("news"));

document.body.classList.add("no-scroll");

const loadTools = async () => {
  try {
    const response = await fetch("data.json");
    tools = await response.json();
    applyFilters();
  } catch (error) {
    cards.innerHTML = "";
    emptyState.classList.remove("hidden");
    resultsCount.textContent = "0 strumenti consigliati";
  }
};

window.addEventListener("load", loadTools);
