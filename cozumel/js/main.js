//Menu Escondido
$(document).ready(function(){
  $('#icon').click(function(){
    $('ul').toggleClass('show');
  });
});



//Tabla del estado del tiempo
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

//Tabla del forecast de 5 dias
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


//Reservations Website
const requestURL = 'https://jimesen.github.io/documents/data2.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const rents = jsonObject['rents'];
        rents.forEach(rent => {
            if (rent.type == "Honda Metro Scooter" || rent.type == "Honda Dio Scooter" || rent.type == "Honda PCX150 Scooter" || rent.type == "Honda Pioneer ATV" || rent.type == "Jeep Wrangler - 4 door with a/c"  || rent.type == "Jeep Wrangler - 2 door"){
                let card = document.createElement('section')
                let div = document.createElement('div')
                let h2 = document.createElement('h2');
                let p1 = document.createElement('p');
                let p2 = document.createElement('h3');
                let p3 = document.createElement('p');
                let p4 = document.createElement('p');
                let p5 = document.createElement('h3');
                let p6 = document.createElement('p');
                let p7 = document.createElement('p');
                let image = document.createElement('img');
                let link = document.createElement('a');
                let textLink = document.createElement('p');

                div.setAttribute('class', 'rentData')
                h2.textContent = rent.type;
                p1.textContent = "Max. Persons: " + rent.max;
                p2.textContent = "Price under Reservation"
                p3.textContent = "Half Day (3hrs): " + rent.rhd;
                p4.textContent = "Full Day: " + rent.rfd;
                p5.textContent = "Walk-In Prices"
                p6.textContent = "Half Day (3hrs): " + rent.whd;
                p7.textContent = "Full Day: " + rent.wfd;
                image.setAttribute('src', `./images/${rent.photo}`);
                image.setAttribute('alt', rent.type);

                div.appendChild(h2);
                div.appendChild(p1);
                div.appendChild(p2);
                div.appendChild(p3);
                div.appendChild(p4);
                div.appendChild(p5);
                div.appendChild(p6);
                div.appendChild(p7);
                card.appendChild(div);
                card.appendChild(image);

                document.querySelector('div.Rent').appendChild(card);
            }
        });

    });