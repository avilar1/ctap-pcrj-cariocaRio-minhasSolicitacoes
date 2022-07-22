const abuttonPop = document.querySelectorAll('[data-acc="abutton"]')
const container = document.querySelector('#container')

let control = 0

const pop = {
    "rowum": {
        "nso": "CID-REQ-2022/1211",
        "dso": "17/12/2022",
        "srv": "Instalação de caçamba",
        "org": "COMLURB",
        "uta": "30/12/2022",
        "sit": "Em andamento"
    },

    "rowdois": {
        "nso": "CID-REQ-2022/2874",
        "dso": "22/5/2022",
        "srv": "Remoção de entulho e bens inservíveis",
        "org": "COMLURB",
        "uta": "24/6/2022",
        "sit": "Indeferido"
    },
    "rowtres":{
        "nso": "CID-REQ-2022/2452",
        "dso": "20/5/2022",
        "srv": "Denunciar obra irregular",
        "org": "SECONSERVA",
        "uta": "22/6/2022",
        "sit": "CUMPRIR EXIGÊNCIA"
    },
    "rowquatro":{
        "nso": "CID-REQ-2022/2014",
        "dso": "07/5/2022",
        "srv": "Autorização para colocação de mesas e cadeiras em área pública",
        "org": "PGM",
        "uta": "22/5/2022",
        "sit": "Em andamento"
    },
    "rowcinco":{
        "nso": "CID-REQ-0000/0000",
        "dso": "14/5/2022",
        "srv": "Deferido",
        "org": "COMLURB",
        "uta": "20/5/2022",
        "sit": "Indeferido"
    }
}


tamanho = Object.keys(pop).length;

for (var prop in pop) {   
    // console.log(pop[prop].nso);
    let item = document.createElement('div');
    item.classList.add("card", "__card-linha");
    item.textContent = pop[prop].nso
    container.appendChild(item)
    console.log(item)
}

let item = document.createElement('div');

function myFunction(x) {

    if (x.matches) { // If media query matches
  
      if (control == 0) {
        abuttonPop[1].textContent = 'aa'
        control = 1;
      }
  
    } else {
      if (control == 1) {

        control = 0;
      }
      
    }
  }
  
  var x = window.matchMedia("(min-width: 780px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes