//const valor = 200
function Sacar(valor){
    function calc1(valor){
        rw
        let total = valor  
        let nota = 50
        let qtdNota = 0
        if (total >= nota){
            total = total - nota
            qtdNota = qtdNota + 1
        }
        console.log(`Você está sacando ${qtdNota} notas de:  ${nota} referente a solicitação de saque no valor de: ${valor}`);   
        return calc2(total)
    }
 
    function calc2(valor){
        let qtdNota2 = 0
        let nota2 = 20
        if( total < 50 && total > 20){
         //nota = 20
            total = total - nota2
            qtdNota2 = qtdNota2 + 1
     }
     return console.log(`Você está sacando ${qtdNota2} notas de:  ${nota2} referente a solicitação de saque no valor de: ${valor}` + calc3(total));
     }
     
     function calc3(valor){
         //let qtdNota3 = 0
         let nota3 = 10
         if( total <= 20) {
            // nota = 10
             total = total - nota3
             let qtdNota3 = qtdNota3 + 1
         }
         console.log(`Você está sacando ${qtdNota3} notas de:  ${nota3} referente a solicitação de saque no valor de: ${valor}`);
         return ("Será que chega aqui?")
 
         // if(total > 0 && total <= 10) {
     }
         //     nota = 10
         //     total = total - nota
         //     qtdNota2 = qtdNota2 + 1
         //     console.log(`Você está sacando ${qtdNota2} notas de:  ${nota} referente a solicitação de saque no valor de: ${valor}`);
         // }
         // if(total <= 9) {
         //     console.log("Valor indisponível para saque")
         //     break
         // }
     //}
     
     
         
     // if(total > 0) {
     //     break
     //         console.log("Valor indisponível para saque")
     //     }
 }
 
 let saque = Sacar(120);
 