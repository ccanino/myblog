# AI per la Scuola – Catalogo strumenti

## Struttura dati
- `data/problems.json`: elenco dei problemi ricorrenti con campi descrittivi, passi operativi, requisiti tecnici, note privacy e ID degli strumenti consigliati.
- `data/tools.json`: catalogo degli strumenti con metadati (tipo, costo/licenza, lingue, requisiti di privacy, compatibilità dispositivi, casi d’uso).

Per aggiungere o aggiornare contenuti:
1. **Aggiungi un problema** in `data/problems.json` (nuovo ID, categoria, titoli, liste di passi/benefici/warning e array `recommendedTools` con ID degli strumenti).
2. **Aggiungi uno strumento** in `data/tools.json` (associa i casi d’uso tramite `useCases` e le categorie di filtro).
3. Gli ID dei problemi collegano i suggerimenti e alimentano il wizard; gli ID degli strumenti compaiono nei “Top 3 suggeriti”.

## Frontend
- HTML modulare in `index.html` con sezioni: problemi frequenti, percorsi rapidi, scheda problema, catalogo strumenti e wizard.
- JavaScript modulare (`js/app.js` + moduli in `js/`) che carica i JSON, applica filtri combinati, gestisce il wizard e l’i18n base.
- Stili in `css/style.css` con supporto tema chiaro/scuro e focus states accessibili.
