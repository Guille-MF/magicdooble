const subjects = [
    "Tortugas", "Elefantes", "Chimpancés", "Jirafas", "Cebúes",
    "Pingüinos", "Cocodrilos", "Canguros", "Perezosos", "Palomas",
    "Llamas", "Rinocerontes", "Pelícanos", "Ornitorrincos", "Puercoespines",
    "Gaviotas", "Tarsios", "Armadillos", "Lémures", "Narvales",
    "Búhos", "Avestruces", "Ardillas", "Camaleones", "Hipopótamos",
    "Grillos", "Morsas", "Serpientes", "Tucanes", "Castores"
  ];
  
  const verbs = [
    "Malabar", "Pintar", "Tejer", "Correr", "Cocinar", "Cantar", "Plantar", "Abrazar",
    "Construir", "Surfear", "Diseñar", "Escribir", "Esculpir", "Montar", "Equilibrar",
    "Inventar", "Soñar", "Descubrir", "Patinar", "Leer", "Bailar", "Bucear",
    "Rebotar", "Trepar", "Coser", "Lanzar", "Jugar", "Actuar", "Susurrar", "Crecer"
  ];
  
  const objects = [
    "Panqueques", "Rocas lunares", "Castillos de arena", "Cometas", "Paletas",
    "Montañas rusas", "Sombreros de lunares", "Cucharas gigantes", "Naves espaciales",
    "Tazas de té", "Burbujas", "Arcoíris", "Velas", "Donas", "Robots",
    "Libros", "Plumas", "Guitarras", "Conchas marinas", "Rompecabezas", "Piñas",
    "Mariposas", "Globos", "Malvaviscos", "Paraguas", "Bastones de caramelo",
    "Pinceles", "Zapatillas", "Monopatines", "Zancos"
  ];
  
  const extraPhrases = [
    "con un toque de risas",
    "en medio de una fiesta de risas",
    "en un torbellino de fantasía",
    "bajo un cielo lleno de risas",
    "en una sinfonía de tonterías",
    "en la cima de una colina de diversión",
    "con un toque de travesuras",
    "en un mundo de risas",
    "en una frecuencia divertida",
    "en un torbellino de alegría",
    "en un viaje de bromistas",
    "en un desfile de juegos de palabras",
    "en una montaña rusa de risas",
    "en un jardín de risas",
    "con un guiño de humor",
    "en una burbuja de carcajadas",
    "en una etapa llena de sonrisas",
    "a lo largo de un sendero de risitas",
    "con un toque de slapstick",
    "en la intersección de las bromas",
    "en un cohete impulsado por juegos de palabras",
    "en un disfrute de una explosión de diversión",
    "en un remolino de risa"
];

function generarFraseAleatoria() {
const sujetoAleatorio = subjects[Math.floor(Math.random() * subjects.length)];
const verboAleatorio = verbs[Math.floor(Math.random() * verbs.length)];
const objetoAleatorio = objects[Math.floor(Math.random() * objects.length)];
const fraseExtraAleatoria = extraPhrases[Math.floor(Math.random() * extraPhrases.length)];

const frase = `${sujetoAleatorio} ${verboAleatorio} ${objetoAleatorio} ${fraseExtraAleatoria}`;

return frase;
}

const boton = document.getElementById("generate-button");
boton.addEventListener("click", function() {
const fraseAleatoria = generarFraseAleatoria();
console.log(fraseAleatoria);
divFraseMagica.textContent = fraseAleatoria;
});

const divFraseMagica = document.getElementById("frase-magica");
const fraseAleatoria = generarFraseAleatoria();
divFraseMagica.textContent = fraseAleatoria;


