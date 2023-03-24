function eventChiSiamo(){
    let text = document.querySelector(".chi-siamo-text")
    text.classList.toggle("fadeout")
    text.hidden = !text.hasAttribute("hidden")
    text.classList.toggle("fadein")
    
}