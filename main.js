const baseUrl = "https://restcountries.com/v3.1/all"
const listCont= document.getElementById('countryList')

function getCountries(){
    fetch(baseUrl)
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
    createCountries(data);
  })
  .catch(error => {
    // Handle errors during the fetch
    console.error('Error during fetch:', error);
  });
}



function createCountries(cntData){
    console.log(cntData)
    listCont.innerHTML=cntData.map((anyCountry)=>makeCountry(anyCountry)).join('')
}

function makeCountry(sglCountry)
{

    return`<div class="countryCard">
        <h1>${sglCountry.name.common}</h1>
        <h3>Capital: ${sglCountry.capital?sglCountry.capital[0]:'no capital'}</h3>
        <img src='${sglCountry.flags.png||''}'>
    </div>`

}
getCountries()
