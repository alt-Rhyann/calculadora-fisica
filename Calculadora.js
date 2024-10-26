function calcularFisica() {
    // Obtendo o tipo de cálculo selecionado
    var tipoCalculo = document.getElementById("tipoCalculo").value;
    var resultado = "";

    if (tipoCalculo === "velocidade") {
        var distancia = parseFloat(document.getElementById("ValorA").value);
        var tempo = parseFloat(document.getElementById("ValorB").value);

        if (tempo !== 0) {
            var velocidade = distancia / tempo;
            resultado = "Resultado: Velocidade média = " + velocidade + " m/s";
        } else {
            resultado = "Erro: O tempo não pode ser zero.";
        }

    } else if (tipoCalculo === "forca") {
        var massa = parseFloat(document.getElementById("ValorA").value);
        var aceleracao = parseFloat(document.getElementById("ValorB").value);

        var forca = massa * aceleracao;
        resultado = "Resultado: Força = " + forca + " N";

    } else if (tipoCalculo === "energia") {
        var massa = parseFloat(document.getElementById("ValorA").value);
        var velocidade = parseFloat(document.getElementById("ValorB").value);

        var energiaCinetica = 0.5 * massa * (velocidade ** 2);
        resultado = "Resultado: Energia Cinética = " + energiaCinetica + " J";

    } else {
        resultado = "Selecione uma fórmula válida.";
    }
    document.getElementById("resultado").innerHTML = resultado;
}