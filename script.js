document.addEventListener("DOMContentLoaded", function() {
    let contadorElemento = document.getElementById("contador");
    let botaoElemento = document.getElementById("botao");
    let zerarBotaoElemento = document.getElementById("zerarBotao");
    let contador = 0;

    botaoElemento.addEventListener("click", function() {
        contador++;
        contadorElemento.textContent = contador;
    });

    zerarBotaoElemento.addEventListener("click", function() {
        contador = 0;
        contadorElemento.textContent = contador;
    });
});
