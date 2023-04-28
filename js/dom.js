import data from "./data.js";

const $ = (selector) => document.querySelector(selector);

const datos = await data.getData();

const offcanvasBody = document.querySelector(".offcanvas-body");

const newCard = (obj) => {
  const div = document.createElement('div');
  div.id = "button-offcanvas";
  div.setAttribute("data-country", `${obj.name.common}`);
  div.setAttribute("class", "btn btn-primary card-country");
  div.setAttribute("data-bs-toggle", "offcanvas");
  div.setAttribute("data-bs-target", "#offcanvasBottom");
  div.setAttribute("aria-controls", "offcanvasBottom");
  div.setAttribute("type", "button");

  div.innerHTML = `
    <img src="${obj.flags.png}" class="card-img-top" alt="${obj.name.common}" style="">
    <div class="card-body">
      <h5 class="card-title">${obj.name.official}</h5>
      <p class="card-text">Population: ${obj.population}</p>
      <p class="card-text">Region: ${obj.region}</p>
      <p class="card-text">Capital: ${obj.capital}</p>
    </div>
  `;

  div.addEventListener("click", (event) => {
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

  return div;
};


const showCards = (arr) => {
  cards.innerHTML = '';

  arr.forEach(element => {
    const card = newCard(element);
    cards.appendChild(card);
  });

  const myOffcanvas = new bootstrap.Offcanvas(document.getElementById('myoffcanvas'));

  const mytoggleBtns = document.querySelectorAll("[id^='togglemyOffcanvas-']");

  mytoggleBtns.forEach((mytoggleBtn) => {
    mytoggleBtn.addEventListener("click", () => {
      const target = mytoggleBtn.getAttribute('data-bs-target');
      myOffcanvas.show(target);
    });
  });
};

export default {
  newCard,
  $,
  showCards,

};



