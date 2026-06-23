// Datos educativos de las 14 especies marinas
// Cada especie incluye datos taxonómicos, biológicos, ecológicos y curiosidades.

export const ESPECIES = [
  {
    id: "delfin",
    nombre: "Delfín",
    cientifico: "Tursiops truncatus",
    grupo: "Mamífero marino",
    habitatNombre: "Mar abierto",
    habitatId: "mar_abierto",
    respiracion: "Aire por espiráculo",
    movimiento: "Aleta caudal",
    alimentacion: "Peces y calamares",
    reproduccion: "Vivíparo, una cría tras 12 meses",
    tamano: "2 – 4 m",
    peso: "150 – 650 kg",
    conservacion: "Preocupación menor",
    anatomia: "Cuerpo fusiforme, melón cefálico para ecolocalización, espiráculo dorsal y dos aletas pectorales.",
    notaEcologica:
      "Los delfines cazan en grupo, usan ecolocalización y ayudan a mantener el equilibrio de las poblaciones de peces en el océano.",
    datoCurioso:
      "Una parte del cerebro puede descansar mientras la otra sigue alerta: duermen 'a medias' para seguir respirando.",
    importancia:
      "Indicadores de la salud de los ecosistemas pelágicos. Su presencia delata bancos de peces sanos.",
  },
  {
    id: "tortuga_marina",
    nombre: "Tortuga marina",
    cientifico: "Chelonia mydas",
    grupo: "Reptil marino",
    habitatNombre: "Pradera marina",
    habitatId: "pradera_marina",
    respiracion: "Pulmones (aire)",
    movimiento: "Aletas natatorias",
    alimentacion: "Algas, pastos marinos y medusas",
    reproduccion: "Ovípara, anida en playas arenosas",
    tamano: "1 – 1,5 m",
    peso: "110 – 190 kg",
    conservacion: "En peligro",
    anatomia: "Caparazón aplanado e hidrodinámico, aletas como remos y glándulas que excretan el exceso de sal.",
    notaEcologica:
      "Mantienen las praderas marinas saludables al pastorear y favorecen ecosistemas costeros productivos.",
    datoCurioso:
      "Regresan a la misma playa donde nacieron para anidar, usando el campo magnético terrestre.",
    importancia:
      "Especie paraguas: protegerlas conserva playas, arrecifes y praderas marinas enteras.",
  },
  {
    id: "pez_payaso",
    nombre: "Pez payaso",
    cientifico: "Amphiprion ocellaris",
    grupo: "Pez óseo",
    habitatNombre: "Arrecife coralino",
    habitatId: "arrecife_coralino",
    respiracion: "Branquias",
    movimiento: "Aletas pectorales y caudal",
    alimentacion: "Invertebrados pequeños y algas",
    reproduccion: "Ovíparo, deposita huevos junto a la anémona",
    tamano: "8 – 11 cm",
    peso: "≈ 250 g",
    conservacion: "Preocupación menor",
    anatomia: "Cuerpo naranja con tres bandas blancas bordeadas de negro; mucosa que lo protege del aguijón de la anémona.",
    notaEcologica:
      "Forma una simbiosis perfecta con las anémonas: encuentra refugio y a cambio aleja peces que comerían a su huésped.",
    datoCurioso:
      "Todos nacen machos. El más grande del grupo cambia de sexo y se convierte en la hembra dominante.",
    importancia:
      "Indica arrecifes sanos con anémonas vivas, base de microhábitats para muchas especies.",
  },
  {
    id: "manta_raya",
    nombre: "Manta raya",
    cientifico: "Mobula birostris",
    grupo: "Pez cartilaginoso",
    habitatNombre: "Mar abierto",
    habitatId: "mar_abierto",
    respiracion: "Branquias",
    movimiento: "'Vuelo' con aletas pectorales",
    alimentacion: "Plancton por filtración",
    reproduccion: "Ovovivípara, una cría cada 2 – 3 años",
    tamano: "5 – 7 m de envergadura",
    peso: "Hasta 1 400 kg",
    conservacion: "En peligro",
    anatomia: "Aletas pectorales triangulares enormes, dos lóbulos cefálicos para dirigir el agua y branquias filtradoras.",
    notaEcologica:
      "Regulan poblaciones de zooplancton y transportan nutrientes entre la superficie y aguas profundas.",
    datoCurioso:
      "Se reconocen en el espejo: están entre los pocos animales con autoconciencia demostrada.",
    importancia:
      "Su pérdida desestabiliza redes tróficas oceánicas; son sensibles a la sobrepesca accidental.",
  },
  {
    id: "medusa",
    nombre: "Medusa",
    cientifico: "Aurelia aurita",
    grupo: "Cnidario",
    habitatNombre: "Mar abierto",
    habitatId: "mar_abierto",
    respiracion: "Difusión a través de la piel",
    movimiento: "Pulsaciones de la umbrela",
    alimentacion: "Plancton e invertebrados pequeños",
    reproduccion: "Alternancia de generaciones (pólipo / medusa)",
    tamano: "25 – 40 cm",
    peso: "≈ 0,15 kg",
    conservacion: "Preocupación menor",
    anatomia: "Umbrela gelatinosa con cuatro gónadas en forma de herradura, tentáculos urticantes y boca central.",
    notaEcologica:
      "Forman parte clave del zooplancton y son alimento de tortugas, peces luna y aves marinas.",
    datoCurioso:
      "El 95% de su cuerpo es agua; sin ella, casi desaparece.",
    importancia:
      "Sus floraciones masivas son un aviso de océanos calientes y desequilibrados.",
  },
  {
    id: "pez_leon",
    nombre: "Pez león",
    cientifico: "Pterois volitans",
    grupo: "Pez óseo venenoso",
    habitatNombre: "Arrecife coralino",
    habitatId: "arrecife_coralino",
    respiracion: "Branquias",
    movimiento: "Nado lento con aletas vistosas",
    alimentacion: "Peces pequeños y crustáceos",
    reproduccion: "Ovíparo, libera masas flotantes de huevos",
    tamano: "30 – 38 cm",
    peso: "≈ 1,2 kg",
    conservacion: "Especie invasora en el Atlántico",
    anatomia: "Espinas dorsales venenosas, aletas pectorales muy desarrolladas usadas para acorralar presas.",
    notaEcologica:
      "Hermoso pero peligroso fuera de su área nativa: depreda especies clave del arrecife sin depredadores naturales.",
    datoCurioso:
      "Una hembra puede liberar más de 2 millones de huevos al año.",
    importancia:
      "Su control es prioritario en el Caribe para proteger arrecifes del Atlántico.",
  },
  {
    id: "caballito_de_mar",
    nombre: "Caballito de mar",
    cientifico: "Hippocampus hippocampus",
    grupo: "Pez óseo",
    habitatNombre: "Pradera marina",
    habitatId: "pradera_marina",
    respiracion: "Branquias",
    movimiento: "Aleta dorsal vibrante (muy lento)",
    alimentacion: "Pequeños crustáceos y plancton",
    reproduccion: "El macho incuba los huevos en su bolsa",
    tamano: "2 – 30 cm",
    peso: "≈ 10 g",
    conservacion: "Vulnerable",
    anatomia: "Cuerpo cubierto de placas óseas, cola prensil, hocico tubular y bolsa incubadora en los machos.",
    notaEcologica:
      "Indicador de praderas marinas y manglares saludables; sufre con la pérdida de hábitat costero.",
    datoCurioso:
      "Son los únicos animales del planeta donde el macho 'da a luz' a las crías.",
    importancia:
      "Su declive avisa que praderas y estuarios están degradándose.",
  },
  {
    id: "dragon_azul",
    nombre: "Dragón azul",
    cientifico: "Glaucus atlanticus",
    grupo: "Babosa marina (molusco)",
    habitatNombre: "Mar abierto",
    habitatId: "mar_abierto",
    respiracion: "Branquias externas (ceratas)",
    movimiento: "Flota boca arriba en la superficie",
    alimentacion: "Carabela portuguesa y otros cnidarios",
    reproduccion: "Hermafrodita, intercambia espermatozoides",
    tamano: "3 – 4 cm",
    peso: "≈ 3 g",
    conservacion: "Datos insuficientes",
    anatomia: "Cuerpo plateado y azul cobalto con ceratas radiantes; contracorriente para flotar.",
    notaEcologica:
      "Mini-depredador pelágico que controla poblaciones de medusas venenosas.",
    datoCurioso:
      "Almacena el veneno de sus presas y lo concentra: una picadura suya es más fuerte que la de su comida.",
    importancia:
      "Su presencia indica corrientes oceánicas y temperaturas cambiantes.",
  },
  {
    id: "estrella_de_mar",
    nombre: "Estrella de mar",
    cientifico: "Asterias rubens",
    grupo: "Equinodermo",
    habitatNombre: "Fondo rocoso",
    habitatId: "fondo_rocoso",
    respiracion: "Pápulas (difusión por la piel)",
    movimiento: "Pies ambulacrales hidráulicos",
    alimentacion: "Moluscos, detritos y carroña",
    reproduccion: "Sexual y asexual (regeneración)",
    tamano: "12 – 24 cm",
    peso: "≈ 250 g",
    conservacion: "Preocupación menor",
    anatomia: "Cinco brazos con cientos de pies tubulares, sistema vascular acuífero y boca central inferior.",
    notaEcologica:
      "Controla poblaciones de mejillones y caracoles, estructurando comunidades costeras enteras.",
    datoCurioso:
      "Puede regenerar un brazo completo, y a veces un brazo solo puede regenerar todo el animal.",
    importancia:
      "Especie clave: si desaparece, otras explotan y desplazan a las demás.",
  },
  {
    id: "morena_cinta_azul",
    nombre: "Morena cinta azul",
    cientifico: "Rhinomuraena quaesita",
    grupo: "Pez óseo",
    habitatNombre: "Arrecife coralino",
    habitatId: "arrecife_coralino",
    respiracion: "Branquias",
    movimiento: "Ondulación lateral",
    alimentacion: "Pececillos y camarones",
    reproduccion: "Hermafrodita protándrica",
    tamano: "65 – 130 cm",
    peso: "≈ 0,9 kg",
    conservacion: "Preocupación menor",
    anatomia: "Cuerpo alargado como una cinta, fosas nasales en forma de hoja y boca siempre abierta.",
    notaEcologica:
      "Depredador emboscador en grietas: limita poblaciones de pequeños peces de arrecife.",
    datoCurioso:
      "Cambia de color y de sexo a lo largo de su vida: negro de joven, azul macho y amarillo hembra.",
    importancia:
      "Indicador de arrecifes complejos con muchos refugios.",
  },
  {
    id: "nautilus",
    nombre: "Nautilus",
    cientifico: "Nautilus pompilius",
    grupo: "Cefalópodo (molusco)",
    habitatNombre: "Aguas profundas",
    habitatId: "aguas_profundas",
    respiracion: "Branquias",
    movimiento: "Propulsión a chorro",
    alimentacion: "Crustáceos y carroña",
    reproduccion: "Ovíparo, pocos huevos grandes",
    tamano: "16 – 25 cm",
    peso: "≈ 1,3 kg",
    conservacion: "Vulnerable",
    anatomia: "Concha en espiral con cámaras llenas de gas, hasta 90 tentáculos sin ventosas y ojos primitivos.",
    notaEcologica:
      "Carroñero de aguas profundas que recicla materia orgánica en taludes y arrecifes oscuros.",
    datoCurioso:
      "Lleva en el planeta más de 500 millones de años: convive con los dinosaurios desde antes que existieran.",
    importancia:
      "Fósil viviente; clave para entender la evolución de los cefalópodos.",
  },
  {
    id: "pez_cirujano_azul",
    nombre: "Pez cirujano azul",
    cientifico: "Paracanthurus hepatus",
    grupo: "Pez óseo",
    habitatNombre: "Arrecife coralino",
    habitatId: "arrecife_coralino",
    respiracion: "Branquias",
    movimiento: "Aletas pectorales y caudal",
    alimentacion: "Plancton y algas filamentosas",
    reproduccion: "Ovíparo con desove grupal",
    tamano: "25 – 30 cm",
    peso: "≈ 600 g",
    conservacion: "Preocupación menor",
    anatomia: "Cuerpo ovalado azul real, cola amarilla y un par de espinas afiladas (escalpelos) en el pedúnculo caudal.",
    notaEcologica:
      "Mantiene a raya algas que asfixiarían a los corales: 'jardinero' del arrecife.",
    datoCurioso:
      "Si se siente amenazado, finge estar muerto entre las rocas hasta que pasa el peligro.",
    importancia:
      "Su ausencia favorece la dominancia de algas y la pérdida de corales.",
  },
  {
    id: "pez_loro",
    nombre: "Pez loro",
    cientifico: "Scarus guacamaia",
    grupo: "Pez óseo",
    habitatNombre: "Arrecife coralino",
    habitatId: "arrecife_coralino",
    respiracion: "Branquias",
    movimiento: "Aletas pectorales remando",
    alimentacion: "Algas y coral muerto que raspa con su pico",
    reproduccion: "Hermafrodita, cambia de sexo y color",
    tamano: "30 – 120 cm",
    peso: "Hasta 20 kg",
    conservacion: "Casi amenazado",
    anatomia: "Dientes fusionados en pico tipo loro, dientes faríngeos que trituran coral y mucosa nocturna protectora.",
    notaEcologica:
      "Convierte coral muerto en arena fina: produce gran parte de la arena blanca de las playas tropicales.",
    datoCurioso:
      "Cada noche fabrica un capullo de moco para esconder su olor de los depredadores.",
    importancia:
      "Ingeniero del arrecife: sin él, los corales se ahogan en algas.",
  },
  {
    id: "pez_mandarin",
    nombre: "Pez mandarín",
    cientifico: "Synchiropus splendidus",
    grupo: "Pez óseo",
    habitatNombre: "Arrecife coralino",
    habitatId: "arrecife_coralino",
    respiracion: "Branquias",
    movimiento: "Aletas pectorales en aleteos rápidos",
    alimentacion: "Pequeños crustáceos del sustrato",
    reproduccion: "Ovíparo, desove al atardecer en parejas",
    tamano: "6 – 7 cm",
    peso: "≈ 15 g",
    conservacion: "Preocupación menor",
    anatomia: "Coloración psicodélica con pigmentos cian reales, escamas reducidas y piel cubierta de moco amargo.",
    notaEcologica:
      "Vive entre coral ramificado y mantiene poblaciones de microcrustáceos en equilibrio.",
    datoCurioso:
      "Es uno de los pocos animales del planeta que posee verdadero pigmento azul, no estructural.",
    importancia:
      "Su presencia depende de arrecifes con coral ramificado intacto.",
  },
];

// Catálogo de hábitats con descripción para "Dónde vive".
export const HABITATS = {
  mar_abierto: {
    nombre: "Mar abierto",
    descripcion: "Aguas pelágicas y costas templadas, lejos del fondo, con grandes migraciones.",
  },
  arrecife_coralino: {
    nombre: "Arrecife coralino",
    descripcion: "Bosques submarinos de coral con altísima biodiversidad y aguas cálidas.",
  },
  pradera_marina: {
    nombre: "Pradera marina",
    descripcion: "Llanuras de pastos marinos en zonas someras, refugio y guardería costera.",
  },
  fondo_rocoso: {
    nombre: "Fondo rocoso",
    descripcion: "Sustratos duros costeros con grietas, algas y comunidades bentónicas.",
  },
  aguas_profundas: {
    nombre: "Aguas profundas",
    descripcion: "Zonas crepusculares y abisales, frías, oscuras y de alta presión.",
  },
  manglar: {
    nombre: "Manglar",
    descripcion: "Bosque costero entre raíces sumergidas, criadero natural de muchas especies.",
  },
};

// Catálogo de categorías para los filtros.
export const CATEGORIAS = [
  { id: "grupo", nombre: "Grupo", icono: "icon_grupo.png" },
  { id: "habitat", nombre: "Hábitat", icono: "icon_habitat.png" },
  { id: "alimentacion", nombre: "Alimentación", icono: "icon_alimentacion.png" },
  { id: "conservacion", nombre: "Conservación", icono: "icon_conservacion.png" },
];

// Rutas relativas a los assets (todo se sirve desde el directorio padre).
export const RUTAS = {
  modelos: "../animales-3D",
  miniaturas: "../app-assets/miniaturas",
  anatomias: "../app-assets/anatomia",
  mapas: "../app-assets/mapas",
  fichas: "../imagenes-detalles",
  pngTransparentes: "../png-transparentes",
  habitats: "../app-assets/habitats",
  iconos: "../app-assets/iconos",
  logo: "../app-assets/identidad/logo_mar_especies.png",
  fondoSubmarino: "../app-assets/fondos/fondo_submarino_general.png",
};

// Construye nombres de archivo a partir del id de cada especie.
export function rutasEspecie(esp) {
  return {
    modelo: `${RUTAS.modelos}/${esp.id}.glb`,
    miniatura: `${RUTAS.miniaturas}/thumb_${esp.id}.png`,
    anatomia: `${RUTAS.anatomias}/anatomia_${esp.id}.png`,
    mapa: `${RUTAS.mapas}/mapa_${esp.id}.png`,
    ficha: `${RUTAS.fichas}/${esp.id}_detalles.png`,
    pngTransparente: `${RUTAS.pngTransparentes}/${esp.id}-removebg-preview.png`,
    habitat: `${RUTAS.habitats}/habitat_${esp.habitatId}.png`,
  };
}
