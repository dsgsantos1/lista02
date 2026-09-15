let nomes = document.querySelectorAll("label");

function submeter(){
    
    let presentes = [];
    let ausentes = [];

    nomes.forEach(nome => {
        if(nome.querySelector("input").checked){
            presentes.push(nome.innerText);
        } else {
            ausentes.push(nome.innerText);
        }
    });
    
    // console.log(presentes.join(', '));
    // console.log(ausentes.join(', '));

    const tag_presentes = document.getElementById("presentes");
    const tag_ausentes = document.getElementById("ausentes");

    console.log(tag_ausentes, tag_presentes)

    tag_presentes.textContent = `Presentes: ${presentes}`;
    tag_presentes.style.color = "green"
    tag_ausentes.textContent = `Ausentes: ${ausentes}`;
    tag_ausentes.style.color = "red";

}

function inserir(presentes, ausentes){
    presentes = document.getElementById("presente");
    ausentes = document.getElementById("ausentes");

    presentes.forEach(nome => {
        presentes.innerText
    });

}