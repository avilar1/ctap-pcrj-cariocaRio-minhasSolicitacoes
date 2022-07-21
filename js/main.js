// REMOVER:

// accordionFlushExample
// accordionitem
// flush-headingOne
// accordionbutton
// flush-collapseOne
// accordionbody



const linha = document.querySelectorAll('[data-linha]')

const aflushD = document.querySelectorAll('[data-acc="aflush"]')
const aitemD = document.querySelectorAll('[data-acc="aitem"]')
const ahoneD = document.querySelectorAll('[data-acc="ahone"]')
const abuttonD = document.querySelectorAll('[data-acc="abutton"]')
const aconeD = document.querySelectorAll('[data-acc="acone"]')
const abodyD = document.querySelectorAll('[data-acc="abody"]')

const acardbD = document.querySelectorAll('[data-acc="acardb"]')



let m = 0;
linha.forEach((element) => {
  //$([aitemD])[0][0].dataset.acc='aa' //modelo
  $(ahoneD)[m].id = 'flush-heading' + m
  $(abuttonD)[m].dataset.bsTarget = '#flush-collapse' + m
  $(abuttonD)[m].setAttribute("aria-controls", 'flush-collapse' + m);
  $(aconeD)[m].id = 'flush-collapse' + m
  $(aconeD)[m].setAttribute("aria-labelledby", 'flush-heading' + m);
  aconeD[m].ariaLabelledby = 'flush-heading' + m
  m++
})

let controle = 0;

function myFunction(x) {
  if (x.matches) { // If media query matches

    if (controle == 0) {

      let n = 0
      linha.forEach((elemento) => {
        aflushD[n].parentElement.replaceChild(acardbD[n], aflushD[n])

        n++
      })

      controle = 1;
    }

  } else {
    if (controle == 1) {
      let n = 0
      linha.forEach((element) => {

        element.childNodes[n].parentNode.appendChild(aflushD[n])
        aflushD[n].appendChild(aitemD[n])
        aitemD[n].appendChild(ahoneD[n])
        aitemD[n].appendChild(abuttonD[n])
        aflushD[n].appendChild(aconeD[n])
        aconeD[n].appendChild(abodyD[n])
        abodyD[n].appendChild(acardbD[n])
        n++
      })
      controle = 0;
    }

  }
}

var x = window.matchMedia("(min-width: 780px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes



  //funcionava com 1 item apenas:
          // element.childNodes[0].parentNode.appendChild(aflush)
          // aflush.appendChild(aitem)
          // aitem.appendChild(ahone)
          // aitem.appendChild(abutton)
          // aflush.appendChild(acone)
          // acone.appendChild(abody)
          // abody.appendChild(cardb)
