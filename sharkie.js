const catoOfTheDay = document.getElementById("catt");
const cat2 = document.getElementById("catt2");
const cat3 = document.getElementById("catt3");
const cat4 = document.getElementById("catt4");
const cat5 = document.getElementById("catt5");
const cat6 = document.getElementById("catt6");
const cat7 = document.getElementById("catt7");
const cat8 = document.getElementById("catt8");
const cat9 = document.getElementById("catt9");
const cat10 = document.getElementById("catt10");



fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    .then(response => response.json())
    .then(data => {
        catoOfTheDay.src = data[0].url;
        cat2.src = data[1].url;
        cat3.src = data[2].url;
        cat4.src = data[3].url;
        cat5.src = data[4].url;
        cat6.src = data[5].url;
        cat7.src = data[6].url;
        cat8.src = data[7].url;
        cat9.src = data[8].url;
        cat10.src = data[9].url;
    })
    .catch(error => console.log(error));

function meowClick(){
                var sound = document.getElementById("meowClicky");
                sound.play();
            }