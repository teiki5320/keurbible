import type { Objet, Rubrique, SousRubrique } from "../../types";

export const rubrique: Rubrique = {
  slug: "art-chretien",
  nom: "Art chrétien",
  titre: "Art chrétien : tableaux, icônes et versets muraux",
  description:
    "Tableaux de la Cène, icônes, versets muraux, Jésus noir et Vierge noire : l'art chrétien pour décorer la maison ou à offrir.",
  intro:
    "Un tableau, une icône ou un verset au mur disent la foi d'une maison sans un mot. Chaque tradition a ses images : les orthodoxes prient devant les icônes, les catholiques aiment les scènes de la vie du Christ et de la Vierge, les protestants et les évangéliques préfèrent souvent un verset biblique bien mis en valeur. L'art chrétien d'Afrique et de la diaspora, avec ses Christ noirs et ses scènes bibliques aux couleurs vives, a aussi toute sa place. Voici de quoi trouver l'image qui vous parle, pour votre salon ou pour un cadeau.",
  choisir: [
    "Pensez d'abord à la pièce : une grande toile de la Cène pour la salle à manger, une icône dans le coin prière, un verset doux dans la chambre d'un enfant.",
    "Pour un proche orthodoxe ou catholique, une icône est un cadeau très apprécié ; pour un protestant ou un évangélique, un verset mural sera souvent mieux reçu.",
    "Choisissez une image dans laquelle on se reconnaît : un Christ africain ou une Sainte Famille noire touchent particulièrement les familles de la diaspora.",
    "Pour un verset mural, choisissez un texte qui a du sens pour celui qui le recevra : un Psaume de confiance, un verset de mariage, une bénédiction pour un enfant.",
  ],
  faq: [
    {
      q: "Qu'est-ce qu'une icône ?",
      a: "Une icône est une image sainte peinte selon des règles anciennes, sur bois le plus souvent. Pour les orthodoxes, elle est une fenêtre ouverte sur Dieu, devant laquelle on prie ; les catholiques l'aiment aussi beaucoup. On trouve des icônes peintes à la main et des reproductions. Voir nos [icônes](/art-chretien/icones).",
    },
    {
      q: "Pourquoi représenter Jésus avec la peau noire ?",
      a: "Chaque culture a représenté le Christ avec ses propres traits, en Europe comme en Éthiopie ou en Amérique latine. Un Christ noir ne prétend pas montrer à quoi il ressemblait : il dit que l'Évangile s'adresse à tous les peuples. Beaucoup de familles africaines y voient une image qui leur parle. Voir notre sélection [Jésus noir et Vierge noire](/art-chretien/jesus-noir-et-vierge-noire).",
    },
    {
      q: "Quel verset choisir pour décorer la maison ?",
      a: "Le Psaume 23 (22) et Josué 1,9 sont parmi les plus aimés, pour la confiance qu'ils expriment. Pour des jeunes mariés, on choisit souvent 1 Corinthiens 13 ; pour un enfant, une bénédiction comme Nombres 6,24-26. Nos idées sont dans le [Top 10 des versets muraux](/top-10/versets-muraux).",
    },
  ],
};

export const sousRubriques: SousRubrique[] = [
  {
    slug: "tableaux-et-toiles",
    rubrique: "art-chretien",
    nom: "Tableaux et toiles",
    titre: "Tableaux chrétiens : la Cène, la Nativité, le Bon Pasteur",
    description:
      "Toile de la Cène, tableau de la Nativité, Bon Pasteur, scènes bibliques afro : des tableaux chrétiens pour le salon ou la chambre.",
    intro:
      "Un tableau chrétien donne un visage à la foi de la maison. La Cène trouve souvent sa place dans la salle à manger, la Nativité s'installe pour Noël, le Bon Pasteur veille sur une chambre. Les toiles de style africain, aux couleurs franches, apportent beaucoup de vie à un salon.",
  },
  {
    slug: "icones",
    rubrique: "art-chretien",
    nom: "Icônes",
    titre: "Icônes : Vierge de tendresse, Christ, Trinité",
    description:
      "Icône de la Vierge de tendresse, Christ Pantocrator, Trinité de Roublev, icônes de fêtes et icônes éthiopiennes : bien choisir une icône.",
    intro:
      "L'icône est au cœur de la prière orthodoxe, et les catholiques l'aiment de plus en plus. Peinte selon des règles très anciennes, elle ne cherche pas à faire joli mais à tourner le regard vers Dieu. On la place dans le coin prière, avec une bougie ou une lampe à huile.",
  },
  {
    slug: "versets-muraux",
    rubrique: "art-chretien",
    nom: "Versets muraux",
    titre: "Versets muraux : la Parole de Dieu au mur",
    description:
      "Plaques, toiles, cadres et stickers de versets bibliques : Psaume 23, Josué 1,9, Jérémie 29,11, versets de mariage et de bénédiction.",
    intro:
      "Un verset au mur, c'est une parole que l'on relit sans y penser, chaque fois que l'on passe. Dans beaucoup de foyers protestants et évangéliques, c'est même la principale décoration chrétienne. On choisit un verset de confiance pour l'entrée, de bénédiction pour la chambre d'un enfant, d'amour pour celle des parents.",
  },
  {
    slug: "jesus-noir-et-vierge-noire",
    rubrique: "art-chretien",
    nom: "Jésus noir et Vierge noire",
    titre: "Jésus noir et Vierge noire : l'art chrétien africain",
    description:
      "Tableaux de Jésus noir, Vierge noire à l'Enfant, Sainte Famille et Nativité africaines, Christ noir en croix : un art chrétien qui ressemble à l'Afrique.",
    intro:
      "Partout dans le monde, les chrétiens ont donné au Christ et à Marie les traits de leur peuple. En Afrique et dans la diaspora, les représentations d'un Jésus noir et d'une Vierge noire touchent profondément les familles. Ces images disent simplement que l'Évangile parle à chacun, dans sa propre histoire.",
  },
];

export const objets: Objet[] = [
  // Tableaux et toiles
  {
    slug: "toile-de-la-cene",
    sousRubrique: "tableaux-et-toiles",
    nom: "Toile de la Cène",
    description:
      "Le dernier repas de Jésus avec ses disciples, en grand format sur toile, souvent d'après le célèbre modèle de Léonard de Vinci. Dans beaucoup de foyers, elle a sa place au-dessus de la table de la salle à manger. Un cadeau de mariage classique, qui convient à toutes les Églises.",
    traditions: "toutes",
    afro: false,
    occasions: ["mariage", "fete-des-peres"],
    recherche: "tableau la cène toile",
    amazonAsin: null,
  },
  {
    slug: "toile-cene-africaine",
    sousRubrique: "tableaux-et-toiles",
    nom: "Toile de la Cène de style africain",
    description:
      "La Cène réinterprétée avec un Christ et des apôtres africains, souvent dans des couleurs chaudes et des tissus traditionnels. Elle donne à la salle à manger la chaleur d'un repas de famille. Un cadeau très apprécié des foyers de la diaspora, pour un mariage ou une pendaison de crémaillère.",
    traditions: "toutes",
    afro: true,
    occasions: ["mariage", "fete-des-peres"],
    recherche: "tableau cène africaine",
    amazonAsin: null,
  },
  {
    slug: "tableau-de-la-nativite",
    sousRubrique: "tableaux-et-toiles",
    nom: "Tableau de la Nativité",
    description:
      "Marie, Joseph et l'Enfant Jésus dans l'étable, souvent entourés des bergers ou des mages. On l'accroche pour le temps de Noël ou toute l'année dans une chambre. Un beau cadeau de Noël pour des grands-parents ou une jeune famille.",
    traditions: "toutes",
    afro: false,
    occasions: ["noel"],
    recherche: "tableau nativité toile",
    amazonAsin: null,
  },
  {
    slug: "tableau-scene-biblique-afro",
    sousRubrique: "tableaux-et-toiles",
    nom: "Tableau de scène biblique de style afro",
    description:
      "Une scène biblique, comme Moïse au bord de la mer Rouge ou le baptême de Jésus, peinte avec des personnages africains et des couleurs vives. Ces tableaux apportent beaucoup de vie à un salon et permettent aux enfants de se reconnaître dans les récits.",
    traditions: "toutes",
    afro: true,
    occasions: ["mariage", "noel"],
    recherche: "tableau biblique africain toile",
    amazonAsin: null,
  },
  {
    slug: "tableau-du-bon-pasteur",
    sousRubrique: "tableaux-et-toiles",
    nom: "Tableau du Bon Pasteur",
    description:
      "Jésus portant une brebis sur ses épaules, entouré de son troupeau : une image très douce de la tendresse de Dieu. Elle convient à une chambre, à une entrée ou à une famille qui traverse un deuil. Un tableau qui parle aux chrétiens de toutes les Églises.",
    traditions: "toutes",
    afro: false,
    occasions: ["bapteme", "condoleances"],
    recherche: "tableau jésus bon pasteur",
    amazonAsin: null,
  },
  {
    slug: "tableau-arche-de-noe-enfant",
    sousRubrique: "tableaux-et-toiles",
    nom: "Tableau de l'arche de Noé pour enfant",
    description:
      "L'arche de Noé et ses animaux deux par deux, dans un style tendre et coloré pensé pour une chambre d'enfant. Les petits adorent y chercher les animaux, et l'histoire se raconte toute seule. Un cadeau de baptême ou de naissance qui décore la chambre pendant des années.",
    traditions: "toutes",
    afro: false,
    occasions: ["bapteme"],
    recherche: "tableau arche de noé enfant",
    amazonAsin: null,
  },

  // Icônes
  {
    slug: "icone-vierge-de-tendresse",
    sousRubrique: "icones",
    nom: "Icône de la Vierge de tendresse",
    description:
      "Marie tient l'Enfant Jésus joue contre joue, dans un geste d'une grande douceur. C'est l'une des icônes les plus aimées, chez les orthodoxes comme chez les catholiques. On l'offre pour un baptême, un mariage ou à une mère, et elle trouve vite sa place dans le coin prière.",
    traditions: ["orthodoxe", "catholique"],
    afro: false,
    occasions: ["bapteme", "mariage", "fete-des-meres"],
    recherche: "icône vierge de tendresse",
    amazonAsin: null,
  },
  {
    slug: "icone-christ-pantocrator",
    sousRubrique: "icones",
    nom: "Icône du Christ Pantocrator",
    description:
      "Le Christ de face, bénissant d'une main et tenant le livre des Évangiles de l'autre : c'est l'une des plus anciennes images du Christ. Son regard direct en fait une icône centrale du coin prière. Un cadeau fort pour une confirmation ou pour un parrain.",
    traditions: ["orthodoxe", "catholique"],
    afro: false,
    occasions: ["confirmation", "fete-des-peres"],
    recherche: "icône christ pantocrator",
    amazonAsin: null,
  },
  {
    slug: "icone-trinite-de-roublev",
    sousRubrique: "icones",
    nom: "Icône de la Trinité de Roublev",
    description:
      "La reproduction de l'icône peinte par le moine russe Andreï Roublev : trois anges assis autour d'une table, visite reçue par Abraham et image de la Trinité. Ses couleurs douces et sa paix en font l'une des icônes les plus célèbres. Un cadeau de mariage très apprécié.",
    traditions: ["orthodoxe", "catholique"],
    afro: false,
    occasions: ["mariage", "confirmation"],
    recherche: "icône trinité roublev",
    amazonAsin: null,
  },
  {
    slug: "icone-de-la-nativite",
    sousRubrique: "icones",
    nom: "Icône de la Nativité",
    description:
      "L'icône de la fête de Noël : l'Enfant dans la grotte, Marie allongée à côté de lui, les anges, les bergers et les mages autour. Chaque détail raconte une partie du récit. On la place dans le coin prière pendant le temps de Noël, à la manière d'une crèche.",
    traditions: ["orthodoxe", "catholique"],
    afro: false,
    occasions: ["noel"],
    recherche: "icône nativité orthodoxe",
    amazonAsin: null,
  },
  {
    slug: "icone-de-la-resurrection",
    sousRubrique: "icones",
    nom: "Icône de la Résurrection",
    description:
      "L'icône de Pâques chez les orthodoxes : le Christ ressuscité descend aux enfers, brise les portes de la mort et relève Adam et Ève par la main. Une image pleine de force et d'espérance, à placer au coin prière pour la fête de Pâques ou à offrir lors d'un deuil.",
    traditions: ["orthodoxe", "catholique"],
    afro: false,
    occasions: ["paques", "condoleances"],
    recherche: "icône résurrection anastasis",
    amazonAsin: null,
  },
  {
    slug: "icone-ethiopienne-peinte",
    sousRubrique: "icones",
    nom: "Icône éthiopienne peinte",
    description:
      "Une icône dans le style de l'Église orthodoxe d'Éthiopie, aux couleurs vives et aux grands yeux en amande, représentant souvent la Vierge à l'Enfant ou des saints. Peinte sur bois ou sur toile, parfois en diptyque, elle apporte à la maison toute la richesse de l'art chrétien éthiopien.",
    traditions: ["orthodoxe", "catholique"],
    afro: true,
    occasions: ["bapteme", "mariage"],
    recherche: "icône éthiopienne peinte",
    amazonAsin: null,
  },

  // Versets muraux
  {
    slug: "plaque-murale-psaume-23",
    sousRubrique: "versets-muraux",
    nom: "Plaque murale du Psaume 23 (22)",
    description:
      "Le Psaume 23 (22), celui du Seigneur berger, imprimé ou gravé sur une plaque de bois ou un cadre. C'est sans doute le psaume le plus aimé des chrétiens, lu aux baptêmes comme aux enterrements. Accroché dans l'entrée ou le salon, il redit la confiance chaque jour.",
    traditions: "toutes",
    afro: false,
    occasions: ["condoleances", "bapteme"],
    recherche: "plaque murale psaume 23",
    amazonAsin: null,
  },
  {
    slug: "toile-verset-josue-1-9",
    sousRubrique: "versets-muraux",
    nom: "Toile du verset Josué 1,9",
    description:
      "Le verset de Josué 1,9, appel au courage et à la confiance, mis en valeur sur une toile ou un cadre moderne. Très aimé des jeunes, il accompagne un départ en études, un nouveau travail ou une confirmation. Un bon choix pour une chambre d'adolescent ou un bureau.",
    traditions: "toutes",
    afro: false,
    occasions: ["confirmation", "profession-de-foi"],
    recherche: "tableau verset josué 1 9",
    amazonAsin: null,
  },
  {
    slug: "cadre-verset-jeremie-29-11",
    sousRubrique: "versets-muraux",
    nom: "Cadre du verset Jérémie 29,11",
    description:
      "Le verset de Jérémie 29,11, où Dieu parle de ses projets de paix et d'avenir, dans un cadre sobre à poser ou à accrocher. On l'offre volontiers à un jeune qui fait un grand choix, un examen ou une nouvelle étape. Il trouve bien sa place sur un bureau.",
    traditions: "toutes",
    afro: false,
    occasions: ["profession-de-foi", "confirmation"],
    recherche: "cadre verset jérémie 29 11",
    amazonAsin: null,
  },
  {
    slug: "tableau-verset-josue-24-15-famille",
    sousRubrique: "versets-muraux",
    nom: "Tableau du verset Josué 24,15",
    description:
      "Le verset de Josué 24,15, où Josué déclare que sa maison servira le Seigneur, est l'un des préférés des familles chrétiennes. Accroché dans l'entrée ou le salon, il dit l'engagement de tout le foyer. Un cadeau de mariage ou de nouvelle maison très apprécié.",
    traditions: "toutes",
    afro: false,
    occasions: ["mariage"],
    recherche: "tableau verset josué 24 15",
    amazonAsin: null,
  },
  {
    slug: "tableau-1-corinthiens-13-mariage",
    sousRubrique: "versets-muraux",
    nom: "Tableau de 1 Corinthiens 13",
    description:
      "Quelques versets de 1 Corinthiens 13, le grand texte de Paul sur l'amour, sur une toile ou un cadre élégant. Souvent lu aux mariages, il rappelle aux époux ce qui fait durer un couple. Un cadeau de mariage que l'on accroche dans la chambre ou le salon.",
    traditions: "toutes",
    afro: false,
    occasions: ["mariage"],
    recherche: "tableau 1 corinthiens 13 amour",
    amazonAsin: null,
  },
  {
    slug: "sticker-mural-verset-biblique",
    sousRubrique: "versets-muraux",
    nom: "Sticker mural de verset biblique",
    description:
      "Un adhésif en lettres découpées que l'on colle directement sur le mur, au-dessus d'un canapé, d'un lit ou d'une porte. Il s'enlève sans abîmer la peinture, ce qui est pratique en location. Un moyen simple et peu encombrant de mettre la Parole de Dieu au mur.",
    traditions: "toutes",
    afro: false,
    occasions: [],
    recherche: "sticker mural verset biblique",
    amazonAsin: null,
  },
  {
    slug: "tableau-verset-tissu-wax",
    sousRubrique: "versets-muraux",
    nom: "Tableau de verset sur tissu wax",
    description:
      "Un verset biblique peint ou imprimé sur un fond de tissu wax aux motifs colorés, ou encadré par du wax. Il marie la Parole de Dieu et les couleurs de l'Afrique. Un cadeau joyeux et original pour une famille de la diaspora, pour un mariage ou une fête des mères.",
    traditions: "toutes",
    afro: true,
    occasions: ["mariage", "fete-des-meres"],
    recherche: "tableau verset wax africain",
    amazonAsin: null,
  },
  {
    slug: "plaque-benediction-chambre-enfant",
    sousRubrique: "versets-muraux",
    nom: "Plaque de bénédiction pour chambre d'enfant",
    description:
      "Une plaque aux couleurs douces portant la bénédiction de Nombres 6,24-26, parfois avec le prénom de l'enfant. Accrochée au-dessus du lit, elle accompagne le coucher et la prière du soir. Un cadeau de baptême ou de naissance que les parents gardent longtemps.",
    traditions: "toutes",
    afro: false,
    occasions: ["bapteme", "noel"],
    recherche: "plaque verset chambre enfant",
    amazonAsin: null,
  },
  {
    slug: "cadre-verset-esaie-41-10",
    sousRubrique: "versets-muraux",
    nom: "Cadre du verset Ésaïe 41,10",
    description:
      "Le verset d'Ésaïe 41,10, où Dieu dit à son peuple de ne pas craindre, dans un cadre simple. C'est une parole de réconfort pour quelqu'un qui traverse la maladie, un deuil ou une période d'inquiétude. Un cadeau délicat, à offrir avec quelques mots écrits à la main.",
    traditions: "toutes",
    afro: false,
    occasions: ["condoleances"],
    recherche: "cadre verset ésaïe 41 10",
    amazonAsin: null,
  },
  {
    slug: "affiches-versets-a-encadrer",
    sousRubrique: "versets-muraux",
    nom: "Lot d'affiches de versets à encadrer",
    description:
      "Plusieurs affiches de versets bibliques au graphisme assorti, à glisser dans des cadres pour composer un mur entier. On varie les versets selon les pièces et on les change au fil de l'année. Une solution simple pour décorer un appartement à petit budget.",
    traditions: "toutes",
    afro: false,
    occasions: [],
    recherche: "affiches versets bibliques",
    amazonAsin: null,
  },

  // Jésus noir et Vierge noire
  {
    slug: "tableau-jesus-noir",
    sousRubrique: "jesus-noir-et-vierge-noire",
    nom: "Tableau de Jésus noir",
    description:
      "Un portrait du Christ aux traits africains, souvent sur toile, parfois couronné d'épines ou les mains ouvertes. Pour beaucoup de familles de la diaspora, c'est une image du Christ dans laquelle elles se reconnaissent. Il trouve sa place au salon ou dans le coin prière.",
    traditions: "toutes",
    afro: true,
    occasions: ["paques", "fete-des-peres"],
    recherche: "tableau jésus noir africain",
    amazonAsin: null,
  },
  {
    slug: "icone-vierge-noire-a-l-enfant",
    sousRubrique: "jesus-noir-et-vierge-noire",
    nom: "Icône de la Vierge noire à l'Enfant",
    description:
      "Marie à la peau noire tenant l'Enfant Jésus, dans le style des icônes ou des Vierges noires vénérées depuis des siècles. Une image d'une grande douceur, qui touche particulièrement les mères africaines et antillaises. Un cadeau de fête des mères ou de baptême plein de sens.",
    traditions: ["catholique", "orthodoxe"],
    afro: true,
    occasions: ["fete-des-meres", "bapteme"],
    recherche: "icône vierge noire enfant",
    amazonAsin: null,
  },
  {
    slug: "toile-sainte-famille-africaine",
    sousRubrique: "jesus-noir-et-vierge-noire",
    nom: "Toile de la Sainte Famille africaine",
    description:
      "Marie, Joseph et l'Enfant Jésus représentés comme une famille africaine, souvent en pagne ou en boubou, dans des couleurs chaudes. Elle dit que Dieu s'est fait proche de chaque famille. Un très beau cadeau pour un mariage, un baptême ou le Noël d'une jeune famille.",
    traditions: "toutes",
    afro: true,
    occasions: ["mariage", "bapteme", "noel"],
    recherche: "tableau sainte famille africaine",
    amazonAsin: null,
  },
  {
    slug: "tableau-vierge-marie-africaine",
    sousRubrique: "jesus-noir-et-vierge-noire",
    nom: "Tableau de la Vierge Marie africaine",
    description:
      "Un portrait de Marie aux traits africains, souvent vêtue de bleu ou d'un tissu traditionnel, le regard paisible. Accroché dans une chambre ou le coin prière, il accompagne la prière quotidienne. Un cadeau qui fait plaisir à une mère ou à une grand-mère catholique.",
    traditions: ["catholique"],
    afro: true,
    occasions: ["fete-des-meres", "confirmation"],
    recherche: "tableau vierge marie africaine",
    amazonAsin: null,
  },
  {
    slug: "crucifix-christ-noir",
    sousRubrique: "jesus-noir-et-vierge-noire",
    nom: "Crucifix au Christ noir",
    description:
      "Un crucifix dont le Christ est sculpté dans un bois sombre ou peint avec des traits africains. On en trouve dans bien des églises d'Afrique et d'Amérique latine. Accroché à la maison, il réunit la tradition du crucifix et une image du Christ proche de la famille.",
    traditions: ["catholique"],
    afro: true,
    occasions: ["confirmation", "paques"],
    recherche: "crucifix christ noir",
    amazonAsin: null,
  },
  {
    slug: "tableau-nativite-africaine",
    sousRubrique: "jesus-noir-et-vierge-noire",
    nom: "Tableau de la Nativité africaine",
    description:
      "La naissance de Jésus transposée dans un village africain : Marie et Joseph en tenue traditionnelle, l'Enfant dans une case, des bergers et des animaux de la savane. Une image joyeuse pour le temps de Noël, que les enfants adorent détailler.",
    traditions: "toutes",
    afro: true,
    occasions: ["noel"],
    recherche: "tableau nativité africaine",
    amazonAsin: null,
  },
];
