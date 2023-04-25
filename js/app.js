import data from "./data.js";
import dom from "./dom.js";


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

        const filtered = filtro === "" ? datos : data.filterByName(datos, filtro);

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



  
  

