const dataURL = 'https://restcountries.com/v3.1/all';

const getData = async () => {
  try {
    const response = await fetch(dataURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

// filter countries by name
const filterByName = (arr, filtro) => arr.filter( elem => elem.name.official.toLowerCase().includes(filtro.toLowerCase()))

// filter countries by region
const filterByRegion = (arr, region) => {
  if (!region) return arr; // If no region is selected, return all countries
  return arr.filter(elem => elem.region === region);
};

export default {
  getData,
  filterByName,
  filterByRegion,
}
