const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=5fbe37b45777a8e16856c8c4c241f6e7";
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
