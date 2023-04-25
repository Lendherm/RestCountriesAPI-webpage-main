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

const filtrar = (arr, filtro) => {

  let filtered = arr.filter(elem => elem.name.official === filtro)

  return filtered;
};

//filtrar por nombre de pais 
const filterByName = (arr, filtro) => {
  let filtered = arr.filter(elem => {
    if (elem.name.official && typeof elem.name.official === 'string') {
      return elem.name.official.toLowerCase().includes(filtro.toLowerCase());
    }
    return false;
  });
  return filtered;
};

const filterByRegion = (arr, region) => {
  if (!region) return arr; // Si no se selecciona una región, devolver todos los países
  return arr.filter(elem => elem.region === region);
};



export default {
  getData,
  filtrar,
  filterByName,
  filterByRegion,
} 
