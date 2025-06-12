function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    delay: 20,
    cursor: null,
    autoStart: true,
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#instructions-input");
  let apiKey = "t0ofa24ea50a4bf83aaaf293402db0a1";
  let prompt = `You are an intelligent Assistant AI that knows many french poems for every topic in ${instructionsInput.value}. Provide the poem in the html format of "<p></p>" and conclude with a signature "<b>--SheCodes AI</b>" in bold. Make it five lines.`;
  let context = "Generate one short french poem for the requested french topic";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayPoem);
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
