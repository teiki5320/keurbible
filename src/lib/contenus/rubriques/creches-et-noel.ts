import type { Objet, Rubrique, SousRubrique } from "../../types";

export const rubrique: Rubrique = {
  slug: "creches-et-noel",
  nom: "Crèches et Noël",
  titre: "Crèches de Noël, crèches africaines et déco chrétienne",
  description:
    "Crèches de Noël en bois, en terre cuite ou africaines, santons, calendriers de l'Avent et décorations chrétiennes : nos conseils pour un Noël qui a du sens.",
  intro:
    "À Noël, les chrétiens fêtent la naissance de Jésus à Bethléem, et la crèche en est le cœur dans beaucoup de maisons. On l'installe souvent au début de l'Avent, on y dépose l'Enfant Jésus la nuit de Noël, puis on y ajoute les Rois mages à l'Épiphanie. Vous trouverez ici des crèches classiques, des crèches africaines en bois sculpté ou en tissu wax, des santons, des calendriers de l'Avent et des décorations qui rappellent le sens de la fête. De quoi préparer Noël en famille, que vous soyez catholique, protestant, évangélique ou orthodoxe.",
  choisir: [
    "Mesurez la place dont vous disposez avant de choisir : une crèche d'une seule pièce tient sur un buffet, une crèche avec étable et nombreux personnages demande une vraie table.",
    "Avec de jeunes enfants, choisissez une crèche en bois ou en tissu qu'ils pourront toucher et déplacer sans risque ; gardez la porcelaine et la terre cuite fine hors de leur portée.",
    "Une crèche peut s'agrandir d'année en année : commencez par la Sainte Famille, puis ajoutez l'âne, le bœuf, les bergers et les mages.",
    "Pour une famille de la diaspora, une crèche africaine ou des santons aux traits africains font de Noël une fête où chacun se reconnaît.",
    "Le calendrier de l'Avent et la couronne aux quatre bougies aident les enfants à attendre Noël en se rappelant pourquoi on le fête.",
  ],
  faq: [
    {
      q: "Quand installer la crèche et quand la ranger ?",
      a: "Beaucoup de familles l'installent le premier dimanche de l'Avent, quatre dimanches avant Noël, en laissant la mangeoire vide jusqu'à la nuit du 24 au 25 décembre. Les Rois mages arrivent à l'Épiphanie, début janvier. On la range souvent après l'Épiphanie ou à la Chandeleur, le 2 février, selon les habitudes de chacun.",
    },
    {
      q: "Les protestants font-ils aussi une crèche ?",
      a: "Oui, beaucoup de familles protestantes et évangéliques installent une crèche à Noël, même si la tradition est plus forte chez les catholiques. C'est d'abord une façon simple de raconter aux enfants la naissance de Jésus. Le sapin, la couronne de l'Avent et la lecture du récit de Noël sont aussi très répandus.",
    },
    {
      q: "Qu'est-ce qu'une crèche africaine ?",
      a: "C'est une crèche où Marie, Joseph, Jésus et les autres personnages ont les traits et les vêtements de l'Afrique. Elle peut être sculptée dans le bois, cousue dans du tissu wax ou faite de fil de fer et de perles. Voir notre sélection de [crèches africaines](/creches-et-noel/creches-africaines).",
    },
  ],
};

export const sousRubriques: SousRubrique[] = [
  {
    slug: "creches",
    rubrique: "creches-et-noel",
    nom: "Crèches",
    titre: "Crèches de Noël : bois d'olivier, Provence, pour enfants",
    description:
      "Crèches de Noël en bois d'olivier, en terre cuite, provençales ou pour enfants : comment choisir la crèche qui accompagnera votre famille chaque année.",
    intro:
      "La crèche raconte en quelques personnages la nuit de Noël : Marie, Joseph, l'Enfant Jésus, l'âne et le bœuf, les bergers et les mages. Elle peut tenir dans la main ou occuper toute une table. Certaines viennent de Bethléem, d'autres de Provence, d'autres sont faites pour être manipulées par les enfants. Une belle crèche se garde des dizaines d'années et devient un souvenir de famille.",
  },
  {
    slug: "creches-africaines",
    rubrique: "creches-et-noel",
    nom: "Crèches africaines",
    titre: "Crèches africaines : bois sculpté, wax, Sainte Famille noire",
    description:
      "Crèches africaines en bois sculpté, en tissu wax ou en fil de fer et perles : une Nativité aux traits africains pour fêter Noël en famille ou l'offrir.",
    intro:
      "Dans une crèche africaine, la Sainte Famille, les bergers et les mages ont les visages et les habits de l'Afrique. Les artisans les sculptent dans le bois, les cousent dans le wax ou les façonnent en fil de fer et en perles. Pour les familles de la diaspora, c'est une façon de transmettre aux enfants une foi qui parle aussi de leurs racines. Ces crèches sont de beaux cadeaux, même pour ceux qui ont déjà une crèche classique.",
  },
  {
    slug: "santons-et-personnages",
    rubrique: "creches-et-noel",
    nom: "Santons et personnages",
    titre: "Santons et personnages de crèche : Rois mages, animaux",
    description:
      "Santons de Provence, santons africains, Rois mages, Enfant Jésus et animaux pour compléter votre crèche de Noël année après année, à votre rythme.",
    intro:
      "Une crèche n'est jamais finie : chaque année, on peut y ajouter un berger, un mouton ou un nouveau personnage. Les santons de Provence, en argile peinte, représentent aussi les gens du village venus voir l'enfant. On trouve également des santons aux traits africains et des Rois mages vendus à part. Vérifiez la taille des personnages pour qu'ils s'accordent avec votre crèche.",
  },
  {
    slug: "calendriers-de-l-avent",
    rubrique: "creches-et-noel",
    nom: "Calendriers de l'Avent",
    titre: "Calendriers de l'Avent chrétiens et couronnes de l'Avent",
    description:
      "Calendriers de l'Avent chrétiens pour enfants et adultes, en bois, avec versets ou histoires, et couronnes de l'Avent pour attendre Noël en famille.",
    intro:
      "L'Avent, ce sont les quatre semaines qui préparent Noël. Un calendrier de l'Avent chrétien propose chaque jour une image, une histoire, un verset ou un personnage de la crèche, au lieu d'un simple chocolat. La couronne aux quatre bougies, que l'on allume une à une chaque dimanche, est une tradition partagée par les catholiques et les protestants. Ces objets aident petits et grands à vivre l'attente de Noël.",
  },
  {
    slug: "deco-de-noel-chretienne",
    rubrique: "creches-et-noel",
    nom: "Déco de Noël chrétienne",
    titre: "Déco de Noël chrétienne : étoile, anges, boules Nativité",
    description:
      "Décorations de Noël chrétiennes : étoile de Bethléem, ange pour la cime du sapin, boules de la Nativité, anges noirs et bougies pour le sapin et la maison.",
    intro:
      "Le sapin, les guirlandes et les lumières peuvent aussi rappeler le sens de Noël. L'étoile au sommet du sapin évoque celle qui a guidé les mages, les anges rappellent l'annonce faite aux bergers. Des boules ornées de la Nativité ou des anges noirs donnent à la décoration une touche personnelle. Ces petits objets sont aussi des cadeaux faciles à offrir pendant l'Avent.",
  },
];

export const objets: Objet[] = [
  // Crèches (7)
  {
    slug: "creche-bois-olivier-bethleem",
    sousRubrique: "creches",
    nom: "Crèche en bois d'olivier de Bethléem",
    description:
      "Sculptée par des artisans chrétiens de Bethléem dans le bois d'olivier, cette crèche vient de la ville même où Jésus est né. Le bois veiné, couleur de miel, est doux au toucher et ne se démode pas. Une crèche que l'on garde toute une vie et que l'on transmet.",
    traditions: "toutes",
    afro: false,
    occasions: ["noel", "mariage"],
    recherche: "crèche bois d'olivier Bethléem",
    amazonAsin: null,
  },
  {
    slug: "creche-provencale-santons",
    sousRubrique: "creches",
    nom: "Crèche provençale avec santons",
    description:
      "Une étable et ses santons en argile peinte, dans la tradition de Provence : la Sainte Famille entourée des bergers et des gens du village. Les couleurs et les petits détails font la joie des enfants. On peut la compléter chaque année avec de nouveaux personnages.",
    traditions: "toutes",
    afro: false,
    occasions: ["noel"],
    recherche: "crèche provençale santons complète",
    amazonAsin: null,
  },
  {
    slug: "creche-enfant-bois-incassable",
    sousRubrique: "creches",
    nom: "Crèche en bois pour enfants",
    description:
      "Des personnages en bois aux formes simples, que les plus petits peuvent prendre, déplacer et ranger sans risque de les casser. L'enfant rejoue l'histoire de Noël avec ses mains, comme un jeu. Une première crèche idéale, à offrir dès le plus jeune âge.",
    traditions: "toutes",
    afro: false,
    occasions: ["noel", "bapteme"],
    recherche: "crèche en bois enfant",
    amazonAsin: null,
  },
  {
    slug: "creche-lumineuse-etable",
    sousRubrique: "creches",
    nom: "Crèche avec étable lumineuse",
    description:
      "Une étable éclairée de l'intérieur par une petite lumière douce, qui met en valeur la Sainte Famille le soir venu. Elle crée une atmosphère paisible dans le salon pendant tout l'Avent. Les enfants aiment l'allumer au moment de la prière.",
    traditions: "toutes",
    afro: false,
    occasions: ["noel"],
    recherche: "crèche de Noël lumineuse étable",
    amazonAsin: null,
  },
  {
    slug: "creche-terre-cuite-peinte",
    sousRubrique: "creches",
    nom: "Crèche en terre cuite peinte",
    description:
      "Des personnages en terre cuite ou en céramique, peints à la main, aux couleurs chaudes et un peu naïves. Chaque crèche a son charme, avec les petites différences du travail artisanal. Une belle crèche pour un adulte ou un jeune couple, à placer hors de portée des petits.",
    traditions: "toutes",
    afro: false,
    occasions: ["noel", "mariage"],
    recherche: "crèche terre cuite peinte main",
    amazonAsin: null,
  },
  {
    slug: "creche-miniature-une-piece",
    sousRubrique: "creches",
    nom: "Crèche miniature d'une seule pièce",
    description:
      "Toute la Nativité réunie en une seule petite pièce, à poser sur une étagère, un bureau ou une table de chevet. Elle convient aux petits logements et aux personnes âgées qui ne peuvent plus installer une grande crèche. Un cadeau de Noël facile à glisser dans une carte ou un colis.",
    traditions: "toutes",
    afro: false,
    occasions: ["noel"],
    recherche: "crèche miniature Nativité",
    amazonAsin: null,
  },
  {
    slug: "creche-papier-a-monter",
    sousRubrique: "creches",
    nom: "Crèche en papier à monter",
    description:
      "Une crèche en carton ou en papier épais, à découper, plier et monter en famille. C'est une activité de l'Avent qui occupe les enfants et leur raconte l'histoire de Noël pendant qu'ils la construisent. Légère, elle se range à plat d'une année sur l'autre.",
    traditions: "toutes",
    afro: false,
    occasions: ["noel"],
    recherche: "crèche papier à monter enfant",
    amazonAsin: null,
  },

  // Crèches africaines (5)
  {
    slug: "creche-africaine-bois-sculpte",
    sousRubrique: "creches-africaines",
    nom: "Crèche africaine en bois sculpté",
    description:
      "Marie, Joseph, l'Enfant et les mages, sculptés à la main dans un bois sombre par des artisans africains, avec des visages et des tenues d'Afrique. Le bois brut ou poli donne à la crèche une grande présence. Une pièce d'art qui fait de Noël une fête des racines.",
    traditions: "toutes",
    afro: true,
    occasions: ["noel", "mariage"],
    recherche: "crèche africaine bois sculpté",
    amazonAsin: null,
  },
  {
    slug: "creche-tissu-wax",
    sousRubrique: "creches-africaines",
    nom: "Crèche en tissu wax",
    description:
      "Des personnages cousus et vêtus de tissu wax aux couleurs vives, souples et doux. Rien ne casse, et les enfants peuvent jouer avec la Sainte Famille en toute liberté. Une crèche joyeuse qui fait entrer les couleurs de l'Afrique dans le salon.",
    traditions: "toutes",
    afro: true,
    occasions: ["noel", "bapteme"],
    recherche: "crèche africaine tissu wax",
    amazonAsin: null,
  },
  {
    slug: "sainte-famille-africaine-bois",
    sousRubrique: "creches-africaines",
    nom: "Sainte Famille africaine en bois",
    description:
      "Marie, Joseph et Jésus réunis en une seule sculpture, aux traits africains, serrés les uns contre les autres. Elle se pose toute l'année, pas seulement à Noël, comme une image de la famille unie. Un très beau cadeau de mariage ou de naissance.",
    traditions: "toutes",
    afro: true,
    occasions: ["noel", "mariage", "bapteme"],
    recherche: "Sainte Famille africaine bois",
    amazonAsin: null,
  },
  {
    slug: "creche-africaine-fil-de-fer-perles",
    sousRubrique: "creches-africaines",
    nom: "Crèche africaine en fil de fer et perles",
    description:
      "Des personnages façonnés en fil de fer et ornés de petites perles colorées, selon un savoir-faire répandu en Afrique australe. Légère et graphique, elle surprend par sa finesse. Une crèche originale à poser sur une étagère ou à offrir à un amateur d'artisanat.",
    traditions: "toutes",
    afro: true,
    occasions: ["noel"],
    recherche: "crèche africaine perles fil de fer",
    amazonAsin: null,
  },
  {
    slug: "creche-africaine-miniature-bois",
    sousRubrique: "creches-africaines",
    nom: "Petite crèche africaine en bois",
    description:
      "Une crèche africaine de petite taille, avec seulement quelques personnages sculptés dans un bois foncé. Elle tient sur un coin de buffet ou une table de chevet. Un cadeau de Noël simple à envoyer à un proche, en France ou au pays.",
    traditions: "toutes",
    afro: true,
    occasions: ["noel"],
    recherche: "petite crèche africaine bois",
    amazonAsin: null,
  },

  // Santons et personnages (5)
  {
    slug: "santons-africains",
    sousRubrique: "santons-et-personnages",
    nom: "Santons et personnages de crèche africains",
    description:
      "Des santons aux visages et aux vêtements africains, pour compléter ou renouveler une crèche. On peut les ajouter à une crèche classique pour que les enfants s'y reconnaissent. Une façon simple de donner à Noël la couleur de la famille.",
    traditions: "toutes",
    afro: true,
    occasions: ["noel"],
    recherche: "santons africains crèche",
    amazonAsin: null,
  },
  {
    slug: "rois-mages-figurines",
    sousRubrique: "santons-et-personnages",
    nom: "Figurines des Rois mages",
    description:
      "Les trois mages venus d'Orient, avec leurs présents d'or, d'encens et de myrrhe, vendus à part pour compléter une crèche. On les fait avancer peu à peu vers l'étable jusqu'à l'Épiphanie, ce qui ravit les enfants. Choisissez une taille proche de celle de vos autres personnages.",
    traditions: "toutes",
    afro: false,
    occasions: ["noel"],
    recherche: "Rois mages figurines crèche",
    amazonAsin: null,
  },
  {
    slug: "enfant-jesus-pour-la-creche",
    sousRubrique: "santons-et-personnages",
    nom: "Enfant Jésus pour la crèche",
    description:
      "Le petit Jésus couché dans sa mangeoire, à déposer dans la crèche pendant la nuit de Noël. Dans beaucoup de familles, c'est le plus jeune enfant qui le pose, un moment que l'on n'oublie pas. On en trouve en résine, en bois ou en cire, de toutes tailles.",
    traditions: "toutes",
    afro: false,
    occasions: ["noel", "bapteme"],
    recherche: "Enfant Jésus crèche figurine",
    amazonAsin: null,
  },
  {
    slug: "santons-de-provence-argile",
    sousRubrique: "santons-et-personnages",
    nom: "Santons de Provence en argile",
    description:
      "Le berger, la lavandière, le boulanger : les santons de Provence en argile peinte représentent tout un village venu voir l'enfant. On en ajoute un ou deux chaque année, et la crèche grandit avec la famille. Un petit cadeau de Noël que l'on attend avec plaisir.",
    traditions: "toutes",
    afro: false,
    occasions: ["noel"],
    recherche: "santons de Provence argile",
    amazonAsin: null,
  },
  {
    slug: "animaux-de-la-creche",
    sousRubrique: "santons-et-personnages",
    nom: "Animaux de la crèche : âne, bœuf, moutons",
    description:
      "L'âne, le bœuf, les moutons et parfois les chameaux des mages, pour donner vie à la crèche. Ce sont souvent les personnages préférés des tout-petits. Des figurines faciles à ajouter, à acheter seules ou en lot.",
    traditions: "toutes",
    afro: false,
    occasions: ["noel"],
    recherche: "animaux crèche âne bœuf moutons",
    amazonAsin: null,
  },

  // Calendriers de l'Avent (5)
  {
    slug: "calendrier-avent-chretien-enfant",
    sousRubrique: "calendriers-de-l-avent",
    nom: "Calendrier de l'Avent chrétien pour enfants",
    description:
      "Derrière chaque fenêtre, une image ou une courte histoire qui fait avancer le récit de Noël jusqu'à la naissance de Jésus. L'enfant attend Noël en découvrant pourquoi on le fête. Un cadeau à offrir dès la fin novembre, avant le début de l'Avent.",
    traditions: "toutes",
    afro: false,
    occasions: ["noel"],
    recherche: "calendrier de l'Avent chrétien enfant",
    amazonAsin: null,
  },
  {
    slug: "calendrier-avent-versets-bible",
    sousRubrique: "calendriers-de-l-avent",
    nom: "Calendrier de l'Avent avec versets bibliques",
    description:
      "Un verset de la Bible à découvrir chaque jour de décembre, pour préparer Noël par la lecture et la prière. Il plaît aux adolescents et aux adultes qui veulent vivre l'Avent autrement. On peut le poser sur un bureau ou une table de cuisine.",
    traditions: "toutes",
    afro: false,
    occasions: ["noel"],
    recherche: "calendrier Avent versets bibliques",
    amazonAsin: null,
  },
  {
    slug: "calendrier-avent-bois-creche",
    sousRubrique: "calendriers-de-l-avent",
    nom: "Calendrier de l'Avent en bois avec crèche",
    description:
      "Un calendrier en bois à petites cases, qui cache chaque jour un personnage ou un élément de la crèche. Le soir de Noël, la Nativité est complète. Réutilisable d'une année sur l'autre, il devient vite un rituel de famille.",
    traditions: "toutes",
    afro: false,
    occasions: ["noel"],
    recherche: "calendrier Avent bois crèche",
    amazonAsin: null,
  },
  {
    slug: "calendrier-avent-livre-histoires",
    sousRubrique: "calendriers-de-l-avent",
    nom: "Livre-calendrier de l'Avent à histoires",
    description:
      "Un livre à lire jour après jour pendant l'Avent, avec une courte histoire ou une page du récit de Noël pour chaque soir. C'est un beau moment à partager avant le coucher. Il convient aux enfants qui savent écouter une histoire, et se relit chaque année.",
    traditions: "toutes",
    afro: false,
    occasions: ["noel"],
    recherche: "livre calendrier de l'Avent histoires",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "couronne-de-l-avent-quatre-bougies",
    sousRubrique: "calendriers-de-l-avent",
    nom: "Couronne de l'Avent à quatre bougies",
    description:
      "Une couronne de verdure ou de bois avec quatre bougies, que l'on allume une à une, chaque dimanche de l'Avent. La lumière grandit à mesure que Noël approche. Une tradition partagée par les catholiques et les protestants, simple à vivre en famille.",
    traditions: ["catholique", "protestante", "evangelique"],
    afro: false,
    occasions: ["noel"],
    recherche: "couronne de l'Avent bougies",
    amazonAsin: null,
  },

  // Déco de Noël chrétienne (5)
  {
    slug: "etoile-de-bethleem-lumineuse",
    sousRubrique: "deco-de-noel-chretienne",
    nom: "Étoile de Bethléem lumineuse",
    description:
      "Une étoile à poser au sommet du sapin ou à suspendre à une fenêtre, en souvenir de celle qui a guidé les mages jusqu'à Jésus. Éclairée, elle se voit de la rue pendant toutes les fêtes. Une décoration simple qui dit tout de suite le sens de Noël.",
    traditions: "toutes",
    afro: false,
    occasions: ["noel"],
    recherche: "étoile de Bethléem lumineuse",
    amazonAsin: null,
  },
  {
    slug: "ange-cime-du-sapin",
    sousRubrique: "deco-de-noel-chretienne",
    nom: "Ange pour la cime du sapin",
    description:
      "Un ange aux ailes ouvertes, à placer tout en haut du sapin à la place de l'étoile. Il rappelle les anges qui ont annoncé la naissance de Jésus aux bergers. Une décoration que l'on sort chaque année avec émotion.",
    traditions: "toutes",
    afro: false,
    occasions: ["noel"],
    recherche: "ange cime de sapin",
    amazonAsin: null,
  },
  {
    slug: "boules-de-noel-nativite",
    sousRubrique: "deco-de-noel-chretienne",
    nom: "Boules de Noël ornées de la Nativité",
    description:
      "Des boules de sapin décorées de la Sainte Famille, de l'étoile ou des anges, en verre ou en matière incassable. Elles donnent au sapin une touche chrétienne discrète. Un petit cadeau à offrir en lot pendant l'Avent.",
    traditions: "toutes",
    afro: false,
    occasions: ["noel"],
    recherche: "boules de Noël Nativité",
    amazonAsin: null,
  },
  {
    slug: "anges-noirs-pour-le-sapin",
    sousRubrique: "deco-de-noel-chretienne",
    nom: "Anges noirs à suspendre au sapin",
    description:
      "De petits anges à la peau noire, en résine, en bois ou en tissu, à accrocher aux branches du sapin. Ils font une décoration chaleureuse où les enfants de la famille se reconnaissent. Un cadeau de Noël original pour la diaspora.",
    traditions: "toutes",
    afro: true,
    occasions: ["noel"],
    recherche: "ange noir décoration sapin",
    amazonAsin: null,
  },
  {
    slug: "bougie-de-noel-nativite",
    sousRubrique: "deco-de-noel-chretienne",
    nom: "Bougie de Noël décorée de la Nativité",
    description:
      "Une grande bougie ornée d'une scène de la Nativité, à allumer pendant le repas ou la prière du soir de Noël. Sa flamme rappelle que Jésus est appelé la lumière du monde. Une jolie attention à apporter quand on est invité pour les fêtes.",
    traditions: "toutes",
    afro: false,
    occasions: ["noel"],
    recherche: "bougie de Noël Nativité",
    amazonAsin: null,
  },
];
