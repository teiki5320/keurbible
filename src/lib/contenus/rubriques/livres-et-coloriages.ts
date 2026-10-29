import type { Objet, Rubrique, SousRubrique } from "../../types";

export const rubrique: Rubrique = {
  slug: "livres-et-coloriages",
  nom: "Livres et coloriages",
  titre: "Livres chrétiens et coloriages bibliques à offrir",
  description:
    "Histoires de la Bible pour enfants, coloriages bibliques, livres de prière et livres de foi : comment choisir le bon livre chrétien selon l'âge et l'occasion.",
  intro:
    "Un livre est souvent le premier objet de foi que l'on met entre les mains d'un enfant. Les histoires de la Bible racontées avec des images, les coloriages et les cahiers d'activités lui font découvrir Noé, Moïse ou Jésus en s'amusant. Pour les plus grands et les adultes, un livre de prière ou de méditation accompagne le quotidien, une étape de la vie ou un moment difficile. Vous trouverez ici des types de livres pour tous les âges et pour toutes les confessions.",
  choisir: [
    "Regardez l'âge indiqué : un imagier en carton pour les tout-petits, une Bible en images pour les 3-6 ans, des récits plus longs à partir de 7 ans.",
    "Feuilletez les illustrations quand c'est possible : elles comptent autant que le texte pour un enfant, et certains livres représentent des personnages aux traits africains.",
    "Pour un livre de prière, vérifiez à quelle tradition il s'adresse : un missel est catholique, un livre de prières orthodoxe suit la prière de cette Église, d'autres recueils conviennent à tous.",
    "Un coloriage ou un cahier d'activités est un petit cadeau idéal pour accompagner un cadeau plus important, ou pour occuper les enfants pendant les vacances.",
  ],
  faq: [
    {
      q: "À quel âge offrir une première Bible à un enfant ?",
      a: "Dès 2 ou 3 ans, un imagier biblique en carton ou une Bible en images très simple peut être lu avec un adulte. Vers 6 ou 7 ans, l'enfant peut lire seul des récits bibliques adaptés. Une Bible complète vient souvent plus tard, au moment de la profession de foi ou de la confirmation. Voir aussi nos [Bibles pour enfants](/bibles/bibles-pour-enfants).",
    },
    {
      q: "Un livre de prière pour enfant convient-il à toutes les Églises ?",
      a: "Beaucoup de livres de prières pour enfants reprennent des prières simples, comme le Notre Père et des prières du matin et du soir, qui conviennent à tous les chrétiens. D'autres sont pensés pour une tradition, comme le missel catholique. Il suffit de lire la présentation du livre avant de l'offrir.",
    },
    {
      q: "Qu'offrir avec un livre pour un baptême ou une communion ?",
      a: "Un livre se marie bien avec un petit objet : un chapelet, une croix ou une statuette du saint patron. Vous pouvez aussi écrire un mot sur la première page, que l'enfant relira plus tard. D'autres idées sur les pages [baptême](/cadeaux/bapteme) et [première communion](/cadeaux/premiere-communion).",
    },
  ],
};

export const sousRubriques: SousRubrique[] = [
  {
    slug: "histoires-bibliques-pour-enfants",
    rubrique: "livres-et-coloriages",
    nom: "Histoires bibliques pour enfants",
    titre: "Histoires bibliques pour enfants : livres illustrés par âge",
    description:
      "Livres d'histoires bibliques pour enfants : imagiers pour bébés, Bibles en images pour les 3-6 ans, récits pour les 7-10 ans, histoires de Noël et de Pâques.",
    intro:
      "Les grandes histoires de la Bible se racontent très bien aux enfants : la création, l'arche de Noé, David et Goliath, la naissance et la vie de Jésus. Les livres illustrés les mettent à leur portée, avec des mots simples et des images qui marquent. Choisissez selon l'âge de l'enfant et le moment de l'année. Lire ensemble le soir devient vite un rendez-vous attendu.",
  },
  {
    slug: "coloriages-et-activites",
    rubrique: "livres-et-coloriages",
    nom: "Coloriages et activités",
    titre: "Coloriages bibliques et cahiers d'activités chrétiens",
    description:
      "Coloriages des histoires de la Bible, cahiers de jeux bibliques, autocollants et coloriages de versets pour adultes : apprendre et prier en s'amusant.",
    intro:
      "Colorier Noé et ses animaux ou chercher son chemin dans un labyrinthe vers la crèche : les enfants retiennent mieux ce qu'ils font de leurs mains. Les cahiers d'activités bibliques mêlent jeux, dessins et petites questions. Les adultes aussi aiment colorier des versets ou des motifs inspirés de la Bible, comme un temps de calme et de prière. Ce sont des cadeaux simples et peu encombrants.",
  },
  {
    slug: "livres-de-priere",
    rubrique: "livres-et-coloriages",
    nom: "Livres de prière",
    titre: "Livres de prière pour enfants et adultes, missels",
    description:
      "Missels pour enfants, livres de prières illustrés, prières orthodoxes, Psaumes et prières pour le deuil : un livre de prière pour chaque âge et chaque moment.",
    intro:
      "Un livre de prière aide à trouver les mots quand on ne sait pas comment prier. Pour un enfant, c'est souvent un recueil illustré de prières courtes ; pour un catholique qui fait sa première communion, un missel qui suit la messe. D'autres recueils accompagnent la prière orthodoxe, la lecture des Psaumes ou les jours de deuil. Choisissez-le selon l'âge et la tradition de celui qui le recevra.",
  },
  {
    slug: "livres-de-foi",
    rubrique: "livres-et-coloriages",
    nom: "Livres de foi",
    titre: "Livres de foi : méditations, mariage, confirmation",
    description:
      "Livres de foi à offrir : méditations pour chaque jour, préparation au mariage, préparation à la confirmation, saints d'Afrique et guides pour lire la Bible.",
    intro:
      "Les livres de foi accompagnent les adultes et les jeunes dans leur vie chrétienne. Certains proposent une courte méditation par jour, d'autres préparent un couple au mariage ou un jeune à la confirmation. On y trouve aussi des vies de saints, dont ceux d'Afrique, et des guides pour lire la Bible. Ils font de beaux cadeaux pour la fête des mères, la fête des pères ou une étape importante.",
  },
];

export const objets: Objet[] = [
  // Histoires bibliques pour enfants (6)
  {
    slug: "imagier-biblique-tout-carton",
    sousRubrique: "histoires-bibliques-pour-enfants",
    nom: "Imagier biblique en carton pour tout-petits",
    description:
      "Un petit livre aux pages épaisses en carton, avec une grande image et quelques mots par page : l'arche de Noé, la crèche, Jésus et les enfants. Les bébés peuvent le manipuler sans le déchirer. Un premier livre de foi idéal pour une naissance ou un baptême.",
    traditions: "toutes",
    afro: false,
    occasions: ["bapteme"],
    recherche: "imagier biblique bébé carton",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "bible-en-images-3-6-ans",
    sousRubrique: "histoires-bibliques-pour-enfants",
    nom: "Bible en images pour les 3-6 ans",
    description:
      "Les grandes histoires de l'Ancien et du Nouveau Testament, racontées en quelques lignes et illustrées à chaque page. Les parents la lisent à voix haute, l'enfant suit avec les images. Un cadeau de baptême ou de Noël qui sert pendant plusieurs années.",
    traditions: "toutes",
    afro: false,
    occasions: ["bapteme", "noel"],
    recherche: "Bible en images enfant 3-6 ans",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "bible-illustree-personnages-africains",
    sousRubrique: "histoires-bibliques-pour-enfants",
    nom: "Histoires bibliques illustrées aux personnages africains",
    description:
      "Un livre d'histoires de la Bible dont les illustrations représentent des personnages à la peau noire. L'enfant découvre Abraham, Marie ou Jésus sous des traits qui lui ressemblent. Un cadeau précieux pour les familles africaines et antillaises.",
    traditions: "toutes",
    afro: true,
    occasions: ["bapteme", "premiere-communion", "noel"],
    recherche: "Bible enfant illustrations africaines",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "recits-bibliques-7-10-ans",
    sousRubrique: "histoires-bibliques-pour-enfants",
    nom: "Récits bibliques pour les 7-10 ans",
    description:
      "Des récits plus complets, que l'enfant peut lire seul, avec des illustrations et parfois des cartes ou des explications sur la vie au temps de Jésus. Il découvre la Bible comme une grande histoire suivie. Un bon cadeau pour une première communion.",
    traditions: "toutes",
    afro: false,
    occasions: ["premiere-communion", "profession-de-foi"],
    recherche: "Bible enfant 7-10 ans récits",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "livre-histoire-de-noel-enfant",
    sousRubrique: "histoires-bibliques-pour-enfants",
    nom: "Livre de l'histoire de Noël pour enfants",
    description:
      "L'annonce à Marie, la route vers Bethléem, la naissance de Jésus, les bergers et les mages, racontés en un seul album illustré. C'est le livre à lire au pied du sapin ou près de la crèche. Un cadeau de Noël qui rappelle le sens de la fête.",
    traditions: "toutes",
    afro: false,
    occasions: ["noel"],
    recherche: "livre histoire de Noël Jésus enfant",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "livre-histoire-de-paques-enfant",
    sousRubrique: "histoires-bibliques-pour-enfants",
    nom: "Livre de l'histoire de Pâques pour enfants",
    description:
      "Un album qui raconte aux enfants l'entrée de Jésus à Jérusalem, sa mort et sa résurrection, avec des mots doux et adaptés à leur âge. Il aide à expliquer pourquoi Pâques est la plus grande fête chrétienne. À offrir avec quelques œufs en chocolat.",
    traditions: "toutes",
    afro: false,
    occasions: ["paques"],
    recherche: "livre histoire de Pâques enfant",
    livre: true,
    amazonAsin: null,
  },

  // Coloriages et activités (5)
  {
    slug: "cahier-coloriages-histoires-bible",
    sousRubrique: "coloriages-et-activites",
    nom: "Cahier de coloriages des histoires de la Bible",
    description:
      "Des dessins à colorier qui suivent les grandes histoires de la Bible, souvent avec une phrase pour raconter chaque scène. L'enfant revit le récit en mettant ses couleurs. Un petit cadeau parfait pour les vacances, Noël ou Pâques.",
    traditions: "toutes",
    afro: false,
    occasions: ["noel", "paques"],
    recherche: "coloriage histoires de la Bible enfant",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "coloriages-noel-nativite",
    sousRubrique: "coloriages-et-activites",
    nom: "Coloriages de Noël et de la Nativité",
    description:
      "Des pages à colorier sur Marie et Joseph, l'étable, les anges, les bergers et l'étoile. Les enfants préparent Noël en coloriant, seuls ou en famille, pendant l'Avent. On peut ensuite afficher les dessins près de la crèche.",
    traditions: "toutes",
    afro: false,
    occasions: ["noel"],
    recherche: "coloriage Noël Nativité chrétien",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "cahier-activites-bibliques-jeux",
    sousRubrique: "coloriages-et-activites",
    nom: "Cahier d'activités et de jeux bibliques",
    description:
      "Mots mêlés, labyrinthes, jeux des différences et petites questions sur les histoires de la Bible. L'enfant apprend en jouant et retient les personnages et les épisodes. Un bon compagnon pour le catéchisme, l'école du dimanche ou les longs trajets.",
    traditions: "toutes",
    afro: false,
    occasions: ["premiere-communion"],
    recherche: "cahier activités bibliques enfant",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "livre-autocollants-bible-enfants",
    sousRubrique: "coloriages-et-activites",
    nom: "Livre d'autocollants bibliques pour enfants",
    description:
      "Des décors à compléter avec des autocollants : les animaux de l'arche, les personnages de la crèche, les disciples sur la barque. Les plus petits, dès 3 ou 4 ans, adorent coller et décoller. Un petit cadeau à glisser dans la hotte de Noël.",
    traditions: "toutes",
    afro: false,
    occasions: ["noel", "paques"],
    recherche: "autocollants Bible enfant",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "coloriages-versets-adultes",
    sousRubrique: "coloriages-et-activites",
    nom: "Coloriages de versets bibliques pour adultes",
    description:
      "Des versets entourés de fleurs, de motifs et de lettres décorées, à colorier tranquillement au crayon ou au feutre. C'est un moment de calme où l'on médite la Parole en la coloriant. Un cadeau doux pour une maman, une amie ou une jeune confirmée.",
    traditions: "toutes",
    afro: false,
    occasions: ["fete-des-meres", "confirmation"],
    recherche: "coloriage versets bibliques adulte",
    livre: true,
    amazonAsin: null,
  },

  // Livres de prière (6)
  {
    slug: "livre-de-prieres-enfants-illustre",
    sousRubrique: "livres-de-priere",
    nom: "Livre de prières illustré pour enfants",
    description:
      "Des prières courtes pour le matin, le soir, les repas, les jours de joie ou de peine, avec de belles illustrations. L'enfant apprend à parler à Dieu avec ses propres mots. Un cadeau qui accompagne le baptême, puis les premières années de la foi.",
    traditions: "toutes",
    afro: false,
    occasions: ["bapteme", "premiere-communion"],
    recherche: "livre de prières enfant illustré",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "missel-des-enfants",
    sousRubrique: "livres-de-priere",
    nom: "Missel pour enfants",
    description:
      "Un missel qui explique pas à pas le déroulement de la messe, avec des mots simples et des images. L'enfant suit mieux la célébration et comprend ce qu'il vit. C'est l'un des cadeaux les plus classiques pour une première communion catholique.",
    traditions: ["catholique"],
    afro: false,
    occasions: ["premiere-communion", "profession-de-foi"],
    recherche: "missel enfant première communion",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "carnet-souvenir-premiere-communion",
    sousRubrique: "livres-de-priere",
    nom: "Livre souvenir de première communion",
    description:
      "Un livre à remplir avec la date, l'église, les photos, les signatures des invités et quelques prières. L'enfant garde une trace de ce grand jour et peut le relire plus tard. Un joli cadeau de parrain ou de marraine.",
    traditions: ["catholique"],
    afro: false,
    occasions: ["premiere-communion"],
    recherche: "livre souvenir première communion",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "livre-de-prieres-orthodoxe",
    sousRubrique: "livres-de-priere",
    nom: "Livre de prières orthodoxe en français",
    description:
      "Un recueil des prières du matin et du soir et d'autres prières de la tradition orthodoxe, traduites en français. Il permet de prier chez soi, devant les icônes, comme on le fait dans les familles orthodoxes. Un beau cadeau pour un baptême ou un nouvel arrivant dans une paroisse.",
    traditions: ["orthodoxe"],
    afro: false,
    occasions: ["bapteme"],
    recherche: "livre de prières orthodoxe",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "livre-psaumes-prier-au-quotidien",
    sousRubrique: "livres-de-priere",
    nom: "Livre des Psaumes pour prier chaque jour",
    description:
      "Les Psaumes, la grande prière de la Bible, réunis dans un petit volume facile à emporter, parfois avec une courte introduction à chacun. Juifs et chrétiens de toutes les Églises les prient depuis des siècles. Un livre pour les jours de joie comme pour les jours difficiles.",
    traditions: "toutes",
    afro: false,
    occasions: ["confirmation", "fete-des-peres", "condoleances"],
    recherche: "livre des Psaumes prière",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "livre-prieres-deuil-consolation",
    sousRubrique: "livres-de-priere",
    nom: "Livre de prières pour le deuil",
    description:
      "Des prières, des textes de la Bible et des pensées pour accompagner ceux qui viennent de perdre un proche. On peut le lire seul, en famille ou pendant une veillée. Un cadeau de soutien discret, à joindre à un mot de condoléances.",
    traditions: "toutes",
    afro: false,
    occasions: ["condoleances"],
    recherche: "livre prières deuil consolation",
    livre: true,
    amazonAsin: null,
  },

  // Livres de foi (5)
  {
    slug: "livre-meditations-quotidiennes",
    sousRubrique: "livres-de-foi",
    nom: "Livre de méditations pour chaque jour",
    description:
      "Une page par jour de l'année, avec un verset et une courte réflexion à lire le matin ou le soir. C'est une façon simple de prendre un moment avec Dieu chaque jour. Un cadeau qui plaît autant aux mères qu'aux pères, et qui se garde toute l'année.",
    traditions: "toutes",
    afro: false,
    occasions: ["fete-des-meres", "fete-des-peres"],
    recherche: "méditations quotidiennes chrétiennes 365 jours",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "livre-preparation-au-mariage",
    sousRubrique: "livres-de-foi",
    nom: "Livre chrétien pour préparer son mariage",
    description:
      "Un livre pour les fiancés et les jeunes mariés, qui aide à parler ensemble de la foi, de la vie de couple, de la famille et du pardon. On le lit à deux, chapitre après chapitre. Un cadeau utile à offrir pendant les fiançailles ou le jour du mariage.",
    traditions: "toutes",
    afro: false,
    occasions: ["mariage"],
    recherche: "livre chrétien préparation mariage couple",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "livre-preparer-sa-confirmation",
    sousRubrique: "livres-de-foi",
    nom: "Livre pour préparer sa confirmation",
    description:
      "Un livre pour les adolescents et les adultes qui se préparent à la confirmation, avec des explications simples, des témoignages et des temps de prière. Il aide à comprendre l'engagement que l'on prend. À offrir pendant la préparation ou le jour de la célébration.",
    traditions: ["catholique", "protestante"],
    afro: false,
    occasions: ["confirmation", "profession-de-foi"],
    recherche: "livre préparation confirmation",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "livre-saints-d-afrique",
    sousRubrique: "livres-de-foi",
    nom: "Livre sur les saints et martyrs d'Afrique",
    description:
      "Des vies de saints nés en Afrique ou liés à son histoire, comme saint Augustin, sainte Monique, sainte Joséphine Bakhita ou les martyrs de l'Ouganda. On découvre que le christianisme a de très anciennes racines africaines. Un cadeau qui parle aux jeunes de la diaspora.",
    traditions: ["catholique"],
    afro: false,
    occasions: ["confirmation", "profession-de-foi"],
    recherche: "saints africains livre",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "guide-pour-lire-la-bible",
    sousRubrique: "livres-de-foi",
    nom: "Guide pour lire la Bible",
    description:
      "Un guide qui présente les livres de la Bible, leur époque et leurs grands thèmes, avec des conseils pour commencer la lecture. Il évite de se décourager devant un texte long et ancien. Un bon compagnon pour ceux qui reçoivent leur première Bible d'adulte.",
    traditions: "toutes",
    afro: false,
    occasions: ["confirmation", "fete-des-peres"],
    recherche: "guide pour lire la Bible",
    livre: true,
    amazonAsin: null,
  },
];
