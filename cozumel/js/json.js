//Menu
$(document).ready(function(){
    $('#icon').click(function(){
      $('ul').toggleClass('show');
    });
  });
  

// MainWebsite

const requestURL = 'https://jimesen.github.io/documents/data2.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const rents = jsonObject['rents'];
        rents.forEach(rent => {
            if (rent.type == "Honda Metro Scooter" || rent.type == "Honda Pioneer ATV" || rent.type == "Jeep Wrangler - 2 door"){
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

                div.setAttribute('class', 'rentData')
                h2.textContent = rent.type;
                p1.textContent = rent.max;
                p2.textContent = "Year Founded: " + rent.rhd;
                p3.textContent = "Population: " + rent.rfd;
                p4.textContent = "Annual Rain Fall: " + rent.whd;
                image.setAttribute('src', `./images/${rent.photo}`);
                image.setAttribute('alt', rent.type);

                div.appendChild(h2);
                div.appendChild(p1);
                div.appendChild(p2);
                div.appendChild(p3);
                div.appendChild(p4);
                card.appendChild(div);
                card.appendChild(image);

                document.querySelector('div.Rent').appendChild(card);
            }
        });

    });