'use strict';

module.exports.teste = async event => {
    //console.log(event);
    //console.log(event.body);
    let body = JSON.parse(event.body);
    let route = event.path;
    if(route === "/treinoconcatena"){
        let concatena = body.string1 + " " + body.string2 + " " + body.string3 + " " + body.string4 
        return{
            statusCode: 200,
            body: JSON.stringify({
                frase: concatena
            })
        }   
    }

    if(route === "/treinosoma"){
        let soma = body.num1 + body.num2;
        let media1 = (soma/2) + 1;
        let media2 = (media1+1) + 2;
        return{
            statusCode: 200,
            body: JSON.stringify({
                soma: soma,
                media1: media1,
                media2: media2
            })
        }
    }

    return{
        statusCode: 200,
        body: JSON.stringify({
            result: "Requisição realizada com sucesso!"
        },
        null,
        2
        )
    }
}