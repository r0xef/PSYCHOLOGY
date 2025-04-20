// questions_bio201.js

// ... (Collez ici TOUT le contenu de QCM-biologie.txt) ...
// const quizDataBio1 = [ ... ];
// const quizDataBio2 = [ ... ];
// const quizDataBio3 = [ ... ];
// const quizDataBio4 = [ ... ];
// --- Début des questions pour BIO201 - Partie 1 ---
const quizDataBio1 = [
  {
    id: 'bio1_q1',
    text: "Quel est l'un des objectifs principaux du cours 'Fondamentaux biologiques en psychologie' (BIO201_PSY) selon l'introduction ?",
    options: [
      { value: 'a', text: "a) Étudier uniquement les troubles mentaux et leurs bases neurales." },
      { value: 'b', text: "b) Se concentrer sur l'anatomie macroscopique du corps humain." },
      { value: 'c', text: "c) Asseoir les bases des neurosciences et de la physiologie à l'échelle cellulaire." },
      { value: 'd', text: "d) Analyser les interactions sociales d'un point de vue biologique." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part1_P2]",
    referenceText: "Cet enseignement a pour objectif d'asseoir les bases fondamentales des neurosciences et de la physiologie intégrative à l'échelle cellulaire..."
  },
  {
    id: 'bio1_q2',
    text: "Quelle est la modalité d'évaluation pour les sessions 1 et 2 de ce cours ?",
    options: [
      { value: 'a', text: "a) Un contrôle continu et un oral." },
      { value: 'b', text: "b) Uniquement un examen oral." },
      { value: 'c', text: "c) Un dossier à rendre et un QCM." },
      { value: 'd', text: "d) Un examen final écrit d'1h sous forme de QCM." }
    ],
    correctAnswers: ['d'],
    referenceCours: "[BIO201_Part1_P2]",
    referenceText: "Sessions 1 et 2: examen final (écrit-surveillé, 1h, 100%)"
  },
  {
    id: 'bio1_q3',
    text: "Pourquoi l'étude de la biologie est-elle pertinente en psychologie, selon le cours ?",
    options: [
      { value: 'a', text: "a) Parce que la biologie détermine entièrement le comportement, sans influence de l'environnement." },
      { value: 'b', text: "b) Parce que toute activité mentale ou comportement repose sur des processus biologiques sous-jacents." },
      { value: 'c', text: "c) Uniquement pour comprendre les effets des médicaments psychotropes." },
      { value: 'd', text: "d) Parce que la psychologie est une sous-discipline de la biologie." }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part1_P6]",
    referenceText: "Toute attitude, réaction, sensation, émotion, ... => processus biologiques. Comprendre les comportements grâce à l'étude des mécanismes biologiques."
  },
  {
    id: 'bio1_q4',
    text: "Comment la physiologie est-elle définie dans ce cours ?",
    options: [
      { value: 'a', text: "a) L'étude de la structure de l'organisme et de ses parties." },
      { value: 'b', text: "b) L'étude des maladies affectant le corps humain." },
      { value: 'c', text: "c) L'étude des fonctions des organismes vivants et de leurs mécanismes." },
      { value: 'd', text: "d) L'étude de l'évolution des espèces." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part1_P7]",
    referenceText: "La physiologie est l'étude des fonctions des organismes vivants... s'intéresse à la question du \"comment\" un processus donné fonctionne... description des mécanismes mis en jeu."
  },
  {
    id: 'bio1_q5',
    text: "Quelle est la différence fondamentale entre la physiologie et l'anatomie ?",
    options: [
      { value: 'a', text: "a) La physiologie étudie la structure, l'anatomie étudie la fonction." },
      { value: 'b', text: "b) La physiologie étudie la fonction ('comment'), l'anatomie étudie la structure ('quoi'/'où')." },
      { value: 'c', text: "c) Il n'y a pas de différence réelle, les termes sont interchangeables." },
      { value: 'd', text: "d) La physiologie concerne les animaux, l'anatomie concerne les plantes." }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part1_P7 & P8]",
    referenceText: "La physiologie est l'étude des fonctions... s'intéresse à la question du \"comment\"... L'anatomie est l'étude de la structure de l'organisme."
  },
  {
    id: 'bio1_q6',
    text: "Qu'étudie la physiopathologie ?",
    options: [
      { value: 'a', text: "a) Le fonctionnement normal des organes." },
      { value: 'b', text: "b) L'anatomie microscopique des tissus." },
      { value: 'c', text: "c) Les dérèglements des fonctions de l'organisme donnant lieu à une pathologie." },
      { value: 'd', text: "d) Les aspects psychologiques des maladies." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part1_P9]",
    referenceText: "Parfois, des dérèglements des éléments et des fonctions de l'organisme... peuvent donner lieu à une pathologie => physiopathologie."
  },
  {
    id: 'bio1_q7',
    text: "Qu'est-ce que la psychophysiologie ?",
    options: [
      { value: 'a', text: "a) L'étude des aspects physiologiques uniquement, sans lien avec le comportement." },
      { value: 'b', text: "b) L'étude des relations entre le comportement et l'activité physiologique." },
      { value: 'c', text: "c) Une branche de la psychiatrie." },
      { value: 'd', text: "d) L'étude de la physique appliquée à la psychologie." }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part1_P10]",
    referenceText: "La psychophysiologie s'intéresse aux rapports (relations) entre le comportement et l'activité physiologique."
  },
  {
    id: 'bio1_q8',
    text: "Dans l'étude de Levenson et al. (1990) présentée en exemple, quelle était l'hypothèse principale testée ?",
    options: [
      { value: 'a', text: "a) Que toutes les émotions produisent la même activité du système nerveux autonome." },
      { value: 'b', text: "b) Que l'activité musculaire faciale n'a aucun lien avec les émotions ressenties." },
      { value: 'c', text: "c) Que la production volontaire d'expressions faciales génère une activité du SNA spécifique à l'émotion." },
      { value: 'd', text: "d) Que seules les émotions négatives modifient le rythme cardiaque." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part1_P11]",
    referenceText: "Titre de l'étude : Voluntary Facial Action Generates Emotion-Specific Autonomic Nervous System Activity."
  },
  {
    id: 'bio1_q9',
    text: "Laquelle de ces caractéristiques N'EST PAS mentionnée comme définissant un être vivant sur le plan biologique ?",
    options: [
      { value: 'a', text: "a) Une organisation structurale (cellules)." },
      { value: 'b', text: "b) La capacité de penser consciemment." },
      { value: 'c', text: "c) La capacité d'assimilation (énergie)." },
      { value: 'd', text: "d) La capacité de reproduction." }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part1_P15-16]",
    referenceText: "Liste les caractéristiques : organisation structurale, chimique, assimilation, reproduction, fonctions de relation. La pensée consciente n'est pas listée comme critère universel du vivant à ce niveau."
  },
  {
    id: 'bio1_q10',
    text: "Quel est le niveau d'organisation biologique immédiatement supérieur au niveau cellulaire ?",
    options: [
      { value: 'a', text: "a) Le niveau chimique." },
      { value: 'b', text: "b) Le niveau des organes." },
      { value: 'c', text: "c) Le niveau tissulaire." },
      { value: 'd', text: "d) Le niveau des systèmes." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part1_P17 & P41]", // Schéma P17 et intro P41
    referenceText: "La hiérarchie est Chimique -> Cellulaire -> Tissulaire -> Organes..."
  },
  {
    id: 'bio1_q11',
    text: "Quelles sont les trois particules subatomiques fondamentales constituant un atome ?",
    options: [
      { value: 'a', text: "a) Molécules, ions, isotopes." },
      { value: 'b', text: "b) Protons, neutrons, électrons." },
      { value: 'c', text: "c) Noyau, orbites, liaisons." },
      { value: 'd', text: "d) Quarks, leptons, bosons." }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part1_P20]",
    referenceText: "Les atomes sont constitués : d'un noyau contenant des protons... et des neutrons... autour du noyau... des électrons..."
  },
  {
    id: 'bio1_q12',
    text: "Comment se forme un ion ?",
    options: [
      { value: 'a', text: "a) Par la liaison chimique de deux atomes identiques." },
      { value: 'b', text: "b) Par la désintégration radioactive du noyau." },
      { value: 'c', text: "c) Quand un atome gagne ou perd un ou plusieurs électrons." },
      { value: 'd', text: "d) Quand un atome gagne ou perd un ou plusieurs protons." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part1_P20]",
    referenceText: "Un ion est un atome électriquement chargé (qui a gagné ou perdu un ou plusieurs électrons)."
  },
  {
    id: 'bio1_q13',
    text: "Quels sont les 4 éléments chimiques constituant la plus grande part (environ 96%) du poids corporel humain ?",
    options: [
      { value: 'a', text: "a) Fer, Zinc, Cuivre, Sélénium." },
      { value: 'b', text: "b) Carbone, Hydrogène, Azote, Calcium." },
      { value: 'c', text: "c) Oxygène, Carbone, Hydrogène, Azote." },
      { value: 'd', text: "d) Sodium, Potassium, Chlore, Phosphore." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part1_P22]",
    referenceText: "Oxygène 65%, Carbone 18.5%, Hydrogène 9.5%, Azote 3.2%. Ces quatre éléments représentent la plus grande part..."
  },
  {
    id: 'bio1_q14',
    text: "Quelle molécule est le principal constituant du corps humain (60-70% du poids) et essentiel aux réactions chimiques du vivant ?",
    options: [
      { value: 'a', text: "a) Le glucose (C6H12O6)." },
      { value: 'b', text: "b) L'eau (H2O)." },
      { value: 'c', text: "c) Le dioxyde de carbone (CO2)." },
      { value: 'd', text: "d) L'hémoglobine." }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part1_P23]",
    referenceText: "L'eau (liquide)... permet les réactions chimiques du vivant... L'eau représente 60% - 70% du poids corporel, et est le principal constituant..."
  },
  {
    id: 'bio1_q15',
    text: "Quelle caractéristique définit principalement les molécules organiques ?",
    options: [
      { value: 'a', text: "a) Elles sont toujours très grandes (macromolécules)." },
      { value: 'b', text: "b) Elles contiennent généralement l'élément Carbone (C)." },
      { value: 'c', text: "c) Elles sont toujours solubles dans l'eau." },
      { value: 'd', text: "d) Elles ne contiennent que de l'Oxygène et de l'Hydrogène." }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part1_P24]",
    referenceText: "Les molécules organiques constituent les organismes vivants. Elles contiennent en général du carbone."
  },
  {
    id: 'bio1_q16',
    text: "Quels sont les 4 grands types de molécules organiques mentionnés ?",
    options: [
      { value: 'a', text: "a) Eau, Sels minéraux, Vitamines, Oligo-éléments." },
      { value: 'b', text: "b) Atomes, Ions, Isotopes, Radicaux libres." },
      { value: 'c', text: "c) Protéines, Lipides, Glucides, Acides nucléiques." },
      { value: 'd', text: "d) ADN, ARN, ATP, Enzymes." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part1_P24]",
    referenceText: "On distingue ainsi 4 grands types de molécules organiques : les protéines, les lipides, les glucides, les acides nucléiques."
  },
  {
    id: 'bio1_q17',
    text: "Quels sont les constituants de base (monomères) des protéines ?",
    options: [
      { value: 'a', text: "a) Les nucléotides." },
      { value: 'b', text: "b) Les acides gras." },
      { value: 'c', text: "c) Les monosaccharides." },
      { value: 'd', text: "d) Les acides aminés." }
    ],
    correctAnswers: ['d'],
    referenceCours: "[BIO201_Part1_P25]",
    referenceText: "Les protéines sont des macromolécules dont les constituants de base sont les acides aminés."
  },
  {
    id: 'bio1_q18',
    text: "Quelles sont les trois composantes principales de la structure générale d'un acide aminé ?",
    options: [
      { value: 'a', text: "a) Un groupe phosphate, un sucre et une base azotée." },
      { value: 'b', text: "b) Un glycérol, un acide gras et un groupe polaire." },
      { value: 'c', text: "c) Un radical amine (-NH2), un radical carboxyle (-COOH) et une chaîne latérale (R)." },
      { value: 'd', text: "d) Un atome de carbone, un atome d'oxygène et un atome d'hydrogène." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part1_P25]",
    referenceText: "Tout acide aminé est fait de 3 éléments principaux : un radical fonctionnel amine (-NH2), un radical fonctionnel carboxyle (-COOH), une chaîne latérale spécifiques R."
  },
  {
    id: 'bio1_q19',
    text: "Comment s'appelle la liaison chimique qui unit les acides aminés entre eux pour former une chaîne protéique ?",
    options: [
      { value: 'a', text: "a) Liaison hydrogène." },
      { value: 'b', text: "b) Liaison ionique." },
      { value: 'c', text: "c) Liaison peptidique." },
      { value: 'd', text: "d) Liaison glycosidique." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part1_P26]",
    referenceText: "Les AA forment des chaînes par suite de la liaison dite peptidique entre le radical amine (-NH2) d'un AA et le radical carboxyle (-COOH) d'un autre AA."
  },
  {
    id: 'bio1_q20',
    text: "Quel niveau de structure d'une protéine correspond à la séquence linéaire des acides aminés ?",
    options: [
      { value: 'a', text: "a) Structure primaire." },
      { value: 'b', text: "b) Structure secondaire." },
      { value: 'c', text: "c) Structure tertiaire." },
      { value: 'd', text: "d) Structure quaternaire." }
    ],
    correctAnswers: ['a'],
    referenceCours: "[BIO201_Part1_P27]",
    referenceText: "structure primaire: l'ordre des AA dans la chaîne (structure linéaire)."
  },
  {
    id: 'bio1_q21',
    text: "Les hélices α (alpha) et les feuillets β (bêta) sont des exemples de quel niveau de structure protéique ?",
    options: [
      { value: 'a', text: "a) Structure primaire." },
      { value: 'b', text: "b) Structure secondaire." },
      { value: 'c', text: "c) Structure tertiaire." },
      { value: 'd', text: "d) Structure quaternaire." }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part1_P27]",
    referenceText: "structure secondaire: liaisons entre ≠ parties de la protéine donnant une configuration particulière (e.g., hélices α et feuillets β)."
  },
  {
    id: 'bio1_q22',
    text: "Qu'est-ce qui détermine principalement la forme tridimensionnelle finale et la fonction d'une protéine ?",
    options: [
      { value: 'a', text: "a) Uniquement le nombre d'acides aminés." },
      { value: 'b', text: "b) La présence de lipides associés." },
      { value: 'c', text: "c) L'ordre (la séquence) des acides aminés." },
      { value: 'd', text: "d) La température de la cellule." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part1_P29]",
    referenceText: "L'ordre des acides aminés détermine: la forme de la molécule [et] sa fonction."
  },
  {
    id: 'bio1_q23',
    text: "Laquelle de ces fonctions N'EST PAS citée comme un rôle des protéines ?",
    options: [
      { value: 'a', text: "a) Catalyse de réactions chimiques (enzymes)." },
      { value: 'b', text: "b) Stockage principal de l'information génétique." },
      { value: 'c', text: "c) Transport de molécules (ex: oxygène)." },
      { value: 'd', text: "d) Contraction musculaire (actine/myosine)." }
    ],
    correctAnswers: ['b'], // C'est le rôle des acides nucléiques (ADN/ARN)
    referenceCours: "[BIO201_Part1_P28 & P24]",
    referenceText: "Liste les fonctions: enzymatiques, structurales, transport, hormonales, récepteurs, motrices. Les acides nucléiques sont porteurs de l'info génétique (P1 Part2, mais mentionné P24 Part1)."
  },
   {
    id: 'bio1_q24',
    text: "Quelle est la caractéristique commune définissant les lipides ?",
    options: [
      { value: 'a', text: "a) Ils sont tous composés d'acides aminés." },
      { value: 'b', text: "b) Ils sont insolubles dans l'eau (hydrophobes)." },
      { value: 'c', text: "c) Ils sont la principale source d'énergie rapide pour la cellule." },
      { value: 'd', text: "d) Ils portent l'information génétique." }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part1_P30]",
    referenceText: "caractéristique commune: substances insolubles dans l'eau mais solubles dans les liquides tels que l'alcool => substances cireuses, grasses ou huileuses. Les propriétés hydrophobes..."
  },
  {
    id: 'bio1_q25',
    text: "Quel type de lipide est le principal constituant de la bicouche des membranes plasmiques ?",
    options: [
      { value: 'a', text: "a) Les triglycérides." },
      { value: 'b', text: "b) Les stéroïdes (comme le cholestérol)." },
      { value: 'c', text: "c) Les acides gras saturés uniquement." },
      { value: 'd', text: "d) Les phospholipides." }
    ],
    correctAnswers: ['d'],
    referenceCours: "[BIO201_Part1_P30 & P33]",
    referenceText: "Les propriétés hydrophobes des lipides confèrent... rôle structural fondamental, notamment au niveau de la membrane plasmique... Ceux contenant de l'acide phosphorique sont appelés phospholipides => constituants des membranes cellulaires."
  },
  {
    id: 'bio1_q26',
    text: "Comment appelle-t-on un acide gras qui ne possède aucune double liaison carbone-carbone dans sa chaîne ?",
    options: [
      { value: 'a', text: "a) Acide gras polyinsaturé." },
      { value: 'b', text: "b) Acide gras essentiel." },
      { value: 'c', text: "c) Acide gras saturé." },
      { value: 'd', text: "d) Acide gras monoinsaturé." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part1_P31]",
    referenceText: "acides gras saturés: tous les espaces libres sur les atomes C sont occupés par des atomes H [pas de double liaison C=C implicite]."
  },
   {
    id: 'bio1_q27',
    text: "Quelle est la fonction principale des triglycérides dans l'organisme ?",
    options: [
      { value: 'a', text: "a) Constituer les membranes cellulaires." },
      { value: 'b', text: "b) Agir comme enzymes." },
      { value: 'c', text: "c) Servir de réserve d'énergie." },
      { value: 'd', text: "d) Transporter l'oxygène dans le sang." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part1_P32]",
    referenceText: "Triglycérides... Rôle fondamental de réserve d'énergie dans les cellules adipeuses."
  },
  {
    id: 'bio1_q28',
    text: "Le cholestérol appartient à quelle catégorie de lipides ?",
    options: [
      { value: 'a', text: "a) Acides gras." },
      { value: 'b', text: "b) Triglycérides." },
      { value: 'c', text: "c) Phospholipides." },
      { value: 'd', text: "d) Stéroïdes (lipides complexes)." }
    ],
    correctAnswers: ['d'],
    referenceCours: "[BIO201_Part1_P33]",
    referenceText: "...certains lipides complexes constituent la famille des stéroïdes (e.g., Cholestérol)..."
  },
  {
    id: 'bio1_q29',
    text: "Comment appelle-t-on les glucides les plus simples, constitués d'une seule unité de sucre ?",
    options: [
      { value: 'a', text: "a) Polysaccharides." },
      { value: 'b', text: "b) Disaccharides." },
      { value: 'c', text: "c) Monosaccharides (ou oses)." },
      { value: 'd', text: "d) Oligosaccharides." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part1_P34]",
    referenceText: "Les glucides les plus simples sont les monosaccharides (ou sucres élémentaires) => 1 seule molécule saccharide (ou ose...)."
  },
  {
    id: 'bio1_q30',
    text: "Quel est le rôle principal du glucose dans l'organisme ?",
    options: [
      { value: 'a', text: "a) Stockage de l'information génétique." },
      { value: 'b', text: "b) Principal composant structural des muscles." },
      { value: 'c', text: "c) Principale source d'énergie pour les cellules." },
      { value: 'd', text: "d) Catalyser les réactions chimiques." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part1_P34]",
    referenceText: "Principaux rôles [des monosaccharides] ... source d'énergie (e.g., le glucose)."
  },
  {
    id: 'bio1_q31',
    text: "Comment s'appelle le polysaccharide qui sert de forme de stockage du glucose chez les animaux ?",
    options: [
      { value: 'a', text: "a) L'amidon." },
      { value: 'b', text: "b) La cellulose." },
      { value: 'c', text: "c) Le glycogène." },
      { value: 'd', text: "d) Le lactose." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part1_P35]",
    referenceText: "Les polysaccharides... e.g., le glycogène... => le glycogène constitue le stock de glucides dans le règne animal."
  },
  {
    id: 'bio1_q32',
    text: "Quel polysaccharide est un composant structural majeur des parois des cellules végétales ?",
    options: [
      { value: 'a', text: "a) Le glycogène." },
      { value: 'b', text: "b) L'amidon." },
      { value: 'c', text: "c) Le sucrose." },
      { value: 'd', text: "d) La cellulose." }
    ],
    correctAnswers: ['d'],
    referenceCours: "[BIO201_Part1_P35]",
    referenceText: "Les polysaccharides... e.g., ..., la cellulose => la cellulose est un glucide de structure des végétaux."
  },
  {
    id: 'bio1_q33',
    text: "Le sucrose (sucre de table) est un disaccharide formé par la liaison de quels deux monosaccharides ?",
    options: [
      { value: 'a', text: "a) Glucose + Glucose." },
      { value: 'b', text: "b) Glucose + Fructose." },
      { value: 'c', text: "c) Glucose + Galactose." },
      { value: 'd', text: "d) Fructose + Fructose." }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part1_P35]",
    referenceText: "Les disaccharides... e.g., le sucrose... => Le sucrose : glucose + fructose."
  },
  {
    id: 'bio1_q34',
    text: "Quel monosaccharide est un constituant essentiel des nucléotides (comme dans l'ARN) ?",
    options: [
      { value: 'a', text: "a) Le glucose." },
      { value: 'b', text: "b) Le fructose." },
      { value: 'c', text: "c) Le galactose." },
      { value: 'd', text: "d) Le ribose." }
    ],
    correctAnswers: ['d'],
    referenceCours: "[BIO201_Part1_P34]",
    referenceText: "Principaux rôles [des monosaccharides] : éléments constitutifs des nucléotides (e.g., le ribose)."
  },
   {
    id: 'bio1_q35',
    text: "Parmi les 4 grands types de molécules organiques, lequel est mentionné comme étant le porteur principal de l'information génétique (même si détaillé plus tard) ?",
    options: [
      { value: 'a', text: "a) Les protéines." },
      { value: 'b', text: "b) Les lipides." },
      { value: 'c', text: "c) Les glucides." },
      { value: 'd', text: "d) Les acides nucléiques." }
    ],
    correctAnswers: ['d'],
    referenceCours: "[BIO201_Part1_P24 & BIO201_Part2_P1]", // Mentionné P24 Part1, défini P1 Part2
    referenceText: "On distingue ainsi 4 grands types de molécules organiques : ..., les acides nucléiques. [Part2 P1: Les acides nucléiques sont des macromolécules porteuses de l'information génétique]."
  },
  {
    id: 'bio1_q36',
    text: "Lequel de ces termes décrit le mieux le niveau d'étude de la physiologie qui s'intéresse à l'organisme entier ?",
    options: [
      { value: 'a', text: "a) Physiologie moléculaire." },
      { value: 'b', text: "b) Physiopathologie." },
      { value: 'c', text: "c) Physiologie intégrée." },
      { value: 'd', text: "d) Anatomie." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part1_P9]",
    referenceText: "physiologie moléculaire (molécule...) vs physiologie intégrée (organisme entier...)"
  },
  {
    id: 'bio1_q37',
    text: "Quel principe fondamental relie la structure et la fonction en biologie ?",
    options: [
      { value: 'a', text: "a) La structure détermine toujours la fonction, mais la fonction n'influence jamais la structure." },
      { value: 'b', text: "b) La fonction détermine toujours la structure, mais la structure n'influence jamais la fonction." },
      { value: 'c', text: "c) La structure et la fonction sont interdépendantes et inséparables." },
      { value: 'd', text: "d) La structure et la fonction sont étudiées par des disciplines totalement séparées." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part1_P8]",
    referenceText: "La physiologie et l'anatomie sont donc deux disciplines étroitement liées => la structure et la fonction sont inséparables."
  },
];
  // Fin des questions pour BIO201 - Partie 1 (Total: 37 questions générées)

  // --- Début des questions pour BIO201 - Partie 2 ---
const quizDataBio2 = [
  // Acides nucléiques (début P1)
  {
    id: 'bio2_q1',
    text: "Quels sont les deux grands types d'acides nucléiques, porteurs de l'information génétique ?",
    options: [
      { value: 'a', text: "a) Protéines et Lipides" },
      { value: 'b', text: "b) ARN (acide ribonucléique) et ADN (acide désoxyribonucléique)" },
      { value: 'c', text: "c) ATP (adénosine triphosphate) et ADP (adénosine diphosphate)" },
      { value: 'd', text: "d) Acides aminés et Acides gras" }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part2_P1]",
    referenceText: "Deux grands types : l'acide ribonucléique (ARN) et l'acide désoxyribonucléique (ADN)."
  },
  {
    id: 'bio2_q2',
    text: "De quelles trois composantes est formé un nucléotide, l'unité de base des acides nucléiques ?", // Question à 3 réponses justes (1/12)
    options: [
      { value: 'a', text: "a) Une base azotée organique" },
      { value: 'b', text: "b) Un acide aminé" },
      { value: 'c', text: "c) Un groupement phosphate (acide phosphorique)" },
      { value: 'd', text: "d) Un sucre (désoxyribose ou ribose)" }
    ],
    correctAnswers: ['a', 'c', 'd'],
    referenceCours: "[BIO201_Part2_P1]",
    referenceText: "Un nucléotide: une base organique + un sucre + l'acide phosphorique."
  },
  // La cellule : Introduction (P3-7)
  {
    id: 'bio2_q3',
    text: "Quelle est la différence fondamentale entre une cellule procaryote et une cellule eucaryote ?",
    options: [
      { value: 'a', text: "a) La taille de la cellule." },
      { value: 'b', text: "b) La présence ou l'absence d'une membrane plasmique." },
      { value: 'c', text: "c) La présence ou l'absence d'un noyau délimité contenant l'ADN." },
      { value: 'd', text: "d) Le type de ribosomes présents." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part2_P3]",
    referenceText: "Deux principaux types cellulaires en fonction de la présence (ou non) d'un noyau délimité... procaryotes: Pas de noyau... eucaryotes: ADN contenu dans le noyau..."
  },
  {
    id: 'bio2_q4',
    text: "Laquelle de ces affirmations concernant la taille des cellules est correcte ?",
    options: [
      { value: 'a', text: "a) Une cellule humaine typique mesure environ 1 millimètre." },
      { value: 'b', text: "b) Les cellules sont généralement visibles à l'œil nu." },
      { value: 'c', text: "c) La taille des cellules animales varie énormément en fonction de la taille de l'organisme." },
      { value: 'd', text: "d) Une cellule humaine typique mesure entre 10 et 20 micromètres (µm) et nécessite un microscope pour être vue." }
    ],
    correctAnswers: ['d'],
    referenceCours: "[BIO201_Part2_P4]",
    referenceText: "Taille typique d'une cellule humaine : 10-20 µm de diamètre. Une cellule n'est pas visible à l'œil nu => microscope optique. Dans le règne animal... taille relativement constante."
  },
  {
    id: 'bio2_q5',
    text: "Concernant le nombre de cellules dans un corps humain adulte (70kg), quelles affirmations sont correctes ? (Choisissez toutes les réponses applicables)", // Question à 2 réponses justes (1/15)
    options: [
      { value: 'a', text: "a) Il y a environ 30 000 milliards (30x10^12) de cellules humaines." },
      { value: 'b', text: "b) Les bactéries présentes sont beaucoup plus nombreuses que les cellules humaines." },
      { value: 'c', text: "c) Les bactéries représentent la majorité de la masse cellulaire du corps." },
      { value: 'd', text: "d) Le nombre de bactéries est comparable au nombre de cellules humaines (~38x10^12)." }
    ],
    correctAnswers: ['a', 'd'],
    referenceCours: "[BIO201_Part2_P5]",
    referenceText: "3.0x10^13 c = 30 000 milliards de cellules humaines... ratio [cellules humaines / bactéries] comparable => 3.8x10^13 de bactéries (mais 0.2 kg soit 0.3% du poids total)."
  },
  {
    id: 'bio2_q6',
    text: "Qu'est-ce qu'une cellule totipotente ?",
    options: [
      { value: 'a', text: "a) Une cellule capable de se différencier uniquement en cellules nerveuses." },
      { value: 'b', text: "b) Une cellule souche adulte déjà partiellement différenciée." },
      { value: 'c', text: "c) Une cellule (comme la cellule œuf) capable de donner naissance à tous les types de cellules d'un organisme, y compris les annexes embryonnaires." },
      { value: 'd', text: "d) Une cellule qui ne peut plus se diviser." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part2_P6]",
    referenceText: "Toutes les cellules de l'organisme proviennent de la cellule œuf (dite totipotente)... Gradient de potentialité..." // Totipotence est le potentiel maximal.
  },
  {
    id: 'bio2_q7',
    text: "Quelle est la différence entre une cellule souche pluripotente et une cellule souche multipotente ?", // Question à 2 réponses justes (2/15)
    options: [
      { value: 'a', text: "a) Les pluripotentes peuvent donner tous les types cellulaires de l'organisme, les multipotentes ont un potentiel plus limité." },
      { value: 'b', text: "b) Les multipotentes sont typiquement embryonnaires, les pluripotentes sont typiquement adultes." },
      { value: 'c', text: "c) Les multipotentes sont déjà engagées dans certaines voies de différenciation." },
      { value: 'd', text: "d) Il n'y a pas de différence fonctionnelle entre les deux." }
    ],
    correctAnswers: ['a', 'c'],
    referenceCours: "[BIO201_Part2_P6]",
    referenceText: "Les cellules souches pluripotentes peuvent se différencier en n'importe quel type de cellules de l'organisme... Les cellules souches multipotentes sont déjà partiellement engagées dans des voies de différenciation, limitant la variété..."
  },
  {
    id: 'bio2_q8',
    text: "Quels sont les 4 principaux types (catégories fonctionnelles) de cellules/tissus mentionnés dans le cours ?", // Question à 3 réponses justes (2/12)
    options: [
      { value: 'a', text: "a) Cellules épithéliales" },
      { value: 'b', text: "b) Cellules souches" },
      { value: 'c', text: "c) Cellules nerveuses" },
      { value: 'd', text: "d) Cellules musculaires" },
      { value: 'e', text: "e) Cellules du tissu conjonctif" }
    ],
    correctAnswers: ['a', 'c', 'd', 'e'], // Oups, il y en a 4 à choisir. Changeons la question ou les options. Modifions pour en choisir 3 sur 4.
    // Re-formulation :
    text: "Parmi les catégories fonctionnelles de cellules suivantes, lesquelles sont considérées comme les principaux types de tissus ?", // Question à 3 réponses justes (2/12)
    options: [
      { value: 'a', text: "a) Cellules épithéliales" },
      { value: 'b', text: "b) Cellules adipeuses (adipocytes)" }, // C'est un type de tissu conjonctif
      { value: 'c', text: "c) Cellules nerveuses" },
      { value: 'd', text: "d) Cellules musculaires" }
    ],
    correctAnswers: ['a', 'c', 'd'], // Les 4 types sont Epithélial, Conjonctif, Musculaire, Nerveux. b) est un exemple de conjonctif.
    referenceCours: "[BIO201_Part2_P7]",
    referenceText: "Sur la base de leur fonction, on peut identifier 4 principales catégories : les cellules épithéliales, les cellules du tissu conjonctif, les cellules musculaires, les cellules nerveuses."
  },

  // Structure Cellulaire (P10-13)
  {
    id: 'bio2_q9',
    text: "Quelles sont les trois subdivisions principales d'une cellule eucaryote typique ?",
    options: [
      { value: 'a', text: "a) Mitochondrie, Ribosome, Lysosome" },
      { value: 'b', text: "b) Membrane plasmique, Noyau, Cytoplasme" },
      { value: 'c', text: "c) ADN, ARN, Protéines" },
      { value: 'd', text: "d) Cytosol, Organites, Inclusions" }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part2_P10]",
    referenceText: "Généralement, on retrouve trois principales subdivisions : la membrane plasmique, le noyau, le cytoplasme."
  },
  {
    id: 'bio2_q10',
    text: "Quelle structure délimite la cellule et sépare le liquide intracellulaire (LIC) du liquide extracellulaire (LEC) ?",
    options: [
      { value: 'a', text: "a) L'enveloppe nucléaire" },
      { value: 'b', text: "b) Le cytosquelette" },
      { value: 'c', text: "c) La membrane plasmique" },
      { value: 'd', text: "d) La paroi cellulaire (chez les animaux)" } // Paroi cellulaire existe chez plantes/bactéries, pas animaux
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part2_P10 & P11]",
    referenceText: "membrane plasmique => enveloppe la cellule (délimitation externe)... sépare le contenu de la cellule de l'environnement... On distingue ainsi les liquides intracellulaire (LIC) et extracellulaire (LEC)."
  },
  {
    id: 'bio2_q11',
    text: "Où se trouve le matériel génétique (ADN) dans une cellule eucaryote ?",
    options: [
      { value: 'a', text: "a) Librement dans le cytoplasme" },
      { value: 'b', text: "b) Dans les mitochondries uniquement" },
      { value: 'c', text: "c) Dans le noyau" },
      { value: 'd', text: "d) Attaché à la membrane plasmique" }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part2_P10 & P12]",
    referenceText: "noyau => contient le matériel génétique (ADN)... Le noyau contient le matériel génétique i.e., ADN."
  },
  {
    id: 'bio2_q12',
    text: "Qu'est-ce que le cytoplasme ?",
    options: [
      { value: 'a', text: "a) Uniquement le liquide aqueux (cytosol) de la cellule." },
      { value: 'b', text: "b) Uniquement l'ensemble des organites de la cellule." },
      { value: 'c', text: "c) Le contenu de la cellule situé à l'extérieur du noyau (cytosol + organites)." },
      { value: 'd', text: "d) L'intérieur du noyau." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part2_P10 & P13]",
    referenceText: "cytoplasme => le compartiment cellulaire non occupé par le noyau... Le cytoplasme se défini comme le contenu de la cellule en dehors du noyau. Il contient... les organites qui baignent dans... le cytosol."
  },

  // Fonctions cellulaires (P15-16)
  {
    id: 'bio2_q13',
    text: "Parmi les suivantes, lesquelles sont considérées comme des fonctions de base communes à la plupart des cellules ? (Choisissez toutes les réponses applicables)", // Question à 3 réponses justes (3/12)
    options: [
      { value: 'a', text: "a) Obtenir des nutriments et de l'oxygène." },
      { value: 'b', text: "b) Produire de l'énergie via des réactions chimiques." },
      { value: 'c', text: "c) Contracter et produire de la force." }, // Fonction spécialisée (muscles)
      { value: 'd', text: "d) Éliminer les déchets." },
      { value: 'e', text: "e) Synthétiser les protéines nécessaires." }
    ],
    correctAnswers: ['a', 'b', 'd', 'e'], // Il y en a 4 ici. Modifions la question.
    // Re-formulation :
    text: "Parmi les suivantes, lesquelles sont considérées comme des fonctions de base communes à la plupart des cellules ?", // Question à 3 réponses justes (3/12)
    options: [
      { value: 'a', text: "a) Obtenir des nutriments et de l'oxygène." },
      { value: 'b', text: "b) Produire de l'énergie via des réactions chimiques." },
      { value: 'c', text: "c) Générer des potentiels d'action." }, // Fonction spécialisée (neurones)
      { value: 'd', text: "d) Synthétiser les protéines et autres substances nécessaires." }
    ],
    correctAnswers: ['a', 'b', 'd'],
    referenceCours: "[BIO201_Part2_P15]",
    referenceText: "Liste les fonctions de base : Obtenir nutriments/O2, Réaliser réactions chimiques (énergie), Eliminer déchets, Synthétiser protéines, Transporter molécules, Contrôler échanges, Réagir environnement, Se reproduire."
  },
  {
    id: 'bio2_q14',
    text: "Quelle est la différence entre les fonctions de base et les fonctions spécialisées des cellules ?",
    options: [
      { value: 'a', text: "a) Les fonctions de base assurent la survie de l'organisme, les spécialisées assurent la survie de la cellule." },
      { value: 'b', text: "b) Les fonctions de base sont présentes dans toutes les cellules et assurent leur survie, les spécialisées varient et contribuent à la survie de l'organisme." },
      { value: 'c', text: "c) Les fonctions de base ne nécessitent pas d'organites, les spécialisées si." },
      { value: 'd', text: "d) Il n'y a pas de distinction claire entre les deux." }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part2_P16]",
    referenceText: "Les fonctions de base sont observables dans toutes les cellules => elles sont indispensables à la survie de la cellule... ces fonctions spécialisées sont indispensables à la survie de l'organisme."
  },

  // Organites (P17-31)
  {
    id: 'bio2_q15',
    text: "Quel organite est principalement responsable de la synthèse des protéines en lisant l'information de l'ARNm ?",
    options: [
      { value: 'a', text: "a) La mitochondrie" },
      { value: 'b', text: "b) Le lysosome" },
      { value: 'c', text: "c) L'appareil de Golgi" },
      { value: 'd', text: "d) Le ribosome" }
    ],
    correctAnswers: ['d'],
    referenceCours: "[BIO201_Part2_P18]",
    referenceText: "Principale fonction [des ribosomes] : synthèse de la chaine protéique à partir de l'information génétique => assemblage des AA... dépend de la séquence de l'ARNm."
  },
  {
    id: 'bio2_q16',
    text: "Où trouve-t-on les ribosomes dans une cellule eucaryote ?", // Question à 2 réponses justes (3/15)
    options: [
      { value: 'a', text: "a) Uniquement libres dans le cytoplasme." },
      { value: 'b', text: "b) Libres dans le cytoplasme." },
      { value: 'c', text: "c) Attachés à la surface du réticulum endoplasmique granuleux (REG)." },
      { value: 'd', text: "d) Uniquement à l'intérieur du noyau." }
    ],
    correctAnswers: ['b', 'c'],
    referenceCours: "[BIO201_Part2_P18]",
    referenceText: "Localisation : libre dans le cytoplasme [ET] à la surface du réticulum endoplasmique granuleux."
  },
  {
    id: 'bio2_q17',
    text: "Quelle est la principale différence structurelle entre le Réticulum Endoplasmique Rugueux (REG) et Lisse (REL) ?",
    options: [
      { value: 'a', text: "a) Le REG est fait de tubules, le REL est fait de sacs." },
      { value: 'b', text: "b) Le REG est proche du noyau, le REL est proche de la membrane." },
      { value: 'c', text: "c) Le REG possède des ribosomes attachés à sa surface, le REL n'en a pas." },
      { value: 'd', text: "d) Le REG synthétise les lipides, le REL synthétise les protéines." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part2_P20]",
    referenceText: "le réticulum endoplasmique granuleux (REG) qui comporte des ribosomes - le réticulum endoplasmique lisse (REL)... REG and REL sont en continuité..."
  },
  {
    id: 'bio2_q18',
    text: "Quelles sont les fonctions associées au Réticulum Endoplasmique Rugueux (REG) ?", // Question à 2 réponses justes (4/15)
    options: [
      { value: 'a', text: "a) Assemblage des lipides membranaires pour former des membranes plasmiques." }, // Fonction du REL
      { value: 'b', text: "b) Synthèse des protéines destinées à l'exportation ou aux membranes." },
      { value: 'c', text: "c) Production d'ATP par respiration." }, // Fonction mitochondrie
      { value: 'd', text: "d) Repliement et modifications (ex: glycosylation) des protéines synthétisées." }
    ],
    correctAnswers: ['b', 'd'],
    referenceCours: "[BIO201_Part2_P21]",
    referenceText: "Le réticulum endoplasmique granuleux (REG), avec les ribosomes... fonction de synthétiser une grande variété de protéines... Ces protéines sont : repliées en 3D... enrichies en sucres..."
  },
  {
    id: 'bio2_q19',
    text: "Quelles sont les fonctions associées au Réticulum Endoplasmique Lisse (REL) ? (Choisissez toutes les réponses applicables)", // Question à 3 réponses justes (4/12)
    options: [
      { value: 'a', text: "a) Synthèse de la plupart des protéines cellulaires." }, // Fonction du REG/ribosomes libres
      { value: 'b', text: "b) Synthèse des lipides (ex: pour les membranes)." },
      { value: 'c', text: "c) Stockage du calcium intracellulaire." },
      { value: 'd', text: "d) Conditionnement et transport des protéines via des vésicules vers Golgi." },
      { value: 'e', text: "e) Détoxification de produits chimiques." }
    ],
    correctAnswers: ['b', 'c', 'd', 'e'], // 4 réponses ici. Modifions.
    // Re-formulation :
    text: "Quelles sont les fonctions associées au Réticulum Endoplasmique Lisse (REL) ?", // Question à 3 réponses justes (4/12)
    options: [
      { value: 'a', text: "a) Traduction de l'ARNm en protéine." }, // Ribosomes
      { value: 'b', text: "b) Synthèse des lipides membranaires." },
      { value: 'c', text: "c) Stockage du calcium intracellulaire." },
      { value: 'd', text: "d) Détoxification de produits chimiques." }
    ],
    correctAnswers: ['b', 'c', 'd'],
    referenceCours: "[BIO201_Part2_P20 & P21]",
    referenceText: "REL... ces lipides sont assemblés pour former des membranes plasmiques. REL est également le lieu de conditionnement... forment ainsi des vésicules de transport... Autres fonctions [du RE, souvent associées au REL]: stockage du calcium intracellulaire, détoxification..."
  },
  {
    id: 'bio2_q20',
    text: "Quelle est la structure caractéristique de l'appareil de Golgi ?",
    options: [
      { value: 'a', text: "a) Un réseau de tubules interconnectés." }, // REL
      { value: 'b', text: "b) Un ensemble de ribosomes libres." },
      { value: 'c', text: "c) Un empilement de sacs aplatis (saccules) non connectés directement." },
      { value: 'd', text: "d) Une grande vésicule contenant des enzymes digestives." } // Lysosome
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part2_P23]",
    referenceText: "Structure : empilement de sacs aplatis ou saccules membranaires... Les saccules ne sont pas en continuité les uns avec les autres."
  },
  {
    id: 'bio2_q21',
    text: "Quelles sont les fonctions principales de l'appareil de Golgi ?", // Question à 2 réponses justes (5/15)
    options: [
      { value: 'a', text: "a) Synthèse initiale des protéines." }, // Ribosomes/REG
      { value: 'b', text: "b) Transformation et finalisation des protéines venant du RE (ex: modifications de sucres)." },
      { value: 'c', text: "c) Production d'énergie (ATP)." }, // Mitochondries
      { value: 'd', text: "d) Tri et adressage des protéines vers leur destination finale via des vésicules." }
    ],
    correctAnswers: ['b', 'd'],
    referenceCours: "[BIO201_Part2_P23 & P24]",
    referenceText: "Principales fonctions : transformation/finalisation des protéines issues du RE... tri/adressage des produits finis vers leur destination finale."
  },
  {
    id: 'bio2_q22',
    text: "Quel organite fonctionne comme le 'système digestif' de la cellule, éliminant les débris et matériaux étrangers grâce à des enzymes hydrolytiques ?",
    options: [
      { value: 'a', text: "a) Le peroxysome" },
      { value: 'b', text: "b) La mitochondrie" },
      { value: 'c', text: "c) Le lysosome" },
      { value: 'd', text: "d) Le ribosome" }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part2_P27]",
    referenceText: "Lysosome... contenant de puissantes enzymes capables de scinder des molécules... Principale fonction : élimination des débris cellulaires et autres matériaux étrangers i.e., \"système digestif de la C\" => enzymes hydrolytiques..."
  },
  {
    id: 'bio2_q23',
    text: "Quelle est la fonction principale des peroxysomes ?",
    options: [
      { value: 'a', text: "a) La synthèse des protéines." },
      { value: 'b', text: "b) La production d'ATP." },
      { value: 'c', text: "c) La détoxification cellulaire via des enzymes oxydantes." },
      { value: 'd', text: "d) Le stockage de l'information génétique." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part2_P29]",
    referenceText: "Peroxysomes... Principale fonction : détoxication cellulaire... => enzymes oxydants utilisant l'oxygène (O2) pour enlever l'hydrogène..."
  },
  {
    id: 'bio2_q24',
    text: "Quel organite est considéré comme la 'centrale énergétique' de la cellule, responsable de la production d'ATP par respiration cellulaire ?",
    options: [
      { value: 'a', text: "a) Le noyau" },
      { value: 'b', text: "b) L'appareil de Golgi" },
      { value: 'c', text: "c) Le réticulum endoplasmique" },
      { value: 'd', text: "d) La mitochondrie" }
    ],
    correctAnswers: ['d'],
    referenceCours: "[BIO201_Part2_P31]",
    referenceText: "Mitochondries... Principales fonctions : production énergétique de la C => fournisseur d'ATP (via respiration cellulaire)."
  },
  {
    id: 'bio2_q25',
    text: "La membrane plasmique est principalement composée de :",
    options: [
      { value: 'a', text: "a) Une simple couche de phospholipides." },
      { value: 'b', text: "b) Une double couche (bicouche) de phospholipides avec des protéines insérées." },
      { value: 'c', text: "c) Uniquement de protéines et de glucides." },
      { value: 'd', text: "d) D'acides nucléiques formant une barrière." }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part2_P32]",
    referenceText: "Composition: lipides => phospholipides formant une double couche; protéines => insérées dans cette double couche; glucides => sur la face externe."
  },
  {
    id: 'bio2_q26',
    text: "Comment sont orientées les molécules de phospholipides dans la bicouche membranaire ?",
    options: [
      { value: 'a', text: "a) Les têtes hydrophobes vers l'extérieur et l'intérieur (aqueux), les queues hydrophiles vers le centre." },
      { value: 'b', text: "b) Toutes les têtes d'un côté, toutes les queues de l'autre." },
      { value: 'c', text: "c) Les têtes hydrophiles vers l'extérieur et l'intérieur (aqueux), les queues hydrophobes vers le centre." },
      { value: 'd', text: "d) De manière aléatoire." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part2_P33]",
    referenceText: "Les têtes hydrophiles (polaires) sont capables d'interagir avec les molécules d'eau... Les queues hydrophobes (non-polaires) repoussent l'eau... s'assemblent... en une double couche... Têtes polaires, hydrophiles [vers LEC/LIC] Queues non polaires, hydrophobes [vers l'intérieur]."
  },
  {
    id: 'bio2_q27',
    text: "Parmi les fonctions suivantes, lesquelles peuvent être assurées par des protéines membranaires ? (Choisissez toutes les réponses applicables)", // Question à 3 réponses justes (5/12)
    options: [
      { value: 'a', text: "a) Former des canaux pour le passage d'ions." },
      { value: 'b', text: "b) Transporter activement des molécules contre leur gradient." },
      { value: 'c', text: "c) Stocker l'énergie sous forme d'ATP." }, // Mitochondries
      { value: 'd', text: "d) Servir de récepteurs pour des molécules signal." },
      { value: 'e', text: "e) Assurer l'adhérence entre cellules (CAMs)." }
    ],
    correctAnswers: ['a', 'b', 'd', 'e'], // Encore 4. Modifions.
    // Re-formulation :
    text: "Parmi les fonctions suivantes, lesquelles peuvent être assurées par des protéines membranaires ?", // Question à 3 réponses justes (5/12)
    options: [
      { value: 'a', text: "a) Former des canaux ioniques." },
      { value: 'b', text: "b) Synthétiser des lipides." }, // REL
      { value: 'c', text: "c) Agir comme récepteurs de surface." },
      { value: 'd', text: "d) Catalyser certaines réactions (enzymes membranaires)." }
    ],
    correctAnswers: ['a', 'c', 'd'],
    referenceCours: "[BIO201_Part2_P34]",
    referenceText: "Liste des fonctions: canaux, transporteurs, accepteurs marqueurs accostage, enzymatiques membranaires, récepteurs, adhérence (CAM), reconnaissance."
  },
  {
    id: 'bio2_q28',
    text: "Quels sont les trois principaux types de filaments constituant le cytosquelette, classés du plus épais au plus fin ?",
    options: [
      { value: 'a', text: "a) Microfilaments > Filaments intermédiaires > Microtubules" },
      { value: 'b', text: "b) Microtubules > Microfilaments > Filaments intermédiaires" },
      { value: 'c', text: "c) Microtubules > Filaments intermédiaires > Microfilaments" },
      { value: 'd', text: "d) Filaments intermédiaires > Microtubules > Microfilaments" }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part2_P36]",
    referenceText: "Sous-parties : les microtubules (les plus épais), les microfilaments (les plus fins), les filaments intermédiaires." // Implique Microtubules > Intermédiaires > Microfilaments.
  },
  {
    id: 'bio2_q29',
    text: "De quelles protéines sont principalement constitués respectivement les microtubules et les microfilaments ?", // Question à 2 réponses justes (6/15)
    options: [
      { value: 'a', text: "a) Microtubules: Kératine / Microfilaments: Tubuline" },
      { value: 'b', text: "b) Microtubules: Actine / Microfilaments: Tubuline" },
      { value: 'c', text: "c) Microtubules: Tubuline / Microfilaments: Actine" },
      { value: 'd', text: "d) Microtubules: Actine / Microfilaments: Kératine" }
    ],
    correctAnswers: ['c'], // L'option C contient les deux bonnes associations. C'est une question à 1 réponse juste mais qui teste 2 notions. Changeons pour 2 réponses justes.
    // Re-formulation :
    text: "De quelles protéines sont principalement constitués les microtubules et les microfilaments ? (Choisissez les 2 bonnes associations)", // Question à 2 réponses justes (6/15)
    options: [
      { value: 'a', text: "a) Les microtubules sont faits de tubuline." },
      { value: 'b', text: "b) Les microfilaments sont faits de tubuline." },
      { value: 'c', text: "c) Les microtubules sont faits d'actine." },
      { value: 'd', text: "d) Les microfilaments sont faits d'actine." }
    ],
    correctAnswers: ['a', 'd'],
    referenceCours: "[BIO201_Part2_P36]",
    referenceText: "(a) Microtubule... formés par... molécules de tubuline. (b) Microfilament... constitués de deux chaînes de molécules d'actine..."
  },
  {
    id: 'bio2_q30',
    text: "Quelle est l'une des fonctions principales du cytosquelette ?",
    options: [
      { value: 'a', text: "a) La synthèse des protéines." },
      { value: 'b', text: "b) Fournir une armature structurale et maintenir la forme de la cellule." },
      { value: 'c', text: "c) La production d'énergie (ATP)." },
      { value: 'd', text: "d) La digestion des déchets cellulaires." }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part2_P36]",
    referenceText: "Fonctions principales : armature de la cellule (donne sa forme...)"
  },
  // Niveau Tissulaire (P40-58)
  {
    id: 'bio2_q31',
    text: "Qu'est-ce qu'un tissu biologique ?",
    options: [
      { value: 'a', text: "a) Un ensemble d'organes aux fonctions similaires." },
      { value: 'b', text: "b) Une seule cellule spécialisée." },
      { value: 'c', text: "c) Un groupe de cellules ayant une structure et une fonction spécialisée communes." },
      { value: 'd', text: "d) Le liquide qui baigne les cellules." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part2_P41]",
    referenceText: "Les cellules avec une structure et une fonction spécialisée communes se combinent pour former les tissus."
  },
  {
    id: 'bio2_q32',
    text: "La matrice extra-cellulaire joue un rôle important dans l'adhérence cellulaire. De quoi est-elle principalement composée ?",
    options: [
      { value: 'a', text: "a) De phospholipides et de cholestérol." },
      { value: 'b', text: "b) D'ADN et d'ARN." },
      { value: 'c', text: "c) D'un gel aqueux à base de sucres complexes et de fibres protéiques (collagène, élastine...)." },
      { value: 'd', text: "d) De cellules nerveuses et de cellules gliales." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part2_P44]",
    referenceText: "La matrice extra-cellulaire joue le rôle de colle biologique => gel aqueux à base de sucres complexes contenant un réseau de fibres protéiques (collagène, fibres d'élastine et fibronectine)."
  },
  {
    id: 'bio2_q33',
    text: "Quels sont les trois principaux types de jonctions inter-cellulaires spécialisées décrites ?", // Question à 3 réponses justes (6/12)
    options: [
      { value: 'a', text: "a) Les desmosomes (jonctions d'ancrage)" },
      { value: 'b', text: "b) Les synapses (jonctions nerveuses)" }, // Type spécifique de jonction fonctionnelle, pas une jonction d'adhérence générale entre toutes cellules.
      { value: 'c', text: "c) Les jonctions serrées (jonctions imperméables)" },
      { value: 'd', text: "d) Les jonctions communicantes (gap junctions)" },
      { value: 'e', text: "e) Les liaisons peptidiques (liaisons intra-protéine)" }
    ],
    correctAnswers: ['a', 'c', 'd'],
    referenceCours: "[BIO201_Part2_P45]",
    referenceText: "trois principaux types : les desmosomes... les jonctions serrées... les jonctions communicantes..."
  },
  {
    id: 'bio2_q34',
    text: "Quel type de jonction inter-cellulaire forme des 'rivets' ou points d'ancrage forts, particulièrement abondants dans les tissus soumis à des stress mécaniques (ex: peau) ?",
    options: [
      { value: 'a', text: "a) Les jonctions communicantes" },
      { value: 'b', text: "b) Les jonctions serrées" },
      { value: 'c', text: "c) Les desmosomes" },
      { value: 'd', text: "d) Les synapses chimiques" }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part2_P45]",
    referenceText: "les desmosomes (\"sortes de rivets\"; e.g., peau, muscle cardiaque)."
  },
  {
    id: 'bio2_q35',
    text: "Quel type de jonction inter-cellulaire scelle l'espace entre les cellules adjacentes, empêchant le passage de substances entre elles (ex: épithélium intestinal) ?", // Question à 1 réponse juste
    options: [
      { value: 'a', text: "a) Les jonctions communicantes" },
      { value: 'b', text: "b) Les jonctions serrées" },
      { value: 'c', text: "c) Les desmosomes" },
      { value: 'd', text: "d) Les plasmodesmes" } // Chez les végétaux
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part2_P45]",
    referenceText: "les jonctions serrées (jonctions imperméables; e.g., épithélium du tube digestif)."
  },
  {
    id: 'bio2_q36',
    text: "Quel type de jonction inter-cellulaire forme des canaux directs entre les cytoplasmes de cellules voisines, permettant le passage rapide de petites molécules et d'ions (ex: muscle cardiaque) ?", // Question à 1 réponse juste
    options: [
      { value: 'a', text: "a) Les jonctions communicantes (gap junctions)" },
      { value: 'b', text: "b) Les jonctions serrées" },
      { value: 'c', text: "c) Les desmosomes" },
      { value: 'd', text: "d) Les synapses électriques" } // Une synapse électrique EST une gap junction, mais le terme général est jonction communicante.
    ],
    correctAnswers: ['a'],
    referenceCours: "[BIO201_Part2_P45]",
    referenceText: "les jonctions communicantes (\"tunnels\" entre 2 cellules; e.g., muscle cardiaque)."
  },
  {
    id: 'bio2_q37',
    text: "Quelle est la caractéristique principale des cellules musculaires ?", // Question à 1 réponse juste
    options: [
      { value: 'a', text: "a) Elles sécrètent des hormones." },
      { value: 'b', text: "b) Elles sont capables de produire de la force et de se contracter." },
      { value: 'c', text: "c) Elles transmettent des influx nerveux sur de longues distances." },
      { value: 'd', text: "d) Elles forment une barrière protectrice." }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part2_P46]",
    referenceText: "Les cellules musculaires sont capables de produire de la force, et de se raccourcir (i.e., se contracter)..."
  },
  {
    id: 'bio2_q38',
    text: "Quels sont les trois principaux types de tissus musculaires ?", // Question à 3 réponses justes (7/12)
    options: [
      { value: 'a', text: "a) Squelettique" },
      { value: 'b', text: "b) Conjonctif" }, // Type de tissu principal, pas musculaire
      { value: 'c', text: "c) Lisse" },
      { value: 'd', text: "d) Nerveux" }, // Type de tissu principal, pas musculaire
      { value: 'e', text: "e) Cardiaque" }
    ],
    correctAnswers: ['a', 'c', 'e'],
    referenceCours: "[BIO201_Part2_P46]",
    referenceText: "Trois principaux types : les muscles squelettiques, les muscles lisses, le muscle cardiaque."
  },
  {
    id: 'bio2_q39',
    text: "Quel type de muscle est généralement attaché au squelette et responsable des mouvements volontaires et de la posture ?", // Question à 1 réponse juste
    options: [
      { value: 'a', text: "a) Muscle lisse" },
      { value: 'b', text: "b) Muscle cardiaque" },
      { value: 'c', text: "c) Muscle squelettique" },
      { value: 'd', text: "d) Muscle conjonctif" }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part2_P46 & P47]",
    referenceText: "les muscles squelettiques => mise en tension et déplacement des pièces du squelette... innervés par le système nerveux somatique et peuvent être soumis à un contrôle volontaire."
  },
  {
    id: 'bio2_q40',
    text: "Où trouve-t-on principalement le muscle lisse ?", // Question à 1 réponse juste
    options: [
      { value: 'a', text: "a) Attaché aux os." },
      { value: 'b', text: "b) Dans le cœur." },
      { value: 'c', text: "c) Dans les parois des organes internes creux (vaisseaux sanguins, tube digestif...)." },
      { value: 'd', text: "d) Dans le cerveau." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part2_P46]",
    referenceText: "les muscles lisses => contrôle le mouvement des matières dans les cavités et organes (e.g., parois vasculaires, voies digestives)."
  },
  {
    id: 'bio2_q41',
    text: "Quel type de muscle constitue la paroi du cœur ?", // Question à 1 réponse juste
    options: [
      { value: 'a', text: "a) Muscle lisse" },
      { value: 'b', text: "b) Muscle cardiaque" },
      { value: 'c', text: "c) Muscle squelettique" },
      { value: 'd', text: "d) Muscle conjonctif" }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part2_P46]",
    referenceText: "le muscle cardiaque => assure le pompage du sang."
  },
  {
    id: 'bio2_q42',
    text: "Les muscles squelettiques sont-ils toujours sous contrôle volontaire ?", // Question à 1 réponse juste
    options: [
      { value: 'a', text: "a) Oui, exclusivement." },
      { value: 'b', text: "b) Non, ils peuvent aussi avoir une activité non-volontaire (ex: posture, mouvements automatisés)." },
      { value: 'c', text: "c) Non, ils sont toujours involontaires comme le muscle cardiaque." },
      { value: 'd', text: "d) Oui, sauf pendant le sommeil." }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part2_P47]",
    referenceText: "peuvent être soumis à un contrôle volontaire. Néanmoins, de nombreuses activités des muscles squelettiques se font de manière non-volontaire (e.g., dans la posture ou pour des mouvements automatisés)."
  },
  {
    id: 'bio2_q43',
    text: "Qu'est-ce qu'un organe, selon la définition donnée ?", // Question à 1 réponse juste
    options: [
      { value: 'a', text: "a) Un ensemble de cellules identiques." },
      { value: 'b', text: "b) Un ensemble de deux types de tissus ou plus, organisés pour remplir une ou plusieurs fonctions." },
      { value: 'c', text: "c) L'unité fonctionnelle la plus simple du vivant." },
      { value: 'd', text: "d) Un ensemble de systèmes travaillant ensemble." }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part2_P52]",
    referenceText: "Les organes sont constitués par un ensemble de deux (ou plus) tissus principaux qui sont organisés de manière à remplir une ou plusieurs fonctions données."
  },
  {
    id: 'bio2_q44',
    text: "Qu'est-ce qu'un système (ou appareil) biologique ?", // Question à 1 réponse juste
    options: [
      { value: 'a', text: "a) Un type de tissu spécifique." },
      { value: 'b', text: "b) Un ensemble d'organes exécutant des fonctions complémentaires pour une activité essentielle." },
      { value: 'c', text: "c) L'ensemble des cellules d'un organisme." },
      { value: 'd', text: "d) Un niveau d'organisation inférieur à l'organe." }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part2_P54]",
    referenceText: "Un système (ou appareil) est constitué d'un ensemble d'organes - qui exécutent des fonctions complémentaires et interagissent - en vue d'accomplir, collectivement, une activité essentielle pour l'organisme."
  },
  {
    id: 'bio2_q45',
    text: "Combien de systèmes principaux compte le corps humain, selon le cours ?", // Question à 1 réponse juste
    options: [
      { value: 'a', text: "a) 5" },
      { value: 'b', text: "b) 8" },
      { value: 'c', text: "c) 11" },
      { value: 'd', text: "d) 15" }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part2_P54]",
    referenceText: "Le corps humain compte onze systèmes."
  },
  {
    id: 'bio2_q46',
    text: "Parmi les suivants, lesquels sont des systèmes du corps humain mentionnés dans la liste ? (Choisissez toutes les réponses applicables)", // Question à 3 réponses justes (8/12)
    options: [
      { value: 'a', text: "a) Système digestif" },
      { value: 'b', text: "b) Système hormonal" }, // Endocrinien est listé
      { value: 'c', text: "c) Système respiratoire" },
      { value: 'd', text: "d) Système nerveux" },
      { value: 'e', text: "e) Système cellulaire" } // Pas un système au sens macroscopique
    ],
    correctAnswers: ['a', 'c', 'd'], // 'b' est ambigu, "Endocrinien" est le terme exact listé. On reste sur 3.
    referenceCours: "[BIO201_Part2_P55]",
    referenceText: "Liste: circulatoire, digestif, respiratoire, urinaire, squelettique, musculaire, tégumentaire, immunitaire, nerveux, endocrine, reproducteur."
  },
  {
    id: 'bio2_q47',
    text: "Quelle affirmation décrit le mieux l'interaction entre les systèmes au niveau de l'organisme ?", // Question à 1 réponse juste
    options: [
      { value: 'a', text: "a) Chaque système fonctionne de manière totalement indépendante des autres." },
      { value: 'b', text: "b) Seul le système nerveux contrôle tous les autres systèmes." },
      { value: 'c', text: "c) Les systèmes interagissent, sont interdépendants et fonctionnent en synergie." },
      { value: 'd', text: "d) Les systèmes sont redondants, la défaillance de l'un est sans conséquence." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part2_P56]",
    referenceText: "Les différents systèmes interagissent et fonctionnent en synergie... Chaque système est indispensable, et dépend du fonctionnement des autres systèmes..."
  },
  // Questions Redondantes / Récapitulatives
  {
    id: 'bio2_q48',
    text: "Quel organite cellulaire est responsable de la modification, du tri et de l'emballage des protéines et lipides pour leur destination finale ?", // Redondance Q21
    options: [
      { value: 'a', text: "a) Réticulum Endoplasmique Lisse (REL)" },
      { value: 'b', text: "b) Ribosome" },
      { value: 'c', text: "c) Appareil de Golgi" },
      { value: 'd', text: "d) Lysosome" }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part2_P23 & P24]",
    referenceText: "Fonctions principales [Golgi]: transformation/finalisation... tri/adressage des produits finis..."
  },
   {
    id: 'bio2_q49',
    text: "La bicouche lipidique de la membrane plasmique est principalement formée de quel type de lipides ?", // Redondance Q25
    options: [
      { value: 'a', text: "a) Triglycérides" },
      { value: 'b', text: "b) Cholestérol" },
      { value: 'c', text: "c) Phospholipides" },
      { value: 'd', text: "d) Acides gras libres" }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part2_P32 & P33]",
    referenceText: "Composition [membrane]: lipides => phospholipides formant une double couche..."
  },
  {
    id: 'bio2_q50',
    text: "Identifier les affirmations correctes concernant les cellules souches. (Choisissez toutes les réponses applicables)", // Question à 2 réponses justes (7/15) // Redondance Q6, Q7
    options: [
      { value: 'a', text: "a) Les cellules souches pluripotentes ont un potentiel de différenciation plus large que les multipotentes." },
      { value: 'b', text: "b) Les cellules souches adultes sont généralement totipotentes." },
      { value: 'c', text: "c) La différenciation est principalement due à des mutations aléatoires." },
      { value: 'd', text: "d) Les cellules souches ont la capacité de proliférer (se diviser) et de se différencier." }
    ],
    correctAnswers: ['a', 'd'],
    referenceCours: "[BIO201_Part2_P6]",
    referenceText: "Les cellules souches ont deux grandes propriétés : proliférer... se différencier... Pluripotentes peuvent se différencier en n'importe quel type... Multipotentes... limitant la variété..."
  },
  {
    id: 'bio2_q51',
    text: "Quel organite contient des enzymes oxydantes et joue un rôle majeur dans la détoxification cellulaire ?", // Redondance Q23
    options: [
      { value: 'a', text: "a) Lysosome" },
      { value: 'b', text: "b) Peroxysome" },
      { value: 'c', text: "c) Mitochondrie" },
      { value: 'd', text: "d) Appareil de Golgi" }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part2_P29]",
    referenceText: "Peroxysomes... Principale fonction : détoxication cellulaire... => enzymes oxydants..."
  },
   {
    id: 'bio2_q52',
    text: "Associez chaque type de filament du cytosquelette à sa protéine principale. (Choisissez toutes les associations correctes)", // Question à 2 réponses justes (8/15) // Redondance Q29
    options: [
      { value: 'a', text: "a) Microtubules - Actine" },
      { value: 'b', text: "b) Microfilaments - Tubuline" },
      { value: 'c', text: "c) Microtubules - Tubuline" },
      { value: 'd', text: "d) Microfilaments - Actine" },
      { value: 'e', text: "e) Filaments intermédiaires - Actine" }
    ],
    correctAnswers: ['c', 'd'],
    referenceCours: "[BIO201_Part2_P36]",
    referenceText: "(a) Microtubule... formés par... molécules de tubuline. (b) Microfilament... constitués de... molécules d'actine..."
  },
  {
    id: 'bio2_q53',
    text: "Quelles affirmations décrivent correctement la membrane plasmique ? (Choisissez toutes les réponses applicables)", // Question à 3 réponses justes (9/12) // Redondance Q10, Q25, Q26, Q27
    options: [
      { value: 'a', text: "a) Elle est totalement imperméable à toutes les molécules." },
      { value: 'b', text: "b) Elle est composée d'une bicouche de phospholipides." },
      { value: 'c', text: "c) Elle contient des protéines qui peuvent servir de canaux ou de récepteurs." },
      { value: 'd', text: "d) Elle sépare le milieu intracellulaire du milieu extracellulaire." },
      { value: 'e', text: "e) Ses queues phospholipidiques sont hydrophiles." }
    ],
    correctAnswers: ['b', 'c', 'd'],
    referenceCours: "[BIO201_Part2_P11, P32, P33, P34]",
    referenceText: "sépare LIC/LEC... Composition: bicouche phospholipides, protéines... Fonctions protéines: canaux, récepteurs... Têtes hydrophiles, queues hydrophobes."
  },
   {
    id: 'bio2_q54',
    text: "Parmi ces organites, lesquels sont directement impliqués dans la synthèse, la modification et/ou le transport des protéines ? (Choisissez toutes les réponses applicables)", // Question à 3 réponses justes (10/12) // Redondance Q15, Q17, Q21
    options: [
      { value: 'a', text: "a) Ribosomes" },
      { value: 'b', text: "b) Réticulum Endoplasmique Rugueux (REG)" },
      { value: 'c', text: "c) Mitochondries" },
      { value: 'd', text: "d) Appareil de Golgi" },
      { value: 'e', text: "e) Lysosomes" }
    ],
    correctAnswers: ['a', 'b', 'd'],
    referenceCours: "[BIO201_Part2_P18, P20, P23]",
    referenceText: "Ribosome: synthèse protéines. REG: synthèse et modifications protéines. Golgi: transformation/finalisation, tri/adressage protéines."
  },
   {
    id: 'bio2_q55',
    text: "Quel type de jonction intercellulaire permet une communication directe et rapide entre les cytoplasmes de cellules adjacentes ?", // Redondance Q36
    options: [
      { value: 'a', text: "a) Desmosome" },
      { value: 'b', text: "b) Jonction serrée" },
      { value: 'c', text: "c) Jonction communicante (Gap junction)" },
      { value: 'd', text: "d) Hémidesmosome" }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part2_P45]",
    referenceText: "les jonctions communicantes (\"tunnels\" entre 2 cellules...)"
  },
   {
    id: 'bio2_q56',
    text: "Associez correctement ces types de muscles à leur localisation principale ou caractéristique. (Choisissez les 2 associations correctes)", // Question à 2 réponses justes (9/15) // Redondance Q39, Q40, Q41
    options: [
      { value: 'a', text: "a) Muscle lisse - Cœur" },
      { value: 'b', text: "b) Muscle squelettique - Attaché aux os" },
      { value: 'c', text: "c) Muscle cardiaque - Parois des vaisseaux sanguins" },
      { value: 'd', text: "d) Muscle lisse - Parois des organes creux (ex: intestin)" }
    ],
    correctAnswers: ['b', 'd'],
    referenceCours: "[BIO201_Part2_P46]",
    referenceText: "squelettiques => déplacement des pièces du squelette... lisses => parois vasculaires, voies digestives... cardiaque => assure le pompage du sang (cœur)."
  },
   {
    id: 'bio2_q57',
    text: "Quel est l'ordre correct des niveaux d'organisation biologique, du plus simple au plus complexe ?", // Redondance Q10
    options: [
      { value: 'a', text: "a) Cellule, Tissu, Organite, Organe, Système" },
      { value: 'b', text: "b) Molécule, Organite, Cellule, Tissu, Organe" }, // Correct
      { value: 'c', text: "c) Tissu, Cellule, Organe, Système, Organisme" },
      { value: 'd', text: "d) Molécule, Cellule, Organite, Tissu, Organe" }
    ],
    correctAnswers: ['b'], // Molécule (chimique) -> Organite -> Cellule -> Tissu -> Organe -> Système -> Organisme
    referenceCours: "[BIO201_Part2_P58 & P17]",
    referenceText: "Niveau CHIMIQUE -> Niveau CELLULAIRE -> Niveau TISSULAIRE -> Niveau des ORGANES -> Niveau des SYSTEMES -> Niveau de l'ORGANISME. Les organites sont dans la cellule."
  },
   {
    id: 'bio2_q58',
    text: "Le Réticulum Endoplasmique Lisse (REL) est principalement impliqué dans : (Choisissez toutes les réponses applicables)", // Question à 2 réponses justes (10/15) // Redondance Q19
    options: [
      { value: 'a', text: "a) Le décodage de l'ARNm" },
      { value: 'b', text: "b) La synthèse des lipides." },
      { value: 'c', text: "c) La détoxification." },
      { value: 'd', text: "d) La production d'ATP." }
    ],
    correctAnswers: ['b', 'c'],
    referenceCours: "[BIO201_Part2_P20 & P21]",
    referenceText: "REL... contient également des enzymes essentielles à la synthèse des lipides... Autres fonctions : ...détoxification..."
  },
   {
    id: 'bio2_q59',
    text: "Quel type de jonction assure principalement l'imperméabilité entre les cellules épithéliales ?", // Redondance Q35
    options: [
      { value: 'a', text: "a) Desmosome" },
      { value: 'b', text: "b) Jonction communicante" },
      { value: 'c', text: "c) Jonction serrée" },
      { value: 'd', text: "d) Synapse" }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part2_P45]",
    referenceText: "les jonctions serrées (jonctions imperméables; e.g., épithélium du tube digestif)."
  },
   {
    id: 'bio2_q60',
    text: "Les mitochondries sont essentielles pour :", // Question à 1 réponse juste // Redondance Q24
    options: [
      { value: 'a', text: "a) La digestion intracellulaire." },
      { value: 'b', text: "b) La production d'énergie sous forme d'ATP." },
      { value: 'c', text: "c) Le maintien de la forme cellulaire." },
      { value: 'd', text: "d) La synthèse des lipides." }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part2_P31]",
    referenceText: "Mitochondries... Principales fonctions : production énergétique de la C => fournisseur d'ATP..."
  },
   {
    id: 'bio2_q61',
    text: "Quelles sont les caractéristiques des cellules eucaryotes ? (Choisissez toutes les réponses applicables)", // Question à 2 réponses justes (11/15) // Redondance Q3
    options: [
      { value: 'a', text: "a) Elles possèdent un noyau délimité par une membrane." },
      { value: 'b', text: "b) Leur ADN est diffus dans le cytoplasme." },
      { value: 'c', text: "c) Elles comprennent les cellules animales et végétales." },
      { value: 'd', text: "d) Elles sont généralement plus simples et plus petites que les procaryotes." }
    ],
    correctAnswers: ['a', 'c'],
    referenceCours: "[BIO201_Part2_P3]",
    referenceText: "eucaryotes: ADN contenu dans le noyau... exemples: cellules du règne animal, végétal... Procaryotes: Pas de noyau..."
  },
   {
    id: 'bio2_q62',
    text: "Identifier les composants CORRECTEMENT associés au cytosquelette. (Choisissez toutes les réponses applicables)", // Question à 3 réponses justes (11/12) // Redondance Q28, Q29
    options: [
      { value: 'a', text: "a) Microtubules faits de tubuline." },
      { value: 'b', text: "b) Microfilaments faits de myosine." }, // Actine
      { value: 'c', text: "c) Filaments intermédiaires (ex: kératine)." },
      { value: 'd', text: "d) Ribosomes." }, // Organite séparé
      { value: 'e', text: "e) Microfilaments faits d'actine." }
    ],
    correctAnswers: ['a', 'c', 'e'],
    referenceCours: "[BIO201_Part2_P36]",
    referenceText: "Sous-parties: microtubules... microfilaments... filaments intermédiaires... Microtubule... molécules de tubuline... Microfilament... molécules d'actine... Kératine, un type de filament intermédiaire..."
  },
   {
    id: 'bio2_q63',
    text: "Parmi les types de tissus suivants, lesquels sont considérés comme des tissus primaires ? (Choisissez toutes les réponses applicables)", // Question à 3 réponses justes (12/12) // Redondance Q8, Q31
    options: [
      { value: 'a', text: "a) Tissu musculaire" },
      { value: 'b', text: "b) Tissu adipeux" }, // Type de tissu conjonctif spécialisé
      { value: 'c', text: "c) Tissu nerveux" },
      { value: 'd', text: "d) Tissu osseux" }, // Type de tissu conjonctif spécialisé
      { value: 'e', text: "e) Tissu épithélial" }
    ],
    correctAnswers: ['a', 'c', 'e'], // Les 4 primaires sont Musculaire, Nerveux, Epithélial, Conjonctif.
    referenceCours: "[BIO201_Part2_P41]",
    referenceText: "on peut distinguer 4 principaux types : le tissu musculaire, le tissu nerveux, le tissu épithélial, le tissu conjonctif."
  },
   {
    id: 'bio2_q64',
    text: "Quel organite reçoit des protéines du RE, les modifie, les trie et les emballe dans des vesicles ? (Choisissez la meilleure réponse)", // Question à 1 réponse juste // Redondance Q21, Q48
    options: [
      { value: 'a', text: "a) Mitochondrie" },
      { value: 'b', text: "b) Appareil de Golgi" },
      { value: 'c', text: "c) Noyau" },
      { value: 'd', text: "d) Peroxysome" }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part2_P23, P24]",
    referenceText: "Principales fonctions [Golgi]: transformation/finalisation des protéines issues du RE... tri/adressage des produits finis..."
  },
];
  // Fin des questions pour BIO201 - Partie 2 (Total: 64 questions générées)

  // --- Début des questions pour BIO201 - Partie 3 ---
const quizDataBio3 = [
  // Intro Système Nerveux (P3-8)
  {
    id: 'bio3_q1',
    text: "Quelles sont les deux subdivisions anatomiques principales du système nerveux ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Le système nerveux somatique et le système nerveux autonome." }, // Divisions fonctionnelles du SNP
      { value: 'b', text: "b) Le système nerveux central (SNC) et le système nerveux périphérique (SNP)." },
      { value: 'c', text: "c) L'encéphale et les nerfs." },
      { value: 'd', text: "d) La substance grise et la substance blanche." } // Composants tissulaires
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part3_P3]",
    referenceText: "Anatomiquement, le SN se subdivise en deux parties principales : le système nerveux central (SNC) et le système nerveux périphérique (SNP)."
  },
  {
    id: 'bio3_q2',
    text: "De quoi est principalement constitué le Système Nerveux Central (SNC) ?", // Q 2 rep justes (1/11)
    options: [
      { value: 'a', text: "a) Des nerfs crâniens." }, // SNP
      { value: 'b', text: "b) De l'encéphale." },
      { value: 'c', text: "c) Des ganglions rachidiens." }, // Contiennent corps cell. neurones SNP
      { value: 'd', text: "d) De la moelle épinière." }
    ],
    correctAnswers: ['b', 'd'],
    referenceCours: "[BIO201_Part3_P3]",
    referenceText: "Le système nerveux central : Encéphale... Moelle Epinière..."
  },
  {
    id: 'bio3_q3',
    text: "Où se situent respectivement l'encéphale et la moelle épinière ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Encéphale dans la colonne vertébrale, moelle épinière dans la boîte crânienne." },
      { value: 'b', text: "b) Encéphale dans la boîte crânienne, moelle épinière dans la colonne vertébrale." },
      { value: 'c', text: "c) Les deux dans la boîte crânienne." },
      { value: 'd', text: "d) Les deux dans la colonne vertébrale." }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part3_P3]",
    referenceText: "Encéphale dans la boite crânienne. Moelle Epinière dans la colonne vertébrale."
  },
  {
    id: 'bio3_q4',
    text: "Quels éléments constituent principalement le Système Nerveux Périphérique (SNP) ?", // Q 2 rep justes (2/11)
    options: [
      { value: 'a', text: "a) L'encéphale." }, // SNC
      { value: 'b', text: "b) Les nerfs crâniens." },
      { value: 'c', text: "c) La moelle épinière." }, // SNC
      { value: 'd', text: "d) Les nerfs rachidiens (ou spinaux)." }
    ],
    correctAnswers: ['b', 'd'],
    referenceCours: "[BIO201_Part3_P3]",
    referenceText: "Le système nerveux périphérique : Nerfs crâniens... Nerfs rachidiens (ou spinaux)..."
  },
  {
    id: 'bio3_q5',
    text: "Quel est le rôle principal du SNC dans le traitement de l'information ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Uniquement la réception des informations sensorielles." },
      { value: 'b', text: "b) Uniquement la transmission des commandes motrices." },
      { value: 'c', text: "c) La transmission, le traitement de l'information nerveuse et la prise de décision." },
      { value: 'd', text: "d) Le soutien métabolique des neurones." } // Rôle des cellules gliales
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part3_P4]",
    referenceText: "SYSTÈME NERVEUX CENTRAL: TRANSMISSION & TRAITEMENT du message nerveux, DECISION, COMPORTEMENT."
  },
  {
    id: 'bio3_q6',
    text: "Les voies nerveuses qui transmettent l'information sensorielle du corps vers le SNC sont appelées :", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Voies efférentes ou motrices." },
      { value: 'b', text: "b) Voies afférentes ou sensorielles." },
      { value: 'c', text: "c) Voies centrales." },
      { value: 'd', text: "d) Voies sympathiques." }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part3_P8]",
    referenceText: "corps -> SNC: afférences sensorielles."
  },
  {
    id: 'bio3_q7',
    text: "Quelles sont les trois subdivisions principales de l'encéphale ?", // Q 3 rep justes (1/9)
    options: [
      { value: 'a', text: "a) Le cerveau" },
      { value: 'b', text: "b) La moelle épinière" },
      { value: 'c', text: "c) Le cervelet" },
      { value: 'd', text: "d) Les nerfs crâniens" },
      { value: 'e', text: "e) Le tronc cérébral" }
    ],
    correctAnswers: ['a', 'c', 'e'],
    referenceCours: "[BIO201_Part3_P5]",
    referenceText: "L'encéphale se subdivise en 3 parties : le cerveau... le cervelet... le tronc cérébral..."
  },
  {
    id: 'bio3_q8',
    text: "Le tronc cérébral est lui-même composé de trois parties. Lesquelles ?", // Q 3 rep justes (2/9)
    options: [
      { value: 'a', text: "a) Le thalamus" }, // Partie du diencéphale (cerveau)
      { value: 'b', text: "b) Le mésencéphale" },
      { value: 'c', text: "c) Le pont de Varole" },
      { value: 'd', text: "d) Le cervelet" }, // Subdivision majeure de l'encéphale
      { value: 'e', text: "e) Le bulbe Rachidien" }
    ],
    correctAnswers: ['b', 'c', 'e'],
    referenceCours: "[BIO201_Part3_P6]",
    referenceText: "le tronc cérébral... le mésencéphale... le pont de Varole... le bulbe Rachidien..."
  },
  {
    id: 'bio3_q9',
    text: "Jusqu'à quel niveau vertébral s'étend approximativement la moelle épinière chez l'adulte ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Jusqu'au coccyx." },
      { value: 'b', text: "b) Jusqu'à la vertèbre lombaire L2." },
      { value: 'c', text: "c) Jusqu'à la vertèbre thoracique T12." },
      { value: 'd', text: "d) Sur toute la longueur de la colonne vertébrale." }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part3_P7]",
    referenceText: "limite inférieure : vertèbre lombaire L2 (2)."
  },
  // Cellules du SN (P12-23)
  {
    id: 'bio3_q10',
    text: "Quels sont les deux principaux types de cellules trouvés dans le système nerveux ?", // Q 2 rep justes (3/11)
    options: [
      { value: 'a', text: "a) Les cellules musculaires" },
      { value: 'b', text: "b) Les neurones (cellules nerveuses)" },
      { value: 'c', text: "c) Les cellules épithéliales" },
      { value: 'd', text: "d) Les cellules gliales (névroglie)" },
      { value: 'e', text: "e) Les adipocytes" }
    ],
    correctAnswers: ['b', 'd'],
    referenceCours: "[BIO201_Part3_P12]",
    referenceText: "2 principaux types cellulaires dans le SN : les cellules nerveuses ou neurones [et] les cellules gliales (=névroglie)."
  },
  {
    id: 'bio3_q11',
    text: "Quelle est la fonction COMMUNE principale de tous les neurones ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) La production de myéline." }, // Cellules gliales
      { value: 'b', text: "b) Le soutien structural et nutritif." }, // Cellules gliales (astrocytes)
      { value: 'c', text: "c) La réception, l'intégration et la transmission de l'information sous forme électrique." },
      { value: 'd', text: "d) La défense immunitaire du système nerveux." } // Microglie
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part3_P14]",
    referenceText: "Mais également une fonction commune => la réception, l'intégration et la transmission à distance de l'information sous forme de signal électrique."
  },
  {
    id: 'bio3_q12',
    text: "Quelles sont les deux propriétés fondamentales des neurones qui leur permettent d'assurer leur fonction de communication ?", // Q 2 rep justes (4/11)
    options: [
      { value: 'a', text: "a) La contractilité" }, // Muscles
      { value: 'b', text: "b) L'excitabilité (capacité à générer des signaux électriques en réponse à des stimuli)" },
      { value: 'c', text: "c) La sécrétion d'hormones" }, // Cellules endocrines
      { value: 'd', text: "d) La conductivité (capacité à propager et transmettre ces signaux)" }
    ],
    correctAnswers: ['b', 'd'],
    referenceCours: "[BIO201_Part3_P14]",
    referenceText: "les neurones présentent 2 propriétés essentielles : Excitabilité... Conductivité..."
  },
  {
    id: 'bio3_q13',
    text: "Identifiez les 4 composants structuraux principaux d'un neurone typique.", // Q 4 rep justes (1/3)
    options: [
      { value: 'a', text: "a) Les dendrites" },
      { value: 'b', text: "b) Le corps cellulaire (soma)" },
      { value: 'c', text: "c) La gaine de myéline" }, // Produite par les glies
      { value: 'd', text: "d) L'axone" },
      { value: 'e', text: "e) Les terminaisons axonales (arborisation terminale)" },
      { value: 'f', text: "f) Les astrocytes" } // Type de cellule gliale
    ],
    correctAnswers: ['a', 'b', 'd', 'e'],
    referenceCours: "[BIO201_Part3_P14]",
    referenceText: "Les neurones présentent une structure commune : dendrites, corps cellulaire, axone, terminaisons axonales..."
  },
  {
    id: 'bio3_q14',
    text: "Dans quelle direction l'information nerveuse circule-t-elle typiquement au sein d'un neurone ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Des terminaisons axonales vers les dendrites." },
      { value: 'b', text: "b) De l'axone vers le corps cellulaire." },
      { value: 'c', text: "c) Des dendrites/corps cellulaire vers les terminaisons axonales." },
      { value: 'd', text: "d) Dans les deux sens le long de l'axone." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part3_P15]",
    referenceText: "Circulation UNIDIRECTIONNELLE de l'information nerveuse... FLUX CENTRIPETE (Entrées)... FLUX CENTRIFUGE (Sorties)." // Schéma montre Dendrites -> Soma -> Axone -> Terminaisons.
  },
  {
    id: 'bio3_q15',
    text: "Où a lieu principalement la synthèse des macromolécules (ex: neurotransmetteurs peptidiques) dans le neurone ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Dans les dendrites." },
      { value: 'b', text: "b) Dans le corps cellulaire (soma)." },
      { value: 'c', text: "c) Le long de l'axone." },
      { value: 'd', text: "d) Directement dans la terminaison axonique." }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part3_P16]",
    referenceText: "Corps cellulaire : lieu de synthèse..."
  },
  {
    id: 'bio3_q16',
    text: "Comment appelle-t-on le transport de matériel du corps cellulaire vers la terminaison axonique ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Transport rétrograde" },
      { value: 'b', text: "b) Transport antérograde" },
      { value: 'c', text: "c) Transport passif" },
      { value: 'd', text: "d) Diffusion simple" }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part3_P16]",
    referenceText: "flux antérograde (vers les terminaisons synaptiques)."
  },
  {
    id: 'bio3_q17',
    text: "De quoi est principalement constituée la substance grise dans le SNC ?", // Q 2 rep justes (5/11)
    options: [
      { value: 'a', text: "a) D'axones myélinisés." },
      { value: 'b', text: "b) De corps cellulaires de neurones." },
      { value: 'c', text: "c) De cellules gliales uniquement." },
      { value: 'd', text: "d) De dendrites." },
      { value: 'e', text: "e) De nerfs." } // Nerfs sont dans le SNP
    ],
    correctAnswers: ['b', 'd'],
    referenceCours: "[BIO201_Part3_P17]",
    referenceText: "substance grise... essentiellement constituée des corps cellulaires des neurones et de leurs dendrites."
  },
  {
    id: 'bio3_q18',
    text: "De quoi est principalement constituée la substance blanche ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) De corps cellulaires de neurones." },
      { value: 'b', text: "b) De dendrites et de synapses." },
      { value: 'c', text: "c) D'axones myélinisés." },
      { value: 'd', text: "d) De vaisseaux sanguins." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part3_P17]",
    referenceText: "substance blanche... essentiellement constituée des axones entourés de leur gaine de myéline."
  },
  {
    id: 'bio3_q19',
    text: "Où trouve-t-on typiquement la substance grise dans le cerveau ?", // Q 2 rep justes (6/11)
    options: [
      { value: 'a', text: "a) Uniquement dans le cortex cérébral externe." },
      { value: 'b', text: "b) Dans le cortex cérébral externe." },
      { value: 'c', text: "c) Dans les faisceaux de fibres profondes." }, // Substance blanche
      { value: 'd', text: "d) Dans les structures sous-corticales (ex: ganglions de la base)." }
    ],
    correctAnswers: ['b', 'd'],
    referenceCours: "[BIO201_Part3_P18]",
    referenceText: "Le cortex cérébral => substance grise... structures sous-corticales => substance grise (e.g. les ganglions de la base)."
  },
  {
    id: 'bio3_q20',
    text: "Comment est organisée la substance grise et la substance blanche dans la moelle épinière ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Substance grise externe et substance blanche interne." },
      { value: 'b', text: "b) Substance grise interne (forme H/papillon) et substance blanche externe." },
      { value: 'c', text: "c) Uniquement de la substance grise." },
      { value: 'd', text: "d) Uniquement de la substance blanche." }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part3_P19]",
    referenceText: "La moelle épinière: substance blanche [périphérique], substance grise [centrale]." // Schéma montre forme H interne.
  },
  {
    id: 'bio3_q21',
    text: "Le Système Nerveux Périphérique (les nerfs) est principalement constitué de :", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Substance grise." },
      { value: 'b', text: "b) Substance blanche." },
      { value: 'c', text: "c) Un mélange égal des deux." },
      { value: 'd', text: "d) Cellules gliales uniquement." }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part3_P20]",
    referenceText: "Le SNP est constitué de substance blanche uniquement." // Simplification du cours
  },
  {
    id: 'bio3_q22',
    text: "Quels types de cellules gliales se trouvent principalement dans le SNC ?", // Q 4 rep justes (2/3)
    options: [
      { value: 'a', text: "a) Astrocytes" },
      { value: 'b', text: "b) Cellules de Schwann" }, // SNP
      { value: 'c', text: "c) Oligodendrocytes" },
      { value: 'd', text: "d) Microgliocytes" },
      { value: 'e', text: "e) Cellules satellites" }, // SNP
      { value: 'f', text: "f) Cellules épendymaires" }
    ],
    correctAnswers: ['a', 'c', 'd', 'f'],
    referenceCours: "[BIO201_Part3_P21]",
    referenceText: "GLIE CENTRALE: Oligodendrocyte, Ependymocyte, Astrocyte, Microgliocyte."
  },
  {
    id: 'bio3_q23',
    text: "Quels types de cellules gliales se trouvent principalement dans le SNP ?", // Q 2 rep justes (7/11)
    options: [
      { value: 'a', text: "a) Astrocytes" }, // SNC
      { value: 'b', text: "b) Cellules de Schwann" },
      { value: 'c', text: "c) Oligodendrocytes" }, // SNC
      { value: 'd', text: "d) Microgliocytes" }, // SNC
      { value: 'e', text: "e) Cellules satellites" }
    ],
    correctAnswers: ['b', 'e'],
    referenceCours: "[BIO201_Part3_P21]",
    referenceText: "GLIE PERIPHERIQUE: CELLULES DE SCHWANN, CELLULES SATELLITES."
  },
  {
    id: 'bio3_q24',
    text: "Quelle cellule gliale est responsable de la formation de la gaine de myéline autour des axones dans le SNC ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Astrocyte" },
      { value: 'b', text: "b) Cellule de Schwann" },
      { value: 'c', text: "c) Oligodendrocyte" },
      { value: 'd', text: "d) Microgliocyte" }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part3_P22]",
    referenceText: "Oligodendrocytes... myélinisation (O, CS)..." // Associé à la Glie Centrale.
  },
  {
    id: 'bio3_q25',
    text: "Quelle cellule gliale est responsable de la formation de la gaine de myéline autour des axones dans le SNP ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Astrocyte" },
      { value: 'b', text: "b) Cellule de Schwann" },
      { value: 'c', text: "c) Oligodendrocyte" },
      { value: 'd', text: "d) Cellule épendymaire" }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part3_P22]",
    referenceText: "Oligodendrocytes (O) & cellules de Schwann (CS)... myélinisation (O, CS)..." // CS associées à la Glie Périphérique.
  },
  {
    id: 'bio3_q26',
    text: "Quelles sont les fonctions attribuées aux astrocytes ? (Choisissez toutes les réponses applicables)", // Q 4 rep justes (3/3)
    options: [
      { value: 'a', text: "a) Support structural pour les neurones." },
      { value: 'b', text: "b) Formation de la gaine de myéline." }, // Oligodendrocytes / Schwann
      { value: 'c', text: "c) Apport nutritif aux neurones." },
      { value: 'd', text: "d) Régulation de la transmission synaptique." },
      { value: 'e', text: "e) Protection chimique (ex: partie de la barrière hémato-encéphalique)." },
      { value: 'f', text: "f) Défense immunitaire." } // Microglie
    ],
    correctAnswers: ['a', 'c', 'd', 'e'],
    referenceCours: "[BIO201_Part3_P22]",
    referenceText: "Astrocytes: support structural, nutritif, protection chimique, régulation de la transmission synaptique."
  },
  {
    id: 'bio3_q27',
    text: "Quelle cellule gliale joue un rôle de défense immunitaire dans le SNC ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Astrocyte" },
      { value: 'b', text: "b) Cellule de Schwann" },
      { value: 'c', text: "c) Oligodendrocyte" },
      { value: 'd', text: "d) Microgliocyte" }
    ],
    correctAnswers: ['d'],
    referenceCours: "[BIO201_Part3_P22]",
    referenceText: "Microgliocytes : protection immunitaire."
  },
  // Physiologie Neuronale (P26-40)
  {
    id: 'bio3_q28',
    text: "Qu'est-ce qu'un électrolyte ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Une substance qui ne se dissout pas dans l'eau." },
      { value: 'b', text: "b) Une macromolécule comme une protéine." },
      { value: 'c', text: "c) Une substance qui, une fois dissoute, forme des ions et conduit l'électricité." },
      { value: 'd', text: "d) Une cellule spécialisée dans la conduction électrique." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part3_P27]",
    referenceText: "électrolytes... substances dissoutes formant des ions et conduisant l'électricité dans la solution."
  },
  {
    id: 'bio3_q29',
    text: "Comment appelle-t-on un ion chargé positivement ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Anion" },
      { value: 'b', text: "b) Cation" },
      { value: 'c', text: "c) Neutron" },
      { value: 'd', text: "d) Positron" }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part3_P28]",
    referenceText: "perte [électron] => Cation (Charge positive excédentaire)."
  },
  {
    id: 'bio3_q30',
    text: "Quelle propriété de la membrane plasmique est essentielle pour établir et maintenir les différences de concentration ionique entre l'intérieur et l'extérieur de la cellule ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Sa fluidité." },
      { value: 'b', text: "b) Sa perméabilité sélective." },
      { value: 'c', text: "c) Sa rigidité." },
      { value: 'd', text: "d) Sa capacité à faire la photosynthèse." }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part3_P29 & P36]",
    referenceText: "La membrane plasmique présente une perméabilité sélective => le passage des solutés... diffère... [Origine potentiel élec mb]: différences de [] d'ions... et le fait que la membrane présente une perméabilité sélective."
  },
  {
    id: 'bio3_q31',
    text: "Comment une substance lipophile (soluble dans les lipides) traverse-t-elle typiquement la membrane plasmique ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Par transport actif nécessitant de l'énergie." },
      { value: 'b', text: "b) Via des canaux protéiques spécifiques." },
      { value: 'c', text: "c) Par diffusion simple à travers la bicouche lipidique, selon son gradient." },
      { value: 'd', text: "d) Par endocytose." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part3_P30 & P33]",
    referenceText: "Si la substance est soluble dans les lipides (lipophile) => traverse la membrane par diffusion simple et selon son gradient de concentration."
  },
  {
    id: 'bio3_q32',
    text: "Qu'est-ce qu'un transport passif à travers la membrane ?", // Q 2 rep justes (8/11)
    options: [
      { value: 'a', text: "a) Un transport qui nécessite de l'énergie (ATP)." },
      { value: 'b', text: "b) Un transport qui se fait contre le gradient de concentration." },
      { value: 'c', text: "c) Un transport qui ne nécessite pas d'apport énergétique direct par la cellule." },
      { value: 'd', text: "d) Un transport qui se fait selon le gradient de concentration (du + concentré au - concentré)." }
    ],
    correctAnswers: ['c', 'd'],
    referenceCours: "[BIO201_Part3_P30 & P33]",
    referenceText: "...ceux qui n'en nécessitent pas [d'énergie] i.e., transports passifs (selon son gradient de concentration)."
  },
  {
    id: 'bio3_q33',
    text: "Qu'est-ce qu'un gradient de concentration ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) La quantité totale de soluté dans un volume." },
      { value: 'b', text: "b) La vitesse de diffusion d'une substance." },
      { value: 'c', text: "c) Une différence de concentration d'une substance entre deux régions ou compartiments." },
      { value: 'd', text: "d) La charge électrique d'une solution." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part3_P31]",
    referenceText: "Gradient = différence. Le gradient de concentration... c'est la différence de concentration entre les deux milieux."
  },
  {
    id: 'bio3_q34',
    text: "Dans quel sens se fait naturellement la diffusion d'un soluté selon son gradient de concentration ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) De la zone la moins concentrée vers la zone la plus concentrée." },
      { value: 'b', text: "b) De la zone la plus concentrée vers la zone la moins concentrée." },
      { value: 'c', text: "c) Indifféremment dans les deux sens." },
      { value: 'd', text: "d) Uniquement si la substance est chargée électriquement." }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part3_P32]",
    referenceText: "Une substance (soluté) diffuse suivant son gradient de concentration ou gradient chimique => de la zone la plus concentrée à la zone moins concentrée."
  },
  {
    id: 'bio3_q35',
    text: "Le mouvement des ions à travers la membrane dépend de deux forces principales qui constituent le gradient électrochimique. Quelles sont-elles ?", // Q 2 rep justes (9/11)
    options: [
      { value: 'a', text: "a) La force gravitationnelle." },
      { value: 'b', text: "b) Le gradient de concentration (force chimique)." },
      { value: 'c', text: "c) La pression hydrostatique." },
      { value: 'd', text: "d) Le gradient électrique (différence de potentiel)." },
      { value: 'e', text: "e) La température." }
    ],
    correctAnswers: ['b', 'd'],
    referenceCours: "[BIO201_Part3_P34-36]",
    referenceText: "Le gradient de concentration ou chimique... Le gradient électrique... Équilibre électrochimique = Équilibre |e| 2 forces opposées : gradient de concentration - gradient électrique."
  },
  {
    id: 'bio3_q36',
    text: "Comment le gradient électrique influence-t-il le mouvement des ions ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Il attire tous les ions vers la charge négative." },
      { value: 'b', text: "b) Il repousse tous les ions loin de la charge positive." },
      { value: 'c', text: "c) Les charges opposées s'attirent et les charges semblables se repoussent." },
      { value: 'd', text: "d) Il n'influence que les ions non chargés." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part3_P35]",
    referenceText: "Un champ électrique génère également un mouvement d'ions: des charges opposées s'attirent et des charges semblables se repoussent."
  },
  {
    id: 'bio3_q37',
    text: "Quelle est la valeur approximative du potentiel de repos de la membrane d'un neurone ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) 0 mV" },
      { value: 'b', text: "b) +30 mV" },
      { value: 'c', text: "c) -65 mV" },
      { value: 'd', text: "d) -90 mV" }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part3_P37]",
    referenceText: "Potentiel membranaire de repos -65 mV." // Valeur typique donnée.
  },
  {
    id: 'bio3_q38',
    text: "Que signifie un potentiel de repos de -65 mV ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) L'extérieur de la cellule est 65 mV plus négatif que l'intérieur." },
      { value: 'b', text: "b) L'intérieur de la cellule est 65 mV plus négatif que l'extérieur." },
      { value: 'c', text: "c) Il y a 65 millions de volts de différence." },
      { value: 'd', text: "d) La membrane est au repos et ne laisse passer aucun ion." }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part3_P37 & P38]",
    referenceText: "-65 mV... La charge électrique n'est pas équivalente... L'intérieur du neurone est négatif par rapport à l'extérieur."
  },
  {
    id: 'bio3_q39',
    text: "Comment sont réparties les concentrations des ions Sodium (Na+) et Potassium (K+) de part et d'autre de la membrane neuronale au repos ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) [Na+] et [K+] sont plus élevées à l'intérieur." },
      { value: 'b', text: "b) [Na+] est plus élevée à l'intérieur, [K+] est plus élevée à l'extérieur." },
      { value: 'c', text: "c) [Na+] et [K+] sont plus élevées à l'extérieur." },
      { value: 'd', text: "d) [Na+] est plus élevée à l'extérieur, [K+] est plus élevée à l'intérieur." }
    ],
    correctAnswers: ['d'],
    referenceCours: "[BIO201_Part3_P39]",
    referenceText: "Tableau: K+ intracellulaire 140 / extracellulaire 5. Na+ intracellulaire 5-15 / extracellulaire 145."
  },
  {
    id: 'bio3_q40',
    text: "Quels sont les principaux ions responsables des charges négatives à l'intérieur du neurone au repos ?", // Q 2 rep justes (10/11)
    options: [
      { value: 'a', text: "a) Les ions Chlorure (Cl-)" },
      { value: 'b', text: "b) Les ions Sodium (Na+)" },
      { value: 'c', text: "c) Les protéines ionisées (souvent négatives à pH cellulaire)" },
      { value: 'd', text: "d) Les ions Potassium (K+)" },
      { value: 'e', text: "e) Les ions phosphates" }
    ],
    correctAnswers: ['c', 'e'],
    referenceCours: "[BIO201_Part3_P39]",
    referenceText: "A l'intérieur de la membrane : ... ions négatifs = Protéines et ions phosphates."
  },
  {
    id: 'bio3_q41',
    text: "La pompe Sodium-Potassium (Na+/K+ ATPase) est un exemple de :", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Transport passif." },
      { value: 'b', text: "b) Canal ionique voltage-dépendant." },
      { value: 'c', text: "c) Transport actif." },
      { value: 'd', text: "d) Récepteur neurotransmetteur." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part3_P40 & P30]", // La pompe maintient les gradients contre lesquels se fait la diffusion passive, donc elle est active.
    referenceText: "Cette répartition des ions est conditionnée par : ... des canaux et pompes ioniques (ex: pompe NaK)... [P30: Transport actif nécessite de l'énergie, souvent contre gradient]."
  },
  {
    id: 'bio3_q42',
    text: "Quel est le rôle principal de la pompe Sodium-Potassium (Na+/K+) ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Laisser diffuser librement Na+ et K+ selon leur gradient." },
      { value: 'b', text: "b) Générer directement le potentiel d'action." },
      { value: 'c', text: "c) Maintenir les gradients de concentration de Na+ et K+ de part et d'autre de la membrane." },
      { value: 'd', text: "d) Synthétiser l'ATP." } // Mitochondries
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part3_P40]",
    referenceText: "pompes ioniques (ex: pompe NaK)... [maintiennent] Cette répartition des ions..."
  },
   {
    id: 'bio3_q43',
    text: "La perméabilité de la membrane neuronale au repos est beaucoup plus élevée pour quel ion, contribuant majoritairement au potentiel de repos ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Sodium (Na+)" },
      { value: 'b', text: "b) Potassium (K+)" },
      { value: 'c', text: "c) Calcium (Ca2+)" },
      { value: 'd', text: "d) Chlorure (Cl-)" }
    ],
    correctAnswers: ['b'], // Bien que non explicitement quantifié dans les extraits fournis, c'est un principe fondamental de la neurophysiologie que la membrane au repos est surtout perméable au K+ via des canaux de fuite.
    referenceCours: "[Principe neurophysio de base]",
    referenceText: "Le potentiel de repos est proche du potentiel d'équilibre du K+ car la membrane y est principalement perméable au repos."
  },
   {
    id: 'bio3_q44',
    text: "Quelles affirmations sont correctes concernant le système nerveux ? (Choisissez toutes les réponses applicables)", // Q 3 rep justes (3/9) // Redondance Q1, Q3, Q4, Q5
    options: [
      { value: 'a', text: "a) Il est divisé en SNC (Encéphale + Moelle) et SNP (Nerfs)." },
      { value: 'b', text: "b) Le SNP traite l'information et prend les décisions." }, // Rôle du SNC
      { value: 'c', text: "c) L'encéphale consomme une part importante de l'énergie métabolique." },
      { value: 'd', text: "d) Les neurones et les cellules gliales en sont les principaux types cellulaires." },
      { value: 'e', text: "e) Les nerfs rachidiens émergent de l'encéphale." } // Moelle épinière
    ],
    correctAnswers: ['a', 'c', 'd'],
    referenceCours: "[BIO201_Part3_P3, P5, P12]",
    referenceText: "SNC (Encéphale+Moelle) / SNP (Nerfs)... Encéphale... consomme ~20-25%... 2 principaux types cellulaires... neurones... cellules gliales."
  },
   {
    id: 'bio3_q45',
    text: "Associez chaque cellule gliale à l'une de ses fonctions principales. (Choisissez les 2 associations correctes)", // Q 2 rep justes (11/11) // Redondance Q24, Q25, Q26, Q27
    options: [
      { value: 'a', text: "a) Astrocyte - Formation de myéline dans le SNP." },
      { value: 'b', text: "b) Oligodendrocyte - Formation de myéline dans le SNC." },
      { value: 'c', text: "c) Microglie - Synthèse du liquide céphalo-rachidien (LCR)." },
      { value: 'd', text: "d) Cellule de Schwann - Défense immunitaire dans le SNC." },
      { value: 'e', text: "e) Astrocyte - Support structural et nutritif des neurones." }
    ],
    correctAnswers: ['b', 'e'],
    referenceCours: "[BIO201_Part3_P22]",
    referenceText: "Astrocytes: support structural, nutritif... Oligodendrocytes... myélinisation [SNC]... Cellules de Schwann... myélinisation [SNP]... Microgliocytes : protection immunitaire... Cellules épendymaires... synthèse LCR."
  },
  // Fin des questions pour BIO201 - Partie 3 (Total: 45 questions générées)
];
  // --- Début des questions pour BIO201 - Partie 4 ---
const quizDataBio4 = [
  // Message Nerveux (P2-4)
  {
    id: 'bio4_q1',
    text: "Dans le schéma général du flux d'information neuronale, quel type de potentiel précède immédiatement le déclenchement d'un potentiel d'action au site générateur ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Le potentiel post-synaptique (PPS)" },
      { value: 'b', text: "b) Le potentiel récepteur" },
      { value: 'c', text: "c) Le potentiel de repos" },
      { value: 'd', text: "d) Le potentiel générateur" }
    ],
    correctAnswers: ['d'],
    referenceCours: "[BIO201_Part4_P2]",
    referenceText: "Schéma: Potentiel post-synaptique -> Potentiel générateur -> Potentiel d'action..."
  },
  {
    id: 'bio4_q2',
    text: "Quelle étape spécifique est ajoutée au début du flux d'information pour un neurone sensoriel par rapport à un interneurone ou motoneurone ?", // Q 2 rep justes (1/11)
    options: [
      { value: 'a', text: "a) La libération de neurotransmetteur." },
      { value: 'b', text: "b) La transduction du stimulus en signal électrique." },
      { value: 'c', text: "c) La génération d'un potentiel d'action." },
      { value: 'd', text: "d) La génération d'un potentiel récepteur." },
      { value: 'e', text: "e) La sommation temporelle." }
    ],
    correctAnswers: ['b', 'd'], // La transduction crée le potentiel récepteur
    referenceCours: "[BIO201_Part4_P4]",
    referenceText: "Schéma neurone sensoriel: transduction -> stimulus -> Potentiel récepteur -> Potentiel générateur -> ..."
  },
  // Potentiels Locaux (P6-7)
  {
    id: 'bio4_q3',
    text: "Comment qualifie-t-on un potentiel local qui rend le potentiel de membrane moins négatif (ex: de -65mV à -60mV) ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Hyperpolarisation" },
      { value: 'b', text: "b) Potentiel de repos" },
      { value: 'c', text: "c) Dépolarisation" },
      { value: 'd', text: "d) Période réfractaire" }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part4_P6]",
    referenceText: "moins négatives => dépolarisation de la membrane i.e., potentiels excitateurs."
  },
  {
    id: 'bio4_q4',
    text: "Un Potentiel Post-Synaptique Inhibiteur (PPSI) correspond typiquement à :", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Une dépolarisation de la membrane postsynaptique." },
      { value: 'b', text: "b) Une hyperpolarisation de la membrane postsynaptique." },
      { value: 'c', text: "c) Le seuil de déclenchement du potentiel d'action." },
      { value: 'd', text: "d) Une absence de changement du potentiel de membrane." }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part4_P7]",
    referenceText: "Potentiel inhibiteur => HYPERPOLARISATION... PPSI [graphique montre hyperpolarisation]."
  },
  {
    id: 'bio4_q5',
    text: "Quelle caractéristique principale distingue les potentiels locaux (PPS, potentiel récepteur...) du potentiel d'action ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Les potentiels locaux ont une amplitude constante, le PA a une amplitude variable." },
      { value: 'b', text: "b) Les potentiels locaux ont une amplitude variable (graduée), le PA a une amplitude constante (tout ou rien)." },
      { value: 'c', text: "c) Les potentiels locaux se propagent sans atténuation, le PA s'atténue avec la distance." },
      { value: 'd', text: "d) Seul le potentiel d'action implique des mouvements d'ions." }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part4_P6 & P8]",
    referenceText: "potentiels locaux... présentent une amplitude plus ou moins grande... Contrairement aux potentiels locaux... un potentiel d'action présente une amplitude constante."
  },
  {
    id: 'bio4_q6',
    text: "Quels mouvements ioniques peuvent typiquement provoquer une DÉPOLARISATION (PPSE) ? (Choisissez toutes les réponses plausibles)", // Q 1 rep juste (selon le cours, l'entrée Na+ est l'exemple principal)
    options: [
      { value: 'a', text: "a) Une entrée d'ions Cl- dans la cellule." }, // Hyperpolarisation/Inhibition
      { value: 'b', text: "b) Une sortie d'ions K+ de la cellule." }, // Hyperpolarisation/Repolarisation
      { value: 'c', text: "c) Une entrée d'ions Na+ dans la cellule." },
      { value: 'd', text: "d) Une sortie d'ions Ca2+ de la cellule." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part4_P7]",
    referenceText: "Potentiel excitateur => DEPOLARISATION. Cas entrée d'ions positifs dans la cellule nerveuse." // Na+ est l'exemple canonique.
  },
  {
    id: 'bio4_q7',
    text: "Quels mouvements ioniques peuvent typiquement provoquer une HYPERPOLARISATION (PPSI) ? (Choisissez toutes les réponses plausibles)", // Q 2 rep justes (3/11)
    options: [
      { value: 'a', text: "a) Une sortie d'ions K+ de la cellule." },
      { value: 'b', text: "b) Une entrée d'ions Na+ dans la cellule." }, // Dépolarisation
      { value: 'c', text: "c) Une entrée d'ions Cl- dans la cellule." },
      { value: 'd', text: "d) Une entrée d'ions Ca2+ dans la cellule." } // Dépolarisation
    ],
    correctAnswers: ['a', 'c'],
    referenceCours: "[BIO201_Part4_P7]",
    referenceText: "Potentiel inhibiteur => HYPERPOLARISATION. Cas sortie d'ions positifs de la cellule nerveuse. Cas entrée d'ions négatifs de la cellule nerveuse."
  },
  // Potentiel d'Action (P8-9)
  {
    id: 'bio4_q8',
    text: "Quelle est la condition INDISPENSABLE pour qu'un potentiel d'action (PA) soit déclenché au niveau du site générateur ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Une hyperpolarisation suffisante." },
      { value: 'b', text: "b) L'arrivée d'un seul potentiel post-synaptique, quelle que soit son amplitude." },
      { value: 'c', text: "c) Le potentiel générateur doit atteindre ou dépasser une valeur seuil de dépolarisation." },
      { value: 'd', text: "d) La fermeture de tous les canaux ioniques." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part4_P8]",
    referenceText: "Il [le PA] est généré lorsqu'un potentiel générateur atteint une valeur seuil (ou critique)."
  },
  {
    id: 'bio4_q9',
    text: "Identifiez la séquence correcte des phases principales d'un potentiel d'action.", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Repolarisation -> Dépolarisation -> Hyperpolarisation" },
      { value: 'b', text: "b) Dépolarisation -> Hyperpolarisation -> Repolarisation" },
      { value: 'c', text: "c) Hyperpolarisation -> Dépolarisation -> Repolarisation" },
      { value: 'd', text: "d) Dépolarisation -> Repolarisation -> Hyperpolarisation" }
    ],
    correctAnswers: ['d'],
    referenceCours: "[BIO201_Part4_P8 & P9]",
    referenceText: "...impliquant : une phase de dépolarisation, suivie d'une phase de repolarisation, et finalement d'une phase d'hyperpolarisation / retour au repos."
  },
  {
    id: 'bio4_q10',
    text: "Quel événement ionique est principalement responsable de la phase de DÉPOLARISATION rapide du potentiel d'action ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) L'ouverture des canaux K+ voltage-dépendants et la sortie de K+." },
      { value: 'b', text: "b) L'ouverture des canaux Na+ voltage-dépendants et l'entrée de Na+." },
      { value: 'c', text: "c) La fermeture des canaux Cl-." },
      { value: 'd', text: "d) L'action de la pompe Na+/K+." }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part4_P9]",
    referenceText: "3. Dépolarisation => Ouverture canaux Na+..." // Schéma montre entrée Na+
  },
  {
    id: 'bio4_q11',
    text: "Quels événements ioniques sont principalement responsables de la phase de REPOLARISATION du potentiel d'action ?", // Q 2 rep justes (4/11)
    options: [
      { value: 'a', text: "a) L'ouverture continue des canaux Na+ voltage-dépendants." },
      { value: 'b', text: "b) L'inactivation (fermeture) des canaux Na+ voltage-dépendants." },
      { value: 'c', text: "c) L'ouverture des canaux K+ voltage-dépendants." },
      { value: 'd', text: "d) L'entrée massive de Ca2+." },
      { value: 'e', text: "e) La sortie de K+ hors de la cellule." }
    ],
    correctAnswers: ['b', 'c', 'e'], // b et c entraînent e. Considérons b et c comme les mécanismes canaux. Question à 2 réponses.
    // Re-formulation :
    text: "Quels événements liés aux canaux ioniques sont principalement responsables de la phase de REPOLARISATION du potentiel d'action ?", // Question à 2 réponses justes (4/11)
    options: [
      { value: 'a', text: "a) L'ouverture continue des canaux Na+ voltage-dépendants." },
      { value: 'b', text: "b) L'inactivation (fermeture) des canaux Na+ voltage-dépendants." },
      { value: 'c', text: "c) L'ouverture des canaux K+ voltage-dépendants." },
      { value: 'd', text: "d) L'ouverture des canaux Cl-." }
    ],
    correctAnswers: ['b', 'c'],
    referenceCours: "[BIO201_Part4_P9]",
    referenceText: "4. Re-polarisation [associée à] Ouverture canaux K+... [et inactivation implicite des canaux Na+ après le pic]." // Le schéma montre la flèche 4 (repolarisation) associée à l'ouverture K+. L'inactivation Na+ est nécessaire pour que K+ domine.
  },
  {
    id: 'bio4_q12',
    text: "À quoi est due la phase d'hyperpolarisation post-potentiel d'action ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) À une entrée prolongée de Na+." },
      { value: 'b', text: "b) À l'inactivation complète de la pompe Na+/K+." },
      { value: 'c', text: "c) À la fermeture lente des canaux K+ voltage-dépendants, maintenant une sortie de K+." },
      { value: 'd', text: "d) À l'ouverture des canaux Cl-." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part4_P9]",
    referenceText: "5. Hyperpolarisation / retour repos [due à la fermeture plus lente des canaux K+]." // Implicite par la flèche 5 qui descend sous le repos avant de remonter.
  },
  // Conduction (P11-16)
  {
    id: 'bio4_q13',
    text: "Comment se propage un potentiel local (ex: PPSE) le long d'une dendrite ou d'un soma ?", // Q 2 rep justes (5/11)
    options: [
      { value: 'a', text: "a) De manière active, en se regénérant à chaque point." }, // Propagation PA
      { value: 'b', text: "b) Passivement, par courants locaux." },
      { value: 'c', text: "c) Son amplitude diminue avec la distance (propagation décrémentielle)." },
      { value: 'd', text: "d) Son amplitude reste constante quelle que soit la distance." }, // Propagation PA
      { value: 'e', text: "e) Uniquement par conduction saltatoire." } // Propagation PA myélinisé
    ],
    correctAnswers: ['b', 'c'],
    referenceCours: "[BIO201_Part4_P11]",
    referenceText: "Les potentiels récepteurs ou post-synaptiques, se propagent passivement jusqu'au site générateur => décrément des valeurs d'amplitude avec la distance."
  },
  {
    id: 'bio4_q14',
    text: "Quelle est la conséquence de la période réfractaire qui suit un potentiel d'action ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Elle augmente la vitesse de conduction du PA." },
      { value: 'b', text: "b) Elle permet la sommation temporelle des PA." }, // Empêche la fusion
      { value: 'c', text: "c) Elle assure la propagation unidirectionnelle du PA le long de l'axone." },
      { value: 'd', text: "d) Elle diminue l'amplitude du PA suivant." } // Amplitude PA est constante
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part4_P12]",
    referenceText: "Cette réfractorité est fondamentale: un PA ne peut pas se propager à rebours => conduction unidirectionnelle..."
  },
  {
    id: 'bio4_q15',
    text: "Quels facteurs augmentent la vitesse de conduction du potentiel d'action le long d'un axone ? (Choisissez toutes les réponses applicables)", // Q 2 rep justes (6/11)
    options: [
      { value: 'a', text: "a) Un diamètre d'axone plus petit." },
      { value: 'b', text: "b) Un diamètre d'axone plus grand." },
      { value: 'c', text: "c) L'absence de gaine de myéline." },
      { value: 'd', text: "d) La présence d'une gaine de myéline." },
      { value: 'e', text: "e) Une température corporelle plus basse." }
    ],
    correctAnswers: ['b', 'd'],
    referenceCours: "[BIO201_Part4_P15]",
    referenceText: "Premier paramètre: le diamètre de l'axone => ↑ diamètre ... entraîne une ↑ vitesse... Deuxième paramètre: la myéline => la présence de myéline entraîne une ↑ vitesse..."
  },
  {
    id: 'bio4_q16',
    text: "Pourquoi un axone de plus grand diamètre conduit-il le potentiel d'action plus rapidement ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Parce qu'il a plus de canaux sodiques." },
      { value: 'b', text: "b) Parce que sa résistance interne au passage du courant passif est plus faible." },
      { value: 'c', text: "c) Parce qu'il est toujours myélinisé." },
      { value: 'd', text: "d) Parce que le potentiel d'action a une plus grande amplitude." }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part4_P15]",
    referenceText: "Pourquoi? L'augmentation du diamètre de l'axone s'accompagne d'une diminution de la résistance interne au passage passif du courant."
  },
  {
    id: 'bio4_q17',
    text: "Comment la myéline accélère-t-elle la conduction du potentiel d'action ?", // Q 2 rep justes (7/11)
    options: [
      { value: 'a', text: "a) En augmentant le nombre de canaux ioniques sur toute la longueur de l'axone." },
      { value: 'b', text: "b) En agissant comme un isolant électrique." },
      { value: 'c', text: "c) En réduisant la fuite de courant passif à travers la membrane entre les nœuds." },
      { value: 'd', text: "d) En diminuant le diamètre de l'axone." },
      { value: 'e', text: "e) En augmentant la température de l'axone." }
    ],
    correctAnswers: ['b', 'c'],
    referenceCours: "[BIO201_Part4_P15]",
    referenceText: "Pourquoi? La myéline joue le rôle d'isolant et empêche la fuite de courant passif."
  },
  {
    id: 'bio4_q18',
    text: "Comment appelle-t-on le mode de conduction du potentiel d'action dans les fibres myélinisées ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Conduction continue" },
      { value: 'b', text: "b) Conduction passive" },
      { value: 'c', text: "c) Conduction décrémentielle" },
      { value: 'd', text: "d) Conduction saltatoire" }
    ],
    correctAnswers: ['d'],
    referenceCours: "[BIO201_Part4_P16]",
    referenceText: "fibre myélinisée => conduction dite saltatoire."
  },
  {
    id: 'bio4_q19',
    text: "Où se régénère le potentiel d'action lors de la conduction saltatoire ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Sur toute la surface de l'axone sous la myéline." },
      { value: 'b', text: "b) Uniquement au niveau du corps cellulaire." },
      { value: 'c', text: "c) Au niveau des nœuds de Ranvier." },
      { value: 'd', text: "d) Au niveau des terminaisons axonales uniquement." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part4_P16]",
    referenceText: "Conduction saltatoire d'un nœud de Ranvier au nœud de Ranvier suivant."
  },
  // Transmission Synaptique (P18-22)
  {
    id: 'bio4_q20',
    text: "Qu'est-ce qu'une synapse ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Une cellule gliale spécialisée." },
      { value: 'b', text: "b) La partie centrale d'un neurone contenant le noyau." },
      { value: 'c', text: "c) Une jonction fonctionnelle entre deux neurones (ou neurone/effecteur) pour la transmission de l'information." },
      { value: 'd', text: "d) Une interruption dans la gaine de myéline." } // Noeud de Ranvier
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part4_P18]",
    referenceText: "Ce sont des contacts fonctionnels entre neurones. Elles sont le lieu de transfert, permettant la transmission du message nerveux..."
  },
  {
    id: 'bio4_q21',
    text: "Quels sont les deux principaux types de synapses ?", // Q 2 rep justes (8/11)
    options: [
      { value: 'a', text: "a) Synapses excitatrices" },
      { value: 'b', text: "b) Synapses chimiques" },
      { value: 'c', text: "c) Synapses inhibitrices" },
      { value: 'd', text: "d) Synapses électriques" },
      { value: 'e', text: "e) Synapses myélinisées" }
    ],
    correctAnswers: ['b', 'd'],
    referenceCours: "[BIO201_Part4_P18]",
    referenceText: "On distingue principalement deux types de synapses : les synapses chimiques... les synapses électriques..."
  },
  {
    id: 'bio4_q22',
    text: "Quelle structure permet le passage direct du courant ionique entre les neurones dans une synapse électrique ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Les vésicules synaptiques" },
      { value: 'b', text: "b) La fente synaptique" },
      { value: 'c', text: "c) La jonction communicante (Gap junction)" },
      { value: 'd', text: "d) Les récepteurs postsynaptiques" }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part4_P19]",
    referenceText: "Ce flux de courant transit via une structure spécialisée => la jonction communicante (ou gap junction)."
  },
  {
    id: 'bio4_q23',
    text: "Quelles sont les caractéristiques des synapses électriques ? (Choisissez toutes les réponses applicables)", // Q 2 rep justes (9/11)
    options: [
      { value: 'a', text: "a) Elles utilisent un neurotransmetteur comme messager." }, // Synapse chimique
      { value: 'b', text: "b) Elles permettent une transmission très rapide du signal." },
      { value: 'c', text: "c) Elles possèdent une large fente synaptique." }, // Synapse chimique
      { value: 'd', text: "d) Elles peuvent synchroniser l'activité de populations de neurones." },
      { value: 'e', text: "e) Elles impliquent des canaux appelés connexons." }
    ],
    correctAnswers: ['b', 'd', 'e'], // 3 réponses. Ajustons la question/options pour n'avoir que 2 réponses.
    // Re-formulation :
    text: "Quelles sont deux caractéristiques importantes des synapses électriques ?", // Question à 2 réponses justes (9/11)
    options: [
      { value: 'a', text: "a) Libération de neurotransmetteurs." }, // Chimique
      { value: 'b', text: "b) Transmission rapide et directe du courant." },
      { value: 'c', text: "c) Présence d'une fente synaptique large." }, // Chimique
      { value: 'd', text: "d) Rôle dans la synchronisation de l'activité cellulaire." }
    ],
    correctAnswers: ['b', 'd'],
    referenceCours: "[BIO201_Part4_P19]",
    referenceText: "Elles laissent passer le courant électrique directement... permet la synchronisation rapide..."
  },
  {
    id: 'bio4_q24',
    text: "Quel est le messager utilisé pour transmettre l'information dans une synapse chimique ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Un courant électrique direct." },
      { value: 'b', text: "b) Un neurotransmetteur." },
      { value: 'c', text: "c) Une hormone." },
      { value: 'd', text: "d) Une onde de pression." }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part4_P18 & P20]",
    referenceText: "les synapses chimiques => implique la sécrétion... d'un neurotransmetteur... Les neurotransmetteurs agissent comme des messagers chimiques..."
  },
  {
    id: 'bio4_q25',
    text: "Où sont stockés les neurotransmetteurs dans la terminaison présynaptique avant leur libération ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Dans les mitochondries." },
      { value: 'b', text: "b) Librement dans le cytoplasme." },
      { value: 'c', text: "c) Dans les vésicules synaptiques." },
      { value: 'd', text: "d) Dans les récepteurs postsynaptiques." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part4_P20 & P21]",
    referenceText: "...se trouve de petits organites membranaires appelées vésicules synaptiques... ces vésicules contiennent les neurotransmetteurs."
  },
  {
    id: 'bio4_q26',
    text: "Quel événement déclenche DIRECTEMENT l'ouverture des canaux calciques (Ca2+) voltage-dépendants dans la terminaison présynaptique ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) La liaison du neurotransmetteur." },
      { value: 'b', text: "b) L'arrivée d'un potentiel d'action (dépolarisation)." },
      { value: 'c', text: "c) L'action de la pompe Na+/K+." },
      { value: 'd', text: "d) Une hyperpolarisation de la membrane." }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part4_P21]",
    referenceText: "2 Un potentiel d'action envahit la terminaison présynaptique. 3 La dépolarisation... provoque l'ouverture des canaux calciques activés par le voltage."
  },
  {
    id: 'bio4_q27',
    text: "Quelle est la conséquence immédiate de l'entrée d'ions Ca2+ dans la terminaison présynaptique ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) La repolarisation de la membrane." },
      { value: 'b', text: "b) La synthèse de nouveaux neurotransmetteurs." },
      { value: 'c', text: "c) La fusion des vésicules synaptiques avec la membrane et la libération du neurotransmetteur (exocytose)." },
      { value: 'd', text: "d) La fermeture des canaux potassiques." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part4_P21]",
    referenceText: "4 Entrée de Ca2+ par les canaux. 5 Le Ca2+ fait fusionner les vésicules avec la membrane présynaptique. 6 Le transmetteur est libéré par exocytose..."
  },
  {
    id: 'bio4_q28',
    text: "Que se passe-t-il après la liaison du neurotransmetteur aux récepteurs postsynaptiques ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Le neurotransmetteur est immédiatement détruit par le récepteur." },
      { value: 'b', text: "b) Des canaux ioniques s'ouvrent ou se ferment sur la membrane postsynaptique." },
      { value: 'c', text: "c) Un potentiel d'action est systématiquement déclenché dans le neurone postsynaptique." },
      { value: 'd', text: "d) Le neurotransmetteur est recapturé par le neurone présynaptique sans autre effet." }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part4_P21]",
    referenceText: "7 Le transmetteur se lie aux molécules du récepteur... 8 Ouverture ou fermeture des canaux postsynaptiques."
  },
  {
    id: 'bio4_q29',
    text: "Pourquoi est-il important que le neurotransmetteur soit rapidement éliminé de la fente synaptique ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Pour économiser de l'énergie." },
      { value: 'b', text: "b) Pour permettre la synthèse de nouveaux neurotransmetteurs." },
      { value: 'c', text: "c) Pour permettre une nouvelle transmission synaptique précise et éviter une stimulation continue du neurone postsynaptique." },
      { value: 'd', text: "d) Pour activer les cellules gliales." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part4_P21]",
    referenceText: "10 Élimination du neurotransmetteur par recapture gliale ou dégradation enzymatique." // L'élimination stoppe le signal et permet de nouveaux signaux distincts.
  },
  {
    id: 'bio4_q30',
    text: "Identifiez les mécanismes possibles d'élimination/inactivation du neurotransmetteur dans la fente synaptique. (Choisissez toutes les réponses applicables)", // Q 2 rep justes (10/11)
    options: [
      { value: 'a', text: "a) Recapture par le neurone présynaptique." }, // Implicite dans "élimination"
      { value: 'b', text: "b) Dégradation par des enzymes présentes dans la fente." },
      { value: 'c', text: "c) Diffusion hors de la fente synaptique." }, // Mécanisme passif aussi possible
      { value: 'd', text: "d) Absorption par les récepteurs postsynaptiques." }, // Liaison, pas élimination
      { value: 'e', text: "e) Recapture par les cellules gliales environnantes." }
    ],
    correctAnswers: ['a', 'b', 'e'], // Le texte mentionne explicitement recapture gliale et dégradation. Recapture présynaptique est un mécanisme majeur aussi. Diffusion est possible mais moins "actif". Visons 2 réponses.
    // Re-formulation :
    text: "Quels mécanismes sont mentionnés pour l'élimination du neurotransmetteur de la fente synaptique ?", // Question à 2 réponses justes (10/11)
    options: [
      { value: 'a', text: "a) Recapture par les mitochondries." },
      { value: 'b', text: "b) Dégradation enzymatique." },
      { value: 'c', text: "c) Diffusion passive vers le liquide céphalo-rachidien." },
      { value: 'd', text: "d) Recapture par les cellules gliales." }
    ],
    correctAnswers: ['b', 'd'],
    referenceCours: "[BIO201_Part4_P21]",
    referenceText: "10 Élimination du neurotransmetteur par recapture gliale ou dégradation enzymatique."
  },
  // Intégration (P24-26)
  {
    id: 'bio4_q31',
    text: "Où se produit principalement l'intégration des signaux (sommation des potentiels locaux) pour décider de déclencher ou non un potentiel d'action ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Au niveau des dendrites." },
      { value: 'b', text: "b) Dans le corps cellulaire (soma)." },
      { value: 'c', text: "c) Au niveau du site générateur (cône axonique / segment initial)." },
      { value: 'd', text: "d) Au niveau de la terminaison axonale." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part4_P24]",
    referenceText: "L'intégration de l'information - au site générateur..." // Le site générateur est souvent le cône axonique.
  },
  {
    id: 'bio4_q32',
    text: "Qu'est-ce que la sommation spatiale ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) L'addition de potentiels locaux provenant de la même synapse mais arrivant très rapidement." },
      { value: 'b', text: "b) L'addition de potentiels locaux provenant de différentes synapses et arrivant à peu près au même moment." },
      { value: 'c', text: "c) L'augmentation de l'amplitude d'un seul potentiel post-synaptique." },
      { value: 'd', text: "d) La diminution de l'amplitude d'un potentiel local avec la distance." } // Propagation décrémentielle
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part4_P24 & P25]",
    referenceText: "spatiale => sommation des signaux issus de différentes sources (e.g., synapses)... addition de tous les PPS générés simultanément au niveau des différentes synapses..."
  },
  {
    id: 'bio4_q33',
    text: "Qu'est-ce que la sommation temporelle ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) L'addition de potentiels locaux provenant de différentes synapses arrivant en même temps." },
      { value: 'b', text: "b) L'addition de potentiels locaux provenant de la même synapse et se succédant très rapidement dans le temps." },
      { value: 'c', text: "c) La durée totale d'un potentiel d'action." },
      { value: 'd', text: "d) La mesure du temps de conduction le long de l'axone." }
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part4_P24 & P26]",
    referenceText: "temporelle => sommation des signaux très proches temporellement... addition de tous les PPS générés au niveau d'une même synapse et lorsque ces PPS se succèdent sur un intervalle de temps très court."
  },
   {
    id: 'bio4_q34',
    text: "Quel est le résultat de l'intégration synaptique si la somme des PPSE et des PPSI au niveau du site générateur atteint le seuil de déclenchement ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Le neurone reste au potentiel de repos." },
      { value: 'b', text: "b) Un potentiel post-synaptique inhibiteur (PPSI) est généré." },
      { value: 'c', text: "c) Un potentiel d'action (PA) est déclenché." },
      { value: 'd', text: "d) Le neurone s'hyperpolarise fortement." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part4_P8 & P24]", // Logique combinée
    referenceText: "Le potentiel générateur [résultat de la somme]... si atteint une valeur seuil => [PA] est généré."
  },
  // Questions Redondantes / Pièges / Variées
   {
    id: 'bio4_q35',
    text: "Laquelle de ces affirmations concernant le potentiel d'action est FAUSSE ?", // Q 1 rep juste (Négation)
    options: [
      { value: 'a', text: "a) Il a une amplitude constante (loi du tout ou rien)." },
      { value: 'b', text: "b) Il se propage sans atténuation le long de l'axone." },
      { value: 'c', text: "c) Son amplitude augmente si l'intensité du stimulus supraliminaire augmente." }, // Faux, seule la fréquence augmente
      { value: 'd', text: "d) Il est suivi d'une période réfractaire." }
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part4_P8, P12]",
    referenceText: "amplitude constante... se propager... sans atténuation... période réfractaire..." // L'amplitude est 'tout ou rien', non gradée par l'intensité supra-seuil.
  },
  {
    id: 'bio4_q36',
    text: "Identifiez les caractéristiques des potentiels LOCAUX. (Choisissez toutes les réponses applicables)", // Q 3 rep justes (4/9)
    options: [
      { value: 'a', text: "a) Amplitude constante (tout ou rien)." }, // PA
      { value: 'b', text: "b) Amplitude variable (graduée)." },
      { value: 'c', text: "c) Propagation passive et décrémentielle." },
      { value: 'd', text: "d) Peuvent être des dépolarisations (excitateurs) ou des hyperpolarisations (inhibiteurs)." },
      { value: 'e', text: "e) Sont toujours suivis d'une période réfractaire." }, // PA
      { value: 'f', text: "f) Peuvent se sommer (spatialement et temporellement)." } // PPS/PR se somment pour donner PG
    ],
    correctAnswers: ['b', 'c', 'd', 'f'], // 4 réponses justes ici. Ajustons.
    // Re-formulation :
    text: "Identifiez les caractéristiques typiques des potentiels LOCAUX (PPS, potentiel récepteur).", // Question à 3 réponses justes (4/9)
    options: [
      { value: 'a', text: "a) Amplitude constante." },
      { value: 'b', text: "b) Amplitude graduée (variable)." },
      { value: 'c', text: "c) Propagation active sans décrément." },
      { value: 'd', text: "d) Propagation passive avec décrément." },
      { value: 'e', text: "e) Peuvent se sommer." }
    ],
    correctAnswers: ['b', 'd', 'e'],
    referenceCours: "[BIO201_Part4_P6, P11, P24]",
    referenceText: "potentiels locaux... amplitude plus ou moins grande... se propagent passivement... décrément... sommation peut être spatiale... temporelle..."
  },
  {
    id: 'bio4_q37',
    text: "Laquelle de ces affirmations décrit le mieux la conduction saltatoire ?", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) La propagation lente et continue du PA le long d'un axone non myélinisé." },
      { value: 'b', text: "b) La diminution de l'amplitude du PA avec la distance." }, // Potentiel local
      { value: 'c', text: "c) La propagation 'par sauts' du PA entre les nœuds de Ranvier sur un axone myélinisé." },
      { value: 'd', text: "d) Le passage direct du courant entre deux neurones via une jonction communicante." } // Synapse électrique
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part4_P16]",
    referenceText: "fibre myélinisée => conduction dite saltatoire... Conduction saltatoire d'un nœud de Ranvier au nœud de Ranvier suivant."
  },
   {
    id: 'bio4_q38',
    text: "Quelles sont les différences essentielles entre une synapse chimique et une synapse électrique ? (Choisissez toutes les affirmations correctes)", // Question à 3 réponses justes (5/9)
    options: [
      { value: 'a', text: "a) La synapse chimique utilise un neurotransmetteur, l'électrique un courant ionique direct." },
      { value: 'b', text: "b) La synapse électrique a une fente synaptique plus large que la chimique." }, // Inverse est vrai
      { value: 'c', text: "c) La transmission est généralement plus rapide dans une synapse électrique." },
      { value: 'd', text: "d) Seules les synapses chimiques peuvent être inhibitrices." }, // L'effet dépend du NT et du récepteur; élec sont svt excitatrices mais pas exclusivement.
      { value: 'e', text: "e) Les synapses électriques utilisent des jonctions communicantes (gap junctions)." }
    ],
    correctAnswers: ['a', 'c', 'e'],
    referenceCours: "[BIO201_Part4_P18, P19, P20]",
    referenceText: "chimiques => implique... neurotransmetteur... électriques => implique... courant... électriques... transit via... jonction communicante... permet la synchronisation rapide... Chimique: L'espace... fente synaptique [plus grand]."
  },
  {
    id: 'bio4_q39',
    text: "L'arrivée d'un potentiel d'action dans la terminaison présynaptique d'une synapse chimique provoque TOUJOURS :", // Q 1 rep juste (Piège: "Toujours")
    options: [
      { value: 'a', text: "a) La libération immédiate de tous les neurotransmetteurs contenus dans la terminaison." },
      { value: 'b', text: "b) Le déclenchement d'un potentiel d'action dans le neurone postsynaptique." }, // Dépend de la somme des PPS et du seuil
      { value: 'c', text: "c) L'ouverture de canaux Ca2+ voltage-dépendants et une entrée de Ca2+." },
      { value: 'd', text: "d) Une hyperpolarisation de la membrane postsynaptique." } // Peut être PPSE ou PPSI
    ],
    correctAnswers: ['c'],
    referenceCours: "[BIO201_Part4_P21]",
    referenceText: "2 Un potentiel d'action envahit... 3 La dépolarisation... provoque l'ouverture des canaux calciques... 4 Entrée de Ca2+..." // Cette étape est déclenchée par le PA pré.
  },
  {
    id: 'bio4_q40',
    text: "La sommation temporelle est plus efficace lorsque les potentiels post-synaptiques successifs arrivent à la synapse :", // Q 1 rep juste
    options: [
      { value: 'a', text: "a) Avec un long intervalle de temps entre eux." },
      { value: 'b', text: "b) Avec un très court intervalle de temps entre eux." },
      { value: 'c', text: "c) En alternant entre excitateurs et inhibiteurs." },
      { value: 'd', text: "d) Sur des dendrites très éloignées du site générateur." } // Concerne plutôt sommation spatiale et atténuation
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part4_P26]",
    referenceText: "sommation temporelle... lorsque ces PPS se succèdent sur un intervalle de temps très court."
  },
   {
    id: 'bio4_q41',
    text: "Un potentiel d'action est un phénomène de type 'tout ou rien'. Qu'est-ce que cela signifie ?", // Q 1 rep juste (Redondance/Clarification)
    options: [
      { value: 'a', text: "a) Soit le neurone est actif, soit il est mort." },
      { value: 'b', text: "b) Si le seuil est atteint, le PA se produit toujours avec la même amplitude ; s'il n'est pas atteint, aucun PA ne se produit." },
      { value: 'c', text: "c) Tous les neurones de l'organisme déchargent en même temps ou pas du tout." },
      { value: 'd', text: "d) Le potentiel d'action ne peut être que dépolarisant, jamais hyperpolarisant." } // Le PA lui-même est une dépolarisation suivie de repolarisation/hyperpolarisation
    ],
    correctAnswers: ['b'],
    referenceCours: "[BIO201_Part4_P8]",
    referenceText: "Contrairement aux potentiels locaux..., un potentiel d'action présente une amplitude constante... Il est généré lorsqu'un potentiel générateur atteint une valeur seuil..." // Implique le tout ou rien.
  },
   {
    id: 'bio4_q42',
    text: "Quelles affirmations concernant la myélinisation sont correctes ? (Choisissez toutes les réponses applicables)", // Question à 3 réponses justes (6/9) // Redondance
    options: [
      { value: 'a', text: "a) Elle est réalisée par les astrocytes dans le SNC." }, // Oligodendrocytes
      { value: 'b', text: "b) Elle augmente la vitesse de conduction du potentiel d'action." },
      { value: 'c', text: "c) Elle diminue la résistance interne de l'axone." }, // C'est le diamètre qui fait ça
      { value: 'd', text: "d) Elle permet la conduction saltatoire." },
      { value: 'e', text: "e) Elle est présente sur tous les axones du système nerveux." }, // Non, fibres amyéliniques existent
      { value: 'f', text: "f) Elle agit comme un isolant électrique." }
    ],
    correctAnswers: ['b', 'd', 'f'],
    referenceCours: "[BIO201_Part4_P15, P16]",
    referenceText: "présence de myéline entraîne une ↑ vitesse... La myéline joue le rôle d'isolant... fibre myélinisée => conduction dite saltatoire."
  },
   {
    id: 'bio4_q43',
    text: "Associez le type de potentiel à sa caractéristique principale. (Choisissez les 2 associations correctes)", // Question à 2 réponses justes (11/11)
    options: [
      { value: 'a', text: "a) Potentiel d'action - Amplitude graduée" },
      { value: 'b', text: "b) Potentiel post-synaptique - Amplitude constante (tout ou rien)" },
      { value: 'c', text: "c) Potentiel local - Propagation décrémentielle" },
      { value: 'd', text: "d) Potentiel d'action - Propagation décrémentielle" },
      { value: 'e', text: "e) Potentiel local - Amplitude variable (graduée)" }
    ],
    correctAnswers: ['c', 'e'],
    referenceCours: "[BIO201_Part4_P6, P8, P11]",
    referenceText: "potentiels locaux... amplitude plus ou moins grande [variable]... se propagent passivement... décrément... potentiel d'action présente une amplitude constante..."
  },
  {
    id: 'bio4_q44',
    text: "Quel ion joue un rôle clé dans le déclenchement de l'exocytose des vésicules synaptiques au niveau présynaptique ?", // Question à 1 réponse juste // Redondance
    options: [
      { value: 'a', text: "a) Sodium (Na+)" },
      { value: 'b', text: "b) Potassium (K+)" },
      { value: 'c', text: "c) Chlorure (Cl-)" },
      { value: 'd', text: "d) Calcium (Ca2+)" }
    ],
    correctAnswers: ['d'],
    referenceCours: "[BIO201_Part4_P21]",
    referenceText: "Entrée de Ca2+... Le Ca2+ fait fusionner les vésicules..."
  },

  // Fin des questions pour BIO201 - Partie 4 (Total: 44 questions générées)
];


const quizDataBio201 = [].concat(quizDataBio1, quizDataBio2, quizDataBio3, quizDataBio4);

// Optionnel mais utile pour vérifier dans la console du navigateur :
console.log(`Total des questions chargées pour BIO201: ${quizDataBio201.length}`);
