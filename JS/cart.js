const couponBtn = document.querySelector("#coupon-btn")
const body = document.querySelector("#body-wrapper");
const modalCloser = document.querySelector("#modal-closer-btn")
const couponModal = document.querySelector("#coupon-popup")

couponBtn.addEventListener("click",()=>{
    body.style.opacity = ".3"
    couponModal.style.display = "block"
    
})
modalCloser.addEventListener("click",()=>{
    couponModal.style.display = "none"
    body.style.opacity="1"
})