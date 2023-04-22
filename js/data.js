const dataURL =  'https://restcountries.com/v3.1/all';

const getData = async () => {
    // Obytener los datos del archivo 'stays.json'
    const data = fetch(dataURL)
      .then(response => response.json())
      .then( json => json)
     
  
    return data;
  }
  

  export default {
    getData,
  } 