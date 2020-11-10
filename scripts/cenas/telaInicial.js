class TelaInicial {
    constructor(){
    }

    draw() {
        this._imagemDeFundo();
        this._texto();
        this._botao();
    }
    
    _imagemDeFundo() {
        image(imagemTelaInicial, 0, 0, width, height);
    }

    _texto() {
        textFont(fonteTelaIncial);
        textAlign(CENTER);
        textSize(150);
        text('As Aventuras de', width/2, height/3);
        textSize(200);
        text('Hipsta', width/2, height/6 * 3);
    }

    _botao() {
        botaoGerenciador.y = height / 5 * 3;
        botaoGerenciador.draw();   
    }
}