export const demoProblems = [
  {
    id: "demo-mappe",
    category: "organizzazione",
    title: "Mappe e schemi veloci",
    shortDescription: "Trasforma un testo di prova in una mappa visiva modificabile.",
    userProfile: "Studenti in fase di ripasso o docenti che preparano mappe per la classe.",
    useCase: "Prendere un paragrafo di storia e ottenere una mappa con nodi e relazioni chiave.",
    steps: ["Incolla il testo", "Evidenzia concetti", "Scegli il layout", "Scarica la mappa"],
    recommendedTools: ["mappapro", "sintesi-facile", "studio-planner"],
    technicalRequirements: "Browser moderno con supporto download file.",
    privacyNotes: "Usa materiale non personale; elimina i file di test dopo la prova.",
    benefits: ["Vedi tutte le sezioni con dati reali", "Capisci il flusso dell'app", "Testi pronti senza preparare contenuti"],
    warnings: ["Ricontrolla i collegamenti generati", "Verifica la leggibilità della mappa"],
    quickActions: ["Apri il wizard su mappe", "Mostra strumenti compatibili"],
    pathTriggers: ["mappa demo", "schema demo", "visuale demo"]
  },
  {
    id: "demo-quiz",
    category: "verifica",
    title: "Quiz di prova",
    shortDescription: "Genera 5 domande demo per vedere griglie e filtri.",
    userProfile: "Docenti che testano la sezione quiz e gli export.",
    useCase: "Creare domande multiple choice di esempio per valutare il flusso.",
    steps: ["Scegli argomento demo", "Imposta 5 domande", "Seleziona formato", "Esporta CSV di prova"],
    recommendedTools: ["quiz-builder", "explain-it", "sintesi-facile"],
    technicalRequirements: "Browser con download attivo; supporto CSV.",
    privacyNotes: "Dati fittizi, nessun studente reale.",
    benefits: ["Verifica la resa delle card strumenti", "Controlla i filtri multipli", "Prova il wizard su output quiz"],
    warnings: ["Non usare dati reali", "Ricontrolla il formato delle domande"],
    quickActions: ["Apri wizard su quiz", "Filtra strumenti con export CSV"],
    pathTriggers: ["quiz demo", "verifica demo", "flashcard demo"]
  }
];

export const demoTools = [
  {
    id: "demo-tool-mappe",
    name: "Demo Mappe",
    type: "mappe",
    cost: "gratuito",
    languages: ["it", "en"],
    online: true,
    offline: true,
    privacy: "Elaborazione locale per il demo; nessun invio cloud.",
    difficulty: "basso",
    tutorialLink: "https://example.com/demo-map",
    categories: ["organizzazione", "mappe"],
    useCases: ["demo-mappe", "mappe-concettuali"],
    deviceCompatibility: ["desktop", "tablet"],
    privacyRequirements: "Solo dati fittizi per test."
  },
  {
    id: "demo-tool-quiz",
    name: "Demo Quiz",
    type: "quiz",
    cost: "gratuito",
    languages: ["it"],
    online: true,
    offline: false,
    privacy: "Nessuna raccolta dati; risultati solo locali nel demo.",
    difficulty: "basso",
    tutorialLink: "https://example.com/demo-quiz",
    categories: ["verifica"],
    useCases: ["demo-quiz", "quiz-e-autovalutazione"],
    deviceCompatibility: ["desktop", "mobile"],
    privacyRequirements: "Evitare dati reali durante il test."
  }
];
