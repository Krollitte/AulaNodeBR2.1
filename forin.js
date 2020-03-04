const service = require('./index')

async function main(){
    try{
        const result = await service.obterPessoas('a')
        const names = [];
        console.time('forin')
        for (let i in result.results){
            const pessoa = result.results[i]
            names.push(pessoa.name)
        }
        console.timeEnd('forin')
    }
        catch(error){
            console.error('erro interno', error)
        }
    }
    main()