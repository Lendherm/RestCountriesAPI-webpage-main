const $ = (selector) => document.querySelector(selector);


const newCard = (obj) => {
  const div = document.createElement('div');
  div.className = 'cards';



  div.innerHTML = `
  <div class="col">
  <img class=" img2  h-100 w-100 rounded-4" src="${obj.flags.svg}" alt="${obj.title}">
  
  <div class="  caja2 d-flex justify-content-between">
  <h>${obj.name.official} </h>
  <ul>
  <li>Population: ${obj.population}</li>
  <li>Region: ${obj.region}</li>
  <li>Capital: ${obj.capital}</li>
  </ul>
  </div>
  `
return div;
}

export default {
    newCard,
    $,
  
   
  }