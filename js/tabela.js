
let titulos = document.querySelectorAll('[data-t]');
let tx = 3;
titulos.forEach(element => {
    // console.log(element.textContent)
    
    element.addEventListener('click', (ev) => {
        if (element.dataset.t != tx) {
            element.classList.toggle('nselected');
        }else{
            element.classList.toggle('nrotate');
        }
        tx = element.dataset.t;
        // console.log(tx);
        titulos.forEach(titulo => {
            if (titulo.dataset.t != tx) {
                if(!titulo.classList.contains('nselected')){
                    titulo.classList.toggle('nselected');
                }               
            }
        })
      });
});

//você que está vendo esse código, com certeza conhece um jeito melhor de fazer isso que fiz. Sinta-se a vontade para corrigir o código.
//única coisa que ele faz é tirar os elementos que não são os que você clicou.