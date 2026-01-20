const badge = document.getElementById("detailBadge");
const title = document.getElementById("detailTitle");
const summary = document.getElementById("detailSummary");
const website = document.getElementById("detailWebsite");
const ideal = document.getElementById("detailIdeal");
const features = document.getElementById("detailFeatures");
const installSteps = document.getElementById("detailInstall");
const useSteps = document.getElementById("detailUse");
const requirements = document.getElementById("detailRequirements");
const privacy = document.getElementById("detailPrivacy");
const pricing = document.getElementById("detailPricing");
const examples = document.getElementById("detailExamples");
const faq = document.getElementById("detailFaq");
const resources = document.getElementById("detailResources");

const renderList = (container, items) => {
  container.innerHTML = "";
  (items || []).forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    container.appendChild(li);
  });
};

const renderFallback = (container, text) => {
  const li = document.createElement("li");
  li.textContent = text;
  container.appendChild(li);
};

const formatDomain = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch (error) {
    return url;
  }
};

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const showNotFound = () => {
  badge.textContent = "";
  title.textContent = "Strumento non trovato";
  summary.textContent = "Apri la scheda dal catalogo per vedere i dettagli completi.";
  website.classList.add("hidden");
  [ideal, features, requirements, privacy, pricing, examples, installSteps, useSteps, faq, resources].forEach(
    (container) => {
      if (container) container.innerHTML = "";
    }
  );
};

const loadDetail = async () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  if (!id) {
    showNotFound();
    return;
  }

  try {
    const response = await fetch("./data.json");
    const tools = await response.json();
    const targetId = slugify(id);
    const tool = tools.find(
      (item) =>
        item.enabled === true &&
        (item.id === targetId || slugify(item.name) === targetId)
    );

    if (!tool) {
      showNotFound();
      return;
    }

    badge.textContent = tool.badge;
    title.textContent = tool.name;
    summary.textContent = tool.summary;
    if (tool.website) {
      website.href = tool.website;
      website.textContent = `Sito ufficiale: ${formatDomain(tool.website)}`;
      website.classList.remove("hidden");
    } else {
      website.classList.add("hidden");
    }
    renderList(ideal, tool.idealFor);
    renderList(features, tool.features);
    renderList(requirements, tool.requirements);
    if (!tool.requirements || tool.requirements.length === 0) {
      renderFallback(requirements, "Serve un browser aggiornato e una connessione stabile.");
    }
    renderList(privacy, tool.privacy);
    if (!tool.privacy || tool.privacy.length === 0) {
      renderFallback(privacy, "Gestione dati conforme alle policy del fornitore.");
    }
    renderList(pricing, tool.pricing);
    if (!tool.pricing || tool.pricing.length === 0) {
      renderFallback(pricing, "Disponibile un piano base gratuito con opzioni premium.");
    }
    renderList(examples, tool.classroomExamples);
    if (!tool.classroomExamples || tool.classroomExamples.length === 0) {
      renderFallback(examples, "Usalo per creare materiali di ripasso e schede sintetiche.");
    }
    renderList(installSteps, tool.installSteps);
    if (!tool.installSteps || tool.installSteps.length === 0) {
      renderFallback(installSteps, "Non richiede installazione: si usa dal browser.");
    }
    renderList(useSteps, tool.useSteps || tool.steps);
    if ((!tool.useSteps || tool.useSteps.length === 0) && (!tool.steps || tool.steps.length === 0)) {
      renderFallback(useSteps, "Segui le istruzioni guidate nella piattaforma.");
    }
    renderList(faq, tool.faq);
    if (!tool.faq || tool.faq.length === 0) {
      renderFallback(faq, "Posso usarlo anche senza account scuola? Si, con account personale.");
    }
    renderList(resources, tool.resources);
    if (!tool.resources || tool.resources.length === 0) {
      renderFallback(resources, "Visita la pagina ufficiale per guide e tutorial video.");
    }
  } catch (error) {
    title.textContent = "Scheda non disponibile";
    summary.textContent = "Riprova piu tardi o torna alla ricerca.";
    website.classList.add("hidden");
  }
};

window.addEventListener("load", loadDetail);
