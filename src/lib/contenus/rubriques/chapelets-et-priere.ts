import type { Objet, Rubrique, SousRubrique } from "../../types";

export const rubrique: Rubrique = {
  slug: "chapelets-et-priere",
  nom: "Chapelets et prière",
  titre: "Chapelets et objets de prière pour la maison",
  description:
    "Chapelets, dizainiers, bougies, coin prière et carnets : les objets qui accompagnent la prière à la maison, pour soi ou à offrir.",
  intro:
    "Prier ne demande aucun objet, mais certains aident à prendre un temps calme chaque jour. Les catholiques prient souvent avec un chapelet ou un dizainier, les orthodoxes avec une cordelette à nœuds ; dans les Églises protestantes et évangéliques, on prie plutôt sans objet, avec sa Bible et parfois un carnet. Une bougie, un pupitre ou un petit coin prière aident aussi toute la famille à se retrouver. Voici des idées pour soi ou à offrir, dans le respect de chaque tradition.",
  choisir: [
    "Pour un chapelet, choisissez des grains agréables au toucher et assez gros pour être comptés sans regarder : le bois convient bien pour débuter.",
    "Pour un enfant, préférez un chapelet ou un dizainier solide, avec un cordon noué plutôt qu'une chaîne fine qui casse vite.",
    "Pour un coin prière, commencez simple : une croix ou une icône, une bougie et une Bible suffisent ; le reste viendra avec le temps.",
    "Pour un proche protestant ou évangélique, un carnet de prière, un pupitre de Bible ou une bougie seront souvent mieux reçus qu'un chapelet.",
  ],
  faq: [
    {
      q: "Comment prie-t-on le chapelet ?",
      a: "Le chapelet compte cinq dizaines de grains. Sur chaque grain, on dit un « Je vous salue Marie », et entre les dizaines un « Notre Père » et un « Gloire au Père », en méditant un épisode de la vie du Christ. Un chapelet complet prend une vingtaine de minutes, mais on peut n'en prier qu'une dizaine.",
    },
    {
      q: "Quelle est la différence entre un chapelet et un dizainier ?",
      a: "Le chapelet a cinq dizaines de grains, le dizainier une seule, que l'on reprend autant de fois que l'on veut. Le dizainier se glisse dans une poche ou se porte en bague ou en bracelet. C'est souvent le premier objet de prière offert à un enfant. Voir nos [dizainiers et bracelets](/chapelets-et-priere/dizainiers-et-bracelets).",
    },
    {
      q: "Comment créer un coin prière à la maison ?",
      a: "Choisissez un endroit calme, même tout petit : une étagère ou un angle de la chambre. Posez-y une croix ou une icône, une bougie et une Bible, et prenez l'habitude d'y prier un moment chaque jour. Nos idées sont réunies dans la page [coin prière](/chapelets-et-priere/coin-priere).",
    },
  ],
};

export const sousRubriques: SousRubrique[] = [
  {
    slug: "chapelets",
    rubrique: "chapelets-et-priere",
    nom: "Chapelets",
    titre: "Chapelets : en bois, en cristal, pour enfants",
    description:
      "Chapelet en bois d'olivier, en cristal, en argent, chapelet missionnaire, chapelet orthodoxe en laine : bien choisir un chapelet à offrir.",
    intro:
      "Le chapelet accompagne la prière des catholiques depuis des siècles, grain après grain. On l'offre souvent pour une première communion, une confirmation ou à une grand-mère qui prie chaque soir. Les orthodoxes ont leur propre cordelette à nœuds, pour répéter la prière de Jésus.",
  },
  {
    slug: "dizainiers-et-bracelets",
    rubrique: "chapelets-et-priere",
    nom: "Dizainiers et bracelets",
    titre: "Dizainiers et bracelets chrétiens à porter",
    description:
      "Bague dizainier, bracelet dizainier en bois, dizainier de poche, bracelet croix ou perles africaines : un signe de foi à porter chaque jour.",
    intro:
      "Le dizainier est un chapelet d'une seule dizaine, facile à emporter partout. En bague ou en bracelet, il se porte toute la journée et permet de prier un instant dans le bus ou au travail. Les bracelets avec une croix conviennent, eux, à tous les chrétiens.",
  },
  {
    slug: "bougies-et-veilleuses",
    rubrique: "chapelets-et-priere",
    nom: "Bougies et veilleuses",
    titre: "Bougies de baptême, cierges et veilleuses de prière",
    description:
      "Bougie de baptême, cierge de première communion ou de mariage, bougie de Pâques, veilleuse de prière : la lumière qui accompagne la foi.",
    intro:
      "La lumière tient une grande place dans la prière chrétienne : on allume une bougie pour un baptême, pour Pâques ou pour se souvenir d'un défunt. Une bougie décorée garde le souvenir d'une célébration. Une simple veilleuse aide aussi à prendre un temps de calme le soir.",
  },
  {
    slug: "coin-priere",
    rubrique: "chapelets-et-priere",
    nom: "Coin prière",
    titre: "Coin prière : pupitre, prie-Dieu, étagère d'icônes",
    description:
      "Pupitre de Bible, prie-Dieu, étagère murale, lampe à huile pour icônes, boîte à intentions : de quoi aménager un coin prière à la maison.",
    intro:
      "Un coin prière, c'est un petit endroit de la maison réservé à Dieu, même modeste. Chez les orthodoxes, on parle du « beau coin », où l'on place les icônes et une veilleuse. Ailleurs, une Bible ouverte sur un pupitre et une croix suffisent à créer un lieu où la famille se retrouve.",
  },
  {
    slug: "carnets-de-priere",
    rubrique: "chapelets-et-priere",
    nom: "Carnets de prière",
    titre: "Carnets de prière et journaux de foi",
    description:
      "Carnet de prière guidé, journal de gratitude, carnet de notes de prédication, plan de lecture de la Bible : écrire pour nourrir sa prière.",
    intro:
      "Écrire aide beaucoup à prier : on note ses intentions, ses remerciements, un verset qui a touché. Les carnets de prière guidés proposent une page par jour, d'autres laissent toute la place. Dans les Églises protestantes et évangéliques, on aime aussi noter les prédications du dimanche.",
  },
];

export const objets: Objet[] = [
  // Chapelets
  {
    slug: "chapelet-bois-olivier",
    sousRubrique: "chapelets",
    nom: "Chapelet en bois d'olivier",
    description:
      "Un chapelet aux grains de bois d'olivier, souvent fabriqué en Terre sainte, avec une croix assortie. Le bois est doux sous les doigts et se patine avec les années. C'est le chapelet le plus offert pour une première communion, et un bon premier chapelet à tout âge.",
    traditions: ["catholique"],
    afro: false,
    occasions: ["premiere-communion", "bapteme", "confirmation"],
    recherche: "chapelet bois d'olivier",
    amazonAsin: null,
  },
  {
    slug: "chapelet-cristal",
    sousRubrique: "chapelets",
    nom: "Chapelet en cristal ou en verre",
    description:
      "Des grains de cristal ou de verre taillé, souvent blancs ou bleu clair, qui brillent à la lumière. Plus délicat qu'un chapelet en bois, il se garde dans une petite boîte. Un très joli cadeau de première communion pour une fille, ou pour une marraine.",
    traditions: ["catholique"],
    afro: false,
    occasions: ["premiere-communion", "fete-des-meres"],
    recherche: "chapelet cristal communion",
    amazonAsin: null,
  },
  {
    slug: "chapelet-argent",
    sousRubrique: "chapelets",
    nom: "Chapelet en argent",
    description:
      "Un chapelet monté sur chaîne d'argent, avec une croix et une médaille centrale en argent. Solide et élégant, c'est un chapelet que l'on garde toute sa vie, et que l'on transmet parfois. Un cadeau marquant pour une confirmation, une profession de foi ou un mariage.",
    traditions: ["catholique"],
    afro: false,
    occasions: ["confirmation", "profession-de-foi", "mariage"],
    recherche: "chapelet argent massif",
    amazonAsin: null,
  },
  {
    slug: "chapelet-missionnaire-cinq-continents",
    sousRubrique: "chapelets",
    nom: "Chapelet missionnaire des cinq continents",
    description:
      "Un chapelet dont chaque dizaine a sa couleur, une pour chaque continent, la dizaine verte étant celle de l'Afrique. On le prie pour les chrétiens du monde entier. Les enfants l'aiment beaucoup, et il parle aux familles qui ont un pied en Afrique et l'autre en France.",
    traditions: ["catholique"],
    afro: false,
    occasions: ["premiere-communion", "bapteme"],
    recherche: "chapelet missionnaire couleurs",
    amazonAsin: null,
  },
  {
    slug: "chapelet-corde-a-noeuds",
    sousRubrique: "chapelets",
    nom: "Chapelet en corde à nœuds",
    description:
      "Un chapelet dont les grains sont des nœuds faits sur une corde solide, avec une croix en métal ou en bois. Presque incassable, silencieux, il se glisse dans une poche et supporte la randonnée comme le travail. Il plaît beaucoup aux hommes et aux adolescents.",
    traditions: ["catholique"],
    afro: false,
    occasions: ["fete-des-peres", "confirmation"],
    recherche: "chapelet corde noeuds",
    amazonAsin: null,
  },
  {
    slug: "chapelet-orthodoxe-laine",
    sousRubrique: "chapelets",
    nom: "Chapelet orthodoxe en laine à nœuds",
    description:
      "La cordelette de prière des orthodoxes, faite de nœuds de laine noire et terminée par une croix et souvent un pompon. On l'égrène en répétant la prière de Jésus, nœud après nœud. Un objet simple et ancien, à offrir à un proche orthodoxe.",
    traditions: ["orthodoxe"],
    afro: false,
    occasions: ["bapteme", "paques"],
    recherche: "chapelet orthodoxe laine",
    amazonAsin: null,
  },

  // Dizainiers et bracelets
  {
    slug: "bague-dizainier",
    sousRubrique: "dizainiers-et-bracelets",
    nom: "Bague dizainier pour prier",
    description:
      "Une bague portant dix petites bosses et une croix, que l'on fait tourner autour du doigt pour prier une dizaine. En argent ou en acier, elle se porte tous les jours sans se faire remarquer. Un cadeau très apprécié des jeunes pour une confirmation ou une profession de foi.",
    traditions: ["catholique"],
    afro: false,
    occasions: ["confirmation", "profession-de-foi"],
    recherche: "bague dizainier argent",
    amazonAsin: null,
  },
  {
    slug: "bracelet-dizainier-bois",
    sousRubrique: "dizainiers-et-bracelets",
    nom: "Bracelet dizainier en bois",
    description:
      "Dix grains de bois et une petite croix montés sur un élastique ou un cordon ajustable. Léger et solide, il se porte au poignet à l'école comme à la maison. C'est un beau premier objet de prière pour un enfant qui fait sa première communion.",
    traditions: ["catholique"],
    afro: false,
    occasions: ["premiere-communion", "bapteme"],
    recherche: "bracelet dizainier bois enfant",
    amazonAsin: null,
  },
  {
    slug: "dizainier-de-poche",
    sousRubrique: "dizainiers-et-bracelets",
    nom: "Dizainier de poche avec croix",
    description:
      "Une dizaine de grains sur une chaînette ou un cordon, avec une croix à un bout et un anneau à l'autre. Il tient dans une poche, un porte-monnaie ou une boîte à gants. Pratique pour prier un instant dans la journée, en attendant le bus ou avant une réunion.",
    traditions: ["catholique"],
    afro: false,
    occasions: ["confirmation", "fete-des-peres"],
    recherche: "dizainier de poche",
    amazonAsin: null,
  },
  {
    slug: "bracelet-cordon-croix",
    sousRubrique: "dizainiers-et-bracelets",
    nom: "Bracelet cordon avec petite croix",
    description:
      "Un fin cordon tressé, réglable, orné d'une petite croix en métal. Simple et discret, il convient à tous les chrétiens, quelle que soit leur Église, et se porte aussi bien par un enfant que par un adulte. Un petit cadeau facile pour un filleul.",
    traditions: "toutes",
    afro: false,
    occasions: ["bapteme", "profession-de-foi", "premiere-communion"],
    recherche: "bracelet cordon croix",
    amazonAsin: null,
  },
  {
    slug: "bracelet-perles-africaines-croix",
    sousRubrique: "dizainiers-et-bracelets",
    nom: "Bracelet de perles africaines avec croix",
    description:
      "Un bracelet de perles de verre ou de bois aux couleurs vives, inspiré des perles d'Afrique de l'Ouest, avec une petite croix. Il unit la foi et l'élégance des bijoux africains. Un cadeau joyeux pour une mère, une sœur ou une amie de la diaspora.",
    traditions: "toutes",
    afro: true,
    occasions: ["fete-des-meres", "confirmation"],
    recherche: "bracelet perles africaines croix",
    amazonAsin: null,
  },

  // Bougies et veilleuses
  {
    slug: "bougie-de-bapteme",
    sousRubrique: "bougies-et-veilleuses",
    nom: "Bougie de baptême décorée",
    description:
      "Une bougie blanche décorée d'une croix, d'une colombe ou du prénom de l'enfant. Pendant la célébration, elle est allumée au cierge pascal, signe de la lumière reçue au baptême. On la garde ensuite et on la rallume à chaque anniversaire de baptême.",
    traditions: ["catholique"],
    afro: false,
    occasions: ["bapteme"],
    recherche: "bougie baptême personnalisée",
    amazonAsin: null,
  },
  {
    slug: "cierge-de-premiere-communion",
    sousRubrique: "bougies-et-veilleuses",
    nom: "Cierge de première communion",
    description:
      "Un grand cierge blanc décoré pour la première communion, souvent orné d'un calice, d'une croix ou d'épis de blé, parfois avec le prénom de l'enfant. Il est porté pendant la messe puis gardé à la maison, en souvenir de cette journée.",
    traditions: ["catholique"],
    afro: false,
    occasions: ["premiere-communion"],
    recherche: "cierge première communion",
    amazonAsin: null,
  },
  {
    slug: "cierge-de-mariage",
    sousRubrique: "bougies-et-veilleuses",
    nom: "Cierge de mariage décoré",
    description:
      "Un cierge décoré aux prénoms des mariés et à la date du mariage, que l'on allume pendant la célébration. Les époux le rallument ensuite pour leurs anniversaires de mariage ou dans les moments importants de leur vie. Un cadeau plein de sens pour les témoins.",
    traditions: ["catholique"],
    afro: false,
    occasions: ["mariage"],
    recherche: "cierge mariage personnalisé",
    amazonAsin: null,
  },
  {
    slug: "bougie-de-paques-decoree",
    sousRubrique: "bougies-et-veilleuses",
    nom: "Bougie de Pâques décorée",
    description:
      "Une bougie décorée à la manière du cierge pascal, avec une croix, l'alpha et l'oméga et l'année en cours. Allumée sur la table de Pâques ou dans le coin prière, elle fait entrer la lumière de la Résurrection dans la maison pendant tout le temps pascal.",
    traditions: ["catholique"],
    afro: false,
    occasions: ["paques"],
    recherche: "bougie pâques décorée croix",
    amazonAsin: null,
  },
  {
    slug: "veilleuse-de-recueillement",
    sousRubrique: "bougies-et-veilleuses",
    nom: "Veilleuse de recueillement en verre",
    description:
      "Une bougie dans un verre épais, qui brûle longtemps, parfois décorée d'une croix ou d'une colombe. On l'allume près de la photo d'un défunt ou dans le coin prière. Offerte à une famille en deuil, elle dit simplement que l'on prie avec elle.",
    traditions: "toutes",
    afro: false,
    occasions: ["condoleances"],
    recherche: "bougie recueillement deuil verre",
    amazonAsin: null,
  },
  {
    slug: "veilleuse-croix-chambre-enfant",
    sousRubrique: "bougies-et-veilleuses",
    nom: "Veilleuse croix pour chambre d'enfant",
    description:
      "Une petite lampe électrique à lumière douce, en forme de croix ou décorée d'une croix, qui rassure l'enfant au moment de s'endormir. Elle accompagne la prière du soir sans flamme, en toute sécurité. Un joli cadeau de baptême ou de naissance.",
    traditions: "toutes",
    afro: false,
    occasions: ["bapteme", "noel"],
    recherche: "veilleuse croix enfant",
    amazonAsin: null,
  },

  // Coin prière
  {
    slug: "pupitre-de-bible-bois",
    sousRubrique: "coin-priere",
    nom: "Pupitre de Bible en bois",
    description:
      "Un petit lutrin en bois sur lequel la Bible reste ouverte, posé sur une table ou une commode. Il donne à la Bible une place d'honneur dans la maison et facilite la lecture en famille. Il convient à tous les chrétiens, et fait un beau cadeau pour un pasteur ou un père.",
    traditions: "toutes",
    afro: false,
    occasions: ["fete-des-peres", "mariage"],
    recherche: "pupitre lutrin bible bois",
    amazonAsin: null,
  },
  {
    slug: "prie-dieu-bois",
    sousRubrique: "coin-priere",
    nom: "Prie-Dieu en bois",
    description:
      "Un petit meuble en bois avec un agenouilloir et un accoudoir, parfois pliant pour se ranger facilement. Il aide à prendre une vraie posture de prière dans le coin prière ou la chambre. Un objet de tradition catholique, que l'on garde toute une vie.",
    traditions: ["catholique"],
    afro: false,
    occasions: ["mariage"],
    recherche: "prie-dieu en bois",
    amazonAsin: null,
  },
  {
    slug: "etagere-murale-d-oratoire",
    sousRubrique: "coin-priere",
    nom: "Étagère murale d'oratoire",
    description:
      "Une étagère en bois, parfois d'angle, pensée pour poser une icône, une croix, une bougie et une Bible. Elle permet de créer un coin prière même dans un petit appartement. Les familles orthodoxes y installent leurs icônes, à la manière du « beau coin ».",
    traditions: ["orthodoxe", "catholique"],
    afro: false,
    occasions: ["mariage"],
    recherche: "étagère murale icône bois",
    amazonAsin: null,
  },
  {
    slug: "lampe-a-huile-pour-icones",
    sousRubrique: "coin-priere",
    nom: "Lampe à huile pour icônes",
    description:
      "Une petite veilleuse à huile en verre coloré ou en métal, suspendue ou posée devant les icônes. Dans les maisons orthodoxes, cette lumière brûle devant les icônes, signe de la prière qui continue. Un cadeau très apprécié pour une nouvelle maison orthodoxe.",
    traditions: ["orthodoxe"],
    afro: false,
    occasions: ["paques", "mariage"],
    recherche: "lampe huile icône orthodoxe",
    amazonAsin: null,
  },
  {
    slug: "boite-a-intentions-de-priere",
    sousRubrique: "coin-priere",
    nom: "Boîte à intentions de prière",
    description:
      "Une petite boîte en bois où chacun glisse sur un papier le nom d'une personne ou une intention à confier à Dieu. On l'ouvre en famille pour prier ensemble. Elle aide les enfants à penser aux autres, et convient à toutes les Églises.",
    traditions: "toutes",
    afro: false,
    occasions: ["premiere-communion", "noel"],
    recherche: "boîte à prières bois",
    amazonAsin: null,
  },

  // Carnets de prière
  {
    slug: "carnet-de-priere-guide",
    sousRubrique: "carnets-de-priere",
    nom: "Carnet de prière guidé",
    description:
      "Un carnet avec une page par jour pour noter une intention, un remerciement et un verset. Les rubriques aident à prier quand on ne sait pas par où commencer, et l'on voit avec le temps les prières exaucées. Il convient à tous les chrétiens, du lycéen à la grand-mère.",
    traditions: "toutes",
    afro: false,
    occasions: ["confirmation", "fete-des-meres"],
    recherche: "carnet de prière chrétien",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "journal-de-gratitude-chretien",
    sousRubrique: "carnets-de-priere",
    nom: "Journal de gratitude chrétien",
    description:
      "Un journal où l'on note chaque jour trois sujets de reconnaissance envers Dieu. Ce petit rituel aide à voir les bienfaits du quotidien, même dans les semaines difficiles. Un cadeau doux pour une mère, une amie ou une personne qui traverse une épreuve.",
    traditions: "toutes",
    afro: false,
    occasions: ["fete-des-meres", "noel"],
    recherche: "journal de gratitude chrétien",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "carnet-de-notes-de-predication",
    sousRubrique: "carnets-de-priere",
    nom: "Carnet de notes de prédication",
    description:
      "Un carnet avec, pour chaque dimanche, la date, le texte biblique, les points de la prédication et ce que l'on veut en retenir. Très utile dans les Églises protestantes et évangéliques, où l'on aime garder la trace des messages entendus au culte.",
    traditions: ["protestante", "evangelique"],
    afro: false,
    occasions: ["fete-des-peres", "fete-des-meres"],
    recherche: "carnet notes sermon église",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "plan-de-lecture-bible-en-un-an",
    sousRubrique: "carnets-de-priere",
    nom: "Carnet pour lire la Bible en un an",
    description:
      "Un carnet qui propose un plan pour lire toute la Bible en une année, avec des cases à cocher et de la place pour noter ce que l'on a compris. Il aide à tenir dans la durée, seul ou en groupe. Un beau cadeau à glisser sous le sapin pour bien commencer l'année.",
    traditions: "toutes",
    afro: false,
    occasions: ["noel"],
    recherche: "plan lecture bible un an carnet",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "carnet-de-priere-enfant",
    sousRubrique: "carnets-de-priere",
    nom: "Carnet de prière pour enfant",
    description:
      "Un carnet illustré où l'enfant dessine, colle et écrit ses prières, avec des pages à compléter : « Merci pour… », « Je pense à… ». Il l'aide à parler à Dieu avec ses mots. Un bon cadeau pour préparer une première communion ou pour un enfant de 6 à 10 ans.",
    traditions: "toutes",
    afro: false,
    occasions: ["premiere-communion", "noel"],
    recherche: "carnet de prière enfant",
    livre: true,
    amazonAsin: null,
  },
];
