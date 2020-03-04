const service = require('./index');

async function main(){
    try{
        const result = await service.obterPessoas('a')
        const names = [];
        console.time('forof')
        for(pessoa of result.results){
            names.push(pessoa.name)
        }
        console.timeEnd('forof')
        console.log('names', names)
    }
    catch(error){
        console.error('erro interno', error)
    }
}
main()