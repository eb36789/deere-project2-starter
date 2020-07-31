fetch('https://www.potterapi.com/v1/houses/?key=$2a$10$j5FYUV4xdt/HSlFxfWGtYOTDcVSCd8koA6jJrLyhxpLFttyvQK4fy')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

let baseURL = "https://www.potterapi.com/v1";
let spells = "/spells";
let houses = "/houses";
let specificHouse = "/houses/{houseId}";
let characters = "/characters";
let specificCharacter = "/characters/{characterId}";
let sortingHat = "/sortingHat";

let myAPIKey = "?key=$2a$10$j5FYUV4xdt/HSlFxfWGtYOTDcVSCd8koA6jJrLyhxpLFttyvQK4fy";