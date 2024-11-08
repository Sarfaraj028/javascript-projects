let bodyEle = document.querySelector("body")

let spanEle = document.querySelector("span")

bodyEle.addEventListener("mousemove", (event)=>{
    const posX = event.offsetX;
    const posY = event.offsetY;
    
    spanEle.classList.add("showSpan")
    spanEle.style.left = posX + "px"
    spanEle.style.top = posY + "px"
    bodyEle.appendChild(spanEle)

})

bodyEle.addEventListener("mouseout", () => {
    spanEle.classList.remove("showSpan")
})