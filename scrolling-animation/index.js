const boxes = document.querySelectorAll(".container");

window.addEventListener("scroll", () => {
    const windowInnerHeight = window.innerHeight;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        
        if(boxTop < windowInnerHeight){
            box.classList.add("show")
        }
        else{
            box.classList.remove("show")
        }
    })
})