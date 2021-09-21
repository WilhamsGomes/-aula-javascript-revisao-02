/*3) Construa uma função que receba um número.
a) Se o número for  positivo, mostrar a informação de que ele é positivo.
b) Se o número for negativo, mostrar a informação de que ele é negativo.
*/

function receberNum(numero){
    if (numero >= 0){
        console.log("Número positivo")
    } else if (numero < 0 ){
        console.log("Número negativo")
    }
}

receberNum(-8)