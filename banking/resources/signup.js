let f=document.querySelector("form")
console.log(f);
f.addEventListener("submit", (e)=>{
    e.preventDefault();
    let ip=document.getElementById("un").value
    let password=document.getElementById("pass").value
    console.log("ip",password);
    console.log("ip",password);
window.sessionStorage.setItem("username",ip)
window.sessionStorage.setItem("password",password)
window.location.href="./login.html"
alert("Signup successful")
})

