const input = document.querySelector("#nome");
const nomes = document.querySelectorAll("li");

input.addEventListener("input", () => {
    const busca = input.value.toLowerCase();

    nomes.forEach((nome) => {
        const texto = nome.innerText.toLowerCase();

        if (texto.startsWith(busca)) {
            nome.style.display = "list-item";
        } else {
            nome.style.display = "none";
        }
    });
});