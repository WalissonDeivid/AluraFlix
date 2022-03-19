function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    if (filmeFavorito.endsWith(".jpg")) {
        var elementoFilmeFavorito = "<img src=" + filmeFavorito + ">"
        var elementolistaFilmes = document.getElementById("listaFilmes");
        elementolistaFilmes.innerHTML =
        elementolistaFilmes.innerHTML + elementoFilmeFavorito;
    } else {
        console.error("Algo deu errado")
    }

    document.getElementById("filme").value = ""
}