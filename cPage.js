const baseUrl = "https://restcountries.com/v3.1/name/"
const listCont= document.getElementById('countryList')



function getCountries(){
    fetch(baseUrl+'usa')
  .then(response => {
    // Check if the request was successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON from the response
    return response.json();
  })
  .then(data => {
    // Handle the data from the response
    createCountry(data);
  })
  .catch(error => {
    // Handle errors during the fetch
    console.error('Error during fetch:', error);
  });
}


function createCountry(cntData){
    console.log(cntData[0]);
    listCont.innerHTML=makeCountry(cntData[0])
}

function makeCountry(sglCountry)
{
    return`<div class="countryCard">
        <div>
            <h1>${sglCountry.name.common}</h1>
            <h3>Capital: ${sglCountry.capital?sglCountry.capital[0]:'no capital'}</h3>
        </div>    
        <img src='${sglCountry.flags.png||''}'>
        <div><h2>borders: </h2>
        <ol>${arrToHtmlList(sglCountry.borders)}</ol>
        </div>
    </div>`
}

function arrToHtmlList(arr){
    return arr.map((arrVar)=>{return `<li>${arrVar}</li>`}).join('')
}
getCountries()