// OMDB MOVIE API KEY
// OPEN WEATHER API KEY    9e2e79e449de63b165683ac1fcb83225

let searchText;

const $location = $("#location");
const $temperature = $("#temperature");
const $feelslike = $("#feelslike");
const $weather = $("#weather");
const $longitudeLatitude = $("#longitudeLatitude");

function handleGetData(event) {

  event.preventDefault();
  searchText = $("#searchForm").val();

  $.ajax({
      url: `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=9e2e79e449de63b165683ac1fcb83225&units=imperial`,
    })
    .then(

      function (returnedData) {

        //movieData = data;
        $location.text(returnedData["name"]);
        $temperature.text(returnedData["main"]["temp"]);
        $feelslike.text(returnedData["main"]["feels_like"]);

        $weather.text(returnedData["weather"][0]["description"]);

        $longitudeLatitude.text(returnedData["coord"]["lon"] + ", " + returnedData["coord"]["lat"]);
        //document.getElementById("longitudeLatitude").innerText(returnedData["coord"]["lat"]);

        $('body').append("temp max for tori is " + returnedData["main"]["temp_max"]);
      },






      function (error) {
        console.log("bad request: ", error);
      }




    );
}








$("form").on('submit', handleGetData);