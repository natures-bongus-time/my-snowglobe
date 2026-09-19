
const globe = document.querySelector("#globe");
const button = document.querySelector("#shake");
const message = document.querySelector("#message");

const messages = [
  "you matter, no matter what",
    "you are allowed to be a beginner for as long as you need.",
    "someone is going to love what you're making",
    "you ask good questions. that is the whole skill.",
    "take it one step at a time, we'll get there eventually.",
    "try something new!",
    "with enough hard work and perserverance, you can do this.",
    "it'll be alright.",
    "hot chocolate tastes better after a hard day. you've earned one.",
    "the thing you are building counts, even half finished.",
    "you will have a good day today.",
    "you will find the nice things in your week.",
    "someone will make you smile soon.",
    "something that didn't work before will finally click.",
    "you will make someone smile soon.",
    "things will get even better.",
];

button.addEventListener("click", () => {
  globe.classList.add("shaking");
  setTimeout(() => globe.classList.remove("shaking"), 600);

  const pick = Math.floor(Math.random() * messages.length);
  message.textContent = messages[pick];
});