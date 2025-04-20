// influence_app_script.js - Logique SPA pour QCM Influence Sociale

class InfluenceApp {
    constructor() {
        // --- Constantes ---
        this.STORAGE_KEY = 'influence_statuses'; // Nouvelle clé pour ce QCM
        this.BATCH_SIZE = 20; // Ou une autre valeur si souhaitée
        this.SLIDES_FOLDER_PATH = 'slides/influence/'; // Chemin vers les diapos

        // --- État de l'application ---
        this.quizData = [];                   // Sera rempli avec quizDataInfluence
        this.questionStatuses = {};           // Statut de chaque question ('todo', 'correct', 'incorrect')
        this.currentPartFilter = null;      // Partie sélectionnée (null = "Tout le cours")
        this.currentCategory = null;        // Catégorie ('todo', 'incorrect', 'correct')
        this.currentBatchIndex = 0;
        this.allQuestionsForPart = [];      // Questions filtrées par partie
        this.allQuestionsInCategory = []; // Questions filtrées par partie ET catégorie
        this.totalBatches = 0;
        this.availableParts = [];           // Liste des parties uniques + "Tout le cours"

        // --- Références DOM ---
        // Vues principales
        this.appContainer = document.querySelector('main'); // Conteneur principal
        this.partSelectionView = document.getElementById('part-selection-view');
        this.menuView = document.getElementById('menu-view');
        this.quizView = document.getElementById('quiz-view');

        // Éléments Sélection Partie
        this.partButtonsContainer = document.getElementById('part-buttons-container');

        // Éléments Menu Catégories
        this.menuTitleEl = document.getElementById('menu-title');
        this.categoryMenuEl = this.menuView?.querySelector('.category-menu');
        this.countTodoEl = document.getElementById('count-todo');
        this.countIncorrectEl = document.getElementById('count-incorrect');
        this.countCorrectEl = document.getElementById('count-correct');
        this.resetBtn = document.getElementById('reset-progress');
        this.backToPartSelectionBtn = document.getElementById('back-to-part-selection');

        // Éléments Quiz
        this.quizTitleEl = document.getElementById('quiz-title');
        this.quizInstructionsEl = document.getElementById('quiz-instructions');
        this.quizFormEl = document.getElementById('quiz-form');
        this.quizBackBtn = document.getElementById('quiz-backBtn');
        this.quizNextBtn = document.getElementById('quiz-nextBtn');
        this.floatingBackBtn = document.getElementById('floating-back-btn');

        // --- Vérification des données externes ---
        if (typeof quizDataInfluence === 'undefined' || !Array.isArray(quizDataInfluence)) {
            console.error("ERREUR CRITIQUE: quizDataInfluence n'est pas défini ou n'est pas un tableau.");
            this.showError("Erreur critique : Impossible de charger les données des questions pour Influence Sociale.");
            this._initializationFailed = true;
            return;
        }
        this.quizData = quizDataInfluence;
        console.log(`Données chargées pour Influence Sociale: ${this.quizData.length} questions.`);
        this._initializationFailed = false;
    }

    // --- Méthodes de Gestion de l'État --- (Adaptées pour la nouvelle clé)

    loadInitialState() {
        console.log(`Chargement de l'état initial depuis localStorage ('${this.STORAGE_KEY}')...`);
        const storedStatuses = localStorage.getItem(this.STORAGE_KEY);
        if (storedStatuses) {
            try {
                this.questionStatuses = JSON.parse(storedStatuses);
                console.log(`Statuts chargés: ${Object.keys(this.questionStatuses).length} trouvés.`);
                this.synchronizeStatusesWithData();
            } catch (e) {
                console.error("Erreur parsing localStorage, réinitialisation.", e);
                this.initializeStatuses();
            }
        } else {
            console.log("Aucun statut trouvé, initialisation...");
            this.initializeStatuses();
        }
        // Extraire les parties uniques du cours
        this.extractAvailableParts();
    }

    initializeStatuses() {
        console.log("Initialisation de tous les statuts à 'todo'.");
        this.questionStatuses = {};
        this.quizData.forEach(q => {
            if (q && q.id) {
                this.questionStatuses[q.id] = 'todo';
            } else {
                 console.warn("Donnée de question invalide lors de l'initialisation des statuts :", q);
            }
        });
        this.saveStatuses();
    }

    synchronizeStatusesWithData() {
        let updated = false;
        const currentIds = new Set(this.quizData.map(q => q?.id).filter(id => id));

        // Ajouter les nouvelles questions
        this.quizData.forEach(q => {
            if (q && q.id && !this.questionStatuses.hasOwnProperty(q.id)) {
                console.warn(`Statut manquant pour ${q.id}, ajouté comme 'todo'.`);
                this.questionStatuses[q.id] = 'todo';
                updated = true;
            }
        });

        // Supprimer les statuts des questions obsolètes
        Object.keys(this.questionStatuses).forEach(id => {
            if (!currentIds.has(id)) {
                console.warn(`Statut trouvé pour une question inexistante (${id}), supprimé.`);
                delete this.questionStatuses[id];
                updated = true;
            }
        });

        if (updated) {
            console.log("Statuts synchronisés avec les données actuelles.");
            this.saveStatuses();
        }
    }

    saveStatuses() {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.questionStatuses));
        } catch (e) {
            console.error("Erreur sauvegarde localStorage:", e);
            this.showError("Erreur lors de la sauvegarde de la progression.");
        }
    }

    updateQuestionStatus(questionId, newStatus) {
        if (this.questionStatuses.hasOwnProperty(questionId)) {
            // console.log(`Mise à jour statut ${questionId}: ${this.questionStatuses[questionId]} -> ${newStatus}`);
            this.questionStatuses[questionId] = newStatus;
            this.saveStatuses(); // Sauvegarde à chaque mise à jour
        } else {
            console.warn(`Tentative de mise à jour statut pour ID inconnu: ${questionId}`);
        }
    }

    getStatus(questionId) {
        return this.questionStatuses[questionId] || 'todo';
    }

    extractAvailableParts() {
        const parts = new Set(this.quizData.map(q => q?.part).filter(part => part));
        this.availableParts = ["Tout le cours", ...Array.from(parts).sort()]; // Ajoute "Tout le cours" en premier
        console.log("Parties disponibles extraites:", this.availableParts);
    }

    // --- Méthodes de Gestion des Vues --- (Adaptées pour 3 vues)

    showView(viewToShow) {
        // Masque toutes les vues et le bouton flottant
        [this.partSelectionView, this.menuView, this.quizView].forEach(view => {
            if (view) view.classList.remove('active');
        });
        if (this.floatingBackBtn) this.floatingBackBtn.style.display = 'none';

        // Active la vue demandée
        if (viewToShow) {
             viewToShow.classList.add('active');
             console.log(`Affichage de la vue: ${viewToShow.id}`);
             // Affiche le bouton flottant SEULEMENT si on est dans la vue Quiz
             if (viewToShow === this.quizView && this.floatingBackBtn) {
                 this.floatingBackBtn.style.display = 'inline-block';
             }
        } else {
            console.error("Tentative d'afficher une vue indéfinie !");
        }
    }

    // NOUVELLE VUE : Sélection de partie
    showPartSelectionView() {
        this.currentPartFilter = null; // Réinitialise le filtre
        this.populatePartButtons();
        this.showView(this.partSelectionView);
    }

    populatePartButtons() {
        if (!this.partButtonsContainer) return;
        this.partButtonsContainer.innerHTML = ''; // Vide le conteneur
        this.availableParts.forEach(partName => {
            const button = document.createElement('button');
            button.textContent = partName;
            button.classList.add('button', 'button-primary', 'part-button');
            // Utilise null pour 'Tout le cours', sinon le nom de la partie
            button.dataset.part = (partName === "Tout le cours") ? '' : partName;
            this.partButtonsContainer.appendChild(button);
        });
    }

    // Vue Menu (adaptée)
    showMenuView() {
        const partTitle = this.currentPartFilter ? `: ${this.currentPartFilter}` : ": Tout le cours";
        if(this.menuTitleEl) this.menuTitleEl.textContent = `Catégories ${partTitle}`;
        this.filterQuestionsByPart(); // Filtre d'abord par partie sélectionnée
        this.updateMenuViewCounters(); // Met à jour les compteurs pour cette partie
        this.showView(this.menuView);
    }

     // Vue Quiz (peu de changement ici)
    showQuizView(category) {
        console.log(`Lancement du quiz - Partie: ${this.currentPartFilter || 'Tout'}, Catégorie: ${category}`);
        this.currentCategory = category;
        this.currentBatchIndex = 0;
        this.filterAndPrepareQuestionsForCategory(); // Filtre pour la catégorie DANS la partie sélectionnée
        this.displayQuizBatch();
        this.showView(this.quizView);
    }

    showError(message) {
        if (this.appContainer) {
            this.appContainer.innerHTML = `<p style='color:red; text-align:center; padding: 20px;'>${message}</p>`;
        } else {
            alert(message);
        }
    }

    // --- Logique d'Affichage du Menu (adaptée) ---

    filterQuestionsByPart() {
        if (this.currentPartFilter) {
            this.allQuestionsForPart = this.quizData.filter(q => q?.part === this.currentPartFilter);
        } else {
            this.allQuestionsForPart = [...this.quizData]; // Copie toutes les questions si "Tout le cours"
        }
         console.log(`Questions filtrées pour la partie '${this.currentPartFilter || 'Tout le cours'}': ${this.allQuestionsForPart.length}`);
    }

    updateMenuViewCounters() {
        if (!this.countTodoEl || !this.countIncorrectEl || !this.countCorrectEl) return;
        let todoCount = 0;
        let incorrectCount = 0;
        let correctCount = 0;

        // Compte les statuts DANS les questions de la partie sélectionnée
        this.allQuestionsForPart.forEach(q => {
            if (q && q.id) {
                const status = this.getStatus(q.id);
                if (status === 'todo') todoCount++;
                else if (status === 'incorrect') incorrectCount++;
                else if (status === 'correct') correctCount++;
            }
        });

        this.countTodoEl.textContent = todoCount;
        this.countIncorrectEl.textContent = incorrectCount;
        this.countCorrectEl.textContent = correctCount;

        this.categoryMenuEl?.querySelector('#category-todo')?.classList.toggle('disabled', todoCount === 0);
        this.categoryMenuEl?.querySelector('#category-incorrect')?.classList.toggle('disabled', incorrectCount === 0);
        this.categoryMenuEl?.querySelector('#category-correct')?.classList.toggle('disabled', correctCount === 0);

        console.log(`Compteurs menu mis à jour (Partie: ${this.currentPartFilter || 'Tout'}): T=${todoCount}, I=${incorrectCount}, C=${correctCount}`);
    }

    // --- Logique d'Affichage du Quiz (Adaptée) ---

    filterAndPrepareQuestionsForCategory() {
        // Filtre les questions DE LA PARTIE COURANTE par la catégorie choisie
        this.allQuestionsInCategory = this.allQuestionsForPart.filter(q => {
            return q && q.id && this.getStatus(q.id) === this.currentCategory;
        });
        shuffleArray(this.allQuestionsInCategory); // Mélange les questions de la catégorie
        this.totalBatches = Math.ceil(this.allQuestionsInCategory.length / this.BATCH_SIZE);
        console.log(`Catégorie: ${this.currentCategory}, Questions prêtes: ${this.allQuestionsInCategory.length}, Lots: ${this.totalBatches}`);
    }

    displayQuizBatch() {
        if (!this.quizFormEl) return;
        this.quizFormEl.innerHTML = ''; // Vide le formulaire

        const startIndex = this.currentBatchIndex * this.BATCH_SIZE;
        const endIndex = startIndex + this.BATCH_SIZE;
        const currentBatchQuestions = this.allQuestionsInCategory.slice(startIndex, endIndex);

        this.updateQuizTitleAndInstructions();

        if (currentBatchQuestions.length === 0 && this.allQuestionsInCategory.length === 0) {
             const friendlyCategory = this.getCategoryFriendlyName(this.currentCategory);
             this.quizFormEl.innerHTML = `<p style="text-align: center;">Aucune question trouvée dans la catégorie "${friendlyCategory}" pour la partie "${this.currentPartFilter || 'Tout le cours'}".</p>`;
             if (this.quizNextBtn) this.quizNextBtn.disabled = true;
             return;
         } else if (currentBatchQuestions.length === 0 && this.allQuestionsInCategory.length > 0) {
             this.quizFormEl.innerHTML = `<p style="text-align: center;">Vous avez terminé tous les lots pour cette catégorie et cette partie !</p>`;
             if (this.quizNextBtn) this.quizNextBtn.disabled = true;
             return;
         }


        let quizHTML = '';
        currentBatchQuestions.forEach((question, index) => {
            const displayNum = startIndex + index + 1;
            quizHTML += this.createQuestionHTML(question, displayNum);
        });
        this.quizFormEl.innerHTML = quizHTML;

        // Gestion de l'état du bouton "Suivant"
        if (this.quizNextBtn) {
            const isLastBatch = (this.currentBatchIndex + 1 >= this.totalBatches);
            this.quizNextBtn.disabled = isLastBatch;
            const currentBatchDisplay = this.totalBatches > 0 ? this.currentBatchIndex + 1 : 0;
            const totalBatchDisplay = this.totalBatches > 0 ? this.totalBatches : 0;
            let nextBtnText = `Suivant (Lot ${currentBatchDisplay + 1 > totalBatchDisplay ? totalBatchDisplay : currentBatchDisplay + 1}/${totalBatchDisplay})`;
            if (isLastBatch) nextBtnText = "Dernier lot";
             this.quizNextBtn.textContent = nextBtnText;
        }
    }

    updateQuizTitleAndInstructions() {
        let title = `Influence Sociale - ${this.currentPartFilter || 'Tout le cours'}`;
        let instruction = `Catégorie : ${this.getCategoryFriendlyName(this.currentCategory)}`;
        const totalInCategory = this.allQuestionsInCategory.length;
        instruction += ` (${totalInCategory} question${totalInCategory > 1 ? 's' : ''} au total dans cette sélection).`;

        if(this.quizTitleEl) this.quizTitleEl.textContent = title;
        if(this.quizInstructionsEl) this.quizInstructionsEl.textContent = instruction;
    }

    getCategoryFriendlyName(categoryKey){
        if (categoryKey === 'todo') return "À faire";
        if (categoryKey === 'incorrect') return "À revoir";
        if (categoryKey === 'correct') return "Réussies";
        return "Inconnue";
    }

    // NOUVEAU HTML POUR QUESTION AVEC FEEDBACK DÉTAILLÉ
     createQuestionHTML(questionData, displayIndex) {
         if (!questionData || !questionData.id || !Array.isArray(questionData.options)) {
              console.error("Tentative de créer HTML pour question invalide:", questionData);
              return "<p style='color:red'>Erreur: Donnée de question invalide.</p>";
         }
         const questionId = questionData.id;

         // Crée le HTML pour les options (checkboxes et labels)
         const optionsHTML = questionData.options.map(option => `
             <li> <label>
                     <input type="checkbox" name="q${questionId}_options" value="${escapeHtml(option.value)}">
                     <span>${escapeHtml(option.text)}</span>
                 </label>
            </li>
         `).join('');

         // Prépare le HTML pour la question entière
         // Inclut un conteneur <ul> pour le feedback détaillé
         return `
             <div class="question-block" id="${questionId}" data-question-id="${questionId}">
                 <p class="question-text">${displayIndex}. ${escapeHtml(questionData.text)}</p>
                 <ul class="options-list">
                     ${optionsHTML}
                 </ul>
                 <button type="button" class="verify-button button button-primary" data-id="${questionId}">Vérifier</button>
                 <div class="feedback-area" style="display: none;">
                     <ul class="detailed-feedback-list">
                         </ul>
                     </div>
             </div>
         `;
     }

    // --- Logique de Vérification d'une Réponse (Refonte Majeure pour Feedback Détaillé) ---

    handleVerifyClick(event) {
        const buttonElement = event.target;
        const questionId = buttonElement.dataset.id;
        if (!questionId || buttonElement.disabled) return;

        const questionBlock = document.getElementById(questionId);
        const questionData = this.quizData.find(q => q.id === questionId);
        if (!questionData || !questionData.options || !Array.isArray(questionData.correctAnswers)) {
            console.error("Données de question invalides pour la vérification :", questionId);
            return;
        }

        const userCheckboxes = questionBlock.querySelectorAll(`input[name="q${questionId}_options"]:checked`);
        const userAnswers = Array.from(userCheckboxes).map(cb => cb.value);
        const correctAnswers = questionData.correctAnswers;

        // Détermine si la réponse GLOBALE est correcte
        const isCorrect = userAnswers.length === correctAnswers.length &&
                           userAnswers.every(ans => correctAnswers.includes(ans));

        // Met à jour le statut global de la question
        let newStatus = isCorrect ? 'correct' : 'incorrect';
        this.updateQuestionStatus(questionId, newStatus);

        // --- Génération du Feedback Détaillé ---
        const feedbackListElement = questionBlock.querySelector('.detailed-feedback-list');
        const feedbackAreaElement = questionBlock.querySelector('.feedback-area');
        if (!feedbackListElement || !feedbackAreaElement) return;

        feedbackListElement.innerHTML = ''; // Vide le feedback précédent

        questionData.options.forEach(option => {
            const li = document.createElement('li');
            li.classList.add('feedback-option'); // Classe pour le style global d'une option feedback

            const isCorrectAnswer = correctAnswers.includes(option.value);
            const isSelected = userAnswers.includes(option.value);

            // 1. Indicateur Correct/Incorrect + Sélection Utilisateur
            let indicatorHTML = '';
            if (isCorrectAnswer) {
                indicatorHTML += `<span class="correct-indicator">✓</span> `; // Indicateur bonne réponse
                if (isSelected) {
                    indicatorHTML += `<span class="user-selected-correct">[Sélectionné]</span> `;
                     li.classList.add('option-correct', 'option-selected');
                } else {
                     indicatorHTML += `<span class="user-not-selected">[Non sélectionné]</span> `;
                     li.classList.add('option-correct', 'option-missed'); // Bonne réponse manquée
                }
            } else { // Option incorrecte
                indicatorHTML += `<span class="incorrect-indicator">✗</span> `; // Indicateur mauvaise réponse
                 if (isSelected) {
                     indicatorHTML += `<span class="user-selected-incorrect">[Sélectionné]</span> `;
                     li.classList.add('option-incorrect', 'option-selected'); // Mauvaise réponse sélectionnée
                 } else {
                     indicatorHTML += `<span class="user-not-selected">[Non sélectionné]</span> `;
                     li.classList.add('option-incorrect');
                 }
            }

            // 2. Texte de l'option
            const optionTextHTML = `<span class="option-text">${escapeHtml(option.text)}</span>`;

            // 3. Justification
            let justificationHTML = '';
            if (option.justification) {
                 // Utiliser <pre> pour respecter les retours à la ligne potentiels dans la justification
                 justificationHTML = `<div class="justification-text"><pre>${escapeHtml(option.justification)}</pre></div>`;
            }

            // 4. Label Distracteur (si applicable)
            const distractorLabelHTML = option.isDistractor ? `<span class="distractor-label">(Proposition distractive)</span>` : '';

            // Assemble le HTML pour cette option
            li.innerHTML = `${indicatorHTML} ${optionTextHTML} ${distractorLabelHTML} ${justificationHTML}`;
            feedbackListElement.appendChild(li);
        });

        // --- Bouton "Afficher Diapos" ---
         // Supprime l'ancien bouton s'il existe
         const oldSlideButton = feedbackAreaElement.querySelector('.show-slides-btn');
         if (oldSlideButton) {
             oldSlideButton.remove();
         }

        if (questionData.slideFiles && Array.isArray(questionData.slideFiles) && questionData.slideFiles.length > 0) {
            const slideButton = document.createElement('button');
            slideButton.textContent = `Afficher la/les diapo(s) (${questionData.slideFiles.length})`;
            slideButton.classList.add('button', 'button-secondary', 'show-slides-btn');
            // Stocke la liste des fichiers dans un attribut data-* (JSON stringifié)
            slideButton.dataset.slides = JSON.stringify(questionData.slideFiles);
            // Ajoute le bouton APRES la liste de feedback
            feedbackAreaElement.appendChild(slideButton);
        }

        feedbackAreaElement.style.display = 'block'; // Affiche la zone de feedback

        // --- Désactivation des éléments ---
        const allLabels = questionBlock.querySelectorAll('.options label');
        allLabels.forEach(label => {
            const checkbox = label.querySelector('input[type="checkbox"]');
            if (checkbox) checkbox.disabled = true;
            label.classList.add('disabled-label'); // Ajoute une classe pour griser/styliser
        });
        buttonElement.disabled = true; // Désactive le bouton "Vérifier"

        // Ajoute une classe au bloc question pour indiquer qu'il est vérifié
        questionBlock.classList.add('verified');
         questionBlock.classList.remove('correct', 'incorrect'); // Nettoie anciennes classes de statut global
         questionBlock.classList.add(isCorrect ? 'correct-overall' : 'incorrect-overall'); // Nouvelle classe pour statut global si besoin de style
    }

    // --- Gestionnaire pour le clic sur "Afficher Diapos" ---
    handleShowSlidesClick(event) {
        const buttonElement = event.target;
        const slidesJson = buttonElement.dataset.slides;
        if (!slidesJson) return;

        try {
            const slideFiles = JSON.parse(slidesJson);
            if (Array.isArray(slideFiles)) {
                slideFiles.forEach(filename => {
                    if (filename) {
                         const filePath = this.SLIDES_FOLDER_PATH + filename;
                         console.log(`Ouverture de la diapo: ${filePath}`);
                         window.open(filePath, '_blank'); // Ouvre dans un nouvel onglet
                    }
                });
            }
        } catch (e) {
            console.error("Erreur lors du parsing des données des diapos:", e);
            alert("Impossible de charger les informations des diapositives.");
        }
    }


    // --- Gestion des Événements --- (Adaptée pour les nouvelles vues et boutons)

    attachEventListeners() {
        console.log("Attachement des écouteurs d'événements pour Influence Sociale.");

        // ===== Vue Sélection Partie =====
        this.partButtonsContainer?.addEventListener('click', (event) => {
             const button = event.target.closest('.part-button');
             if (button) {
                 // Utilise '' (chaîne vide) de dataset.part pour représenter null ("Tout le cours")
                 this.currentPartFilter = button.dataset.part === '' ? null : button.dataset.part;
                 console.log(`Partie sélectionnée: ${this.currentPartFilter || 'Tout le cours'}`);
                 this.showMenuView();
             }
        });

        // ===== Vue Menu Catégories =====
        this.categoryMenuEl?.addEventListener('click', (event) => {
             const categoryButton = event.target.closest('.category-button');
             if (categoryButton && !categoryButton.classList.contains('disabled')) {
                 const category = categoryButton.dataset.category;
                 if (category) {
                     this.showQuizView(category);
                 }
             }
        });

        this.resetBtn?.addEventListener('click', () => {
            if (confirm("Êtes-vous sûr de vouloir effacer toute votre progression pour ce QCM ? Cette action est irréversible.")) {
                console.log("Réinitialisation demandée pour Influence Sociale.");
                this.initializeStatuses();
                // Important : Il faut aussi mettre à jour les compteurs de la vue menu actuelle
                if (this.menuView?.classList.contains('active')) {
                     this.updateMenuViewCounters();
                }
                alert("Progression réinitialisée.");
            }
        });

        // Bouton retour du Menu vers Sélection Partie
        this.backToPartSelectionBtn?.addEventListener('click', () => this.showPartSelectionView());


        // ===== Vue Quiz =====
        // Clic sur "Vérifier" (délégation sur le formulaire)
        this.quizFormEl?.addEventListener('click', (event) => {
            if (event.target.classList.contains('verify-button')) {
                this.handleVerifyClick(event);
            }
            // Clic sur "Afficher Diapos" (délégation sur feedback-area ou form)
            else if (event.target.classList.contains('show-slides-btn')) {
                 this.handleShowSlidesClick(event);
             }
        });

        // Boutons de navigation du Quiz
        this.quizBackBtn?.addEventListener('click', () => this.showMenuView()); // Retourne au menu catégories (déjà filtré par partie)
        this.quizNextBtn?.addEventListener('click', () => {
            if (!this.quizNextBtn.disabled) {
                this.currentBatchIndex++;
                console.log(`Passage au lot suivant: ${this.currentBatchIndex}`);
                this.displayQuizBatch();
                // Scroll vers le haut du quiz pour voir la nouvelle question
                this.quizView?.scrollIntoView({ behavior: 'smooth' });
            }
        });

        // Bouton flottant "Retour Menu Catégories"
        this.floatingBackBtn?.addEventListener('click', () => {
            console.log("Clic sur bouton flottant Retour Menu.");
            this.showMenuView(); // Retourne au menu catégories
        });
    }

    // --- Initialisation de l'application ---
    init() {
        console.log("Initialisation de InfluenceApp...");
        if (this._initializationFailed) {
            console.error("Arrêt de l'initialisation car les données des questions manquent.");
            return;
        }
        this.loadInitialState();      // Charge l'état et extrait les parties
        this.attachEventListeners();  // Attache tous les écouteurs
        this.showPartSelectionView(); // Affiche la première vue (sélection partie)
        console.log("Application Influence Sociale initialisée.");
    }
}

// --- Fonctions Utilitaires Globales ---
function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

function escapeHtml(unsafe) {
    if (typeof unsafe !== 'string') {
         console.warn("escapeHtml a reçu une valeur non-string:", unsafe);
         return unsafe === null || unsafe === undefined ? '' : String(unsafe);
     }
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
}


// --- Démarrage de l'application ---
document.addEventListener('DOMContentLoaded', () => {
    const app = new InfluenceApp();
    if (!app._initializationFailed) {
        app.init();
    }
});