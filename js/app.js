import data from "./data.js";
import dom from "./dom.js";

const datos = await data.getData();

(async function () {
  const html = document.querySelector("html");
  console.log(html.dataset);

  const darkBtn = document.querySelector("#swith");

  darkBtn.addEventListener("click", () => {
    html.dataset.bsTheme = html.dataset.bsTheme == "light" ? "dark" : "light";
  });

  const datos = await data.getData();

  const cards = dom.$("#cards");

  datos.forEach((element) => {
    const card = dom.newCard(element);

    cards.appendChild(card);
  });

//filtro para buscar por pais
const searchProduct = dom.$("#floatingInputGrid");

searchProduct.addEventListener("keyup", () => {
  let filtro = searchProduct.value;

  const filtered = filtro === "" ? datos : datos.filter(elem => elem.name.common.toLowerCase().includes(filtro.toLowerCase()));

  dom.showCards(filtered);
});

  //filtro por region
  const regionSelect = dom.$("#region-select");

  regionSelect.addEventListener("change", async () => {
    const selectedRegion = regionSelect.value;
    const filteredCountries = await data.filterByRegion(datos, selectedRegion);
    dom.showCards(filteredCountries);
  });
})();

const cardsArray = [];

datos.forEach((element) => {
  const card = dom.newCard(element);

  cards.appendChild(card);
  cardsArray.push(card);
});


const cardCountries = document.querySelectorAll(".card-country");
console.log(cardCountries); // array con todas las cards que tienen la clase card-country

cardCountries.forEach((card) => {
  const country = card.getAttribute("data-country");
  
});



const buttonOffcanvas = document.querySelectorAll(".card-country");
const offcanvasBody = document.querySelector(".offcanvas-body");

buttonOffcanvas.forEach((button) => {
  button.addEventListener("click", (event) => {
    const clickedCountry = event.currentTarget.getAttribute("data-country");
    console.log(clickedCountry);

    const countryData = datos.find(elem => elem.name.common === clickedCountry);
    offcanvasBody.innerHTML = `
      <img src="${countryData.flags.png}">
      <h5 class="offcanvas-title">${countryData.name.official}</h5>
      <p>Native name: ${countryData.name.common}</p>
      <p>Population: ${countryData.population}</p>
      <p>Region: ${countryData.region}</p>
      <p>Subregion: ${countryData.subregion}</p>
      <p>Capital: ${countryData.capital}</p>
      <p>Top Level Domain: ${countryData.tld.join(', ')}</p>
    `;
  });
});


