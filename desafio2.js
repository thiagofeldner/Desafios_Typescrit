"use strict";
// Como podemos melhorar o esse código usando TS? 
var profissaoEnum;
(function (profissaoEnum) {
    profissaoEnum[profissaoEnum["Atriz"] = 0] = "Atriz";
    profissaoEnum[profissaoEnum["Padeiro"] = 1] = "Padeiro";
})(profissaoEnum || (profissaoEnum = {}));
(() => {
    const pessoa1 = {
        nome: "maria",
        idade: 29,
        profissao: profissaoEnum.Atriz,
    };
    const pessoa2 = {
        nome: "Roberto",
        idade: 19,
        profissao: profissaoEnum.Padeiro
    };
    const pessoa3 = {
        nome: "laura",
        idade: 32,
        profissao: profissaoEnum.Atriz
    };
    const pessoa4 = {
        nome: "carlos",
        idade: 19,
        profissao: profissaoEnum.Padeiro
    };
    console.log(pessoa1.nome);
    console.log(pessoa2.nome);
    console.log(pessoa3.nome);
    console.log(pessoa4.nome);
})();
