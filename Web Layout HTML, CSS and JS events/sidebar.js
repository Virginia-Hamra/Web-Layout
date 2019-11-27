let btn = document.querySelector("button")
let nav = document.querySelector("nav")
let a = document.querySelectorAll("a")

 a.forEach((link)=> {
    link.addEventListener("click",(e)=>{
        e.preventDefault()
        console.log("Hola!")
    })
 })


 btn.addEventListener("click",()=>{
    nav.classList.toggle("abierto")
    btn.classList.toggle("contraste")
 })