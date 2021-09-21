/* 1) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda possui, além de carros hatch, sedans, motocicletas e caminhonetes.

a) Caso o comprador queira o hatch, retorne: “Compra efetuada com sucesso”.

b) Nas outras opções, retorne: “Tem certeza que não prefere este modelo?”.

c) Caso seja especificado um modelo que não está disponível, retorne no console: “Não trabalhamos com este tipo de automóvel aqui”.
 */

var compraCarro = "hatch";

if (compraCarro == "hatch"){
    console.log("Compra efetuada com sucesso")
} else if (compraCarro == "sedans" || compraCarro == "motocicletas" || compraCarro == "caminhonetes"){
    console.log("Tem certeza que não prefere este modelo?")
} else {
    console.log("Não trabalhamos com este tipo de automóvel aqui")
}