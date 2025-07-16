const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function removeEls() {
  const parentEl = document.querySelector("ul");
  parentEl.innerHTML = "";
}

function createEls() {
  const parentEl = document.querySelector("ul");
  cosasQueAprendimos.forEach(element => {
    const newLi = document.createElement("li");
    
    newLi.className = element.class || 'clase-default';
    newLi.textContent = element.tema;

    parentEl.appendChild(newLi);
  });

}

function main() { 
  removeEls();
  createEls();
}
main();
