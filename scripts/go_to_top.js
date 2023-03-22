let goToTopBtn = document.querySelector("#go-to-top")

goToTopBtn.onclick = () =>
{
    window.scrollTo(0, 0)
}

window.onscroll = () =>
{
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight)
    {
        goToTopBtn.classList.remove("hidden")
    }
    else
    {
        goToTopBtn.classList.add("hidden")
    }
}