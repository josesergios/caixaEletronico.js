//função callback sinistrona

const notas = [5.2, 6.5, 7.0, 9.0, 10, 11 ]

function verificaNota(dados){
    let a = [];
    for(let i = 0; i < dados.length; i++){
        if(dados[i] >= 7){
           let novaNota = dados[i]
           a.push(novaNota)
        }
    }
    return a
}

function exibeNota(valor){
    let a = verificaNota(valor);
    return console.log(a)
}

let notaFinal = exibeNota(notas);
