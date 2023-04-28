# Front-end Style Guide

## Typography

### Body Copy

- Homepage Items: 14px
- Detail Page: 16px 

### Fonts

- Family: [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans)
- Weights: 300, 600, 800

## Icons

For the icons, you can use a font icon library. Don't worry if the icons that you choose don't look exactly like they do on the design.

Some suggestions can be found below:

- [Font Awesome](https://fontawesome.com)
- [IcoMoon](https://icomoon.io)
- [Ionicons](https://ionicons.com)



<section class="offcanvas offcanvas-bottom" tabindex="-1" data-bs-backdrop="false"  data-bs-scroll="true"  id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
<div class="offcanvas-header">

<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>
<div class="offcanvas-body">
<img src="${obj.flags.png}">
<h5 class="offcanvas-title" >${obj.name.official}</h5>
<p>Native name: ${obj.name.common}</p>
<p>Population: ${obj.population}</p>
<p>Region: ${obj.region}</p>
<p>Subregion: ${obj.subregion}</p>
<p>Capital: ${obj.capital}</p>
<p>Top Level Domain: ${obj.tld}</p>
</div>
</section>

  div.setAttribute("type", "button");
  div.setAttribute("data-bs-toggle", "offcanvas");
  div.setAttribute("data-bs-target", "#offcanvasBottom");
  div.setAttribute("aria-controls", "offcanvasBottom");

  const showOnlySelectedCountry = (selectedCountry) => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      if (card.getAttribute("data-country") === selectedCountry) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  };
  
  const countryInput = document.querySelector('#floatingInputGrid');

  const activateFilter = (event) => {
    const country = event.target.getAttribute('data-country');
    showOnlySelectedCountry(country);
    
    // Actualizar el valor del campo de entrada con el nombre del país seleccionado
    countryInput.value = country;
  };
  
  const btnPrimary = document.querySelectorAll('.btn-primary');
  
  btnPrimary.forEach((button) => {
    button.addEventListener('click', activateFilter);
  });
  

  const newCard = (obj) => {
  const div = document.createElement('div');
  div.setAttribute("class", "btn btn-primary");
  div.setAttribute("type", "button");
  div.setAttribute("data-bs-toggle", "offcanvas");
  div.setAttribute("data-bs-target", "#offcanvasBottom");
  div.setAttribute("aria-controls", "offcanvasBottom");
  div.setAttribute("data-country", obj.name.common);
  div.setAttribute("id", "filtro");
  div.innerHTML = `
  <img src="${obj.flags.png}" class="card-img-top" alt="${obj.name.common}  style="">
    
  <div class="card-body">
  <h5 class="card-title">${obj.name.official}</h5>
  <p class="card-text">Population: ${obj.population}</p>
  <p class="card-text">Region: ${obj.region}</p>
  <p class="card-text">Capital: ${obj.capital}</p>
</div>


<section class="offcanvas offcanvas-bottom" tabindex="-1" data-bs-backdrop="false"  data-bs-scroll="true"  id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
<div class="offcanvas-header">

<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>
<div class="offcanvas-body">
<img src="${obj.flags.png}">
<h5 class="offcanvas-title" >${obj.name.official}</h5>
<p>Native name: ${obj.name.common}</p>
<p>Population: ${obj.population}</p>
<p>Region: ${obj.region}</p>
<p>Subregion: ${obj.subregion}</p>
<p>Capital: ${obj.capital}</p>
<p>Top Level Domain: ${obj.tld}</p>
</div>
</section>

    `;

  return div;
};

const div = document.querySelector('#offcanvasBottom'); 
div.addEventListener('click', () => {
  const country = div.getAttribute("data-country");
  if (!country) {
    console.log('No se pudo obtener el valor de country');
    return;
  }
  fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(filtrodata => {
      const filtered = data.filterByName(filtrodata.data, country);
      console.log(filtrodata.data, country)
      const offcanvasBody = document.querySelector('.offcanvas-body');
      if (filtered && filtered.length > 0) {
        offcanvasBody.innerHTML = `
          <img src="${flags.png}">
          <h5 class="offcanvas-title" >${name.official}</h5>
          <p>Native name: ${name.common}</p>
          <p>Population: ${population}</p>
          <p>Region: ${region}</p>
          <p>Subregion: ${subregion}</p>
          <p>Capital: ${capital}</p>
          <p>Top Level Domain: ${tld}</p>
        `;
      } else {
        offcanvasBody.innerHTML = '<p>No se encontraron resultados</p>';
      }
    })
    .catch(error => console.log(error));
});


const offcanvasBottom = document.createElement("div");
offcanvasBottom.id = "buttom-offcanvas";
document.body.appendChild(offcanvasBottom);
if (dom.$("#buttom-offcanvas")) {
console.log("Offcanvas Bottom element detected.");
} else {
console.log("Offcanvas Bottom element not found.");
}

const cardCountries = document.querySelectorAll(".card-country");
console.log(cardCountries); // array con todas las cards que tienen la clase card-country

cardCountries.forEach((card) => {
  const country = card.getAttribute("data-country");
  console.log(country);
});

const offcanvasBody = document.querySelector("#offcanvas-body");

cardCountries.forEach((card) => {
  const country = card.getAttribute("data-country");
  card.addEventListener("click", () => {
    const countryData = datos.find((element) => element.name.common === country);
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

  div.addEventListener("click", () => {
    const clickedCountry = div.getAttribute("data-country");
    console.log(clickedCountry);
  });

  return div;
};


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