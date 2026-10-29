import type { Psaume } from "../types";

/**
 * Les 12 Psaumes du carrousel de l'accueil, dans l'ordre de PLAN_PSAUMES.
 * Texte : Louis Segond 1910 (domaine public), vérifié sur Wikisource (« Bible Segond 1910/Livre des Psaumes »).
 * Les titres anciens des Psaumes (« Cantique de David. », « De David. »…), comptés dans le verset 1, ne sont pas repris.
 */
export const PSAUMES: Psaume[] = [
  {
    slug: "psaume-23",
    numero: 23,
    numeroGrec: 22,
    versets: "1-2",
    texte:
      "L'Éternel est mon berger : je ne manquerai de rien. Il me fait reposer dans de verts pâturages, il me dirige près des eaux paisibles.",
    pour: "Pour se sentir guidé",
    titre: "Psaume 23 (22) : L'Éternel est mon berger",
    description:
      "Le Psaume 23 (22), « L'Éternel est mon berger » : le texte Louis Segond, son sens et les moments où on le lit.",
    presentation:
      "Le Psaume 23 compare Dieu à un berger qui conduit, nourrit et protège ses brebis. C'est sans doute le Psaume le plus connu, et beaucoup l'ont appris par cœur dès l'enfance. Ses images simples, les verts pâturages, les eaux paisibles, la vallée sombre que l'on traverse sans peur, parlent à chacun. On le lit en prière personnelle les jours de doute, au chevet d'un malade et très souvent lors des funérailles, dans toutes les Églises. Il est aussi un beau texte à offrir à un enfant que l'on confie à Dieu.",
    quand: ["un deuil", "une maladie", "un baptême", "une période de doute"],
    objets: ["plaque-murale-psaume-23", "tableau-du-bon-pasteur", "livre-psaumes-prier-au-quotidien"],
  },
  {
    slug: "psaume-27",
    numero: 27,
    numeroGrec: 26,
    versets: "1",
    texte:
      "L'Éternel est ma lumière et mon salut : De qui aurais-je crainte ? L'Éternel est le soutien de ma vie : De qui aurais-je peur ?",
    pour: "Pour chasser la peur",
    titre: "Psaume 27 (26) : L'Éternel est ma lumière",
    description:
      "Le Psaume 27 (26), « L'Éternel est ma lumière et mon salut » : le texte Louis Segond et ce que ce Psaume de confiance apporte.",
    presentation:
      "Le Psaume 27 est une prière de confiance, attribuée à David, écrite au milieu des dangers et des adversaires. Il commence par deux questions qui sonnent comme un défi : de qui aurais-je peur, si Dieu est ma lumière ? Plus loin, le croyant dit son désir d'habiter dans la maison de Dieu et de contempler sa beauté. On le prie avant une épreuve, un examen, une opération ou un nouveau départ. Il fait aussi partie des Psaumes que l'on choisit pour accompagner les funérailles.",
    quand: ["une épreuve à affronter", "un nouveau départ", "un deuil"],
    objets: ["veilleuse-de-recueillement", "livre-psaumes-prier-au-quotidien"],
  },
  {
    slug: "psaume-91",
    numero: 91,
    numeroGrec: 90,
    versets: "1-2",
    texte:
      "Celui qui demeure sous l'abri du Très-Haut repose à l'ombre du Tout-Puissant. Je dis à l'Éternel : Mon refuge et ma forteresse, mon Dieu en qui je me confie !",
    pour: "Pour se mettre à l'abri",
    titre: "Psaume 91 (90) : Sous l'abri du Très-Haut",
    description:
      "Le Psaume 91 (90), « Celui qui demeure sous l'abri du Très-Haut » : le texte Louis Segond et la place de ce Psaume dans la prière.",
    presentation:
      "Le Psaume 91 parle de celui qui se réfugie en Dieu comme sous un abri, à l'ombre de ses ailes. Il énumère les dangers de la nuit et du jour, et redit que celui qui fait confiance à Dieu n'est pas seul face à eux. Dans les Évangiles, le tentateur cite deux de ses versets à Jésus au désert. Dans la liturgie catholique, il est prié le dimanche soir à l'office des Complies, la prière avant la nuit. Beaucoup de croyants le prient le soir, avant de dormir, ou avant de prendre la route.",
    quand: ["une nuit d'angoisse", "un voyage", "la prière du soir"],
    objets: ["veilleuse-croix-chambre-enfant", "nouveau-testament-et-psaumes-poche"],
  },
  {
    slug: "psaume-121",
    numero: 121,
    numeroGrec: 120,
    versets: "1-2",
    texte:
      "Je lève mes yeux vers les montagnes… D'où me viendra le secours ? Le secours me vient de l'Éternel, qui a fait les cieux et la terre.",
    pour: "Pour ceux qui partent",
    titre: "Psaume 121 (120) : Je lève mes yeux vers les montagnes",
    description:
      "Le Psaume 121 (120), « Je lève mes yeux vers les montagnes » : le texte Louis Segond de ce Psaume du voyageur et du pèlerin.",
    presentation:
      "Le Psaume 121 fait partie des « cantiques des degrés », que les pèlerins chantaient en montant vers Jérusalem. Le voyageur regarde les montagnes et se demande d'où viendra son aide ; la réponse arrive aussitôt : elle vient de Dieu, qui a fait le ciel et la terre. Le Psaume redit ensuite que Dieu garde celui qui marche, de jour comme de nuit, au départ comme au retour. C'est la prière de ceux qui partent : un voyage, un déménagement, un exil, une nouvelle vie dans un autre pays. Il touche particulièrement les familles dont les proches vivent loin.",
    quand: ["un voyage", "un déménagement", "un départ à l'étranger"],
    objets: ["nouveau-testament-et-psaumes-poche", "bible-format-poche"],
  },
  {
    slug: "psaume-46",
    numero: 46,
    numeroGrec: 45,
    versets: "2",
    texte:
      "Dieu est pour nous un refuge et un appui, un secours qui ne manque jamais dans la détresse.",
    pour: "Pour les jours de tempête",
    titre: "Psaume 46 (45) : Dieu est pour nous un refuge",
    description:
      "Le Psaume 46 (45), « Dieu est pour nous un refuge et un appui » : le texte Louis Segond de ce Psaume pour les temps troublés.",
    presentation:
      "Le Psaume 46 décrit un monde qui tremble : la terre bouge, les montagnes chancellent, les nations s'agitent. Au milieu de ce bouleversement, le croyant affirme que Dieu reste un refuge sûr. Il se termine par une invitation au calme : arrêtez, et sachez que je suis Dieu. Ce Psaume a inspiré à Martin Luther le cantique « C'est un rempart que notre Dieu », très chanté dans les Églises protestantes. On le relit dans les crises, personnelles ou collectives, quand tout semble vaciller.",
    quand: ["une épreuve", "une période de crise", "une perte d'emploi"],
    objets: ["sticker-mural-verset-biblique", "carnet-de-priere-guide"],
  },
  {
    slug: "psaume-139",
    numero: 139,
    numeroGrec: 138,
    versets: "14",
    texte:
      "Je te loue de ce que je suis une créature si merveilleuse. Tes œuvres sont admirables, et mon âme le reconnaît bien.",
    pour: "Pour accueillir une vie",
    titre: "Psaume 139 (138) : Une créature si merveilleuse",
    description:
      "Le Psaume 139 (138), « Je te loue de ce que je suis une créature si merveilleuse » : le texte Louis Segond et son message.",
    presentation:
      "Le Psaume 139 est la prière de quelqu'un qui se sait connu de Dieu jusqu'au plus profond de lui-même. Où qu'il aille, au ciel ou au bout de la mer, Dieu est déjà là. Le croyant s'émerveille d'avoir été formé et tissé dans le sein de sa mère. C'est pourquoi on le choisit souvent pour une naissance, un baptême ou un cadeau à un enfant. Il est aussi précieux pour qui doute de sa valeur : il redit que chaque vie est voulue et aimée.",
    quand: ["une naissance", "un baptême", "un jour de doute sur soi"],
    objets: ["affiches-versets-a-encadrer"],
  },
  {
    slug: "psaume-118",
    numero: 118,
    numeroGrec: 117,
    versets: "24",
    texte:
      "C'est ici la journée que l'Éternel a faite : Qu'elle soit pour nous un sujet d'allégresse et de joie !",
    pour: "Pour un jour de fête",
    titre: "Psaume 118 (117) : La journée que l'Éternel a faite",
    description:
      "Le Psaume 118 (117), « C'est ici la journée que l'Éternel a faite » : le texte Louis Segond de ce Psaume de fête et de Pâques.",
    presentation:
      "Le Psaume 118 est un chant de fête et de reconnaissance : il célèbre Dieu, dont la bonté dure à toujours. Il appartient au Hallel, les Psaumes de louange chantés lors des grandes fêtes juives. Les Évangiles reprennent son verset sur la pierre rejetée par les bâtisseurs, devenue la pierre principale de l'angle. Les chrétiens le chantent tout particulièrement le jour de Pâques, pour fêter la résurrection. On aime aussi le lire au matin d'un mariage, d'un anniversaire ou de tout jour heureux.",
    quand: ["Pâques", "un mariage", "un anniversaire"],
    objets: ["bougie-de-paques-decoree", "icone-de-la-resurrection"],
  },
  {
    slug: "psaume-119",
    numero: 119,
    numeroGrec: 118,
    versets: "105",
    texte: "Ta parole est une lampe à mes pieds, et une lumière sur mon sentier.",
    pour: "Pour aimer la Parole",
    titre: "Psaume 119 (118) : Ta parole est une lampe à mes pieds",
    description:
      "Le Psaume 119 (118), « Ta parole est une lampe à mes pieds » : le texte Louis Segond du plus long Psaume, consacré à la Parole.",
    presentation:
      "Le Psaume 119 est le plus long de la Bible : 176 versets, répartis en 22 strophes qui suivent chacune une lettre de l'alphabet hébreu. Tout entier, il parle de l'amour de la Parole de Dieu, de ses commandements et de sa sagesse. Le verset 105 en est la phrase la plus connue : la Parole éclaire le prochain pas, comme une lampe dans la nuit. On aime l'écrire en dédicace sur la première page d'une Bible offerte. Il accompagne bien un début de lecture de la Bible, une profession de foi ou une confirmation.",
    quand: ["une Bible offerte", "une profession de foi", "une confirmation"],
    objets: ["pupitre-de-bible-bois", "plan-de-lecture-bible-en-un-an", "bible-marges-larges-a-annoter"],
  },
  {
    slug: "psaume-34",
    numero: 34,
    numeroGrec: 33,
    versets: "9",
    texte:
      "Sentez et voyez combien l'Éternel est bon ! Heureux l'homme qui cherche en lui son refuge !",
    pour: "Pour goûter la bonté de Dieu",
    titre: "Psaume 34 (33) : Sentez et voyez combien l'Éternel est bon",
    description:
      "Le Psaume 34 (33), « Sentez et voyez combien l'Éternel est bon » : le texte Louis Segond de ce Psaume de reconnaissance.",
    presentation:
      "Le Psaume 34 est le chant d'un homme qui a crié vers Dieu dans la détresse et qui a été exaucé. Il invite les autres à faire la même expérience : goûter, sentir et voir que Dieu est bon. En hébreu, ses versets suivent l'ordre de l'alphabet. Dans la liturgie catholique, il accompagne souvent le moment de la communion. On le lit pour remercier après une épreuve traversée ou pour encourager quelqu'un qui cherche Dieu.",
    quand: ["une première communion", "une épreuve traversée", "un temps de reconnaissance"],
    objets: ["missel-des-enfants", "journal-de-gratitude-chretien"],
  },
  {
    slug: "psaume-37",
    numero: 37,
    numeroGrec: 36,
    versets: "5",
    texte: "Recommande ton sort à l'Éternel, mets en lui ta confiance, et il agira.",
    pour: "Pour remettre ses projets",
    titre: "Psaume 37 (36) : Recommande ton sort à l'Éternel",
    description:
      "Le Psaume 37 (36), « Recommande ton sort à l'Éternel » : le texte Louis Segond de ce Psaume de patience et de confiance.",
    presentation:
      "Le Psaume 37 est un Psaume de sagesse, attribué à David, écrit comme les conseils d'un ancien. Il répond à une question de toujours : pourquoi ceux qui font le mal semblent-ils parfois réussir ? Sa réponse tient en quelques mots : ne t'irrite pas, fais confiance, patiente. Jésus reprend l'un de ses versets dans les Béatitudes : les débonnaires hériteront la terre. On le lit avant une décision, un projet, un examen ou une recherche d'emploi.",
    quand: ["un projet important", "un examen", "une recherche d'emploi"],
    objets: ["cadre-verset-jeremie-29-11", "carnet-de-priere-guide"],
  },
  {
    slug: "psaume-100",
    numero: 100,
    numeroGrec: 99,
    versets: "1-2",
    texte:
      "Poussez vers l'Éternel des cris de joie, vous tous, habitants de la terre ! Servez l'Éternel, avec joie, venez avec allégresse en sa présence !",
    pour: "Pour chanter sa joie",
    titre: "Psaume 100 (99) : Poussez vers l'Éternel des cris de joie",
    description:
      "Le Psaume 100 (99), « Poussez vers l'Éternel des cris de joie » : le texte Louis Segond de ce court Psaume de louange.",
    presentation:
      "Le Psaume 100 est un Psaume très court, tout entier tourné vers la joie et la louange. Il invite la terre entière à entrer dans la présence de Dieu en chantant, car c'est lui qui nous a faits et nous sommes son peuple. Dans la liturgie catholique, il fait partie des Psaumes qui peuvent ouvrir la prière du matin. Il a inspiré de nombreux cantiques, notamment dans les Églises protestantes et évangéliques. On le chante volontiers au début d'un culte, d'une messe de fête ou d'un mariage.",
    quand: ["un mariage", "un culte de louange", "un jour de fête"],
    objets: [],
  },
  {
    slug: "psaume-103",
    numero: 103,
    numeroGrec: 102,
    versets: "1-2",
    texte:
      "Mon âme, bénis l'Éternel ! Que tout ce qui est en moi bénisse son saint nom ! Mon âme, bénis l'Éternel, et n'oublie aucun de ses bienfaits !",
    pour: "Pour dire merci à Dieu",
    titre: "Psaume 103 (102) : Mon âme, bénis l'Éternel",
    description:
      "Le Psaume 103 (102), « Mon âme, bénis l'Éternel » : le texte Louis Segond de ce Psaume de gratitude et de pardon.",
    presentation:
      "Le Psaume 103 est un grand chant de reconnaissance, attribué à David. Le croyant s'adresse à sa propre âme pour qu'elle n'oublie aucun des bienfaits de Dieu : le pardon, la guérison, la vie relevée. Il décrit un Dieu lent à la colère, plein de bonté, qui a pour ses enfants la tendresse d'un père. Il rappelle aussi que la vie humaine est fragile comme l'herbe, mais que l'amour de Dieu dure toujours. On le prie pour dire merci : une guérison, une naissance, un anniversaire, une année écoulée.",
    quand: ["une guérison", "un anniversaire", "une action de grâce"],
    objets: ["journal-de-gratitude-chretien", "livre-psaumes-prier-au-quotidien"],
  },
];
