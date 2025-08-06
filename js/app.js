


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
                "id": "ai-generative-2024",
                "title": "L'ascesa dell'Intelligenza Artificiale Generativa",
                "excerpt": "Come ChatGPT, DALL-E e altri modelli stanno rivoluzionando il modo in cui creiamo contenuti digitali.",
                "content": "<h2>L'Intelligenza Artificiale Generativa sta trasformando il mondo digitale</h2><p>L'Intelligenza Artificiale Generativa (Generative AI) rappresenta una delle più significative innovazioni tecnologiche degli ultimi anni. Modelli come ChatGPT, DALL-E, Midjourney e altri stanno rivoluzionando il modo in cui creiamo, consumiamo e interagiamo con i contenuti digitali.</p><h3>Cos'è l'AI Generativa?</h3><p>L'AI Generativa è una sottocategoria dell'intelligenza artificiale che si concentra sulla creazione di nuovi contenuti. A differenza dell'AI tradizionale che analizza e classifica dati esistenti, l'AI generativa può creare:</p><ul><li><strong>Testo:</strong> Articoli, poesie, codice, traduzioni</li><li><strong>Immagini:</strong> Illustrazioni, fotografie, disegni artistici</li><li><strong>Audio:</strong> Musica, sintesi vocale, effetti sonori</li><li><strong>Video:</strong> Animazioni, filmati, contenuti multimediali</li></ul><h3>Le Applicazioni Pratiche</h3><p>Le applicazioni dell'AI Generativa sono infinite e stanno già trasformando numerosi settori:</p><ul><li><strong>Marketing e Advertising:</strong> Creazione di contenuti personalizzati, copywriting automatizzato</li><li><strong>Design e Creatività:</strong> Generazione di loghi, illustrazioni, mockup</li><li><strong>Educazione:</strong> Creazione di materiali didattici personalizzati</li><li><strong>Ricerca Scientifica:</strong> Simulazioni, analisi di dati complessi</li><li><strong>Entertainment:</strong> Giochi, film, contenuti interattivi</li></ul><h3>Le Sfide e le Opportunità</h3><p>Nonostante le enormi potenzialità, l'AI Generativa presenta anche sfide significative:</p><ul><li><strong>Etica e Responsabilità:</strong> Questioni di copyright, deepfake, disinformazione</li><li><strong>Qualità e Affidabilità:</strong> Controllo della qualità dei contenuti generati</li><li><strong>Privacy e Sicurezza:</strong> Protezione dei dati personali</li><li><strong>Impatto sul Lavoro:</strong> Automazione di professioni creative</li></ul><h3>Il Futuro dell'AI Generativa</h3><p>Il futuro dell'AI Generativa è promettente e in rapida evoluzione. Stiamo assistendo a:</p><ul><li>Sviluppo di modelli sempre più potenti e specializzati</li><li>Integrazione con altre tecnologie emergenti (IoT, AR/VR)</li><li>Democratizzazione dell'accesso alle tecnologie AI</li><li>Nuove opportunità di business e innovazione</li></ul><p>L'AI Generativa non è solo una tendenza tecnologica, ma una vera rivoluzione che sta ridefinendo i confini tra creatività umana e artificiale. La chiave per il successo futuro sarà trovare il giusto equilibrio tra automazione e controllo umano, sfruttando le potenzialità dell'AI per amplificare, non sostituire, la creatività umana.</p>",
                "category": "ai",
                "tags": ["AI", "Machine Learning", "Generative AI", "ChatGPT", "Innovation"],
                "date": "2024-01-15",
                "readTime": "8 min",
                "order": 1,
                "image": "images/ai-generative-2024.svg"
            },
            {
                "id": "web-development-2024",
                "title": "Web Development 2024: Le Nuove Frontiere",
                "excerpt": "Framework moderni, performance optimization e nuove tecnologie che stanno plasmando il futuro del web.",
                "content": "<h2>Il Web Development nel 2024: Un Panorama in Rapida Evoluzione</h2><p>Il mondo del web development sta attraversando una fase di trasformazione senza precedenti. Framework moderni, nuove tecnologie e approcci innovativi stanno ridefinendo il modo in cui costruiamo applicazioni web.</p><h3>Framework e Librerie Emergenti</h3><p>Il 2024 vede l'ascesa di nuovi framework e l'evoluzione di quelli esistenti:</p><ul><li><strong>React 18+:</strong> Concurrent Features, Suspense, Server Components</li><li><strong>Vue 3:</strong> Composition API, TypeScript support, Performance improvements</li><li><strong>Svelte/SvelteKit:</strong> Compile-time framework, Zero-runtime overhead</li><li><strong>Astro:</strong> Multi-framework support, Islands architecture</li><li><strong>Qwik:</strong> Resumability, Instant loading</li></ul><h3>Performance e Core Web Vitals</h3><p>La performance è diventata una priorità assoluta:</p><ul><li><strong>Largest Contentful Paint (LCP):</strong> Ottimizzazione del caricamento visivo</li><li><strong>First Input Delay (FID):</strong> Interattività immediata</li><li><strong>Cumulative Layout Shift (CLS):</strong> Stabilità visiva</li><li><strong>Core Web Vitals:</strong> Metriche essenziali per SEO e UX</li></ul><h3>Architetture Moderne</h3><p>Le nuove architetture stanno rivoluzionando il web development:</p><ul><li><strong>JAMstack:</strong> JavaScript, APIs, Markup</li><li><strong>Micro Frontends:</strong> Modularità e scalabilità</li><li><strong>Server-Side Rendering (SSR):</strong> Performance e SEO</li><li><strong>Static Site Generation (SSG):</strong> Velocità e sicurezza</li><li><strong>Edge Computing:</strong> Distribuzione globale</li></ul><h3>Nuove Tecnologie</h3><p>Il 2024 introduce tecnologie rivoluzionarie:</p><ul><li><strong>Web Components:</strong> Riutilizzabilità e standardizzazione</li><li><strong>WebAssembly (WASM):</strong> Performance native nel browser</li><li><strong>Progressive Web Apps (PWA):</strong> Esperienza app-like</li><li><strong>Web APIs Moderne:</strong> File System Access, Web Bluetooth</li><li><strong>CSS Grid e Flexbox:</strong> Layout avanzati</li></ul><h3>Developer Experience (DX)</h3><p>Gli strumenti per sviluppatori stanno migliorando significativamente:</p><ul><li><strong>TypeScript:</strong> Type safety e migliore DX</li><li><strong>ESLint e Prettier:</strong> Code quality e formatting</li><li><strong>Vite e Turbopack:</strong> Build tools ultra-veloci</li><li><strong>Storybook:</strong> Component development</li><li><strong>Testing Libraries:</strong> Jest, Vitest, Playwright</li></ul><h3>Il Futuro del Web Development</h3><p>Le tendenze emergenti indicano un futuro entusiasmante:</p><ul><li><strong>AI-Powered Development:</strong> GitHub Copilot, AI assistants</li><li><strong>Low-Code/No-Code:</strong> Democratizzazione dello sviluppo</li><li><strong>Web3 Integration:</strong> Blockchain e applicazioni decentralizzate</li><li><strong>Accessibility First:</strong> Design inclusivo</li><li><strong>Sustainability:</strong> Green web development</li></ul><p>Il web development nel 2024 richiede una combinazione di competenze tecniche solide, adattabilità alle nuove tecnologie e una visione strategica per creare esperienze digitali eccezionali.</p>",
                "category": "web",
                "tags": ["Web Development", "React", "Vue", "Performance", "Modern Web"],
                "date": "2024-01-20",
                "readTime": "6 min",
                "order": 2,
                "image": "images/web-development-2024.svg"
            },
            {
                "id": "cybersecurity-2024",
                "title": "Cybersecurity: Le Minacce del 2024",
                "excerpt": "Ransomware, phishing e attacchi zero-day: come proteggersi dalle nuove minacce informatiche.",
                "content": "<h2>Cybersecurity 2024: Un Panorama delle Minacce Emergenti</h2><p>Il 2024 presenta sfide di cybersecurity senza precedenti. Con l'aumento della digitalizzazione e l'evoluzione delle tecnologie, le minacce informatiche stanno diventando sempre più sofisticate e pervasive.</p><h3>Le Principali Minacce del 2024</h3><p>Le organizzazioni devono affrontare un panorama di minacce in continua evoluzione:</p><ul><li><strong>Ransomware Avanzato:</strong> Attacchi mirati e doppia estorsione</li><li><strong>Supply Chain Attacks:</strong> Compromissione di fornitori e partner</li><li><strong>Zero-Day Exploits:</strong> Vulnerabilità sconosciute</li><li><strong>AI-Powered Attacks:</strong> Automazione delle minacce</li><li><strong>Cloud Security:</strong> Vulnerabilità delle infrastrutture cloud</li></ul><h3>Strategie di Protezione</h3><p>Le organizzazioni devono implementare strategie di sicurezza multilivello:</p><ul><li><strong>Zero Trust Architecture:</strong> Verifica continua dell'identità</li><li><strong>Multi-Factor Authentication (MFA):</strong> Autenticazione a più fattori</li><li><strong>Endpoint Detection and Response (EDR):</strong> Monitoraggio avanzato</li><li><strong>Security Awareness Training:</strong> Educazione degli utenti</li><li><strong>Incident Response Planning:</strong> Preparazione agli incidenti</li></ul><h3>Le Nuove Tecnologie di Sicurezza</h3><p>Le tecnologie emergenti stanno rivoluzionando la cybersecurity:</p><ul><li><strong>AI e Machine Learning:</strong> Rilevamento automatico delle minacce</li><li><strong>Behavioral Analytics:</strong> Analisi del comportamento anomalo</li><li><strong>Threat Intelligence:</strong> Condivisione di informazioni sulle minacce</li><li><strong>Automated Response:</strong> Risposta automatica agli incidenti</li><li><strong>Quantum Cryptography:</strong> Crittografia post-quantistica</li></ul><h3>Compliance e Regolamentazione</h3><p>Il panorama normativo sta evolvendo rapidamente:</p><ul><li><strong>GDPR e Privacy:</strong> Protezione dei dati personali</li><li><strong>NIS2 Directive:</strong> Sicurezza delle reti e sistemi</li><li><strong>Industry-Specific Regulations:</strong> Normative settoriali</li><li><strong>International Cooperation:</strong> Collaborazione globale</li></ul><h3>Il Futuro della Cybersecurity</h3><p>Le tendenze future indicano un'evoluzione continua:</p><ul><li><strong>Quantum Computing:</strong> Nuove sfide crittografiche</li><li><strong>IoT Security:</strong> Protezione dei dispositivi connessi</li><li><strong>5G Security:</strong> Sicurezza delle reti di nuova generazione</li><li><strong>Biometric Security:</strong> Autenticazione biometrica avanzata</li><li><strong>Decentralized Security:</strong> Sicurezza basata su blockchain</li></ul><p>La cybersecurity nel 2024 richiede un approccio proattivo, investimenti continui in tecnologie e formazione, e una cultura della sicurezza che coinvolga tutti i livelli dell'organizzazione.</p>",
                "category": "security",
                "tags": ["Cybersecurity", "Ransomware", "Zero-Day", "AI Security", "Compliance"],
                "date": "2024-01-25",
                "readTime": "7 min",
                "order": 3,
                "image": "images/cybersecurity-2024.svg"
            },
            {
                "id": "blockchain-2024",
                "title": "Blockchain e Web3: Il Futuro di Internet",
                "excerpt": "Come la tecnologia blockchain sta rivoluzionando il web e creando nuove opportunità decentralizzate.",
                "content": "<h2>Blockchain e Web3: La Nuova Era di Internet</h2><p>Il Web3 rappresenta la prossima evoluzione di Internet, basata su tecnologie blockchain e decentralizzate. Questa rivoluzione sta trasformando il modo in cui interagiamo con il digitale.</p><h3>Cos'è il Web3?</h3><p>Il Web3 è la terza generazione di Internet che combina:</p><ul><li><strong>Decentralizzazione:</strong> Controllo distribuito invece di enti centralizzati</li><li><strong>Blockchain:</strong> Registri immutabili e trasparenti</li><li><strong>Token Economy:</strong> Sistemi di incentivi basati su token</li><li><strong>Smart Contracts:</strong> Contratti automatici e programmabili</li></ul><h3>Le Applicazioni Pratiche</h3><p>Il Web3 sta già trasformando numerosi settori:</p><ul><li><strong>DeFi (Decentralized Finance):</strong> Servizi finanziari senza intermediari</li><li><strong>NFT (Non-Fungible Tokens):</strong> Proprietà digitale unica</li><li><strong>DAOs (Decentralized Autonomous Organizations):</strong> Organizzazioni governate dalla comunità</li><li><strong>dApps (Decentralized Applications):</strong> Applicazioni su blockchain</li></ul><h3>Le Sfide e Opportunità</h3><p>Il Web3 presenta sfide significative ma anche enormi opportunità:</p><ul><li><strong>Scalabilità:</strong> Gestione di transazioni ad alto volume</li><li><strong>Usabilità:</strong> Interfacce user-friendly</li><li><strong>Regolamentazione:</strong> Framework normativi chiari</li><li><strong>Sostenibilità:</strong> Consumo energetico delle blockchain</li></ul><h3>Il Futuro del Web3</h3><p>Il futuro del Web3 è promettente con:</p><ul><li>Sviluppo di soluzioni di scaling (Layer 2)</li><li>Interoperabilità tra blockchain</li><li>Integrazione con AI e IoT</li><li>Adozione mainstream delle dApps</li></ul><p>Il Web3 non è solo una tendenza tecnologica, ma una vera rivoluzione che sta ridefinendo i concetti di proprietà, identità e valore nel mondo digitale.</p>",
                "category": "blockchain",
                "tags": ["Blockchain", "Web3", "DeFi", "NFT", "Smart Contracts"],
                "date": "2024-01-30",
                "readTime": "9 min",
                "order": 4,
                "image": "images/blockchain-2024.svg"
            },
            {
                "id": "quantum-computing-2024",
                "title": "Quantum Computing: Il Futuro dell'Informatica",
                "excerpt": "Come i computer quantistici stanno rivoluzionando il calcolo e aprendo nuove frontiere tecnologiche.",
                "content": "<h2>Quantum Computing: La Prossima Rivoluzione Informatica</h2><p>Il quantum computing rappresenta una delle più significative innovazioni tecnologiche del nostro tempo. A differenza dei computer tradizionali che utilizzano bit binari (0 e 1), i computer quantistici utilizzano qubit che possono esistere in stati multipli simultaneamente.</p><h3>Principi Fondamentali</h3><p>Il quantum computing si basa su tre principi fondamentali:</p><ul><li><strong>Superposizione:</strong> I qubit possono essere in più stati contemporaneamente</li><li><strong>Entanglement:</strong> I qubit possono essere correlati a distanza</li><li><strong>Interferenza:</strong> Le onde quantistiche possono interferire tra loro</li></ul><h3>Applicazioni Pratiche</h3><p>Il quantum computing sta già trasformando numerosi settori:</p><ul><li><strong>Crittografia:</strong> Rottura e creazione di nuovi algoritmi di sicurezza</li><li><strong>Ottimizzazione:</strong> Risoluzione di problemi complessi di logistica</li><li><strong>Simulazioni:</strong> Modellazione di sistemi molecolari e materiali</li><li><strong>Machine Learning:</strong> Accelerazione degli algoritmi di AI</li></ul><h3>Le Sfide Tecnologiche</h3><p>Nonostante le enormi potenzialità, il quantum computing presenta sfide significative:</p><ul><li><strong>Decoerenza:</strong> Perdita di informazioni quantistiche</li><li><strong>Errori:</strong> Sensibilità agli errori ambientali</li><li><strong>Scalabilità:</strong> Aumento del numero di qubit</li><li><strong>Raffreddamento:</strong> Necessità di temperature criogeniche</li></ul><h3>Il Futuro del Quantum Computing</h3><p>Il futuro del quantum computing è promettente con:</p><ul><li>Sviluppo di qubit più stabili</li><li>Algoritmi di correzione degli errori</li><li>Integrazione con AI classica</li><li>Applicazioni commerciali pratiche</li></ul><p>Il quantum computing non sostituirà i computer tradizionali, ma li completerà, aprendo nuove possibilità per risolvere problemi che oggi sono impossibili da affrontare.</p>",
                "category": "quantum",
                "tags": ["Quantum Computing", "Qubit", "Crittografia", "Ottimizzazione", "Futuro"],
                "date": "2024-02-01",
                "readTime": "7 min",
                "order": 5,
                "image": "images/quantum-computing-2024.svg"
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
            'blockchain': '⛓️',
            'quantum': '⚛️'
        };
        return icons[category] || '📄';
    }

    getCategoryName(category) {
        const names = {
            'ai': 'AI & ML',
            'web': 'Web Development',
            'security': 'Cybersecurity',
            'blockchain': 'Blockchain & Web3',
            'quantum': 'Quantum Computing'
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


