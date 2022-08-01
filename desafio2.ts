// Como podemos melhorar o esse código usando TS? 

enum profissaoEnum {
    Atriz,
    Padeiro
}

interface Pessoa {
    nome: string;
    idade: number;
    profissao: profissaoEnum;

}

(() => {

    const pessoa1:Pessoa = {
        nome: "maria",
        idade: 29,
        profissao: profissaoEnum.Atriz,
    }
    
    const pessoa2: Pessoa = {
        nome: "Roberto",
        idade: 19,
        profissao: profissaoEnum.Padeiro
    }

    const pessoa3: Pessoa = {
        nome: "laura",
        idade: 32,
        profissao: profissaoEnum.Atriz
    }

    const pessoa4: Pessoa = {
        nome: "carlos",
        idade: 19,
        profissao: profissaoEnum.Padeiro
    }

    console.log(pessoa1.nome)
    console.log(pessoa2.nome)
    console.log(pessoa3.nome)
    console.log(pessoa4.nome)

})()

