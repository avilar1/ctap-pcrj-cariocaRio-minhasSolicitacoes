// REMOVER:

// accordionFlushExample
// accordionitem
// flush-headingOne
// accordionbutton
// flush-collapseOne
// accordionbody

//usar replace

const linha = document.querySelector('[data-linha]')

const aflush = document.querySelector('#accordionFlushExample')
const aitem = document.querySelector('#accordionitem')
const ahone = document.querySelector('#flush-headingOne')
const abutton = document.querySelector('#accordionbutton')
const acone = document.querySelector('#flush-collapseOne')
const abody = document.querySelector('#accordionbody')


function myFunction(x) {
    if (x.matches) { // If media query matches
      //aitem.removeChild(ahone)

      
    } else {
      aitem.appendChild(ahone)
    }
  }
  
  var x = window.matchMedia("(min-width: 780px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes