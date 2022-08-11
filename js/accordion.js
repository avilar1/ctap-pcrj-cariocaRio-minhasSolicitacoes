const accSit = document.querySelectorAll("[data-acc=asit]")
const abuttonACC = document.querySelectorAll('[data-acc="abutton"]')

let cliquei = false;

abuttonACC.forEach((e) => {
    
    e.addEventListener('click', function() {
        clicado()
        let x = e.dataset.id;

        console.log(x)
        if(cliquei) {
            accSit[x-1].style.backgroundColor="#f5f5f5";
            console.log("red")            
        }
        else{
            accSit[x-1].style.backgroundColor="";
            console.log("none")
        }
        
    })
})

function clicado() {
    cliquei = !cliquei
}