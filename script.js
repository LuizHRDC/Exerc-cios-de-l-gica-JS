// Exercício 1

var idade = 24;
document.write("Minha idade é " + idade + " anos" + "<br>" + "<br>");

// Exercício 2

var x = 2; 
var y = 2;

var z = x + y;

document.write("O resultado da soma de " + x + " e " + y + " é " + z + "<br>" + "<br>");

// Exercício 3

var totalCompra = 149.90;
var quantidadeParcelas = 2;
var valorParcela = totalCompra / quantidadeParcelas;

document.write("O valor total da compra foi R$ " + totalCompra + "<br>");
document.write("Forma de pagamento: " + quantidadeParcelas + "x de R$ " + valorParcela + "<br>" + "<br>");

// Exercício 4

var minutos = 120;
var segundos = minutos * 60;

document.write(minutos + " minutos equivale à " + segundos + " segundos!" + "<br>" + "<br>");

// Exercício 5

var nomeAluno = "Luiz";
var nota1 = 8.5;
var nota2 = 7.3;
var nota3 = 9.0;
var media = (nota1 + nota2 + nota3) / 3;

document.write("O aluno " + nomeAluno + " ficou com média " + media.toFixed(2) + "." + "<br>" + "<br>");

// Exercício 6

var A = 10;
var B = 20;

A = A + B;
B = A - B; 
A = A - B; 

document.write("O valor de A após a troca é " + A + "<br>");
document.write("O valor de B após a troca é " + B + "<br>" + "<br>");


// Exercício 7

var totalEleitores = 1000;
var votosBrancos = 50;
var votosNulos = 30;
var votosValidos = 920;

var percentualBrancos = (votosBrancos / totalEleitores) * 100;
var percentualNulos = (votosNulos / totalEleitores) * 100;
var percentualValidos = (votosValidos / totalEleitores) * 100;

document.write("Percentual de votos brancos: " + percentualBrancos.toFixed(2) + "%" + "<br>");
document.write("Percentual de votos nulos: " + percentualNulos.toFixed(2) + "%" + "<br>");
document.write("Percentual de votos válidos: " + percentualValidos.toFixed(2) + "%" + "<br>"+ "<br>");


// Exercício 8

var valor1 = 5;
var valor2 = 10;

document.write("Primeiro número:" + valor1 + "<br>" + "Segundo número:" + valor2 + "<br>");

if (valor1 === valor2) {
    document.write("Números iguais" + "<br>");
} else if (valor1 > valor2) {
    document.write("O primeiro número é maior" + "<br>");
} else {
    document.write("O segundo número é maior" + "<br>" + "<br>");
}


// Exercício 9

var quantidadeMacas = 12;
var precoMenosDe12 = 0.30;
var precoPeloMenos12 = 0.25;

var valorTotal;
if (quantidadeMacas < 12) {
    valorTotal = quantidadeMacas * precoMenosDe12;
} else {
    valorTotal = quantidadeMacas * precoPeloMenos12;
}

document.write("Quantidade de maçãs compradas:" + quantidadeMacas + "<br>" + "Valor total da compra: R$ " + valorTotal.toFixed(2) + "<br>" + "<br>");


// Exercício 10

var nome = "Pedro";
var idade = 22;
var anoAtual = 2024
var anoNascimento = anoAtual - idade;

document.write("Nome: " + nome + "<br>" + "Idade: " + idade + " anos" + "<br>" + "nasceu em " + anoNascimento + "<br>" + "<br>");


// Exercício 11

var numero = parseInt(prompt("Digite um número inteiro positivo:"));

if (isNaN(numero) || numero <= 0) {
    alert("Por favor, insira um número inteiro positivo válido.");
} else {
    if (numero % 2 === 0) {
        alert("Número é par!");
    } else {
        alert("Número é ímpar!");
    }
}

// Exercício 12

var anoAtual = new Date().getFullYear();
var anoNascimento = 2006;

var idade = anoAtual - anoNascimento;

var idadeMinimaParaVotar = 16;

if (idade >= idadeMinimaParaVotar) {
    document.write("A pessoa pode votar este ano.");
} else {
    document.write("A pessoa não pode votar este ano.");
}