let nav = document.querySelector("#nav");
let navLink = document.querySelectorAll(".nav-link");
let blackFridayNav = document.querySelector(".blackFridayNav")


window.addEventListener("scroll", ()=>{

    let scrolled = window.scrollY;
    
    if(scrolled > 0){
        
        nav.classList.add("nav-personale2");

        navLink.forEach((link)=>{
            link.style.color = "rgb(240, 240, 240)"; 
        // blackFridayNav.classList.add("blackFridayNav")
            link.addEventListener("mouseenter", ()=>{
                link.style.color = "rgb(255, 72, 0)";
            })
            link.addEventListener("mouseleave", ()=>{
                link.style.color = "rgb(240, 240, 240)"; 
            })
        })

        
        
    }else{
        nav.classList.remove("nav-personale2");
        
        navLink.forEach((link)=>{
            link.style.color = "rgb(0, 0, 0)";
        
            link.addEventListener("mouseenter", ()=>{
                link.style.color = "rgb(255, 72, 0)";
            })
            link.addEventListener("mouseleave", ()=>{
                link.style.color = "rgb(0, 0, 0)";
            })
        })
    }
})

let numero1 = document.querySelector("#numero1");
let numero2 = document.querySelector("#numero2");
let numero3 = document.querySelector("#numero3");

let contatore = 0;

// let intervallo = setInterval(()=>{
//     if(contatore<1000){
//         contatore++
//         numero1.innerHTML = contatore;
//     }else{
//         clearInterval( intervallo)
//     }

// }, 1000)

function creaConteggio(tempo, numeroFine, numeroIniziale){
    let intervallo = setInterval(()=>{
    if(contatore<numeroFine){
        contatore++
        numeroIniziale.innerHTML = contatore;
    }else{
        clearInterval(intervallo)
    }

}, tempo)

}

creaConteggio(1000, 100, numero1);
creaConteggio(1000, 100, numero2);
creaConteggio(1000, 100, numero3);

IntersectionObserver()