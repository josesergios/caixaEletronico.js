//novo exemplo de função utilizando promise

function calcularMedia(nota1, nota2){
    
    let media = ((nota1 + nota2)/2)
    return new Promise(function(resolve, reject){
        setTimeout(function callback(){
            if(media < 0){
                return reject("Sem nota")
        }
                return resolve(media) 
    }, 1000)
})
}

let mediaFinal = calcularMedia(5, 5).then(function(res) {
    console.log(res)
}).catch(function(err){
    console.log(err)
})