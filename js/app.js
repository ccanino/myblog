


// Any fresh commits? - Modern Tech Blog Application
class FreshCommitsApp {
    constructor() {
        this.articles = [];
        this.currentPage = 'home'; // home, article, articles-list
        this.currentArticle = null;
        this.filteredArticles = [];
        this.currentFilter = 'all';
        this.searchQuery = '';
        
        this.init();
    }

    init() {
        // Load articles first and ensure they're available
        this.loadArticles();
        
        // Bind all events
        this.bindEvents();
        
        // Show latest article after a short delay
        setTimeout(() => {
            this.showLatestArticle();
        }, 3000);
    }

    loadArticles() {
        // Carica tutti gli articoli direttamente dal codice
        this.articles = this.getAllArticles();
        
        // Ordina gli articoli per il campo order
            this.articles.sort((a, b) => (a.order || 0) - (b.order || 0));
            
        // Inizializza filteredArticles
            this.filteredArticles = [...this.articles];
        
        console.log(`Loaded ${this.articles.length} articles statically`);
        
        // Verifica che gli articoli siano stati caricati correttamente
        if (this.articles.length === 0) {
            console.error('No articles loaded!');
        } else {
            console.log('Articles loaded successfully:', this.articles.map(a => a.title));
        }
    }

    getAllArticles() {
        return [
            {
                "id": "benvenuti-ai-per-la-scuola",
                "title": "Benvenuti in AI per la Scuola",
                "excerpt": "La nostra missione è quella di diventare un punto di riferimento per genitori, insegnanti e studenti sull'uso dell'Intelligenza Artificiale come strumento compensativo e di supporto per l'apprendimento.",
                "content": "<h2>La Nostra Missione</h2><p>Benvenuti in 'AI per la Scuola', il portale dedicato a esplorare come l'Intelligenza Artificiale possa trasformare l'educazione e supportare studenti con diverse esigenze di apprendimento. Il nostro obiettivo è quello di fornire risorse chiare, pratiche e accessibili per genitori, insegnanti e studenti.</p><h3>Perché l'IA nella Scuola?</h3><p>L'IA offre strumenti potentissimi per personalizzare l'insegnamento, creare materiali didattici su misura e fornire supporto individuale agli studenti. Dalle app che aiutano con la lettura e la scrittura, agli assistenti virtuali per l'organizzazione dello studio, le possibilità sono infinite.</p><h3>Cosa Troverete su Questo Sito?</h3><ul><li><strong>Guide agli Strumenti:</strong> Recensioni e tutorial su applicazioni e software basati sull'IA.</li><li><strong>Approfondimenti:</strong> Articoli che spiegano in modo semplice concetti complessi legati all'IA e all'educazione.</li><li><strong>Supporto per la Comunità:</strong> Consigli pratici per integrare questi strumenti nella vita scolastica e domestica.</li></ul><p>Siamo convinti che la tecnologia, se usata in modo consapevole, possa essere un'alleata preziosa per un'istruzione più inclusiva ed efficace. Unitevi a noi in questo viaggio alla scoperta del futuro dell'apprendimento.</p>",
                "category": "about",
                "tags": [],
                "date": "2024-05-20",
                "readTime": "3 min",
                "order": 1,
                "image": "images/logo.png"
            },
            {
                "id": "strumenti-ai-apprendimento",
                "title": "Strumenti AI per l'Apprendimento",
                "excerpt": "Scopri una selezione di strumenti basati sull'IA che possono aiutare gli studenti con la lettura, la scrittura, la matematica e l'organizzazione dello studio.",
                "content": "<h2>Potenziare l'Apprendimento con l'IA</h2><p>L'intelligenza artificiale ha dato vita a una nuova generazione di strumenti didattici che possono supportare gli studenti in modi prima impensabili. Ecco una panoramica di alcune categorie di strumenti e come possono essere utilizzati.</p><h3>Lettura e Scrittura</h3><p>Per gli studenti con dislessia o altre difficoltà di lettura, esistono app che utilizzano l'IA per:</p><ul><li><strong>Sintesi Vocale (Text-to-Speech):</strong> Leggere ad alta voce testi digitali, aiutando la comprensione.</li><li><strong>Riconoscimento Vocale (Speech-to-Text):</strong> Trasformare il parlato in testo scritto, facilitando la scrittura di temi e appunti.</li><li><strong>Correzione Grammaticale Avanzata:</strong> Fornire suggerimenti contestuali per migliorare la grammatica e lo stile.</li></ul><h3>Matematica e Scienze</h3><p>L'IA può rendere le materie STEM più accessibili:</p><ul><li><strong>Risolutori di problemi passo-passo:</strong> App che non solo danno la soluzione, ma spiegano ogni singolo passaggio.</li><li><strong>Tutor Virtuali:</strong> Piattaforme che si adattano al livello di conoscenza dello studente, proponendo esercizi personalizzati.</li><li><strong>Simulazioni Interattive:</strong> Laboratori virtuali per esperimenti scientifici sicuri e ripetibili.</li></ul><h3>Organizzazione e Studio</h3><p>Per gli studenti che faticano con le funzioni esecutive, l'IA può essere un valido aiuto:</p><ul><li><strong>Planner Intelligenti:</strong> App che creano piani di studio personalizzati e inviano promemoria.</li><li><strong>Mappe Concettuali Automatiche:</strong> Strumenti che estraggono i concetti chiave da un testo e li organizzano in una mappa visuale.</li><li><strong>Riassunti Automatici:</strong> Piattaforme in grado di sintetizzare lunghi testi, evidenziando le informazioni più importanti.</li></ul><p>Questi sono solo alcuni esempi. L'importante è sperimentare e trovare gli strumenti più adatti alle esigenze specifiche di ogni studente.</p>",
                "category": "strumenti",
                "tags": [],
                "date": "2024-05-21",
                "readTime": "5 min",
                "order": 2,
                "image": "images/logo.png"
            },
            {
                "id": "sintetizzatori-vocali-guida",
                "title": "Sintetizzatori Vocali: Guida per iOS e Android",
                "excerpt": "Impara ad attivare e utilizzare le funzioni di sintesi vocale integrate nel tuo smartphone per supportare la lettura e l'apprendimento.",
                "content": "<h2>Come Usare la Sintesi Vocale su iOS e Android</h2><p>I moderni sistemi operativi per smartphone, come iOS e Android, includono potenti funzioni di accessibilità, tra cui la sintesi vocale (Text-to-Speech). Questi strumenti possono leggere ad alta voce qualsiasi testo sullo schermo, trasformando il dispositivo in un assistente per la lettura. Vediamo come attivarli.</p><h3>Su iOS (iPhone/iPad)</h3><p>La funzione si chiama 'Leggi Schermo' e 'Leggi selezione'.</p><ul><li><strong>Come si attiva:</strong> Vai su <strong>Impostazioni > Accessibilità > Contenuto letto ad alta voce</strong>. Qui puoi attivare le opzioni <strong>Leggi selezione</strong> e <strong>Leggi schermo</strong>.</li><li><strong>Leggi selezione:</strong> Dopo averla attivata, ti basterà selezionare una porzione di testo e, nel menu che compare, toccare 'Leggi'.</li><li><strong>Leggi schermo:</strong> Per attivare la lettura dell'intero schermo, scorri con due dita dall'alto verso il basso. Apparirà un pannello di controllo per gestire la riproduzione (play, pausa, velocità).</li></ul><h3>Su Android</h3><p>La funzione più comune è 'Selezione per ascoltare'.</p><ul><li><strong>Come si attiva:</strong> Vai su <strong>Impostazioni > Accessibilità > Selezione per ascoltare</strong>. Attiva il servizio. Una volta attivo, vedrai un'icona di un omino (o simile) in basso a destra sullo schermo.</li><li><strong>Come si usa:</strong> Tocca l'icona dell'omino e poi seleziona il testo che vuoi ascoltare. Puoi toccare un paragrafo specifico o trascinare il dito per selezionare più testo. La lettura partirà automaticamente.</li></ul><h3>Perché è Utile?</h3><p>Questi strumenti sono fondamentali per studenti con dislessia o difficoltà di lettura, ma sono utili per tutti. Permettono di riascoltare appunti, leggere articoli lunghi mentre si fa altro o semplicemente per migliorare la comprensione di un testo, associando la parola scritta al suono.</p>",
                "category": "guide",
                "tags": [],
                "date": "2024-05-24",
                "readTime": "5 min",
                "order": 3,
                "image": "images/logo.png"
            },
            {
                "id": "notebooklm-mappe-concettuali",
                "title": "Creare Mappe Concettuali con NotebookLM",
                "excerpt": "Una guida passo-passo per utilizzare NotebookLM di Google per trasformare appunti e documenti in mappe concettuali interattive.",
                "content": "<h2>Sfruttare l'IA per Organizzare le Idee con NotebookLM</h2><p>NotebookLM è uno strumento di Google basato sull'intelligenza artificiale che ti aiuta a comprendere e a rielaborare i tuoi documenti. Una delle sue funzioni più potenti è la capacità di generare automaticamente mappe concettuali, un aiuto visivo prezioso per lo studio.</p><h3>Come Funziona?</h3><p>Il processo è molto semplice:</p><ol><li><strong>Carica le Tue Fonti:</strong> Puoi caricare file PDF, documenti Google, o semplicemente copiare e incollare del testo. Queste saranno le fonti su cui NotebookLM lavorerà.</li><li><strong>Fai le Domande Giuste:</strong> Una volta caricate le fonti, puoi 'conversare' con i tuoi documenti. Per creare una mappa concettuale, puoi chiedere: <em>'Crea una mappa concettuale di questo documento'</em>, oppure <em>'Quali sono i concetti chiave e come sono collegati tra loro?'</em>.</li><li><strong>Visualizza e Interagisci:</strong> NotebookLM genererà una rappresentazione visiva delle idee principali e delle loro connessioni. Spesso, queste mappe sono interattive: cliccando su un nodo, puoi approfondire quel concetto specifico all'interno dei tuoi documenti.</li></ol><h3>Perché Usarlo per le Mappe Concettuali?</h3><ul><li><strong>Risparmio di Tempo:</strong> Automatizza il processo di estrazione dei concetti chiave, che manualmente richiederebbe molto tempo.</li><li><strong>Scoperta di Connessioni:</strong> L'IA può identificare collegamenti tra idee che potrebbero non essere immediatamente evidenti.</li><li><strong>Studio Attivo:</strong> Invece di leggere passivamente, interagisci con il materiale, ponendo domande e visualizzando le risposte in modo strutturato.</li></ul><p>NotebookLM è uno strumento eccellente per studenti che vogliono un metodo di studio più dinamico ed efficace, specialmente per materie complesse ricche di informazioni.</p>",
                "category": "strumenti",
                "tags": [],
                "date": "2024-05-25",
                "readTime": "4 min",
                "order": 4,
                "image": "images/logo.png"
            },
            {
                "id": "ai-accessibilita-guida",
                "title": "AI e Accessibilità: Una Guida per Tutti",
                "excerpt": "L'Intelligenza Artificiale sta abbattendo molte barriere. Scopriamo come le tecnologie assistive basate sull'IA promuovono l'inclusione.",
                "content": "<h2>Tecnologia al Servizio dell'Inclusione</h2><p>L'accessibilità è un diritto fondamentale, e l'Intelligenza Artificiale sta offrendo soluzioni innovative per rendere il mondo digitale e fisico più inclusivo per le persone con disabilità.</p><h3>Come l'IA aiuta l'Accessibilità</h3><p>Le applicazioni dell'IA nell'ambito dell'accessibilità sono numerose e in continua crescita:</p><ul><li><strong>Per le Disabilità Visive:</strong> App che utilizzano la fotocamera dello smartphone per descrivere l'ambiente circostante, leggere testi o riconoscere oggetti e persone.</li><li><strong>Per le Disabilità Uditive:</strong> Servizi di sottotitolazione e trascrizione automatica in tempo reale per video, lezioni e conversazioni.</li><li><strong>Per le Disabilità Motorie:</strong> Sistemi di controllo vocale e interfacce cervello-computer che permettono di interagire con i dispositivi senza l'uso delle mani.</li><li><strong>Per le Disabilità Cognitive:</strong> Strumenti che semplificano testi complessi, organizzano le attività quotidiane o forniscono supporto per la comunicazione.</li></ul><h3>Il Futuro dell'Accessibilità</h3><p>Stiamo andando verso un futuro in cui la tecnologia si adatterà sempre di più alle esigenze individuali. L'IA promette di creare ambienti di apprendimento e di vita veramente personalizzati, dove ogni persona ha la possibilità di esprimere il proprio potenziale.</p><h3>Etica e Responsabilità</h3><p>È fondamentale che lo sviluppo di queste tecnologie avvenga in modo etico e responsabile, coinvolgendo direttamente le persone con disabilità nel processo di progettazione (principio del \"Nothing About Us Without Us\"). Solo così potremo garantire che l'IA sia veramente uno strumento di emancipazione e inclusione per tutti.</p>",
                "category": "approfondimenti",
                "tags": [],
                "date": "2024-05-23",
                "readTime": "6 min",
                "order": 5,
                "image": "images/logo.png"
            },
            {
                "id": "supporto-genitori-insegnanti",
                "title": "Supporto per Genitori e Insegnanti",
                "excerpt": "Come integrare gli strumenti di IA a casa e in classe. Consigli pratici per accompagnare i ragazzi nell'uso di queste nuove tecnologie.",
                "content": "<h2>Un'Alleanza tra Scuola, Famiglia e Tecnologia</h2><p>L'introduzione di strumenti di IA nell'apprendimento dei ragazzi richiede una collaborazione attiva tra genitori e insegnanti. Ecco alcuni consigli per gestire al meglio questo processo.</p><h3>Per i Genitori</h3><p>A casa, potete supportare i vostri figli in diversi modi:</p><ul><li><strong>Creare un Ambiente di Apprendimento Positivo:</strong> Mostratevi curiosi e aperti verso queste nuove tecnologie, esplorandole insieme ai vostri figli.</li><li><strong>Stabilire delle Regole Chiare:</strong> Definite tempi e modi di utilizzo degli strumenti digitali per evitare distrazioni.</li><li><strong>Focalizzarsi sulle Competenze, non solo sulla Correzione:</strong> Usate gli strumenti di IA per incoraggiare la creatività e il pensiero critico, non solo per correggere errori.</li><li><strong>Dialogare con la Scuola:</strong> Mantenete un canale di comunicazione aperto con gli insegnanti per allineare le strategie e condividere i progressi.</li></ul><h3>Per gli Insegnanti</h3><p>In classe, l'IA può essere un potente alleato per la didattica inclusiva:</p><ul><li><strong>Personalizzare i Percorsi Didattici:</strong> Utilizzate piattaforme adattive per creare esercizi su misura per ogni studente.</li><li><strong>Risparmiare Tempo:</strong> Automatizzate compiti ripetitivi come la creazione di quiz o la correzione di bozze, per dedicare più tempo alla relazione con gli studenti.</li><li><strong>Promuovere l'Accessibilità:</strong> Utilizzate strumenti di sintesi vocale o sottotitolazione automatica per rendere i materiali accessibili a tutti.</li><li><strong>Formazione Continua:</strong> Rimanete aggiornati sulle nuove tecnologie e condividete le buone pratiche con i colleghi.</li></ul><p>L'obiettivo comune è quello di utilizzare l'IA come un mezzo per potenziare le capacità di ogni studente, promuovendo autonomia e autostima.</p>",
                "category": "guide",
                "tags": [],
                "date": "2024-05-22",
                "readTime": "4 min",
                "order": 6,
                "image": "images/logo.png"
            }
        ];
    }



    bindEvents() {
        // Article page navigation
        const viewAllArticlesFooterBtn = document.getElementById('viewAllArticlesFooterBtn');

        if (viewAllArticlesFooterBtn) {
            viewAllArticlesFooterBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('View all articles footer button clicked');
                this.showArticlesListPage();
            });
        }

        // Toggle filters accordion
        const toggleFiltersBtn = document.getElementById('toggleFiltersBtn');
        const filterSection = document.getElementById('filterSection');

        if (toggleFiltersBtn && filterSection) {
            toggleFiltersBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Toggle filters button clicked');
                
                // Assicurati che la sezione filtri sia visibile
                filterSection.style.display = 'block';
                filterSection.style.visibility = 'visible';
                
                filterSection.classList.toggle('active');
                const icon = toggleFiltersBtn.querySelector('.material-icons');
                
                if (filterSection.classList.contains('active')) {
                    icon.textContent = 'expand_less';
                    console.log('Filters section activated');
                    // Scroll to top of page when filters are opened
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    icon.textContent = 'filter_list';
                    console.log('Filters section deactivated');
                }
            });
        }

        // Search and filter events
        const searchInput = document.getElementById('searchInput');
        const filterTags = document.getElementById('filterTags');

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchQuery = e.target.value;
                this.filterArticles();
            });
        }
        if (filterTags) {
            filterTags.addEventListener('click', (e) => {
                if (e.target.classList.contains('filter-tag')) {
                    this.setActiveFilter(e.target.dataset.tag);
                }
            });
        }

        // Modal events
        const modalClose = document.getElementById('modalClose');
        const articleModal = document.getElementById('articleModal');

        if (modalClose) {
            modalClose.addEventListener('click', () => this.closeModal());
        }
        if (articleModal) {
            articleModal.addEventListener('click', (e) => {
                if (e.target === articleModal) {
                    this.closeModal();
                }
            });
        }
    }

    showLatestArticle() {
        console.log('showLatestArticle called, articles count:', this.articles.length);
        
        if (this.articles.length > 0) {
            console.log('Showing first article:', this.articles[0].title);
            this.currentArticle = this.articles[0];
            this.showArticlePage();
        } else {
            console.error('No articles available to show');
            // Force fallback
            console.log('Loading sample articles as fallback...');
            this.articles = this.getSampleArticles();
            if (this.articles.length > 0) {
                console.log('Showing sample article:', this.articles[0].title);
                this.currentArticle = this.articles[0];
                this.showArticlePage();
            }
        }
    }

    showArticlePage() {
        // Hide all pages
        this.hideAllPages();
        
        // Show article page
        const articlePage = document.getElementById('articlePage');
        
        if (articlePage) {
            // Ensure the page is visible
            articlePage.style.display = 'block';
            articlePage.classList.add('active');
            this.currentPage = 'article';
            
            // Update article content
            this.updateArticlePage();
            
            // Scroll to top to ensure full visibility
            window.scrollTo(0, 0);
        } else {
            console.error('Article page element not found!');
        }
    }

    showArticlesListPage() {
        console.log('showArticlesListPage called, articles count:', this.articles.length);
        
        // Hide all pages
        this.hideAllPages();
        
        // Explicitly hide article page
        const articlePage = document.getElementById('articlePage');
        if (articlePage) {
            articlePage.style.display = 'none';
            articlePage.classList.remove('active');
        }
        
        // Show articles list page
        const articlesListPage = document.getElementById('articlesListPage');
        if (articlesListPage) {
            articlesListPage.classList.add('active');
            this.currentPage = 'articles-list';
            
            // Ensure the page is positioned at the top
            articlesListPage.style.position = 'relative';
            articlesListPage.style.top = '0';
            articlesListPage.style.left = '0';
            articlesListPage.style.width = '100%';
            
            // Ensure articles are loaded and render them immediately
            if (this.articles.length === 0) {
                console.log('No articles found, loading them...');
                this.loadArticles();
            }
            
            // Always ensure filtered articles are up to date and render
            this.filteredArticles = [...this.articles];
            console.log('Rendering articles, count:', this.filteredArticles.length);
            this.renderArticles();
            
            // Scroll to top when articles list page is opened
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
        } else {
            console.error('Articles list page element not found!');
        }
    }

    showHomePage() {
        // Hide all pages
        this.hideAllPages();
        
        // Show main content (home page)
        const main = document.querySelector('.main');
        if (main) {
            main.style.display = 'flex';
            this.currentPage = 'home';
        }

        // Show latest article after a short delay
            setTimeout(() => {
            this.showLatestArticle();
        }, 3000);
    }

    hideAllPages() {
        // Hide main content
        const main = document.querySelector('.main');
        if (main) {
            main.style.display = 'none';
        } else {
            console.error('Main element not found!');
        }
        
        // Hide article page completely
        const articlePage = document.getElementById('articlePage');
        if (articlePage) {
            articlePage.classList.remove('active');
            articlePage.style.display = 'none';
        } else {
            console.error('Article page element not found!');
        }
        
        // Hide articles list page
        const articlesListPage = document.getElementById('articlesListPage');
        if (articlesListPage) {
            articlesListPage.classList.remove('active');
        } else {
            console.error('Articles list page element not found!');
        }
    }

    updateArticlePage() {
        if (!this.currentArticle) {
            console.error('No current article to update!');
            return;
        }
        
        // Update title
        const titleElement = document.getElementById('articlePageTitle');
        if (titleElement) {
            titleElement.textContent = this.currentArticle.title;
        } else {
            console.error('Title element not found!');
        }
        
        // Update category
        const categoryElement = document.getElementById('articlePageCategory');
        if (categoryElement) {
            categoryElement.textContent = this.getCategoryName(this.currentArticle.category);
        } else {
            console.error('Category element not found!');
        }
        
        // Update date
        const dateElement = document.getElementById('articlePageDate');
        if (dateElement) {
            // Format date from YYYY-MM-DD to DD Month YYYY
            const date = new Date(this.currentArticle.date);
            const formattedDate = date.toLocaleDateString('it-IT', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            });
            dateElement.textContent = formattedDate;
        } else {
            console.error('Date element not found!');
        }
        
        // Update read time
        const readTimeElement = document.getElementById('articlePageReadTime');
        if (readTimeElement) {
            readTimeElement.textContent = this.currentArticle.readTime || '5 min';
        } else {
            console.error('Read time element not found!');
        }
        
        // Update content
        const bodyElement = document.getElementById('articlePageBody');
        if (bodyElement) {
            bodyElement.innerHTML = this.currentArticle.content;
        } else {
            console.error('Body element not found!');
        }
    }

    renderArticles() {
        const articlesGrid = document.getElementById('articlesGrid');
        if (!articlesGrid) {
            console.error('Articles grid element not found!');
            return;
        }
        
        console.log('Rendering articles. Count:', this.filteredArticles.length);
        
        articlesGrid.innerHTML = '';
        
        this.filteredArticles.forEach(article => {
            const articleCard = this.createArticleCard(article);
            articlesGrid.appendChild(articleCard);
        });
        
        console.log('Articles rendered successfully');
    }

    createArticleCard(article) {
        const card = document.createElement('div');
        card.className = 'article-card';
        card.addEventListener('click', () => this.openArticle(article));
        
        // Format date
        const date = new Date(article.date);
        const formattedDate = date.toLocaleDateString('it-IT', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
        
        card.innerHTML = `
            <div class="article-image-bg" style="background-image: url('${article.image}');">
                <div class="article-image-overlay"></div>
            </div>
            <div class="article-content">
                <h3 class="article-title">${article.title}</h3>
                <p class="article-excerpt">${article.excerpt}</p>
                <div class="article-category-container">
                    <span class="article-category">${this.getCategoryName(article.category)}</span>
                </div>
                <div class="article-date-info">
                    <span class="article-date">${formattedDate}</span>
                    <span class="article-read-time">
                        <span class="material-icons">hourglass_empty</span>
                        <span>${article.readTime || '5 min'}</span>
                    </span>
                </div>
                <a href="#" class="article-read-more">
                    Leggi di più
                    <span class="material-icons">arrow_forward</span>
                </a>
            </div>
        `;
        
        return card;
    }

    openArticle(article) {
        this.currentArticle = article;
        this.showArticlePage();
    }

    filterArticles() {
        let filtered = [...this.articles];
        
        console.log('Total articles available:', this.articles.length);
        console.log('Current filter:', this.currentFilter);
        
        // Filter by category (only if not 'all')
        if (this.currentFilter !== 'all') {
            filtered = filtered.filter(article => article.category === this.currentFilter);
            console.log('After category filter:', filtered.length);
        }
        
        // Filter by search query
        if (this.searchQuery.trim()) {
            const query = this.searchQuery.toLowerCase();
            filtered = filtered.filter(article => 
                article.title.toLowerCase().includes(query) ||
                article.excerpt.toLowerCase().includes(query) ||
                article.tags.some(tag => tag.toLowerCase().includes(query))
            );
            console.log('After search filter:', filtered.length);
        }
        
        this.filteredArticles = filtered;
        this.renderArticles();
        
        console.log('Final filtered articles:', filtered.length);
    }

    setActiveFilter(tag) {
        this.currentFilter = tag;
        
        // Update active filter button
        const filterTags = document.querySelectorAll('.filter-tag');
        filterTags.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.tag === tag) {
                btn.classList.add('active');
            }
        });
        
        this.filterArticles();
    }

    getCategoryIcon(category) {
        const icons = {
            'ai': '🧠',
            'web': '🌐',
            'security': '🔒',
            'quantum': '⚛️'
        };
        return icons[category] || '📄';
    }

    getCategoryName(category) {
        const names = {
            'about': 'About',
            'strumenti': 'Strumenti',
            'guide': 'Guide',
            'approfondimenti': 'Approfondimenti'
        };
        return names[category] || 'Altro';
    }

    closeModal() {
        const articleModal = document.getElementById('articleModal');
        if (articleModal) {
            articleModal.classList.remove('active');
        }
    }

    // Fallback sample articles if loading fails
    getSampleArticles() {
        return [
            {
                id: "ai-generative-2024",
                title: "L'ascesa dell'Intelligenza Artificiale Generativa",
                excerpt: "Come ChatGPT, DALL-E e altri modelli stanno rivoluzionando il modo in cui creiamo contenuti digitali.",
                content: "<h2>L'Intelligenza Artificiale Generativa sta trasformando il mondo digitale</h2><p>L'Intelligenza Artificiale Generativa (Generative AI) rappresenta una delle più significative innovazioni tecnologiche degli ultimi anni. Modelli come ChatGPT, DALL-E, Midjourney e altri stanno rivoluzionando il modo in cui creiamo, consumiamo e interagiamo con i contenuti digitali.</p><h3>Cos'è l'AI Generativa?</h3><p>L'AI Generativa è una sottocategoria dell'intelligenza artificiale che si concentra sulla creazione di nuovi contenuti. A differenza dell'AI tradizionale che analizza e classifica dati esistenti, l'AI generativa può creare:</p><ul><li><strong>Testo:</strong> Articoli, poesie, codice, traduzioni</li><li><strong>Immagini:</strong> Illustrazioni, fotografie, disegni artistici</li><li><strong>Audio:</strong> Musica, sintesi vocale, effetti sonori</li><li><strong>Video:</strong> Animazioni, filmati, contenuti multimediali</li></ul><h3>Le Applicazioni Pratiche</h3><p>Le applicazioni dell'AI Generativa sono infinite e stanno già trasformando numerosi settori:</p><ul><li><strong>Marketing e Advertising:</strong> Creazione di contenuti personalizzati, copywriting automatizzato</li><li><strong>Design e Creatività:</strong> Generazione di loghi, illustrazioni, mockup</li><li><strong>Educazione:</strong> Creazione di materiali didattici personalizzati</li><li><strong>Ricerca Scientifica:</strong> Simulazioni, analisi di dati complessi</li><li><strong>Entertainment:</strong> Giochi, film, contenuti interattivi</li></ul><h3>Le Sfide e le Opportunità</h3><p>Nonostante le enormi potenzialità, l'AI Generativa presenta anche sfide significative:</p><ul><li><strong>Etica e Responsabilità:</strong> Questioni di copyright, deepfake, disinformazione</li><li><strong>Qualità e Affidabilità:</strong> Controllo della qualità dei contenuti generati</li><li><strong>Privacy e Sicurezza:</strong> Protezione dei dati personali</li><li><strong>Impatto sul Lavoro:</strong> Automazione di professioni creative</li></ul><h3>Il Futuro dell'AI Generativa</h3><p>Il futuro dell'AI Generativa è promettente e in rapida evoluzione. Stiamo assistendo a:</p><ul><li>Sviluppo di modelli sempre più potenti e specializzati</li><li>Integrazione con altre tecnologie emergenti (IoT, AR/VR)</li><li>Democratizzazione dell'accesso alle tecnologie AI</li><li>Nuove opportunità di business e innovazione</li></ul><p>L'AI Generativa non è solo una tendenza tecnologica, ma una vera rivoluzione che sta ridefinendo i confini tra creatività umana e artificiale. La chiave per il successo futuro sarà trovare il giusto equilibrio tra automazione e controllo umano, sfruttando le potenzialità dell'AI per amplificare, non sostituire, la creatività umana.</p>",
                category: "ai",
                tags: ["AI", "Machine Learning", "Generative AI", "ChatGPT", "Innovation"],
                date: "2024-01-15",
                readTime: "8 min",
                order: 1
            },
            {
                id: "web-development-2024",
                title: "Il Futuro dello Sviluppo Web nel 2024",
                excerpt: "Framework moderni, performance e nuove tecnologie che stanno ridefinendo il web development.",
                content: "<h2>Il panorama dello sviluppo web sta evolvendo rapidamente</h2><p>Il 2024 porta con sé nuove sfide e opportunità nel mondo dello sviluppo web. Framework moderni, focus sulla performance e nuove tecnologie stanno ridefinendo il modo in cui costruiamo applicazioni web.</p><h3>Framework e Librerie Emergenti</h3><p>I framework JavaScript continuano a evolversi rapidamente:</p><ul><li><strong>React 18+:</strong> Concurrent features e migliori performance</li><li><strong>Vue 3:</strong> Composition API e migliore TypeScript support</li><li><strong>SvelteKit:</strong> Compile-time framework con ottime performance</li><li><strong>Astro:</strong> Multi-framework support con zero JavaScript di default</li></ul><h3>Performance e Core Web Vitals</h3><p>Google continua a enfatizzare l'importanza dei Core Web Vitals:</p><ul><li><strong>Largest Contentful Paint (LCP):</strong> Tempo di caricamento del contenuto principale</li><li><strong>First Input Delay (FID):</strong> Reattività dell'interfaccia</li><li><strong>Cumulative Layout Shift (CLS):</strong> Stabilità visiva</li></ul><h3>Nuove Tecnologie Web</h3><p>Le nuove API del browser stanno aprendo nuove possibilità:</p><ul><li><strong>Web Components:</strong> Componenti riutilizzabili nativi</li><li><strong>CSS Container Queries:</strong> Layout responsive più flessibili</li><li><strong>WebAssembly:</strong> Performance native nel browser</li><li><strong>Progressive Web Apps:</strong> Esperienze app-like sul web</li></ul><h3>Trend di Sviluppo</h3><p>I developer stanno adottando nuove pratiche:</p><ul><li><strong>JAMstack:</strong> Architetture decoupled e performanti</li><li><strong>Micro-frontend:</strong> Applicazioni modulari e scalabili</li><li><strong>Serverless:</strong> Backend as a service</li><li><strong>Edge Computing:</strong> Elaborazione più vicina agli utenti</li></ul><h3>Strumenti e Workflow</h3><p>Gli strumenti di sviluppo stanno migliorando:</p><ul><li><strong>Vite:</strong> Build tool ultra-veloce</li><li><strong>Turbopack:</strong> Successore di Webpack</li><li><strong>ESBuild:</strong> Bundler scritto in Go</li><li><strong>TypeScript:</strong> Type safety sempre più diffuso</li></ul><p>Il futuro dello sviluppo web è luminoso, con focus su performance, accessibilità e user experience. I developer che si adattano a queste nuove tecnologie saranno avvantaggiati nel mercato del lavoro.</p>",
                category: "web",
                tags: ["Web Development", "JavaScript", "React", "Performance", "Modern Web"],
                date: "2024-01-20",
                readTime: "6 min",
                order: 2
            },
            {
                id: "cybersecurity-2024",
                title: "Cybersecurity 2024: Le Nuove Minacce e Difese",
                excerpt: "Ransomware, AI-powered attacks e strategie di protezione per un mondo sempre più connesso.",
                content: "<h2>Il panorama della cybersecurity è in continua evoluzione</h2><p>Il 2024 porta nuove sfide nel campo della sicurezza informatica. Con l'aumento della digitalizzazione e l'emergere di nuove tecnologie, le minacce si fanno sempre più sofisticate.</p><h3>Nuove Minacce Emergenti</h3><p>Le minacce cybersecurity stanno evolvendo rapidamente:</p><ul><li><strong>AI-Powered Attacks:</strong> Attacchi automatizzati e intelligenti</li><li><strong>Ransomware as a Service:</strong> Servizi di ransomware disponibili sul dark web</li><li><strong>Supply Chain Attacks:</strong> Attacchi attraverso fornitori e dipendenze</li><li><strong>Zero-Day Exploits:</strong> Vulnerabilità sconosciute sfruttate rapidamente</li></ul><h3>Vettori di Attacco Principali</h3><p>I principali vettori di attacco includono:</p><ul><li><strong>Phishing Avanzato:</strong> Tecniche sempre più sofisticate</li><li><strong>Social Engineering:</strong> Manipolazione psicologica degli utenti</li><li><strong>Cloud Security:</strong> Vulnerabilità nelle infrastrutture cloud</li><li><strong>IoT Attacks:</strong> Dispositivi connessi come punti di ingresso</li></ul><h3>Strategie di Difesa</h3><p>Le organizzazioni stanno adottando nuove strategie:</p><ul><li><strong>Zero Trust Architecture:</strong> Verifica continua di identità e accessi</li><li><strong>Multi-Factor Authentication:</strong> Autenticazione a più fattori</li><li><strong>Security Awareness Training:</strong> Educazione degli utenti</li><li><strong>Threat Intelligence:</strong> Monitoraggio proattivo delle minacce</li></ul><h3>Tecnologie di Protezione</h3><p>Nuove tecnologie stanno emergendo:</p><ul><li><strong>AI per Security:</strong> Machine learning per rilevamento anomalie</li><li><strong>EDR/XDR:</strong> Endpoint Detection and Response avanzato</li><li><strong>Zero-Day Protection:</strong> Protezione contro vulnerabilità sconosciute</li><li><strong>Quantum-Resistant Cryptography:</strong> Crittografia post-quantum</li></ul><h3>Compliance e Regolamentazione</h3><p>Il panorama normativo si sta evolvendo:</p><ul><li><strong>GDPR Enforcement:</strong> Applicazione più rigorosa</li><li><strong>NIS2 Directive:</strong> Nuove regole europee</li><li><strong>Industry-Specific Regulations:</strong> Regolamentazioni settoriali</li><li><strong>Data Privacy Laws:</strong> Leggi sulla privacy sempre più stringenti</li></ul><h3>Il Futuro della Cybersecurity</h3><p>Il futuro della cybersecurity richiederà:</p><ul><li>Collaborazione tra settore pubblico e privato</li><li>Investimenti in ricerca e sviluppo</li><li>Formazione continua dei professionisti</li><li>Adozione di best practices aggiornate</li></ul><p>La cybersecurity non è più un'opzione ma una necessità. Le organizzazioni che investono in sicurezza oggi saranno meglio preparate per le sfide di domani.</p>",
                category: "security",
                tags: ["Cybersecurity", "Ransomware", "AI Security", "Zero Trust", "Compliance"],
                date: "2024-01-25",
                readTime: "7 min",
                order: 3
            }
        ];
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new FreshCommitsApp();
});


