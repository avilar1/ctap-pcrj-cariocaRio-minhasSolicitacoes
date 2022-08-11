
let container = document.querySelector('#container')
let linhaPOP = document.querySelectorAll('[data-linha]')

let aflushPOP = document.querySelectorAll('[data-acc="aflush"]')
let aitemPOP = document.querySelectorAll('[data-acc="aitem"]')
let ahonePOP = document.querySelectorAll('[data-acc="ahone"]')
let abuttonPOP = document.querySelectorAll('[data-acc="abutton"]')
let aconePOP = document.querySelectorAll('[data-acc="acone"]')
let abodyPOP = document.querySelectorAll('[data-acc="abody"]')

let acardbPOP = document.querySelectorAll('[data-acc="acardb"]')


//excluir depois ou alterar
let asit = document.querySelectorAll('[data-acc="asit"]')

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
    "rowtres": {
        "nso": "CID-REQ-2022/2452",
        "dso": "20/5/2022",
        "srv": "Denunciar obra irregular",
        "org": "SECONSERVA",
        "uta": "22/6/2022",
        "sit": "CUMPRIR EXIGÊNCIA"
    },
    "rowquatro": {
        "nso": "CID-REQ-2022/2014",
        "dso": "07/5/2022",
        "srv": "Autorização para colocação de mesas e cadeiras em área pública",
        "org": "PGM",
        "uta": "22/5/2022",
        "sit": "Em andamento"
    },
    "rowcinco": {
        "nso": "CID-REQ-0000/0000",
        "dso": "14/5/2022",
        "srv": "Qualquer Coisa",
        "org": "COMLURB",
        "uta": "20/5/2022",
        "sit": "Deferido"
    },
    "rxx": {
        "nso": "CID-REQ-0000/0000",
        "dso": "00/00/2022",
        "srv": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et tortor ac eros aliquam lacinia. Cras semper tellus sed tortor imperdiet viverra. Maecenas feugiat laoreet ipsum. Pellentesque euismod commodo quam, a pellentesque ante euismod nec. Etiam at est et elit commodo pellentesque eu vel dui. Donec at enim tortor. Nam ac convallis sem. Fusce dignissim justo ante, eget placerat nisi pretium et. Maecenas interdum tortor quam, id pellentesque felis sagittis et. Duis viverra tellus varius, lacinia turpis ut, tincidunt erat. Phasellus porttitor tellus id turpis cursus, eget condimentum ante convallis. Cras lobortis imperdiet enim, porttitor mattis ante pulvinar id. Vestibulum dignissim leo eu ligula blandit, nec dictum erat ultricies. Nam in massa sit amet justo egestas tempus. Donec a porttitor nisi.",
        "org": "NOTHING",
        "uta": "00/00/2022",
        "sit": "Indeferido"
    }
}

container.appendChild(linhaPOP[0])
linhaPOP[0].appendChild(aflushPOP[0])
aflushPOP[0].appendChild(aitemPOP[0])
aitemPOP[0].appendChild(ahonePOP[0])
aitemPOP[0].appendChild(abuttonPOP[0])
aitemPOP[0].appendChild(asit[0])
aflushPOP[0].appendChild(aconePOP[0])
aconePOP[0].appendChild(abodyPOP[0])
abodyPOP[0].appendChild(acardbPOP[0])

tamanho = Object.keys(pop).length;

for (let i = 0; i < tamanho; i++) {
    linhaPOP = document.querySelectorAll('[data-linha]')
    abuttonPOP = document.querySelectorAll('[data-acc="abutton"]')
    console.log(linhaPOP[i])
    linhaPOP[i].insertAdjacentElement("afterend", linhaPOP[i].cloneNode(true))
    abuttonPOP[i].textContent = i

}


//titulos não mudam

const acardinso = document.querySelectorAll('[data-acc="acardinso"]')
const acardidso = document.querySelectorAll('[data-acc="acardidso"]')
const acardisrv = document.querySelectorAll('[data-acc="acardisrv"]')
const acardiorg = document.querySelectorAll('[data-acc="acardiorg"]')
const acardiuta = document.querySelectorAll('[data-acc="acardiuta"]')
const acardisit = document.querySelectorAll('[data-acc="acardisit"]')

// linhaPOP[0].insertAdjacentElement("afterend", linhaPOP[0].cloneNode(true)) funciona quando já tem um


let n = 0;
let k = 0;
for (var prop in pop) {
    abuttonPOP[n].textContent = pop[prop].srv
    acardinso[n].textContent = pop[prop].nso
    acardisrv[n].textContent = pop[prop].srv
    acardidso[n].textContent = pop[prop].dso
    acardiorg[n].textContent = pop[prop].org
    acardiuta[n].textContent = pop[prop].uta


    let sit = (pop[prop].sit == "Indeferido") ? (acardisit[k].classList.add("btn", "btn-outline-danger", "btn-sm", "__botao-sit"), console.log(100), acardisit[k].style.pointerEvents="none", acardisit[k].setAttribute("disabled", "disabled")) :
        (pop[prop].sit == "Deferido") ? (acardisit[k].classList.add("btn", "btn-outline-success", "btn-sm", "__botao-sit"), console.log(200), acardisit[k].style.pointerEvents="none", acardisit[k].setAttribute("disabled", "disabled") ) :
            (pop[prop].sit == "Em andamento") ?(acardisit[k].classList.add("btn", "btn-outline-primary", "btn-sm", "__botao-sit"), console.log(300), acardisit[k].style.pointerEvents="none", acardisit[k].setAttribute("disabled", "disabled")) :
                
                (pop[prop].sit == "CUMPRIR EXIGÊNCIA") ? (acardisit[k].classList.add("btn", "btn-success", "btn-sm", "__botao-sit"), console.log(400)) : 
                console.log("nenhum!");
                
    let sit2 = (pop[prop].sit == "Indeferido") ? (acardisit[k+1].classList.add("btn", "btn-outline-danger", "btn-sm", "__botao-sit"), console.log(1000), acardisit[k+1].style.pointerEvents="none", acardisit[k+1].setAttribute("disabled", "disabled")) :
        (pop[prop].sit == "Deferido") ? (acardisit[k+1].classList.add("btn", "btn-outline-success", "btn-sm", "__botao-sit"), console.log(2000), acardisit[k+1].style.pointerEvents="none", acardisit[k+1].setAttribute("disabled", "disabled") ) :
            (pop[prop].sit == "Em andamento") ?(acardisit[k+1].classList.add("btn", "btn-outline-primary", "btn-sm", "__botao-sit"), console.log(3000), acardisit[k+1].style.pointerEvents="none", acardisit[k+1].setAttribute("disabled", "disabled")) :
            
                (pop[prop].sit == "CUMPRIR EXIGÊNCIA") ? (acardisit[k+1].classList.add("btn", "btn-success", "btn-sm", "__botao-sit"), console.log(4000)) : 
            console.log("nenhum Mesmo!");


    acardisit[k].textContent = pop[prop].sit
    acardisit[k+1].textContent = pop[prop].sit
    k = k+2
    n++

}

//yago, isso veio do main.js, ajeitar, não precisa dessas variáveis redeclaradas

//tentar mudar a visibilidade só com css

const tbody = document.querySelector('[data-tbody]')
const linha = document.querySelectorAll('[data-linha]')

const aflushD = document.querySelectorAll('[data-acc="aflush"]')
const aitemD = document.querySelectorAll('[data-acc="aitem"]')
const ahoneD = document.querySelectorAll('[data-acc="ahone"]')
const abuttonD = document.querySelectorAll('[data-acc="abutton"]')
const aconeD = document.querySelectorAll('[data-acc="acone"]')
const abodyD = document.querySelectorAll('[data-acc="abody"]')

const acardbD = document.querySelectorAll('[data-acc="acardb"]')

const asitT = document.querySelectorAll('[data-acc="asit"]')


let m = 0;
linha.forEach((element) => {
  tbody.appendChild(element);
  //$([aitemD])[0][0].dataset.acc='aa' //modelo
  $(ahoneD)[m].id = 'flush-heading' + m;
  $(abuttonD)[m].dataset.bsTarget = '#flush-collapse' + m;
  $(abuttonD)[m].setAttribute("aria-controls", 'flush-collapse' + m);
  $(abuttonD)[m].dataset.id = m;
  $(aconeD)[m].id = 'flush-collapse' + m;
  $(aconeD)[m].setAttribute("aria-labelledby", 'flush-heading' + m);
  aconeD[m].ariaLabelledby = 'flush-heading' + m;
  $(asitT)[m].id = m;
  m++


})


// tbody.appendChild(linha[0]);



