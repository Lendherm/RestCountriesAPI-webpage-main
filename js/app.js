import data from "./data.js";
import dom from "./dom.js";

const html = document.querySelector("html");
console.log(html.dataset)

const darkBtn = document.querySelector("#swith");

darkBtn.addEventListener("click", () => {

    html.dataset.bsTheme = html.dataset.bsTheme == "light" ? "dark" : "light";
}) 

const datos = await data.getData();

const cards = dom.$("#cards");

datos.forEach(element => {
    const card = dom.newCard(element);
  
     cards.appendChild(card);
  })
  

