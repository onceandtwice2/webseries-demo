
changeText = () => {
  let h1List = document.getElementsByClassName("header");
  h1List[0].innerText = "WOOHOO EDWARD KIM WOOHOO";
  h1List[1].innerText = "WOOHOO IS EDWARD KIM";
  let info = document.getElementById("info");
  info.innerText = "WOOHOO";
};

addText = () => {
  const newText = document.createElement("div");
  newText.innerText = "woohoo more text";
  document.body.append(newText);
}

const woohoo = document.getElementById("woohoo");

woohoo.addEventListener("click", () => {
  changeText();
  addText();
});