class Inimigo extends Animacao {
    constructor (matriz, imagem, x, variacaoY, largura, altura, larguraSprit, alturaSprit, velocidade) {
        super (matriz, imagem, x, variacaoY, largura, altura, larguraSprit, alturaSprit);
        this.velocidade = velocidade;
        this.x = width;
    }
    move(){
        this.x = this.x - this.velocidade;
        }

    aparece() {
        this.x =width;
    }
}