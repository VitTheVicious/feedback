function pegarNota() {
    let nota = localStorage.getItem("nota")

    let paragrafroNota = document.querySelector(".paragrafo_nota")

    paragrafroNota.innerHTML = `Você selecionou ${nota} de 5`
}

pegarNota()