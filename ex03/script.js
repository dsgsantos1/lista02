const input = document.querySelector("#nome");
const nomes = document.querySelectorAll("li");

input.addEventListener("input", () => {
    nomes.forEach((nome) => {

        if (input.value.toLowerCase() === nome.innerText.toLowerCase()) {
            nome.style.color = "red";
        } else {
            nome.style.color = "";
        }

    });
});