const passInput = document.querySelector("#sign-pass");
const eyeBtn = document.querySelector("#eye-btn");

eyeBtn.addEventListener("click", () => {
  const type =
    passInput.getAttribute("type") === "password" ? "text" : "password";
  passInput.setAttribute("type", type);
});
const passCheckerArea = document.querySelector("#pass-checker-area");

const passInput2 = document.querySelector("#sign-pass-confirm");

passInput2.addEventListener("input", () => {
  passCheckerArea.style.visibility = "visible";
  if (passInput.value != passInput2.value)
    passCheckerArea.innerText = "Password do not match";
  else passCheckerArea.innerText = "";
});
