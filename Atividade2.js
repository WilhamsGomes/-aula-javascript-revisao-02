/*2) Criar um bloco de código, onde deverá ter três variáveis do tipo inteiro: a, b, c. Verifique se:
a) Se todos os lados são iguais, o triângulo será equilátero;
b) Se todos os lados forem diferentes, será escaleno;
c) Se nenhuma das duas condições anteriores for atendida, será isósceles. */

var a = 2;
var b = 3;
var c = 3;

if ( a == b && a == c && b == c){
    console.log("triângulo equilátero")
} else if ( a != b && a != c && b != c) {
    console.log("triangulo escaleno")
} else {
    console.log("triângulo isósceles")
}