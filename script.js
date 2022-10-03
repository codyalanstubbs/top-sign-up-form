const pwd = document.querySelector(".pwd");
const pwdConfirm = document.querySelector(".pwdConfirm");
const errorMsg= document.querySelector(".error-msg");
const signupBtn = document.querySelector("#signup");

signupBtn.addEventListener("click", (e) => {
    checkpassword(pwd.value, pwdConfirm.value)
})
    

function checkpassword(p, pc) {
    if (p !== pc) {
        errorMsg.textContent = "*Passwords must match"
    } else {
        errorMsg.textContent = ''
    };
}