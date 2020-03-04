const service = require('./index')

async function main(){
    try{
        const result = await service.obterPessoas('a')
        const names = [];
        console.time('for')
        for(let i=0; i<=result.results.length-1; i++){
            const pessoa = result.results[i]
            names.push(pessoa.name)
        }
        console.timeEnd('for')
    }
    catch(error){
        console.error('erro interno', error)
    }
}
main()