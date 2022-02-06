var toggleSearchBtn = document.querySelector("#toggle-search")
var inputWrapperContainer = document.querySelector("#container_input_wrapper")
toggleSearchBtn.addEventListener("click",()=>{
    inputWrapperContainer.classList.toggle("search-active")
})

var searchClose = document.querySelector("#search-close")
searchClose.addEventListener("click",()=>{
    inputWrapperContainer.classList.remove("search-active")
})

// OWL CAROUSEL

const carouselButtons = document.querySelectorAll("[carousel-btn]")

carouselButtons.forEach(button =>{
    button.addEventListener("click",()=>{
    const offset = button.dataset.carouselButton  === "next" ? 1:-1 
    const slides = button.closest("[data-carousel]").querySelector("[data-slides]")
    const activeSlide = slides.querySelector("[data-active]")

    let newIndex = [...slides.children].indexOf(activeSlide) + offset
        
    if(newIndex < 0 )
        newIndex = slides.children.length - 1
    if(newIndex >= slides.children.length) 
        newIndex = 0
 
    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active

    })
})