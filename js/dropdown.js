let itens = document.querySelectorAll('.dropdown-item')
let selecione = document.querySelector('#selecione')

let mx = 0;
itens.forEach(element => {
  element.addEventListener('click', (ev) => {
    if (element.dataset.m != mx) {
      element.classList.toggle('dropdown-item-selecionado');
    } else {
      element.classList.toggle('dropdown-item-rotate');
    }

    mx = element.dataset.m;
    // selecione.text = element.textContent;
    itens.forEach(item => {
      if (item.dataset.m != mx) {
        if (item.classList.contains('dropdown-item-selecionado')) {
          item.classList.toggle('dropdown-item-selecionado');
        }
      }
    })
  })
})
