function calcular(){
    let valor1 = parseInt(document.getElementById("valor1").value);
    let valor2 = parseInt(document.getElementById("valor2").value);
    let valor3 = parseInt(document.getElementById("valor3").value);
    let Resultado = document.getElementById("Resultado");
    Resultado.value = (valor1 + valor2 + valor3) / 3;
}