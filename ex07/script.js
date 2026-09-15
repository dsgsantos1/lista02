let click = 0;
const div = document.getElementById("sec");
const body = document.querySelector("body");
const h1 = document.querySelector("header");
const p = document.getElementById("tema");
const btn = document.getElementById("btn");

function mudar() {
    click++;

    if (click % 2 !== 0) {
        mudarParaDark();
    } else {
        mudarParaClaro();
    }

}

function mudarParaDark() {
    p.textContent = "ESCURO";
    body.style.backgroundColor = "gray";
    body.style.color = "rgb(250, 250, 0)";
    h1.style.color = "rgb(250, 250, 0)";
    div.style.backgroundColor = "black";
    div.style.color = "white"
    btn.style.border = "2px solid #ffffff"
    btn.style.color = "white";
    btn.style.backgroundColor = "black";
}

function mudarParaClaro() {
    p.textContent = "CLARO";
    body.style.backgroundColor = "rgb(174, 174, 255)";
    div.style.backgroundColor = "white";
    div.style.color = "black"
    h1.style.color = "";
    body.style.color = "white";
    btn.style.border = "2px solid #000000"
    btn.style.color = "black";
    btn.style.backgroundColor = "white";
}