var typed = new Typed(".text", {
    strings: ["Web", "Front-End.", " "],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

let btnMenu = document.getElementById("btn-menu")
let menu = document.getElementById("menu-mobile")
let overlay = document.getElementById("overlay-menu")

btnMenu.addEventListener('click', ()=>{
    menu.classList.add("abrir-menu")
})

menu.addEventListener('click', ()=>{
    menu.classList.remove("abrir-menu")
})
overlay.addEventListener('click', ()=>{
    menu.classList.remove("abrir-menu")
})

let btnMostrarProjetos = document.querySelector('.btn-mostrar-projetos')
let projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')

btnMostrarProjetos.addEventListener('click',()=>{
    mostrarProjetos()

})

function mostrarProjetos(){
    projetosInativos.forEach(projetoInativo =>{
        projetoInativo.classList.toggle('ativo')

    })
    btnMostrarProjetos.textContent = btnMostrarProjetos.textContent === "MOSTRAR MAIS" ? "MOSTRAR MENOS" : "MOSTRAR MAIS";

    
}



