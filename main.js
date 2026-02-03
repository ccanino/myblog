let tools = [];
let dataLoaded = false;
let loadingPromise = null;

const cards = document.getElementById("cards");
const searchKeywords = document.getElementById("searchKeywords");
const resetBtn = document.getElementById("resetBtn");
const resultsCount = document.getElementById("resultsCount");
const emptyState = document.getElementById("emptyState");
const emptyStateTitle = emptyState?.querySelector("h3");
const emptyStateText = emptyState?.querySelector("p");
const chips = document.querySelectorAll(".chips button");
const showAllBtn = document.getElementById("showAllBtn");
const resultsMeta = document.querySelector(".results-meta");
const resultsActions = document.querySelector(".results-actions");
const openSearch = document.getElementById("openSearch");
const openNews = document.getElementById("openNews");
const searchSection = document.getElementById("results");
const newsSection = document.getElementById("news");

let showAll = false;

const staticRevealSelectors = [
  ".logo-block",
  ".home-actions",
  ".hero-card__search",
  ".section-title",
  ".results-meta",
  ".results-actions",
  ".news-grid",
  ".footer",
];

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -20px 0px" }
);

const registerReveals = () => {
  document.querySelectorAll(".reveal").forEach((el) => {
    if (!el.classList.contains("is-visible")) revealObserver.observe(el);
  });
};

const applyStaticReveals = () => {
  staticRevealSelectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => el.classList.add("reveal"));
  });
};

const normalize = (v) => (v || "").toString().toLowerCase().trim();
const isEnabled = (tool) => tool.enabled === true;

const fallbackTools = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    category: "riassunti",
    badge: "Riassunti",
    description: "Strumento AI per riassumere testi e documenti in pochi minuti.",
    summary: "Aiuta a sintetizzare contenuti lunghi in punti chiave per studio e ripasso.",
    tags: ["riassunti", "presentazioni", "lettura assistita"],
    enabled: true,
  },
  {
    id: "gemini",
    name: "Gemini",
    category: "riassunti",
    badge: "Riassunti",
    description: "Strumento AI per riassumere testi e documenti in pochi minuti.",
    summary: "Aiuta a sintetizzare contenuti lunghi in punti chiave per studio e ripasso.",
    tags: ["riassunti", "presentazioni", "lettura assistita"],
    enabled: true,
  },
];

const renderCards = (list) => {
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
};

const clearResults = () => {
  renderCards([]);
  cards.classList.add("hidden");
  resultsMeta?.classList.add("hidden");
  resultsActions?.classList.add("hidden");
  emptyState.classList.add("hidden");
  resultsCount.textContent = "0 strumenti consigliati";
  showAllBtn.classList.add("hidden");
  showAll = false;
};

const showResults = (filtered) => {
  renderCards(showAll ? filtered : filtered.slice(0, 3));
  cards.classList.remove("hidden");
  resultsMeta?.classList.remove("hidden");

  const hasMore = filtered.length > 3;
  resultsActions?.classList.toggle("hidden", !hasMore);
  if (hasMore) {
    showAllBtn.textContent = showAll ? "Mostra meno" : "Vedi tutti";
  }

  const hasResults = filtered.length > 0;
  emptyState.classList.toggle("hidden", hasResults);
  if (!hasResults) {
    emptyStateTitle && (emptyStateTitle.textContent = "Nessun risultato");
    emptyStateText &&
      (emptyStateText.textContent = "Prova un altro tag o una parola chiave diversa.");
  }

  resultsCount.textContent = `${filtered.length} strumenti consigliati`;
  registerReveals();
};

const matchesQuery = (tool, query) => {
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

const filterByQuery = () => {
  const query = normalize(searchKeywords.value);
  if (!query) {
    clearResults();
    return;
  }
  let enabledTools = tools.filter(isEnabled);
  if (enabledTools.length === 0) enabledTools = fallbackTools.filter(isEnabled);
  const filtered = enabledTools.filter((tool) => matchesQuery(tool, query));
  showResults(filtered);
};

const filterByTag = (tagValue) => {
  const tag = normalize(tagValue);
  if (!tag) {
    clearResults();
    return;
  }
  let enabledTools = tools.filter(isEnabled);
  if (enabledTools.length === 0) enabledTools = fallbackTools.filter(isEnabled);
  const filtered = enabledTools.filter((tool) =>
    (tool.tags || []).some((t) => normalize(t) === tag)
  );
  showResults(filtered);
};

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

const loadTools = async () => {
  if (dataLoaded && loadingPromise === null) return;
  if (loadingPromise) {
    await loadingPromise;
    return;
  }
  loadingPromise = (async () => {
    try {
      const response = await fetch("data.json");
      tools = await response.json();
      dataLoaded = true;
    } catch (error) {
      console.warn("Fallback to embedded data.json", error);
      tools = fallbackTools;
      dataLoaded = true;
    } finally {
      loadingPromise = null;
    }
  })();
  await loadingPromise;
};

chips.forEach((chip) => {
  chip.addEventListener("click", async () => {
    activateSection("results");
    searchKeywords.value = chip.dataset.chip;
    showAll = false;
    await loadTools();
    filterByTag(chip.dataset.chip);
  });
});

resetBtn.addEventListener("click", () => {
  searchKeywords.value = "";
  showAll = false;
  clearResults();
});

searchKeywords.addEventListener("input", () => {
  filterByQuery();
});

showAllBtn.addEventListener("click", () => {
  if (!normalize(searchKeywords.value)) return;
  showAll = !showAll;
  filterByQuery();
});

openSearch.addEventListener("click", () => {
  activateSection("results");
  if (!normalize(searchKeywords.value)) clearResults();
});

openNews.addEventListener("click", () => activateSection("news"));

window.addEventListener("load", async () => {
  await loadTools(); // carica i dati in background senza mostrare risultati
  clearResults(); // assicura che nulla sia visibile finché l'utente non interagisce
});

window.addEventListener("DOMContentLoaded", () => {
  searchKeywords.value = "";
  clearResults();
  applyStaticReveals();
  registerReveals();
});
