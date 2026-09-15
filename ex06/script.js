let pontos = Number(document.getElementById("pontos").textContent);

function zerar(){
   document.getElementById("pontos").textContent = 0;
   pontos = 0;
}

function somar(){    
    pontos++;
    document.getElementById("pontos").textContent = pontos;    
}