// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  // Escribe tu solución aquí
  // Sugerencia de cómo mostrar el array => showList(strangeArray);

const filtrarString = strangeArray.filter((strangeArray) => typeof strangeArray === "string");
  
// ahora quiero ordenarlos
filtrarString.sort();

// Para que no importe si empieza con mayusculas o con minusculas

//sensitivity: 'base': especifica el nivel de sensibilidad
// que la comparación debe tener con respecto a las diferencias de mayúsculas y minúsculas, tildes, y otros detalles.

//'base': Ignora las diferencias entre mayúsculas y minúsculas, así como los acentos. Por ejemplo, "a" se considera igual que "A" o "á".
//'accent': Distingue entre letras con y sin acento, pero ignora las mayúsculas y minúsculas. Por ejemplo, "a" sería diferente de "á", pero "a" y "A" se considerarían iguales.
//'case': Solo distingue entre mayúsculas y minúsculas. "a" sería diferente de "A", pero no distinguiría entre "a" y "á".
//'variant': Considera todas las diferencias, incluyendo acentos y mayúsculas. Es la más estricta.

const noimportaMm = filtrarString.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

// Para mostrar la lista filtrada 
showList(filtrarString);
});
