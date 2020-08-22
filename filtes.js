function isBigEnough(value) {
    return value >= 10;
}

let vetor = [12, 5, 8, 130, 44];

let vetorFiltrado = vetor.filter(isBigEnough);

console.log('vetorFiltrado', vetorFiltrado);

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
//   // filtrado é [12, 130, 44]
// const axios = require('axios').default;


// Array.prototype.filter = function (callback) {
//     let aux = [];

//     for( let i = 0; i< this.length;i++ ) {
//         if(callback(this[i]) == true) aux.push(this[i]);
//     }
  

//     return aux;
// }

// console.log('INICIO...');

// axios.get("http://files.cod3r.com.br/curso-js/funcionarios.json").then(function (res) {
//     let filterData = res.data.filter(function (value) {
//         if(value.nome === 'Kim') console.log('value', value);
//         return value.nome === 'Sergio da viola';
//     });

//     console.log('resFiltrada', filterData);

// }).catch(function (err) {
//     console.log('err', err);
// });

// console.log('Fim');