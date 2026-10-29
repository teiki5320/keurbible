import type { Objet, Rubrique, SousRubrique } from "../../types";

export const rubrique: Rubrique = {
  slug: "bibles",
  nom: "Bibles",
  titre: "Bibles : bien choisir sa traduction et son format",
  description:
    "Louis Segond, TOB, Bible de Jérusalem, Parole de Vie : comment choisir une Bible pour soi, pour un enfant ou à offrir, selon sa tradition.",
  intro:
    "Une Bible, c'est souvent le premier objet chrétien de la maison, et celui que l'on garde toute une vie. Encore faut-il s'y retrouver entre les traductions, les formats et les éditions pour enfants. Chaque Église a ses habitudes : les protestants et les évangéliques lisent souvent la Louis Segond, les catholiques la Bible de Jérusalem ou la Bible de la liturgie, et la TOB rassemble les deux. Nous vous aidons à choisir la Bible qui sera vraiment lue, pour vous ou pour quelqu'un que vous aimez.",
  choisir: [
    "Commencez par la tradition de celui qui la lira : une Bible catholique contient les livres deutérocanoniques (Tobie, Judith, Sagesse, Maccabées…), une Bible protestante en compte 66.",
    "Choisissez une langue qui lui ressemble : la Louis Segond 1910 pour un français classique, la Segond 21 ou la Parole de Vie pour un français d'aujourd'hui, plus simple à lire.",
    "Pensez au format : gros caractères pour une personne âgée, format poche pour la lire dans les transports, Bible d'étude pour approfondir avec des notes et des cartes.",
    "Pour un enfant, prenez une Bible faite pour son âge : cartonnée et très illustrée pour les tout-petits, en texte intégral pour un adolescent.",
    "Pour un cadeau, une couverture solide et une page de dédicace font la différence : c'est une Bible que l'on gardera longtemps.",
  ],
  faq: [
    {
      q: "Quelle est la différence entre une Bible catholique et une Bible protestante ?",
      a: "Le Nouveau Testament est le même. L'Ancien Testament des Bibles catholiques compte quelques livres de plus, appelés deutérocanoniques, comme Tobie, Judith ou la Sagesse. Certaines éditions, comme la TOB ou la Parole de Vie, existent avec ces livres, ce qui en fait de bons choix pour tout le monde.",
    },
    {
      q: "Quelle Bible choisir pour commencer à lire ?",
      a: "Une traduction en français courant est plus facile à suivre : la Segond 21, la Parole de Vie ou la Bible du Semeur se lisent sans buter sur les mots. Beaucoup commencent par un Évangile, celui de Marc ou de Luc, avant de lire le reste. Voir aussi notre sélection d'[éditions et traductions](/bibles/editions-et-traductions).",
    },
    {
      q: "Peut-on offrir une Bible à quelqu'un d'une autre Église ?",
      a: "Oui, c'est un très beau cadeau, à condition de choisir une traduction qu'il reconnaîtra. En cas de doute, la TOB, traduite ensemble par des catholiques et des protestants, convient à tous. Nos idées sont réunies dans le [Top 10 des Bibles à offrir](/top-10/bibles-a-offrir).",
    },
  ],
};

export const sousRubriques: SousRubrique[] = [
  {
    slug: "editions-et-traductions",
    rubrique: "bibles",
    nom: "Éditions et traductions",
    titre: "Traductions de la Bible : laquelle choisir ?",
    description:
      "Louis Segond 1910, Segond 21, Bible de Jérusalem, TOB, Parole de Vie, Semeur : les grandes traductions françaises de la Bible et qui les lit.",
    intro:
      "Il existe de nombreuses traductions françaises de la Bible, et chacune a son ton. Certaines collent au plus près des textes anciens, d'autres cherchent avant tout à être comprises. Les Églises ont aussi leurs habitudes : on n'entend pas la même traduction à la messe et au culte. Voici les principales, présentées simplement, pour choisir celle qui vous parlera.",
  },
  {
    slug: "bibles-pour-enfants",
    rubrique: "bibles",
    nom: "Bibles pour enfants",
    titre: "Bibles pour enfants : la bonne Bible pour chaque âge",
    description:
      "Bible cartonnée pour les tout-petits, Bible illustrée, Bible en BD, Bible pour ados : nos idées de Bibles pour enfants, âge par âge.",
    intro:
      "Une Bible pour enfant raconte les grands récits avec des mots et des images à sa portée. Pour les tout-petits, quelques histoires suffisent, sur des pages épaisses ; vers 7 ans, l'enfant lit seul ; à l'adolescence vient le temps du texte intégral. C'est aussi un cadeau de baptême, de première communion ou de Noël que l'on garde longtemps.",
  },
  {
    slug: "formats-et-gros-caracteres",
    rubrique: "bibles",
    nom: "Formats et gros caractères",
    titre: "Bibles en gros caractères, de poche ou d'étude",
    description:
      "Bible en gros caractères, format poche, Bible d'étude, Bible à marges larges : choisir le format de Bible qui convient à chaque lecteur.",
    intro:
      "Le même texte se lit très différemment selon le format. Une Bible en gros caractères change la vie d'un lecteur dont la vue baisse, une Bible de poche suit partout, une Bible d'étude accompagne ceux qui veulent comprendre plus en profondeur. Pensez à celui qui la lira : où, quand et comment il ouvrira sa Bible.",
  },
  {
    slug: "etuis-et-couvertures",
    rubrique: "bibles",
    nom: "Étuis et couvertures",
    titre: "Étuis et housses de Bible : protéger sa Bible",
    description:
      "Étui en cuir zippé, housse en tissu wax, couverture brodée au prénom, sac à Bible : de quoi protéger et emporter sa Bible chaque dimanche.",
    intro:
      "Une Bible que l'on emporte au culte ou à la messe chaque semaine s'abîme vite. Un étui la protège, garde avec elle un stylo, des feuillets et des lunettes, et lui donne une allure personnelle. C'est aussi un petit cadeau très apprécié, seul ou avec une Bible neuve.",
  },
];

export const objets: Objet[] = [
  // Éditions et traductions
  {
    slug: "bible-louis-segond-1910",
    sousRubrique: "editions-et-traductions",
    nom: "Bible Louis Segond 1910",
    description:
      "La traduction du pasteur Louis Segond, révisée en 1910, est la Bible de référence de beaucoup d'Églises protestantes et évangéliques, en France comme en Afrique francophone. Son français classique a une vraie solennité, et c'est le texte que l'on apprend par cœur.",
    traditions: ["protestante", "evangelique"],
    afro: false,
    occasions: ["bapteme", "confirmation", "noel"],
    recherche: "bible louis segond 1910",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "bible-segond-21",
    sousRubrique: "editions-et-traductions",
    nom: "Bible Segond 21",
    description:
      "La Segond 21 reprend la Segond dans un français d'aujourd'hui, plus simple à lire, tout en restant fidèle au texte. C'est un très bon choix pour un lecteur protestant ou évangélique qui trouve la version de 1910 difficile, ou pour une première Bible d'adulte.",
    traditions: ["protestante", "evangelique"],
    afro: false,
    occasions: ["confirmation", "mariage", "noel"],
    recherche: "bible segond 21",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "bible-de-jerusalem",
    sousRubrique: "editions-et-traductions",
    nom: "Bible de Jérusalem",
    description:
      "Préparée par l'École biblique de Jérusalem, elle est connue pour la qualité de ses notes et de ses introductions à chaque livre. Très lue chez les catholiques, elle contient les livres deutérocanoniques et convient à ceux qui aiment comprendre le contexte des textes.",
    traditions: ["catholique"],
    afro: false,
    occasions: ["confirmation", "profession-de-foi", "mariage"],
    recherche: "bible de jérusalem",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "bible-tob",
    sousRubrique: "editions-et-traductions",
    nom: "Bible TOB, traduction œcuménique",
    description:
      "La Traduction œcuménique de la Bible est le fruit du travail commun de biblistes catholiques et protestants. Avec ses notes riches et ses livres deutérocanoniques, c'est la Bible qui rassemble, idéale à offrir quand on ne connaît pas l'Église de celui qui la recevra.",
    traditions: "toutes",
    afro: false,
    occasions: ["mariage", "confirmation", "noel"],
    recherche: "bible tob traduction oecuménique",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "bible-parole-de-vie",
    sousRubrique: "editions-et-traductions",
    nom: "Bible Parole de Vie",
    description:
      "Écrite en français fondamental, avec des phrases courtes et un vocabulaire simple, la Parole de Vie a été pensée pour ceux dont le français n'est pas la première langue. Très présente en Afrique francophone, elle existe avec ou sans les livres deutérocanoniques.",
    traditions: "toutes",
    afro: false,
    occasions: ["bapteme", "profession-de-foi", "noel"],
    recherche: "bible parole de vie",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "bible-du-semeur",
    sousRubrique: "editions-et-traductions",
    nom: "Bible du Semeur",
    description:
      "Traduite dans un français courant et vivant, la Bible du Semeur cherche d'abord à faire passer le sens du texte. Elle est très appréciée dans les Églises évangéliques, notamment par les jeunes et par ceux qui découvrent la Bible pour la première fois.",
    traditions: ["evangelique", "protestante"],
    afro: false,
    occasions: ["bapteme", "confirmation"],
    recherche: "bible du semeur",
    livre: true,
    amazonAsin: null,
  },

  // Bibles pour enfants
  {
    slug: "bible-cartonnee-tout-petits",
    sousRubrique: "bibles-pour-enfants",
    nom: "Bible cartonnée pour les tout-petits",
    description:
      "Quelques grands récits, de la Création à la naissance de Jésus, racontés en deux ou trois phrases par page, sur des pages épaisses qui résistent aux petites mains. Une première Bible pour les enfants de 1 à 3 ans, à feuilleter sur les genoux d'un parent.",
    traditions: "toutes",
    afro: false,
    occasions: ["bapteme", "noel"],
    recherche: "bible cartonnée tout-petits",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "bible-illustree-3-6-ans",
    sousRubrique: "bibles-pour-enfants",
    nom: "Bible illustrée pour les 3-6 ans",
    description:
      "De grandes illustrations colorées et des histoires courtes, faciles à lire à voix haute le soir. L'enfant découvre Noé, Moïse, David et la vie de Jésus à son rythme, et reconnaît vite ses récits préférés. Un beau cadeau de baptême pour un enfant déjà grand.",
    traditions: "toutes",
    afro: false,
    occasions: ["bapteme", "noel"],
    recherche: "bible illustrée enfant 3 ans",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "bible-enfants-histoires-audio",
    sousRubrique: "bibles-pour-enfants",
    nom: "Bible pour enfants avec histoires audio",
    description:
      "Un livre d'histoires bibliques accompagné de leur version audio, que l'enfant écoute en suivant les images. Pratique pour les trajets en voiture ou le coucher, et précieux pour les enfants de 4 à 8 ans qui ne lisent pas encore seuls.",
    traditions: "toutes",
    afro: false,
    occasions: ["noel", "bapteme"],
    recherche: "bible enfant audio livre",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "bible-premiere-lecture",
    sousRubrique: "bibles-pour-enfants",
    nom: "Bible pour lecteurs débutants",
    description:
      "Des récits écrits en phrases simples et en gros caractères, pour l'enfant qui apprend à lire, vers 6 ou 7 ans. Il peut enfin lire sa Bible tout seul, et cette fierté compte beaucoup. Les illustrations aident à suivre l'histoire sans s'y perdre.",
    traditions: "toutes",
    afro: false,
    occasions: ["premiere-communion", "noel"],
    recherche: "bible premières lectures enfant",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "bible-illustree-7-10-ans",
    sousRubrique: "bibles-pour-enfants",
    nom: "Bible illustrée pour les 7-10 ans",
    description:
      "Plus complète que les Bibles des petits, elle raconte l'essentiel de l'Ancien et du Nouveau Testament, avec des cartes et des repères sur la vie au temps de Jésus. Une Bible que l'enfant de 7 à 10 ans lit seul et garde jusqu'à l'adolescence.",
    traditions: "toutes",
    afro: false,
    occasions: ["premiere-communion", "noel", "paques"],
    recherche: "bible illustrée enfant 8 ans",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "bible-enfants-365-histoires",
    sousRubrique: "bibles-pour-enfants",
    nom: "Bible en 365 histoires",
    description:
      "Une histoire par jour, toute l'année : ce format aide à prendre l'habitude de lire la Bible en famille, quelques minutes avant le coucher. Les récits suivent l'ordre de la Bible et conviennent aux enfants de 5 à 10 ans, avec les parents à côté.",
    traditions: "toutes",
    afro: false,
    occasions: ["noel", "premiere-communion"],
    recherche: "bible 365 histoires enfant",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "bible-en-bande-dessinee",
    sousRubrique: "bibles-pour-enfants",
    nom: "Bible en bande dessinée",
    description:
      "Les grands récits bibliques racontés en cases et en bulles, avec du mouvement et de l'émotion. Les enfants de 8 à 14 ans qui n'aiment pas les longs textes la dévorent, et beaucoup d'adultes y prennent aussi plaisir. Une bonne porte d'entrée vers la Bible complète.",
    traditions: "toutes",
    afro: false,
    occasions: ["noel", "premiere-communion", "profession-de-foi"],
    recherche: "bible en bande dessinée",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "bible-enfants-illustrations-afro",
    sousRubrique: "bibles-pour-enfants",
    nom: "Bible pour enfants aux illustrations afro",
    description:
      "Une Bible pour enfants où les personnages ont la peau noire ou métisse, comme beaucoup d'enfants de la diaspora. Se reconnaître dans les images aide l'enfant à entrer dans les récits. Un cadeau qui touche particulièrement les familles africaines et antillaises.",
    traditions: "toutes",
    afro: true,
    occasions: ["bapteme", "noel"],
    recherche: "bible enfant illustrations afro",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "bible-souvenir-premiere-communion",
    sousRubrique: "bibles-pour-enfants",
    nom: "Bible souvenir de première communion",
    description:
      "Une Bible pour enfants, souvent illustrée, avec une page pour noter la date et la paroisse de la première communion. Offerte par un parrain ou une marraine, elle devient le souvenir de cette journée. Elle convient aux enfants de 8 à 11 ans.",
    traditions: ["catholique"],
    afro: false,
    occasions: ["premiere-communion"],
    recherche: "bible première communion enfant",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "bible-ados-texte-integral",
    sousRubrique: "bibles-pour-enfants",
    nom: "Bible pour adolescents en texte intégral",
    description:
      "Le texte complet de la Bible, accompagné d'introductions, d'encadrés et de questions pensés pour les 12-17 ans. C'est la Bible du passage à l'âge adulte, que l'adolescent annote et emporte en camp ou au groupe de jeunes.",
    traditions: "toutes",
    afro: false,
    occasions: ["profession-de-foi", "confirmation"],
    recherche: "bible ados texte intégral",
    livre: true,
    amazonAsin: null,
  },

  // Formats et gros caractères
  {
    slug: "bible-gros-caracteres",
    sousRubrique: "formats-et-gros-caracteres",
    nom: "Bible en gros caractères",
    description:
      "Un texte imprimé en grande taille, bien contrasté, qui se lit sans fatigue. Pour une mère, un père ou des grands-parents dont la vue baisse, c'est souvent le plus beau des cadeaux : ils retrouvent le plaisir de lire leur Bible eux-mêmes, sans loupe.",
    traditions: "toutes",
    afro: false,
    occasions: ["fete-des-meres", "fete-des-peres", "noel"],
    recherche: "bible gros caractères",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "bible-format-poche",
    sousRubrique: "formats-et-gros-caracteres",
    nom: "Bible format poche",
    description:
      "Une Bible complète dans un format compact, qui tient dans un sac ou une poche de veste. Idéale pour lire dans les transports, au travail ou en voyage. Le papier est fin et les caractères petits : mieux vaut l'offrir à quelqu'un qui a une bonne vue.",
    traditions: "toutes",
    afro: false,
    occasions: ["confirmation", "profession-de-foi"],
    recherche: "bible format poche",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "bible-d-etude-annotee",
    sousRubrique: "formats-et-gros-caracteres",
    nom: "Bible d'étude avec notes et cartes",
    description:
      "Le texte biblique accompagné de notes détaillées, d'introductions, de cartes et de tableaux. Pour ceux qui préparent une étude biblique, animent un groupe ou veulent simplement comprendre ce qu'ils lisent. Plus lourde, elle reste plutôt à la maison.",
    traditions: "toutes",
    afro: false,
    occasions: ["fete-des-peres", "confirmation"],
    recherche: "bible d'étude annotée",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "bible-marges-larges-a-annoter",
    sousRubrique: "formats-et-gros-caracteres",
    nom: "Bible à marges larges à annoter",
    description:
      "Une Bible avec une large marge blanche à côté du texte, pour écrire ses réflexions, souligner, dessiner ou noter une prière. Elle plaît aux jeunes adultes et à tous ceux qui aiment garder une trace de leur lecture. Chaque Bible devient unique.",
    traditions: "toutes",
    afro: false,
    occasions: ["confirmation", "fete-des-meres"],
    recherche: "bible marges larges annoter",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "nouveau-testament-et-psaumes-poche",
    sousRubrique: "formats-et-gros-caracteres",
    nom: "Nouveau Testament et Psaumes de poche",
    description:
      "Un petit volume qui réunit le Nouveau Testament et le livre des Psaumes. Léger, il se glisse partout, et il réunit les textes que l'on relit le plus souvent. Un cadeau simple et discret, qui convient aussi à quelqu'un qui traverse un moment difficile.",
    traditions: "toutes",
    afro: false,
    occasions: ["condoleances", "confirmation"],
    recherche: "nouveau testament psaumes poche",
    livre: true,
    amazonAsin: null,
  },
  {
    slug: "bible-des-maries",
    sousRubrique: "formats-et-gros-caracteres",
    nom: "Bible de mariage à couverture blanche",
    description:
      "Une Bible à la couverture claire, souvent avec des pages pour noter la date du mariage, la naissance des enfants et les grandes dates de la famille. Offerte aux jeunes mariés, elle devient la Bible du foyer, celle que l'on transmet.",
    traditions: "toutes",
    afro: false,
    occasions: ["mariage"],
    recherche: "bible mariage couverture blanche",
    livre: true,
    amazonAsin: null,
  },

  // Étuis et couvertures
  {
    slug: "etui-bible-cuir-zippe",
    sousRubrique: "etuis-et-couvertures",
    nom: "Étui de Bible en cuir zippé",
    description:
      "Un étui en cuir ou en simili-cuir, fermé par une fermeture éclair, avec une poignée et des poches pour un stylo et des feuillets. La Bible est protégée de la pluie et des chocs, et on l'emporte au culte ou à la messe comme un petit porte-documents.",
    traditions: "toutes",
    afro: false,
    occasions: ["fete-des-peres", "noel"],
    recherche: "étui bible cuir fermeture éclair",
    amazonAsin: null,
  },
  {
    slug: "housse-bible-tissu-wax",
    sousRubrique: "etuis-et-couvertures",
    nom: "Housse de Bible en tissu wax",
    description:
      "Une housse cousue dans un tissu wax aux motifs colorés, souvent avec une poignée et une poche. Elle donne à la Bible une allure joyeuse et rappelle les couleurs des Églises d'Afrique. Un cadeau très apprécié, pour une mère ou une amie qui va chaque dimanche à l'église.",
    traditions: "toutes",
    afro: true,
    occasions: ["fete-des-meres", "noel"],
    recherche: "housse bible tissu wax",
    amazonAsin: null,
  },
  {
    slug: "couverture-bible-brodee-prenom",
    sousRubrique: "etuis-et-couvertures",
    nom: "Couverture de Bible brodée au prénom",
    description:
      "Une couverture en tissu ou en simili-cuir que l'on fait personnaliser avec un prénom ou une date. Glissée autour d'une Bible pour enfant ou pour adolescent, elle marque un baptême, une première communion ou une profession de foi.",
    traditions: "toutes",
    afro: false,
    occasions: ["bapteme", "premiere-communion", "profession-de-foi"],
    recherche: "couverture bible personnalisée prénom",
    amazonAsin: null,
  },
  {
    slug: "sac-a-bible-avec-poches",
    sousRubrique: "etuis-et-couvertures",
    nom: "Sac à Bible avec poches",
    description:
      "Un sac aux dimensions d'une Bible, avec des anses et plusieurs poches pour le carnet de chants, les lunettes et le téléphone. Pratique pour ceux qui vont au culte, à l'étude biblique ou à la chorale avec tout leur nécessaire.",
    traditions: "toutes",
    afro: false,
    occasions: ["fete-des-meres"],
    recherche: "sac à bible poignées",
    amazonAsin: null,
  },
  {
    slug: "onglets-livres-de-la-bible",
    sousRubrique: "etuis-et-couvertures",
    nom: "Onglets adhésifs des livres de la Bible",
    description:
      "Des petits onglets autocollants, un par livre, que l'on colle sur la tranche de sa Bible. On trouve tout de suite Ésaïe ou l'Épître aux Romains, ce qui aide beaucoup ceux qui débutent ou qui suivent la lecture pendant le culte.",
    traditions: "toutes",
    afro: false,
    occasions: [],
    recherche: "onglets adhésifs livres bible",
    amazonAsin: null,
  },
];
