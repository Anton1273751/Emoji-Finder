import { data } from "./emoji.js";
const containerNode = document.querySelector(".container");
const inputNode = document.querySelector(".header__plas");

const createCards = ({ title, symbol, keywords }) => {
  const cardNode = document.createElement("div");
  cardNode.className = "card";
  cardNode.innerHTML = `
                        <text class = "card__picture"> ${symbol}</text>
                        <p class = "card__article">${title}</p>
                        <p class = "card__text">${keywords} </p>
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
    (el) => el.title.includes(value) || el.keywords.includes(value)
  );
  renderCard(filterCard);
});
renderCard(data);
