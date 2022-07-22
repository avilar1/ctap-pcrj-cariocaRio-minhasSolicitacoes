let linhaPOP = document.querySelectorAll('[data-linha]')

let aflushPOP = document.querySelectorAll('[data-acc="aflush"]')
let aitemPOP = document.querySelectorAll('[data-acc="aitem"]')
let ahonePOP = document.querySelectorAll('[data-acc="ahone"]')
let abuttonPOP = document.querySelectorAll('[data-acc="abutton"]')
let aconePOP = document.querySelectorAll('[data-acc="acone"]')
let abodyPOP = document.querySelectorAll('[data-acc="abody"]')

let acardbPOP = document.querySelectorAll('[data-acc="acardb"]')

let container = document.querySelector('#container')

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

  container.appendChild(linhaPOP[0])
  linhaPOP[0].appendChild(aflushPOP[0])
  aflushPOP[0].appendChild(aitemPOP[0])
  aitemPOP[0].appendChild(ahonePOP[0])
  aitemPOP[0].appendChild(abuttonPOP[0])
  aflushPOP[0].appendChild(aconePOP[0])
  aconePOP[0].appendChild(abodyPOP[0])
  abodyPOP[0].appendChild(acardbPOP[0])

  tamanho = Object.keys(pop).length;

for (let i = 0; i < tamanho; i++) {
  linhaPOP = document.querySelectorAll('[data-linha]')
  abuttonPOP = document.querySelectorAll('[data-acc="abutton"]')
  console.log(i)
  linhaPOP[i].insertAdjacentElement("afterend", linhaPOP[i].cloneNode(true))
  abuttonPOP[i].textContent = i
  
}

linhaPOP = document.querySelectorAll('[data-linha]')

aflushPOP = document.querySelectorAll('[data-acc="aflush"]')
aitemPOP = document.querySelectorAll('[data-acc="aitem"]')
ahonePOP = document.querySelectorAll('[data-acc="ahone"]')
abuttonPOP = document.querySelectorAll('[data-acc="abutton"]')
aconePOP = document.querySelectorAll('[data-acc="acone"]')
abodyPOP = document.querySelectorAll('[data-acc="abody"]')

acardbPOP = document.querySelectorAll('[data-acc="acardb"]')

container = document.querySelector('#container')

  linhaPOP = document.querySelectorAll('[data-linha]')
  linhaPOP[tamanho].style.display='none'


// linhaPOP[0].insertAdjacentElement("afterend", linhaPOP[0].cloneNode(true)) funciona quando já tem um


 let n = 0;
 for (var prop in pop) {
          abuttonPOP[n].textContent = pop[prop].srv
         n++

 }







    // console.log(pop[prop].nso);
    // let item = document.createElement('div');
    // item.classList.add("card", "__card-linha");
    // item.textContent = pop[prop].nso
    // container.appendChild(item)
    // console.log(item)

            //   container.appendChild(linhaPOP[n])
        //   linhaPOP[n].appendChild(aflushPOP[n])
        //   aflushPOP[n].appendChild(aitemPOP[n])
        //   aitemPOP[n].appendChild(ahonePOP[n])
        //   aitemPOP[n].appendChild(abuttonPOP[n])
        //   aflushPOP[n].appendChild(aconePOP[n])
        //   aconePOP[n].appendChild(abodyPOP[n])
        //   abodyPOP[n].appendChild(acardbPOP[n])
        // n++