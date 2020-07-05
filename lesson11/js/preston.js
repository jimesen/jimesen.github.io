 // WindChill Preston Site
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
 
  // Preston Events  
     let townName = "Preston";
     const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
     fetch(requestURL)
         .then(function(response) {
             return response.json();
         })
         .then(function(jsonObject) {
             const towns = jsonObject['towns'];
             towns.forEach(town => {
                 if (town.name == townName) {
                     const events = town.events;
                     let div1 = document.createElement('div');
                     let h2 = document.createElement('h2');
                     let hr = document.createElement('hr');
                     h2.innerHTML = `${town.name} Events:`;
                     div1.appendChild(h2);
                     div1.appendChild(hr);
                     events.forEach(event => {
                         let p =document.createElement('p');
                         p.textContent = event;
                         div1.appendChild(p);
                     });
                     document.getElementById('cityevents').appendChild(div1);
                 }
             });
         });

// Forecast Preston Site
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=5fbe37b45777a8e16856c8c4c241f6e7";
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