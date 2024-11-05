const boxes = document.querySelectorAll(".container");

window.addEventListener("scroll", () => {
    const windowInnerHeight = window.innerHeight; //window.innerHeight = 738px

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top // this method get the element position and size of the elemeents here from the top

        
        if(boxTop < windowInnerHeight){ // here when we scroll and the elennt comes from the bottom to top then the element position will decrease and 
                                        // a time it will rich less than innerHeight then then the event will occur and the element would be animated
            box.classList.add("show")
        }
        else{
            box.classList.remove("show")
        }
    })
})