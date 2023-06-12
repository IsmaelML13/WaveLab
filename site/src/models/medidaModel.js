var database = require("../database/config");

// function buscarUltimasMedidas(idAquario, limite_linhas) {

//     instrucaoSql = ''

//     if (process.env.AMBIENTE_PROCESSO == "producao") {
//         instrucaoSql = `select top ${limite_linhas}
//         dht11_temperatura as temperatura, 
//         dht11_umidade as umidade,  
//                         momento,
//                         FORMAT(momento, 'HH:mm:ss') as momento_grafico
//                     from medida
//                     where fk_aquario = ${idAquario}
//                     order by id desc`;
//     } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
//         instrucaoSql = `select 
//         dht11_temperatura as temperatura, 
//         dht11_umidade as umidade,
//                         momento,
//                         DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
//                     from medida
//                     where fk_aquario = ${idAquario}
//                     order by id desc limit ${limite_linhas}`;
//     } else {
//         console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
//         return
//     }

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

// function buscarMedidasEmTempoReal(idAquario) {

//     instrucaoSql = ''

//     if (process.env.AMBIENTE_PROCESSO == "producao") {
//         instrucaoSql = `select top 1
//         dht11_temperatura as temperatura, 
//         dht11_umidade as umidade,  
//                         CONVERT(varchar, momento, 108) as momento_grafico, 
//                         fk_aquario 
//                         from medida where fk_aquario = ${idAquario} 
//                     order by id desc`;

//     } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
//         instrucaoSql = `select 
//         dht11_temperatura as temperatura, 
//         dht11_umidade as umidade,
//                         DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
//                         fk_aquario 
//                         from medida where fk_aquario = ${idAquario} 
//                     order by id desc limit 1`;
//     } else {
//         console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
//         return
//     }

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

function dadoRegiaoNordeste (){
    instrucaoSql = ''
    var instrucaoSql = `select count(*) as total from endereco where regiao like 'Nordeste';`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function dadoRegiaoNorte (){
    instrucaoSql = ''
    var instrucaoSql = `select count(*) as total from endereco where regiao like 'Norte';`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function dadoRegiaoSudeste (){
    instrucaoSql = ''
    var instrucaoSql = `select count(*) as total from endereco where regiao like 'Sudeste';`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function dadoRegiaoSul (){
    instrucaoSql = ''
    var instrucaoSql = `select count(*) as total from endereco where regiao like 'Sul';`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function dadoRegiaoCentroOeste (){
    instrucaoSql = ''
    var instrucaoSql = `select count(*) as total from endereco where regiao like 'Centro-oeste';`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function dados18 (){
    instrucaoSql = ''
    var instrucaoSql = `select count(*) as total from usuario where idade < 18;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function dados1825 (){
    instrucaoSql = ''
    var instrucaoSql = `select count(*) as total from usuario where idade >= 18 AND idade <= 25;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function dados2635 (){
    instrucaoSql = ''
    var instrucaoSql = `select count(*) as total from usuario where idade >= 26 AND idade <= 35;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function dados3645 (){
    instrucaoSql = ''
    var instrucaoSql = `select count(*) as total from usuario where idade >= 36 AND idade <= 45;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function dados4660 (){
    instrucaoSql = ''
    var instrucaoSql = `select count(*) as total from usuario where idade >= 46 AND idade <= 60;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function dados60 (){
    instrucaoSql = ''
    var instrucaoSql = `select count(*) as total from usuario where idade > 60;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    // buscarUltimasMedidas,
    // buscarMedidasEmTempoReal, 
    dadoRegiaoNordeste,
    dadoRegiaoNorte,
    dadoRegiaoSudeste,
    dadoRegiaoSul,
    dadoRegiaoCentroOeste,
    dados18,
    dados1825,
    dados2635,
    dados3645,
    dados4660, 
    dados60


}
