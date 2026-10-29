import type { Occasion } from "../types";

/** Les 10 occasions de cadeaux (/cadeaux/<slug>), dans l'ordre de PLAN_OCCASIONS. */
export const OCCASIONS: Occasion[] = [
  {
    slug: "bapteme",
    nom: "Baptême",
    titre: "Cadeau de baptême chrétien : nos idées",
    description:
      "Idées de cadeaux de baptême chrétiens pour un bébé, un enfant ou un adulte : Bible, croix, médaille, verset, de la part du parrain ou des proches.",
    intro:
      "Le baptême est le sacrement qui fait entrer dans la vie chrétienne, et il est reconnu par presque toutes les Églises. Chez les catholiques, les orthodoxes et dans beaucoup d'Églises protestantes, on baptise souvent les bébés, entourés d'un parrain et d'une marraine. Dans les Églises évangéliques, on baptise plutôt les jeunes et les adultes qui demandent eux-mêmes le baptême, souvent par immersion. Le cadeau de baptême est un souvenir que l'on garde toute sa vie : il rappelle ce jour et accompagne les premiers pas dans la foi.",
    deQui: [
      {
        qui: "Le parrain ou la marraine",
        idee: "Un objet qui durera, comme une croix à accrocher dans la chambre ou une Bible pour enfants à ouvrir ensemble au fil des années.",
      },
      {
        qui: "Les grands-parents",
        idee: "Un cadeau qui se transmet, par exemple un objet de foi gravé au prénom de l'enfant et à la date du baptême.",
      },
      {
        qui: "Les amis de la famille",
        idee: "Une petite attention pleine de sens, comme un verset encadré ou une veilleuse pour la chambre de l'enfant.",
      },
      {
        qui: "Pour un adulte baptisé",
        idee: "Une belle Bible personnelle ou un carnet de prière, pour nourrir une foi choisie et vécue au quotidien.",
      },
    ],
    faq: [
      {
        q: "Quel cadeau offre traditionnellement le parrain ?",
        a: "Il n'y a pas de règle fixe, et chaque famille a ses habitudes. Le parrain et la marraine offrent souvent un objet de foi qui durera : croix, médaille, Bible pour enfants ou cadre avec un verset. Vous trouverez des idées dans nos [Bibles pour enfants](/bibles/bibles-pour-enfants) et nos [croix murales](/croix-et-crucifix/croix-murales).",
      },
      {
        q: "Que choisir pour un baptême d'adulte ?",
        a: "Un adulte qui demande le baptême a fait un vrai chemin de foi. Une Bible de qualité, dans une traduction facile à lire, est souvent le cadeau le plus utile. Un pendentif croix discret ou un carnet de prière peuvent l'accompagner.",
      },
      {
        q: "Quel verset écrire sur une carte de baptême ?",
        a: "Les Psaumes offrent de très beaux versets pour ce jour. Le [Psaume 139](/psaumes/psaume-139) parle de l'enfant formé et aimé de Dieu, et le [Psaume 23](/psaumes/psaume-23) de Dieu qui guide comme un berger. Citez le texte avec sa référence, pour que la famille puisse le retrouver.",
      },
    ],
  },
  {
    slug: "premiere-communion",
    nom: "Première communion",
    titre: "Cadeau de première communion : idées et conseils",
    description:
      "Idées de cadeaux de première communion pour un enfant : chapelet, croix, Bible, livre de prière, de la part du parrain, de la marraine ou des grands-parents.",
    intro:
      "La première communion est le jour où un enfant reçoit pour la première fois l'eucharistie, après quelques années de catéchisme. Elle est surtout fêtée chez les catholiques, en général vers 8 ou 9 ans, souvent au printemps. Chez les orthodoxes, les enfants communient dès leur baptême, et cette fête n'existe donc pas sous cette forme. C'est une grande journée de famille : le cadeau aide l'enfant à garder le souvenir de ce moment et à continuer de prier.",
    deQui: [
      {
        qui: "Le parrain ou la marraine",
        idee: "Un objet de prière à garder longtemps, comme un premier chapelet ou une croix à poser près du lit.",
      },
      {
        qui: "Les grands-parents",
        idee: "Un cadeau qui marque le jour, par exemple une Bible illustrée ou un objet gravé à la date de la communion.",
      },
      {
        qui: "Les oncles, tantes et amis",
        idee: "Un livre de prière adapté à son âge ou un dizainier à porter au poignet.",
      },
    ],
    faq: [
      {
        q: "À quel âge fait-on sa première communion ?",
        a: "Chez les catholiques, la première communion se fait le plus souvent vers 8 ou 9 ans, après deux ou trois années de catéchisme. Elle peut aussi avoir lieu plus tard, pour un enfant ou un adulte qui découvre la foi. La paroisse fixe la date, souvent au printemps.",
      },
      {
        q: "Le chapelet est-il un bon cadeau de première communion ?",
        a: "Oui, c'est l'un des cadeaux les plus classiques, car beaucoup d'enfants apprennent alors à prier le chapelet. Choisissez-le solide et à sa taille. Vous trouverez des idées dans nos [chapelets](/chapelets-et-priere/chapelets) et nos [dizainiers et bracelets](/chapelets-et-priere/dizainiers-et-bracelets).",
      },
      {
        q: "Que mettre sur la carte qui accompagne le cadeau ?",
        a: "Quelques mots simples pour dire votre joie et votre affection suffisent. Vous pouvez ajouter un verset, par exemple celui du [Psaume 34](/psaumes/psaume-34) : « Sentez et voyez combien l'Éternel est bon ! ». L'enfant relira la carte des années plus tard.",
      },
    ],
  },
  {
    slug: "profession-de-foi",
    nom: "Profession de foi",
    titre: "Cadeau de profession de foi : nos idées",
    description:
      "Idées de cadeaux de profession de foi pour un jeune de 11 à 13 ans : Bible, croix, pendentif, livre de foi, selon qui offre.",
    intro:
      "La profession de foi est une fête surtout catholique, très ancrée en France et dans les pays francophones. Vers 12 ans, à la fin du catéchisme, le jeune redit lui-même, devant la communauté, la foi dans laquelle il a été baptisé, souvent vêtu d'une aube blanche. Ce n'est pas un sacrement, mais une étape importante, vécue en paroisse ou en aumônerie. Le jeune entre dans l'adolescence : le cadeau peut être plus personnel, un objet qu'il portera ou qu'il gardera dans sa chambre.",
    deQui: [
      {
        qui: "Le parrain ou la marraine",
        idee: "Un pendentif croix ou une médaille, à porter tous les jours comme un signe discret de sa foi.",
      },
      {
        qui: "Les parents",
        idee: "Une Bible pour adolescent ou pour adulte, qui remplace la Bible pour enfants et l'accompagnera longtemps.",
      },
      {
        qui: "Les grands-parents",
        idee: "Un bel objet pour sa chambre, comme une croix à poser ou un verset mural choisi avec soin.",
      },
      {
        qui: "Les amis et la famille éloignée",
        idee: "Un livre de foi écrit pour les jeunes ou un carnet de prière à remplir à son rythme.",
      },
    ],
    faq: [
      {
        q: "Quelle est la différence entre profession de foi et confirmation ?",
        a: "La profession de foi n'est pas un sacrement : le jeune redit lui-même la foi de son baptême. La confirmation est un sacrement, célébré par l'évêque ou son représentant, souvent quelques années plus tard. Les deux fêtes appellent des cadeaux proches ; voyez aussi nos idées pour la [confirmation](/cadeaux/confirmation).",
      },
      {
        q: "Quelle Bible offrir à un jeune de 12 ans ?",
        a: "À cet âge, une Bible complète dans une traduction en français courant est souvent plus adaptée qu'une Bible pour enfants. Une édition avec des introductions et des cartes aide à s'y retrouver. Nos conseils sont dans la rubrique [éditions et traductions](/bibles/editions-et-traductions).",
      },
      {
        q: "Un bijou est-il un bon cadeau de profession de foi ?",
        a: "Oui, une croix ou une médaille est un cadeau très courant pour ce jour. Préférez un modèle simple et solide, que le jeune pourra porter longtemps. Vous trouverez des idées parmi nos [pendentifs croix](/croix-et-crucifix/pendentifs-croix).",
      },
    ],
  },
  {
    slug: "confirmation",
    nom: "Confirmation",
    titre: "Cadeau de confirmation : idées pour un jeune ou un adulte",
    description:
      "Idées de cadeaux de confirmation pour un jeune ou un adulte : Bible, croix, livre de foi, carnet de prière, selon le parrain ou la famille.",
    intro:
      "La confirmation marque un engagement plus personnel dans la foi reçue au baptême. Chez les catholiques, c'est un sacrement, donné par l'évêque, souvent à l'adolescence mais aussi à l'âge adulte. Plusieurs Églises protestantes, comme les Églises luthériennes et réformées, célèbrent aussi une confirmation, à la fin du catéchisme. Chez les orthodoxes, ce sacrement, appelé chrismation, est donné en même temps que le baptême. Le cadeau accompagne un choix réfléchi : il peut aider à prier, à lire la Bible ou à approfondir sa foi.",
    deQui: [
      {
        qui: "Le parrain ou la marraine de confirmation",
        idee: "Un objet qui rappelle cet engagement, comme une croix à porter ou une belle Bible annotée de quelques mots personnels.",
      },
      {
        qui: "Les parents",
        idee: "Un livre de foi qui ouvre de nouvelles questions, ou une Bible d'étude pour aller plus loin.",
      },
      {
        qui: "Les amis",
        idee: "Un carnet de prière ou un bracelet dizainier, simples et faciles à garder sur soi.",
      },
    ],
    faq: [
      {
        q: "Faut-il un parrain pour la confirmation ?",
        a: "Chez les catholiques, le confirmand choisit un parrain ou une marraine, qui peut être celui ou celle du baptême. Dans les Églises protestantes, l'usage varie selon les communautés. Dans tous les cas, cette personne aime souvent marquer le jour par un cadeau.",
      },
      {
        q: "Quel cadeau pour un adulte confirmé ?",
        a: "Un adulte appréciera un objet sobre et utile : une Bible de qualité, un livre de foi ou une croix pour son intérieur. Évitez les objets trop enfantins. Vous trouverez des idées dans nos [livres de foi](/livres-et-coloriages/livres-de-foi) et nos [croix à poser](/croix-et-crucifix/croix-a-poser).",
      },
      {
        q: "Quel verset choisir pour une confirmation ?",
        a: "Un verset sur la Parole ou sur la confiance convient bien à ce jour. Le [Psaume 119](/psaumes/psaume-119) dit : « Ta parole est une lampe à mes pieds ». Le [Psaume 27](/psaumes/psaume-27) parle de Dieu comme lumière et soutien de la vie.",
      },
    ],
  },
  {
    slug: "mariage",
    nom: "Mariage",
    titre: "Cadeau de mariage chrétien : idées pour les mariés",
    description:
      "Idées de cadeaux de mariage chrétiens pour bénir le foyer des mariés : Bible de famille, croix, verset mural, icône, selon qui offre.",
    intro:
      "Le mariage chrétien est célébré dans toutes les Églises, comme sacrement chez les catholiques et les orthodoxes, ou comme bénédiction de l'union chez les protestants et les évangéliques. Dans de nombreuses familles africaines, il s'accompagne aussi d'une cérémonie coutumière, avec ses propres cadeaux. Un cadeau chrétien pour les mariés parle de leur foyer : la foi qu'ils veulent partager, la maison qu'ils vont construire. Il trouvera sa place sur un mur, une étagère ou dans un coin prière.",
    deQui: [
      {
        qui: "Les parents des mariés",
        idee: "Une Bible de famille, dans laquelle on pourra noter les grandes dates du foyer au fil des années.",
      },
      {
        qui: "Les témoins",
        idee: "Un verset mural ou un tableau chrétien choisi pour leur nouvelle maison.",
      },
      {
        qui: "Les amis et invités",
        idee: "Une croix murale ou une icône pour bénir leur intérieur, à offrir seul ou à plusieurs.",
      },
      {
        qui: "La communauté de l'Église",
        idee: "Un objet pour un coin prière à deux, comme une bougie et un support pour la Bible.",
      },
    ],
    faq: [
      {
        q: "Peut-on offrir un objet religieux en cadeau de mariage ?",
        a: "Oui, surtout si les mariés se marient à l'Église et vivent leur foi. Un objet religieux dit que vous les accompagnez aussi dans la prière. Choisissez un objet qui convient à leur tradition, une icône pour des orthodoxes, une croix sobre pour des protestants par exemple.",
      },
      {
        q: "Quel verset offrir à des mariés ?",
        a: "Un verset de louange ou de bénédiction convient à ce jour. Le [Psaume 118](/psaumes/psaume-118), « C'est ici la journée que l'Éternel a faite », est souvent choisi. Nos [versets muraux](/art-chretien/versets-muraux) permettent de l'afficher dans la maison.",
      },
      {
        q: "Où trouver des idées pour la maison des mariés ?",
        a: "Les objets de décoration chrétienne sont souvent les plus appréciés, car ils durent. Regardez nos [croix murales](/croix-et-crucifix/croix-murales) et nos [tableaux et toiles](/art-chretien/tableaux-et-toiles). Pensez à la place dont ils disposent et au style de leur intérieur.",
      },
    ],
  },
  {
    slug: "fete-des-meres",
    nom: "Fête des mères",
    titre: "Cadeau chrétien pour la fête des mères : nos idées",
    description:
      "Idées de cadeaux chrétiens pour la fête des mères : statue de la Vierge, carnet de prière, verset, bougie, pour une maman croyante.",
    intro:
      "La fête des mères n'est pas une fête religieuse, mais beaucoup de familles chrétiennes en font un moment de reconnaissance et de prière. En France, elle tombe le dernier dimanche de mai, ou le premier dimanche de juin quand ce dimanche est celui de la Pentecôte. Pour une maman croyante, un cadeau chrétien dit merci autrement : il touche à ce qui la fait vivre. Chez les catholiques et les orthodoxes, la figure de Marie, mère de Jésus, inspire souvent ces cadeaux.",
    deQui: [
      {
        qui: "Les enfants",
        idee: "Un verset écrit ou colorié à la main, ou un petit objet de prière choisi avec eux.",
      },
      {
        qui: "Les enfants adultes",
        idee: "Un bel objet pour sa maison, comme une statue de la Vierge, une icône ou un tableau chrétien.",
      },
      {
        qui: "Le conjoint",
        idee: "Un carnet de prière, une Bible à gros caractères ou un bijou croix, selon ce qu'elle aime.",
      },
    ],
    faq: [
      {
        q: "Quel cadeau chrétien pour une maman protestante ?",
        a: "Chez les protestants, on prie plutôt sans statue ni image. Une Bible de qualité, un verset mural ou un carnet de prière conviendront mieux. Voyez nos [versets muraux](/art-chretien/versets-muraux) et nos [carnets de prière](/chapelets-et-priere/carnets-de-priere).",
      },
      {
        q: "Une statue de la Vierge est-elle un bon cadeau ?",
        a: "Pour une maman catholique ou orthodoxe, oui : Marie est souvent priée comme une mère. Il existe des statues de tous styles, y compris des Vierges noires très aimées en Afrique. Découvrez nos [statues de la Vierge](/statues-et-vierges/statues-de-la-vierge) et nos [Vierges noires](/statues-et-vierges/vierges-noires).",
      },
      {
        q: "Quel cadeau pour une grand-mère croyante ?",
        a: "Une Bible à gros caractères est souvent très appréciée, car elle rend la lecture plus confortable. Une bougie, un chapelet ou un verset encadré sont aussi de belles attentions. Nos conseils sont dans la rubrique [formats et gros caractères](/bibles/formats-et-gros-caracteres).",
      },
    ],
  },
  {
    slug: "fete-des-peres",
    nom: "Fête des pères",
    titre: "Cadeau chrétien pour la fête des pères : nos idées",
    description:
      "Idées de cadeaux chrétiens pour la fête des pères : Bible, croix, livre de foi, dizainier, pour un papa ou un grand-père croyant.",
    intro:
      "La fête des pères n'est pas une fête religieuse ; en France, elle a lieu le troisième dimanche de juin. Pour un papa croyant, c'est l'occasion de lui offrir un objet qui accompagne sa foi au quotidien. Les hommes apprécient souvent les objets sobres et utiles : une Bible qu'ils liront, une croix pour le bureau, un livre qui nourrit la réflexion. Dans la tradition catholique, saint Joseph, père de famille et travailleur, est une figure qui inspire volontiers ce jour.",
    deQui: [
      {
        qui: "Les enfants",
        idee: "Un dessin accompagné d'un verset, ou une petite croix à poser sur son bureau.",
      },
      {
        qui: "Les enfants adultes",
        idee: "Une Bible d'étude ou un livre de foi qui lui ressemble, pour ses temps de lecture.",
      },
      {
        qui: "La conjointe",
        idee: "Un objet à garder sur lui, comme un dizainier, un pendentif croix ou un étui pour sa Bible.",
      },
    ],
    faq: [
      {
        q: "Quel cadeau chrétien offrir à un homme ?",
        a: "Les objets sobres et pratiques sont souvent les plus appréciés. Une croix à poser, un étui de Bible en cuir ou un livre de foi font de bons cadeaux. Voyez nos [étuis et couvertures](/bibles/etuis-et-couvertures) et nos [livres de foi](/livres-et-coloriages/livres-de-foi).",
      },
      {
        q: "Quel verset offrir à un papa ?",
        a: "Un verset de confiance lui parlera, comme celui du [Psaume 37](/psaumes/psaume-37) : « Recommande ton sort à l'Éternel ». Le [Psaume 23](/psaumes/psaume-23) parle de Dieu comme d'un berger qui guide, une belle image pour un père.",
      },
      {
        q: "Une statue de saint Joseph est-elle un bon cadeau ?",
        a: "Pour un papa catholique, oui : saint Joseph est le patron des pères de famille et des travailleurs. Pour un papa protestant ou évangélique, une croix ou un verset sera plus adapté. Découvrez nos [statues de saints](/statues-et-vierges/statues-de-saints).",
      },
    ],
  },
  {
    slug: "noel",
    nom: "Noël",
    titre: "Cadeaux chrétiens de Noël : idées pour toute la famille",
    description:
      "Idées de cadeaux chrétiens de Noël pour fêter la naissance de Jésus : crèche, calendrier de l'Avent, Bible pour enfants, déco de Noël.",
    intro:
      "Noël fête la naissance de Jésus à Bethléem, et toutes les Églises la célèbrent. La plupart la fêtent le 25 décembre ; certaines Églises orthodoxes et l'Église éthiopienne la fêtent le 7 janvier. Le temps de l'Avent, les quatre semaines qui précèdent, prépare les cœurs à cette fête. Un cadeau chrétien de Noël remet Jésus au centre : une crèche, un calendrier de l'Avent ou un livre qui raconte la naissance du Christ aux enfants.",
    deQui: [
      {
        qui: "Les parents",
        idee: "Un calendrier de l'Avent chrétien ou un livre de Noël, pour vivre l'attente en famille.",
      },
      {
        qui: "Les grands-parents",
        idee: "Une crèche ou de nouveaux santons, que l'on installera chaque année avec les petits-enfants.",
      },
      {
        qui: "Les parrains et marraines",
        idee: "Une Bible pour enfants ou une histoire biblique illustrée, à ouvrir le soir de Noël.",
      },
      {
        qui: "Les amis et collègues",
        idee: "Une décoration de Noël chrétienne ou une bougie de l'Avent, simple et chaleureuse.",
      },
    ],
    faq: [
      {
        q: "Quand installer la crèche ?",
        a: "Beaucoup de familles installent la crèche au début de l'Avent et ajoutent l'Enfant Jésus le soir de Noël. Les Rois mages arrivent souvent pour l'Épiphanie, début janvier. Pour choisir, voyez nos [crèches](/creches-et-noel/creches) et nos [crèches africaines](/creches-et-noel/creches-africaines).",
      },
      {
        q: "Qu'est-ce qu'un calendrier de l'Avent chrétien ?",
        a: "C'est un calendrier dont chaque case propose un verset, une image ou une petite prière, au lieu d'un simple chocolat. Il aide les enfants à comprendre ce que l'on attend à Noël. Vous trouverez des idées dans nos [calendriers de l'Avent](/creches-et-noel/calendriers-de-l-avent).",
      },
      {
        q: "Quel cadeau de Noël pour un enfant croyant ?",
        a: "Une Bible pour enfants ou un livre d'histoires bibliques est un cadeau qui dure. Les plus petits aiment aussi les coloriages et les santons à manipuler. Voyez nos [histoires bibliques pour enfants](/livres-et-coloriages/histoires-bibliques-pour-enfants).",
      },
    ],
  },
  {
    slug: "paques",
    nom: "Pâques",
    titre: "Cadeaux chrétiens de Pâques : nos idées",
    description:
      "Idées de cadeaux chrétiens de Pâques pour fêter la résurrection de Jésus : croix, bougie, Bible, livres et coloriages pour enfants.",
    intro:
      "Pâques est la plus grande fête chrétienne : elle célèbre la résurrection de Jésus, au matin du troisième jour après sa mort sur la croix. Toutes les Églises la fêtent, mais les orthodoxes suivent souvent un autre calendrier, si bien que leur Pâques tombe parfois plus tard. Elle est préparée par le Carême et la Semaine sainte, avec les Rameaux et le Vendredi saint. Un cadeau de Pâques chrétien dit la joie de la vie plus forte que la mort : une croix, une bougie, un livre qui raconte la résurrection.",
    deQui: [
      {
        qui: "Les parents",
        idee: "Un livre ou un coloriage qui raconte Pâques aux enfants, à glisser à côté des œufs en chocolat.",
      },
      {
        qui: "Les grands-parents",
        idee: "Une croix à poser ou une bougie décorée, à allumer en famille le jour de Pâques.",
      },
      {
        qui: "Les parrains et marraines",
        idee: "Un pendentif croix ou une Bible illustrée, pour fêter Pâques avec un cadeau qui dure.",
      },
    ],
    faq: [
      {
        q: "Pourquoi offre-t-on des œufs à Pâques ?",
        a: "L'œuf est un symbole de vie nouvelle, et les chrétiens y voient une image de la résurrection. Pendant longtemps, on ne mangeait pas d'œufs pendant le Carême, et on les retrouvait à Pâques. Un petit objet chrétien peut accompagner les œufs pour rappeler le sens de la fête.",
      },
      {
        q: "Pourquoi la date de Pâques change-t-elle chaque année ?",
        a: "Pâques est fêtée le dimanche qui suit la première pleine lune du printemps. Les Églises orthodoxes calculent cette date avec le calendrier julien, d'où un écart avec les catholiques et les protestants certaines années. Les deux dates coïncident parfois.",
      },
      {
        q: "Quel Psaume lire le jour de Pâques ?",
        a: "Le [Psaume 118](/psaumes/psaume-118) est le Psaume de Pâques par excellence : « C'est ici la journée que l'Éternel a faite ». On peut l'écrire sur une carte ou le lire en famille. Pour offrir une croix, voyez nos [croix à poser](/croix-et-crucifix/croix-a-poser).",
      },
    ],
  },
  {
    slug: "condoleances",
    nom: "Condoléances",
    titre: "Cadeau de condoléances chrétien : un geste de soutien",
    description:
      "Comment accompagner une famille en deuil avec un geste chrétien : bougie, croix, verset de réconfort, souvenir du défunt.",
    intro:
      "Quand une personne meurt, les chrétiens de toutes les Églises prient pour elle et entourent sa famille. Les usages varient : messe ou culte d'obsèques, veillées, prières à la maison, et dans beaucoup de familles africaines plusieurs jours de deuil où l'on vient soutenir les proches. Il ne s'agit pas d'offrir un cadeau au sens habituel, mais de laisser un signe discret de présence et d'espérance. Une bougie, une petite croix ou un verset de réconfort disent ce que les mots peinent parfois à dire.",
    deQui: [
      {
        qui: "La famille proche",
        idee: "Un objet de souvenir à garder, comme une croix ou un cadre où placer la photo du défunt avec un verset.",
      },
      {
        qui: "Les amis",
        idee: "Une bougie ou une veilleuse, à allumer en pensant au défunt et en priant pour lui.",
      },
      {
        qui: "Les collègues",
        idee: "Une carte avec un verset de réconfort, accompagnée de quelques mots simples et sincères.",
      },
      {
        qui: "La communauté de l'Église",
        idee: "Un livre de prière pour le temps du deuil, remis avec la promesse de prier pour la famille.",
      },
    ],
    faq: [
      {
        q: "Est-il approprié d'offrir quelque chose lors d'un deuil ?",
        a: "Oui, à condition que ce soit un geste discret et non un cadeau festif. Un objet simple, une bougie, une croix, un verset, montre à la famille qu'elle n'est pas seule. Ce qui compte le plus reste votre présence et votre prière.",
      },
      {
        q: "Quel verset écrire sur une carte de condoléances ?",
        a: "Les Psaumes sont souvent choisis pour ce moment. Le [Psaume 23](/psaumes/psaume-23) parle de Dieu qui accompagne dans la vallée de l'ombre de la mort. Le [Psaume 27](/psaumes/psaume-27) redit que Dieu est lumière et soutien de la vie.",
      },
      {
        q: "Une bougie convient-elle à toutes les confessions ?",
        a: "Oui, la bougie est un signe de prière et d'espérance compris par presque tous les chrétiens. Chez les catholiques et les orthodoxes, on l'allume volontiers devant une image ou une icône. Voyez nos [bougies et veilleuses](/chapelets-et-priere/bougies-et-veilleuses).",
      },
    ],
  },
];
