const $ = (selector) => document.querySelector(selector);



const newCard = (obj) => {
  const div = document.createElement('div');
  div.setAttribute("class", "btn btn-primary");
  div.setAttribute("type", "button");
  div.setAttribute("data-bs-toggle", "offcanvas");
  div.setAttribute("data-bs-target", "#offcanvasBottom");
  div.setAttribute("aria-controls", "offcanvasBottom");
  div.setAttribute("data-country", obj.name.common);


  


  div.innerHTML = `
  
    <img src="${obj.flags.png}" class="card-img-top" alt="${obj.name.common}  style="">
    
    <div class="card-body">
    <h5 class="card-title">${obj.name.official}</h5>
    <p class="card-text">Population: ${obj.population}</p>
    <p class="card-text">Region: ${obj.region}</p>
    <p class="card-text">Capital: ${obj.capital}</p>
    <button type="button" class="btn btn-primary" id="togglemyOffcanvas-${obj.alpha2Code}" data-bs-target="#${obj.alpha2Code}" aria-controls="${obj.alpha2Code}">
      More info
    </button>
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

const newSidebar = (obj) => {
  const div = document.createElement('div');
  div.className = 'offcanvas offcanvas-bottom';

  div.innerHTML = `
    <div class="offcanvas-header">
      
      <button type="button" id="closemyOffcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
    <h>${obj.name.official}</h>
      <p>Native name: ${obj.nativeName}</p>
      <p>Population: ${obj.population}</p>
      <p>Region: ${obj.region}</p>
      <p>Subregion: ${obj.subregion}</p>
      <p>Capital: ${obj.capital}</p>
      <p>Top Level Domain: ${obj.tld}</p>
    </div>
  `;

  return div;
};

const myOffcanvas = (() => { })();

export default {
  newCard,
  $,
  showCards,
  newSidebar,
  myOffcanvas,
};
