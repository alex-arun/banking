// alert("Your Successfully signup ")
let f=document.querySelector("form")
console.log(f);
f.addEventListener("submit", (e)=>{
    e.preventDefault();
    let ip=document.getElementById("un").value
    let password=document.getElementById("pass").value
    let us=window.sessionStorage.getItem("username",ip)
    let ps=window.sessionStorage.getItem("password",password)
    if(ip==us && password==ps){
        // setTimeout(()=>{
        //     window.location.href="/reso/lod.html"
        // },3)
    window.location.href="./main.html"
    alert("your are Logged in!")
    }else{
        alert("User Name or Password is wrong!")
    }

    })
    
    