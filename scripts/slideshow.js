const product_carousel = document.querySelector('#product-carousel')
const carousel = new bootstrap.Carousel(product_carousel)

let descriptions = [
    "Tennosafe V2",
    "Tennobike Model 3",
    "Tennoround Master"
]
let description = document.querySelector("#product-description")
let index = 0

function switchSlide() {
    carousel.next()
    if (index > 2)
        index = 0

    description.textContent = descriptions[index]
    index++
}

setInterval(() =>
{
    switchSlide()
}, 3000)

switchSlide()