export default class Model {

    getData(rgm) {

        // Aquisitando os dados
        const data = [
            {
                name:'yohanan maia',
                rgm:'34351744',
                jobDescription:"Software Developer"
            },
            {
                name:'Orlindo',
                rgm:'saassaas',
                jobDescription:"Diretor"
            },
            {
                name:'Ana',
                rgm:'zzsda',
                jobDescription:"Gerente"                
            }
        ]

        //aplicando regra de negócio
        return data.find(e => e.rgm == rgm)
    }
}