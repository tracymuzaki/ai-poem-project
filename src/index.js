function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: "La tombe dit à la rose",
    delay: 20,
    cursor: null,
    autoStart: true,
  });
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);


