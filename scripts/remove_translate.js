window.onload = () => {
    
    let removeTranslateInterval = setInterval(() => {
        if (checkTranslateText())
        {
            clearInterval(removeTranslateInterval)
            removeTranslateText()
            console.log("tried removing")
        }
        else
        clearInterval(removeTranslateInterval)
    }, 50)
    removeTranslateText()
}

function checkTranslateText() {
    return document.evaluate("/html/body/div[1]/header/div/div/div/text()", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
}

function removeTranslateText() {
    document.evaluate("/html/body/div[1]/header/div/div/div/text()", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.remove()
}