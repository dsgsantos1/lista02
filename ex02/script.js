function verificar (){
    const numero = Number(document.getElementById("numero").value);
   
    const div = document.getElementById("sec03");
    div.innerHTML = "";
    div.style.display = "block";
    const h2 = document.createElement("h2");
    h2.textContent = `Tabuada do número ${numero}`;
    div.appendChild(h2)

    for(let i = 0; i <11; i++){
        const p = document.createElement("p");
        p.textContent = `${i} x ${numero} = ${i*numero}`;
        div.appendChild(p);
    }

}

// function calcular (numero){
//     num = [];
//     for (let i = 0; i < 11; i++){
//         num.push(i*numero); 
//     }
//     return num;
// }