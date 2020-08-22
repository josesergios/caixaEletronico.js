const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require('axios');

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)
    function chineses(f){
        if(f.pais === "China"){
            return true        
        }
    }
    
    function mulheres(f){
        if(f.genero === "F"){
            return true        
        }
    }
    
    function menorSalario (func, funcAtual){
        if(func.salario > funcAtual.salario){
            return func 
        }
        if(func.salario < funcAtual.salario){
            return funcAtual 
        }
    }
    
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
    console.log(func);
})

