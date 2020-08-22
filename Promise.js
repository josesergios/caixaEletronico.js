//Essa função funciona corretamente

// const dados = [{
//     nome: "joao", idade: 10,
// }, 
// {
//     nome: "maria", idade: 15,
// },
// {
//     nome: "sergio", idade: 20,
// }];

// function buscarSincrona(dados, nome){
    
//     for(let i=0; i< dados.length; i++){
        
//         if(dados[i].nome == nome ){
//             let pessoa = dados[i];
//             return pessoa
//         }
//     }
//     return null
// }

// let resultado = buscarSincrona(dados, "joao");
// console.log(resultado);
//_____________________________________________________________________

//essa função funciona corretamente

const beta = [{
    nome: "joao", idade: 10,
}, 
{
    nome: "maria", idade: 15,
},
{
    nome: "sergio", idade: 20,
}]

function buscarAssincrona(beta, nome){

    return new Promise(function(resolve, reject){ 
        for(let i=0;i< beta.length; i++){
            if(beta[i].nome == nome ){
                let pessoa = beta[i]
                return resolve(pessoa);
            }
        }  
                return reject("Nome não cadastrado");
    })
}

let resultado = buscarAssincrona(beta, "sergio").then(function(res) {
    console.log(res);
 }).catch(function(err) {
    console.log(err);
 })