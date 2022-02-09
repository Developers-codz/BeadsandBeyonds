const filterBtn = document.querySelector("#filter-btn")
const filterBody = document.querySelector("#filter-body")
filterBtn.addEventListener("click",()=>{
    filterBody.classList.toggle("show-filter-body")
})