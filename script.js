const pwd = document.querySelector(".pwd");
const pwdConfirm = document.querySelector(".pwdConfirm");
const errorMsg= document.querySelector(".msg");
const signupBtn = document.querySelector("#signup");

signupBtn.addEventListener("click", (e) => {
    checkpassword(pwd.value, pwdConfirm.value)
})
    

function checkpassword(p, pc) {
    if (p !== pc) {
        pwd.classList.add("error");
        pwdConfirm.classList.add("error");
        errorMsg.classList.add("error");
    }
}