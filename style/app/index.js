import { data } from "./emoji.js";
const containerNode = document.querySelector(".container");
const inputNode = document.querySelector(".header__plas");

const delDobleStr = (data) => {
  for (const { keywords } of data) {
    const arr = keywords.split(" ");
    const newSet = new Set(arr);
    const newStr = Array.from(newSet).join(" ");
    return newStr;
  }
};

const createCards = ({ title, symbol, keywords }) => {
  const cardNode = document.createElement("div");
  cardNode.className = "card";
  cardNode.innerHTML = `
                        <text class = "card__picture"> ${symbol}</text>
                        <p class = "card__article">${title}</p>
                        <p class = "card__text">${delDobleStr(data)} </p>
                        `;

  return cardNode;
};

const renderCard = (data) => {
  containerNode.innerHTML = "";
  data.forEach((element) => containerNode.append(createCards(element)));
};

inputNode.addEventListener("input", (e) => {
  const value = e.target.value;
  const filterCard = data.filter(
    ({ title, keywords }) =>
      title.toLowerCase().includes(value.toLowerCase()) ||
      keywords.toLowerCase().includes(value.toLowerCase())
  );
  renderCard(filterCard);
});

console.log(delDobleStr(data));

renderCard(data);

// console.log(...data);
