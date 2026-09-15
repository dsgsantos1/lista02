    function verificar() {

        const ano = Number(document.querySelector("#numero").value);

        if (!ano) {
            alert("Informe o ano de nascimento");
            return;
        }

        const sexo = selecionado();

        if (!sexo) {
            alert("Selecione o sexo");
            return;
        }

        const idade = calcularIdade(ano);

        const faixa = identificarFaixa(idade);

        if (!faixa) {
            alert("Ano inválido");
            return;
        }

        const imagem = obterImagem(sexo, faixa);

        limparResultado();

        exibirResultado(idade, faixa, imagem, sexo);

    }

    function calcularIdade(ano) {
        const anoAtual = new Date().getFullYear();
        const idade = anoAtual - ano;

        return idade;

    }

    function identificarFaixa(idade) {

        if (idade >= 0 && idade <= 2) {

            return "bb";

        } else if (idade >= 3 && idade <= 12) {

            return "crianca";

        } else if (idade >= 13 && idade <= 17) {

            return "adolescente";

        } else if (idade >= 18 && idade <= 59) {

            return "adulto";

        } else if (idade >= 60) {

            return "idoso";

        }

        return null;

    }

    function selecionado() {

        const radios = document.querySelectorAll(
            "input[name='sexo']"
        );

        for (const radio of radios) {
            if (radio.checked) return Number(radio.id);
        }

        return null;

    }

    function obterImagem(sexo, faixa) {

        let prefixo;

        if (sexo == 1) {

            prefixo = "M";

        } else {

            prefixo = "F";

        }

        const imagens = {

            bb: "bb.jpg",

            crianca: sexo == 1
                ? "crianca.png"
                : "crianca.jpg",

            adolescente: "adolescente.jpg",

            adulto: sexo == 1
                ? "adulto.jpg"
                : "adulto.jpg",

            idoso: "idoso.jpg"

        };

        return "./assents/" + prefixo + imagens[faixa];

    }

    function limparResultado() {

        const div = document.getElementById("sec03");

        div.innerHTML = `
            <p id="result"></p>
            <img id="imagem" src="" alt="">
        `;

    }

    function exibirResultado(idade, faixa, imagem, sexo) {

        const div = document.getElementById("sec03");

        const p = document.getElementById("result");

        const img = document.getElementById("imagem");

        let gen;

        if(sexo == 1) {
            gen = "Masculino";
        } else {
            gen = "Feminino";
        }

        div.style.display = "block";

        p.textContent = `Você tem ${idade} anos e selecionou ${gen}.`;

        img.src = imagem;

        img.alt = `Imagem de ${faixa}`;

    }