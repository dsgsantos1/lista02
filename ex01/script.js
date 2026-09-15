const scr01 = "./assents/sirene.webp";
const scr03 = "./assents/ok.webp";

function verificar() {
    const velocidade = Number(
        document.getElementById("velocidade").value
    );

    const div = document.getElementById("sec03");

    const antigo = div.querySelector("p");

    if (antigo) {
        antigo.remove();
    }

    const p = document.createElement("p");

    if (velocidade > 100) {
        document.getElementById("resultado").src = scr01;

        p.textContent = "Alerta de resenha! Você foi multado";

    } else {
        document.getElementById("resultado").src = scr03;

        p.textContent = "Prossiga, cowboy";
    }
    div.appendChild(p);
}