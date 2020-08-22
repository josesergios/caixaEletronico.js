//const valor = 200
function Sacar(valor){
    let qtdNota = 0
    let qtdNota2 = 0
    let qtdNota3 = 0
    let nota = 50
    let nota2 = 20
    let nota3 = 10
    let total = valor
    while (total != 0) {
        if (total >= nota){
            total = total - nota
            qtdNota = qtdNota + 1
        }
        if( total < 50 && total >= 20){
            total = total - nota2
            qtdNota2 = qtdNota2 + 1
        }
        if( total < 20 && total >= 10) {
            total = total - nota3
            qtdNota3 = qtdNota3 + 1
        }
    }
    if (qtdNota > 0 ) {
        console.log(`Você está sacando ${qtdNota} notas de:  ${nota} referente a solicitação de saque no valor de: ${valor}`);
    }
    if(qtdNota2 > 0 ){
        console.log(`Você está sacando ${qtdNota2} notas de:  ${nota2} referente a solicitação de saque no valor de: ${valor}`);
    }
    if(qtdNota3 > 0 ){
        console.log(`Você está sacando ${qtdNota3} notas de:  ${nota3} referente a solicitação de saque no valor de: ${valor}`);
    }
}

let saque = Sacar(230);
