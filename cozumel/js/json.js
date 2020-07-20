//Menu
$(document).ready(function(){
    $('#icon').click(function(){
      $('ul').toggleClass('show');
    });
  });
  

// MainWebsite

const requestURL = 'https://jimesen.github.io/documents/data.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const rent = jsonObject['rent'];
        rent.forEach(town => {
            if (town.name == "Honda Metro Scooter" || town.name == "Honda Pioneer ATV" || town.name == "Jeep Wrangler - 2 door"){
                let card = document.createElement('section')
                let div = document.createElement('div')
                let h2 = document.createElement('h2');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let p4 = document.createElement('p');
                let image = document.createElement('img');
                let link = document.createElement('a');
                let textLink = document.createElement('p');

                div.setAttribute('class', 'citiesData')
                h2.textContent = town.name;
                p1.textContent = town.max;
                p2.textContent = "Year Founded: " + town.rhd;
                p3.textContent = "Population: " + town.rfd;
                p4.textContent = "Annual Rain Fall: " + town.wfd;
                image.setAttribute('src', `./images/${town.photo}`);
                image.setAttribute('alt', town.name);

                div.appendChild(h2);
                div.appendChild(p1);
                div.appendChild(p2);
                div.appendChild(p3);
                div.appendChild(p4);
                card.appendChild(div);
                card.appendChild(image);

                document.querySelector('div.Town').appendChild(card);
            }
        });

    });