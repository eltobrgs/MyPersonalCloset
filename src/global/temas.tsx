export const temas = {
    cores: {
        primaria: '#4B223F', // tom mais escuro do roxo
        secundaria: '#6A3354', // segundo tom mais escuro
        lightgray: '#9B637D', // tom intermediário mais claro
        gray: '#B47B95', // tom mais médio
        darkgray: '#D49DB0', // tom mais claro
        insideGray: '#EEC4CF', // tom mais suave da paleta
        bgScreen: '#F5F0F5', // tom quase branco
        bgCard: '#FFFFFF', // branco
        
    },

    fontes: {
        roboto: 'Roboto', //assim a estrutua de adicionar uma fonte ou uma cor, ou quaquer outro tipo de variavel global, 
        // voce fez isso no seu site, lembra? usando uma paleta de variavis que armazenavam cores e fontes no css 
        // Adicione as fontes  aqui
    }

        // pra chamar uma fonte voce vai colocar assim: fontFamily: temas.fontes.roboto por exemplo
        // pra chamar uma cor voce vai colocar assim: color: temas.cores.primaria por exemplo
        // ou seja, voce vai chamar a variavel temas que é um objeto que contem todas as variaveis globais que voce criou

};
