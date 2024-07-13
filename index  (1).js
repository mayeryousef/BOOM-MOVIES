let posters = document.querySelectorAll("img");
let ways = document.querySelectorAll("tckphoto");
posters.forEach((img) => {
    img.addEventListener("click",(e)=>{
    document.getElementById("mov").style.opacity="40%";
    });
});
posters.forEach((img) => {
    img.addEventListener("click",(e)=>{
    document.getElementById("bo").style.display="block";
    });
});
posters.forEach((div) => {
    div.addEventListener("click",(e)=>{
    document.getElementById("bo").style.opacity="100%";
    });
});
document.getElementById("book").onclick=function(){
    document.getElementById("bo").style.display="none";
    document.getElementById("mov").style.opacity="100%";
}
document.getElementById("tckphoto1").onclick=function(e){
    document.getElementById("tckphoto1").classList.add("waychosen")
    document.getElementById("tckphoto2").classList.remove("waychosen")
    document.getElementById("tckphoto3").classList.remove("waychosen")
    document.getElementById("tckphoto4").classList.remove("waychosen")
}
document.getElementById("tckphoto2").onclick=function(e){
    document.getElementById("tckphoto2").classList.add("waychosen")
    document.getElementById("tckphoto1").classList.remove("waychosen")
    document.getElementById("tckphoto3").classList.remove("waychosen")
    document.getElementById("tckphoto4").classList.remove("waychosen")
}
document.getElementById("tckphoto3").onclick=function(e){
    document.getElementById("tckphoto3").classList.add("waychosen")
    document.getElementById("tckphoto1").classList.remove("waychosen")
    document.getElementById("tckphoto2").classList.remove("waychosen")
    document.getElementById("tckphoto4").classList.remove("waychosen")
}
document.getElementById("tckphoto4").onclick=function(e){
    document.getElementById("tckphoto4").classList.add("waychosen")
    document.getElementById("tckphoto1").classList.remove("waychosen")
    document.getElementById("tckphoto2").classList.remove("waychosen")
    document.getElementById("tckphoto3").classList.remove("waychosen")
}
