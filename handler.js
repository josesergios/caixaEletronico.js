'use strict';

module.exports.hello = async event => {
  let body = JSON.parse(event.body);
  let route = event.path;
  if (route === "/soma"){
    //console.log(typeof JSON.parse(body));
    let soma = body.num1 + body.num2;
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          result: soma
        },
        null,
        2
      )
    }
  }

  if(route === "/concatena"){
    let concatena = body.string1 + "+" + body.string2;
    return{
      statusCode: 200,
      body: JSON.stringify(
        {
          result: concatena
        },
        null,
        2
      )
    }
  }

  return {
    statusCode: 404,
    body: JSON.stringify(
      {
       result: "Rota não encontrada"
             },
      null,
      2
    ),
  };
};
