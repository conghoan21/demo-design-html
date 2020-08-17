function accept() {
    alert("<3");
}

function refuse() {
    let x = Math.round(Math.random() * window.innerWidth);
    let y = Math.round(Math.random() * window.innerHeight);
    let btnNo = document.getElementById("btnNo");
    btnNo.style.left = x + "px";
    btnNo.style.top = y +"px";
}