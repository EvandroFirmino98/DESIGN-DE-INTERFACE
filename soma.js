function calcular(){
    let nome = document.getElementById("nome").value;
    let salario = parseFloat(document.getElementById("salario").value);
    let Resultado = document.getElementById("Resultado");
    Resultado.value = nome + " Seu Salário é " + salario * 1.1
}