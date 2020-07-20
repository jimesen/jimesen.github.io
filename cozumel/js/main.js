$(document).ready(function(){
  $('#icon').click(function(){
    $('ul').toggleClass('show');
  });
});



//WindChill Fish Haven Site
const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=20.51&lon=-86.95&units=imperial&APPID=5fbe37b45777a8e16856c8c4c241f6e7";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('current').innerHTML = jsObject.weather[0].description;
        document.getElementById('cTemp').textContent = jsObject.main.temp;
        document.getElementById('high').textContent = jsObject.main.temp_max;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('wS').textContent = jsObject.wind.speed;
        var w = parseFloat(document.getElementById("cTemp").innerHTML);
        var s = parseFloat(document.getElementById("wS").innerHTML);
        var wc = 35.74+(0.6215*w)-35.75*Math.pow(s,0.16)+0.4275*w*Math.pow(s,0.16);
        if (w < 51 && s > 3) {
            document.getElementById("wC").innerHTML = Math.round(wc);
        }
        else {
            document.getElementById("wC").innerHTML = "N/A";
        }
    });

//Forecast Code
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.51&lon=-86.95&units=imperial&APPID=5fbe37b45777a8e16856c8c4c241f6e7';
fetch(forecastURL)
    .then((response) => response.json())
    .then((jsonObject) => {

        const fiveDay = jsonObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let day = 1;

        fiveDay.forEach(forecast => {
            let date = forecast.dt_txt;
            let d = new Date(date).getDay();
            let f = forecast.main.temp;
            const icon = `http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;


            document.getElementById(`day${day}`).textContent = weekdays[d];
            document.getElementById(`forecast${day}`).textContent = Math.floor(f);
            document.getElementById(`imagesrc${day}`).setAttribute('alt', forecast.weather[0].description);
            document.getElementById(`imagesrc${day}`).setAttribute('src', icon);
            day++;
            d++;
        })
    });


