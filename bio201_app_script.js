// bio201_app_script.js - Logique SPA (CORRIGÉ pour l'affichage des apostrophes dans le feedback)

class Bio201App {
    constructor() {
        // --- Constantes ---
        this.STORAGE_KEY = 'bio201_statuses';
        this.BATCH_SIZE = 20;

        // *** NOUVEAU : Référence pour l'icône et popup info BIO ***
        this.infoIconBio = document.getElementById('info-icon-bio');
        this.infoPopupBio = document.getElementById('info-popup-bio');
        
        // --- État de l'application ---
        this.questionStatuses = {};
        this.currentCategory = null;
        this.currentBatchIndex = 0;
        this.allQuestionsInCategory = [];
        this.totalBatches = 0;

        // --- Références DOM (vues principales) ---
        this.appContainer = document.getElementById('app-container');
        this.menuView = document.getElementById('menu-view');
        this.quizView = document.getElementById('quiz-view');

        // --- Références DOM (éléments du menu) ---
        this.countTodoEl = document.getElementById('count-todo');
        this.countIncorrectEl = document.getElementById('count-incorrect');
        this.countCorrectEl = document.getElementById('count-correct');
        this.menuContainerEl = this.menuView?.querySelector('.menu-container');
        this.resetBtn = document.getElementById('reset-progress');

        // --- Références DOM (éléments du quiz) ---
        this.quizTitleEl = document.getElementById('quiz-title');
        this.quizInstructionsEl = document.getElementById('quiz-instructions');
        this.quizFormEl = document.getElementById('quiz-form');
        this.quizResultsEl = document.getElementById('quiz-results');
        this.quizBackBtn = document.getElementById('quiz-backBtn');
        this.quizNextBtn = document.getElementById('quiz-nextBtn');

        // Ajoutez cette ligne avec les autres références DOM
        this.floatingBackBtn = document.getElementById('floating-back-btn');

        // --- Vérification des données externes ---
        if (typeof quizDataBio201 === 'undefined' || !Array.isArray(quizDataBio201)) {
             console.error("ERREUR CRITIQUE: quizDataBio201 n'est pas défini.");
             this.showError("Erreur critique : Impossible de charger les données des questions.");
             this._initializationFailed = true;
             return;
        }
        this.quizData = quizDataBio201;
        console.log(`Données chargées: ${this.quizData.length} questions.`);
        this._initializationFailed = false;
    }

    // --- Méthodes de Gestion de l'État --- (Inchangées)

    loadInitialState() {
        console.log("Chargement de l'état initial depuis localStorage...");
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
    }

    initializeStatuses() {
        console.log("Initialisation de tous les statuts à 'todo'.");
        this.questionStatuses = {};
        this.quizData.forEach(q => {
            if (q && q.id) {
                this.questionStatuses[q.id] = 'todo';
            }
        });
        this.saveStatuses();
    }

    synchronizeStatusesWithData() {
        let updated = false;
        const currentIds = new Set(this.quizData.map(q => q?.id).filter(id => id));

        this.quizData.forEach(q => {
            if (q && q.id && !this.questionStatuses.hasOwnProperty(q.id)) {
                console.warn(`Statut manquant pour ${q.id}, ajouté comme 'todo'.`);
                this.questionStatuses[q.id] = 'todo';
                updated = true;
            }
        });

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
        }
    }

    updateQuestionStatus(questionId, newStatus) {
        if (this.questionStatuses.hasOwnProperty(questionId)) {
            console.log(`Mise à jour statut ${questionId}: ${this.questionStatuses[questionId]} -> ${newStatus}`);
            this.questionStatuses[questionId] = newStatus;
            this.saveStatuses();
        } else {
            console.warn(`Tentative de mise à jour statut pour ID inconnu: ${questionId}`);
        }
    }

    getStatus(questionId) {
        return this.questionStatuses[questionId] || 'todo';
    }

    // --- Méthodes de Gestion des Vues --- (Inchangées)

    showView(viewToShow) {
        // Vérifie que les éléments existent (sécurité)
        if (!this.menuView || !this.quizView || !this.floatingBackBtn) return;
    
        // Masque toutes les vues et le bouton flottant par défaut
        this.menuView.classList.remove('active');
        this.quizView.classList.remove('active');
        this.floatingBackBtn.style.display = 'none'; // Caché par défaut
    
        // Active la vue demandée
        viewToShow.classList.add('active');
        console.log(`Affichage de la vue: ${viewToShow.id}`);
    
        // Affiche le bouton flottant SEULEMENT si on est dans la vue Quiz
        if (viewToShow === this.quizView) {
            this.floatingBackBtn.style.display = 'inline-block';
        }
    }

    showMenuView() {
        this.updateMenuView();
        this.showView(this.menuView);
    }

    showQuizView(category) {
        console.log(`Lancement du quiz pour la catégorie: ${category}`);
        this.currentCategory = category;
        this.currentBatchIndex = 0;
        this.filterAndPrepareQuestions();
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

    // --- Logique d'Affichage du Menu --- (Inchangée)

    updateMenuView() {
        if (!this.countTodoEl || !this.countIncorrectEl || !this.countCorrectEl) return;

        let todoCount = 0;
        let incorrectCount = 0;
        let correctCount = 0;
        Object.values(this.questionStatuses).forEach(status => {
            if (status === 'todo') todoCount++;
            else if (status === 'incorrect') incorrectCount++;
            else if (status === 'correct') correctCount++;
        });

        const totalFromStatus = todoCount + incorrectCount + correctCount;
        const totalFromData = this.quizData.length;
        if (totalFromData !== totalFromStatus && totalFromData > 0) {
             console.warn(`Incohérence compteurs menu: ${totalFromStatus} vs ${totalFromData} attendus.`);
        }

        this.countTodoEl.textContent = todoCount;
        this.countIncorrectEl.textContent = incorrectCount;
        this.countCorrectEl.textContent = correctCount;

        this.menuContainerEl?.querySelector('#category-todo')?.classList.toggle('disabled', todoCount === 0);
        this.menuContainerEl?.querySelector('#category-incorrect')?.classList.toggle('disabled', incorrectCount === 0);
        this.menuContainerEl?.querySelector('#category-correct')?.classList.toggle('disabled', correctCount === 0);


        console.log(`Compteurs menu mis à jour: T=${todoCount}, I=${incorrectCount}, C=${correctCount}`);
    }

    // --- Logique d'Affichage du Quiz --- (Inchangées sauf createQuestionHTML)

    filterAndPrepareQuestions() {
        if (typeof this.questionStatuses !== 'object' || this.questionStatuses === null) {
            console.error("ERREUR: questionStatuses invalide avant filtrage.");
            this.questionStatuses = {};
        }
        this.allQuestionsInCategory = this.quizData.filter(q => {
            if (!q || !q.id) return false;
            return this.getStatus(q.id) === this.currentCategory;
        });
        shuffleArray(this.allQuestionsInCategory);
        this.totalBatches = Math.ceil(this.allQuestionsInCategory.length / this.BATCH_SIZE);
        console.log(`Catégorie: ${this.currentCategory}, Questions filtrées: ${this.allQuestionsInCategory.length}, Lots: ${this.totalBatches}`);
    }

    displayQuizBatch() {
        if (!this.quizFormEl || !this.quizResultsEl) return;
        this.quizFormEl.innerHTML = '';
        this.quizResultsEl.textContent = '';

        const startIndex = this.currentBatchIndex * this.BATCH_SIZE;
        const endIndex = startIndex + this.BATCH_SIZE;
        const currentBatchQuestions = this.allQuestionsInCategory.slice(startIndex, endIndex);

        this.updateQuizTitleAndInstructions();

        if (currentBatchQuestions.length === 0) {
            const friendlyCategory = this.getCategoryFriendlyName(this.currentCategory);
             this.quizResultsEl.textContent = this.allQuestionsInCategory.length > 0 ? `Vous avez terminé tous les lots pour la catégorie "${friendlyCategory}" !` : `Aucune question trouvée dans la catégorie "${friendlyCategory}".`;
            if (this.quizNextBtn) this.quizNextBtn.disabled = true;
            return;
        }

        let quizHTML = '';
        currentBatchQuestions.forEach((question, index) => {
            const displayNum = startIndex + index + 1;
            quizHTML += this.createQuestionHTML(question, displayNum);
        });
        this.quizFormEl.innerHTML = quizHTML;

        // Les écouteurs pour les boutons 'Vérifier' sont gérés par délégation dans attachEventListeners

        if (this.quizNextBtn) {
            const isLastBatch = (this.currentBatchIndex + 1 >= this.totalBatches);
            this.quizNextBtn.disabled = isLastBatch;
            const currentBatchDisplay = this.totalBatches > 0 ? this.currentBatchIndex + 1 : 0;
            const totalBatchDisplay = this.totalBatches > 0 ? this.totalBatches : 0;
             this.quizNextBtn.textContent = `Suivant (Lot ${currentBatchDisplay + 1 > totalBatchDisplay ? totalBatchDisplay : currentBatchDisplay + 1}/${totalBatchDisplay})`;
             if (isLastBatch) this.quizNextBtn.textContent = "Dernier lot";
        }
    }

    updateQuizTitleAndInstructions() {
        let title = "QCM Biologie - ";
        let instruction = "";
        const totalInCategory = this.allQuestionsInCategory.length;
        title += this.getCategoryFriendlyName(this.currentCategory);

        if (this.currentCategory === 'todo') instruction = `Répondez aux questions suivantes. ${totalInCategory} questions dans cette catégorie.`;
        else if (this.currentCategory === 'incorrect') instruction = `Essayez de répondre à nouveau aux questions où vous vous êtes trompé. ${totalInCategory} questions dans cette catégorie.`;
        else if (this.currentCategory === 'correct') instruction = `Revoyez les questions que vous avez maîtrisées. ${totalInCategory} questions dans cette catégorie.`;

        if(this.quizTitleEl) this.quizTitleEl.textContent = title;
        if(this.quizInstructionsEl) this.quizInstructionsEl.textContent = instruction;
    }

     getCategoryFriendlyName(categoryKey){
         if (categoryKey === 'todo') return "À faire";
         if (categoryKey === 'incorrect') return "À revoir";
         if (categoryKey === 'correct') return "Réussies";
         return "Inconnue";
    }

    createQuestionHTML(questionData, displayIndex) { // Inchangée
         if (!questionData || !questionData.id) {
              console.error("Tentative de créer HTML pour question invalide:", questionData);
              return "<p style='color:red'>Erreur: Donnée de question invalide.</p>";
         }
         const questionId = questionData.id;
         const isVerified = false;

         let optionsHTML = '';
         if (questionData.options && Array.isArray(questionData.options)) {
            optionsHTML = questionData.options.map(option => `
                <label>
                    <input type="checkbox" name="q${questionId}_options" value="${escapeHtml(option.value)}">
                    <span>${escapeHtml(option.text)}</span>
                </label>
            `).join('');
         } else { optionsHTML = '<p>Erreur : Options non définies.</p>'; }

         const escapedReferenceText = questionData.referenceText ? escapeHtml(questionData.referenceText) : '';
         const referenceHTML = questionData.referenceCours ? `<div class="reference-cours" style="display: none;" data-reference-text="${escapedReferenceText}" data-reference-cours="${escapeHtml(questionData.referenceCours)}"></div>` : '';
         const feedbackHTML = `<div class="feedback-area"></div>`;

         return `
            <div class="question-block" id="${questionId}" data-question-id="${questionId}">
                <p>${displayIndex}. ${escapeHtml(questionData.text)}</p>
                <div class="options">
                    ${optionsHTML}
                </div>
                <button type="button" class="verify-button button button-primary" data-id="${questionId}">Vérifier</button>
                ${feedbackHTML}
                ${referenceHTML}
            </div>
        `;
    }

    // --- Logique de Vérification d'une Réponse --- (CORRIGÉE pour l'affichage du feedback)

    handleVerifyClick(event) {
        const buttonElement = event.target;
        const questionId = buttonElement.dataset.id;
        if (!questionId) return;

        const questionBlock = document.getElementById(questionId);
        if (buttonElement.disabled) return;

        const questionData = this.quizData.find(q => q.id === questionId);
        if (!questionData || !questionData.options || !questionData.correctAnswers) return;

        const userCheckboxes = questionBlock.querySelectorAll(`input[name="q${questionId}_options"]:checked`);
        const userAnswers = Array.from(userCheckboxes).map(cb => cb.value);
        const correctAnswers = questionData.correctAnswers;

        const isCorrect = userAnswers.length === correctAnswers.length &&
                           userAnswers.every(ans => correctAnswers.includes(ans));

        let newStatus = isCorrect ? 'correct' : 'incorrect';
        this.updateQuestionStatus(questionId, newStatus);

        // --- Appliquer le Feedback Visuel ---
        const feedbackElement = questionBlock.querySelector('.feedback-area');
        const referenceElement = questionBlock.querySelector('.reference-cours');
        const allLabels = questionBlock.querySelectorAll('.options label');

        feedbackElement.className = `feedback-area ${isCorrect ? 'correct' : 'incorrect'}`;
        feedbackElement.style.display = 'block';
        if (isCorrect) {
            feedbackElement.textContent = "Correct !";
        } else {
            // *** CORRECTION ICI : Ne plus échapper le texte des options pour textContent ***
            const correctOptionsText = correctAnswers.map(ans => {
                const option = questionData.options.find(opt => opt.value === ans);
                return option ? option.text : `(${ans})`; // Utilisation directe de option.text
            }).join('; ');
            feedbackElement.textContent = `Incorrect. La/les bonne(s) réponse(s) étai(en)t : ${correctOptionsText}.`;
            // *** FIN CORRECTION ***
        }

        if (referenceElement && questionData.referenceCours) {
             const refCours = questionData.referenceCours || '';
             const refText = questionData.referenceText || '';
             referenceElement.innerHTML = `<strong>Référence: ${escapeHtml(refCours)}</strong><br><pre>${escapeHtml(refText).replace(/<br>/g, '\n')}</pre>`;
             referenceElement.style.display = 'block';
        } else if (referenceElement) {
             referenceElement.style.display = 'none';
        }

        allLabels.forEach(label => {
            const checkbox = label.querySelector('input[type="checkbox"]');
            if (!checkbox) return;
            const optionValue = checkbox.value;
            const isCorrectAnswer = correctAnswers.includes(optionValue);
            const isSelected = userAnswers.includes(optionValue);

            label.classList.remove('label-correct-answer', 'label-incorrect-selected', 'label-correct-missed');
            label.classList.add('disabled-label');

            if (isCorrectAnswer) {
                 label.classList.add('label-correct-answer');
                 if (!isSelected && !isCorrect) label.classList.add('label-correct-missed');
            } else if (isSelected) {
                 label.classList.add('label-incorrect-selected');
            }
            checkbox.disabled = true;
        });

        buttonElement.disabled = true;
        questionBlock.classList.add('verified');
        questionBlock.classList.remove('correct', 'incorrect');
        questionBlock.classList.add(newStatus);
    }

    // --- Gestion des Événements --- (Inchangée)

    // --- Gestion des Événements --- (Version complète et correcte)

    attachEventListeners() {
        console.log("Attachement des écouteurs d'événements.");

        // Menu: Clic sur les catégories (délégation sur le conteneur)
        const menuContainer = this.menuView.querySelector('.menu-container'); // Cible plus précise
        menuContainer?.addEventListener('click', (event) => {
             const categoryBox = event.target.closest('.category-box');
             if (categoryBox && !categoryBox.classList.contains('disabled')) {
                 const category = categoryBox.dataset.category;
                 if (category) {
                     this.showQuizView(category);
                 }
             }
        });

        // Menu: Bouton Reset
        this.resetBtn?.addEventListener('click', () => {
            if (confirm("Êtes-vous sûr de vouloir effacer toute votre progression pour ce QCM ? Cette action est irréversible.")) {
                 console.log("Réinitialisation demandée.");
                 this.initializeStatuses();
                 this.updateMenuView();
                 alert("Progression réinitialisée.");
             }
        });

        // Quiz: Boutons de navigation (en bas)
        this.quizBackBtn?.addEventListener('click', () => this.showMenuView());
        this.quizNextBtn?.addEventListener('click', () => {
            if (!this.quizNextBtn.disabled) {
                this.currentBatchIndex++;
                console.log(`Passage au lot suivant: ${this.currentBatchIndex}`);
                this.displayQuizBatch();
            }
        });

        // Quiz: Clic sur bouton "Vérifier" (délégation sur le formulaire)
        this.quizFormEl?.addEventListener('click', (event) => {
             if (event.target.classList.contains('verify-button')) {
                 // Appeler handleVerifyClick DANS LE CONTEXTE de l'instance 'app'
                 this.handleVerifyClick(event);
             }
         });

        // Bouton flottant "Retour Menu"
        this.floatingBackBtn?.addEventListener('click', () => {
            console.log("Clic sur bouton flottant Retour Menu.");
            this.showMenuView();
        });

        // *** BLOC POUR LE POPUP INFO BIO201 (manquant dans votre version) ***
        if (this.infoIconBio && this.infoPopupBio) {
             // Affiche/Cache au clic (plus simple pour potentiellement mobile)
             this.infoIconBio.addEventListener('click', (event) => {
                 event.stopPropagation(); // Empêche la fermeture immédiate par le listener document
                 const isVisible = this.infoPopupBio.style.display === 'block';
                 // Inverse la visibilité
                 this.infoPopupBio.style.display = isVisible ? 'none' : 'block';
                 console.log(`Popup info BIO cliqué, visible: ${!isVisible}`);
             });

             // Cache si on clique ailleurs sur la page (sauf sur l'icône elle-même)
             // Utilisation de la phase de capture (true) pour intercepter le clic avant qu'il ne "bubble"
             document.addEventListener('click', (event) => {
                 // Vérifie si le popup est visible ET si le clic n'est PAS sur le popup OU sur l'icône
                 if (this.infoPopupBio.style.display === 'block' && !this.infoPopupBio.contains(event.target) && event.target !== this.infoIconBio) {
                     console.log("Clic hors popup/icône BIO, fermeture popup.");
                     this.infoPopupBio.style.display = 'none';
                 }
             }, true); // Notez le 'true' pour la phase de capture

             // Optionnel : Comportement survol pour desktop (peut être ajouté si désiré)
             // this.infoIconBio.addEventListener('mouseenter', () => { this.infoPopupBio.style.display = 'block'; });
             // this.infoIconBio.addEventListener('mouseleave', () => { setTimeout(() => { if (!this.infoPopupBio.matches(':hover')) { this.infoPopupBio.style.display = 'none'; } }, 100); });
             // this.infoPopupBio.addEventListener('mouseleave', () => { this.infoPopupBio.style.display = 'none'; });
        }
        // *** FIN BLOC POUR LE POPUP INFO BIO201 ***
    }

    // --- Initialisation de l'application --- (Inchangée)
    init() {
         console.log("Initialisation de Bio201App...");
         if (this._initializationFailed) {
             console.error("Arrêt de l'initialisation car les données des questions manquent.");
             return;
         }
         this.loadInitialState();
         this.attachEventListeners();
         this.showMenuView();
         console.log("Application initialisée.");
    }
}

// --- Démarrage de l'application --- (Inchangé)
document.addEventListener('DOMContentLoaded', () => {
    const app = new Bio201App();
    if (!app._initializationFailed) {
        app.init();
    }
});

// --- Fonctions Utilitaires Globales --- (Inchangées)
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
    if (!unsafe) return '';
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
}

