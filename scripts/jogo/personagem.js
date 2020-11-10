class Personagem extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprit, alturaSprit){
        super (matriz, imagem, x, variacaoY, largura, altura, larguraSprit, alturaSprit);
        this.variacaoY = variacaoY;
        this.yInicial = height - this.altura -this.variacaoY;
        this.y = this.yInicial;
        this.gravidade = fita.configuracoes.gravidade;
        this.velocidadeDoPulo = 0;
        this.alturaDoPulo = fita.configuracoes.alturaDoPulo;
        this.pulos = 0;
        this.invencivel = false;
    }

    pula() {
        if (this.pulos<2) {
            this.velocidadeDoPulo =  this.alturaDoPulo;
            this.pulos++;
        }
    }

    aplicarGravidade() {
        this.y = this.y + this.velocidadeDoPulo;
        this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
            if (this.y > this.yInicial) {
                this.y = this.yInicial;  
                this.pulos = 0; 
        }
    }

    tornarInvencivel () {
        this.invencivel = true;
        setTimeout(() => {
            this.invencivel = false
        }, 1500);
    }

    estaColidindo(inimigo) {
        //noFill()
        //rect(this.x, this.y, this.largura, this.altura)
        //rect(inimigo.x, inimigo.y, inimigo.largura, inimigo.altura)
        if (this.invencivel) {
            return false;
        }
        const precisao = .6
        const colisao = collideRectCircle(this.x, this.y, this.largura, this.altura, inimigo.x + inimigo.largura/2+15, inimigo.y + inimigo.altura/2, inimigo.largura*precisao);
    
        return(colisao);
    }

    anda(direcao) {
        if (direcao === 1)
          this.x += 10;
        else if (direcao === 0)
          if (this.x > 0) {
            this.x -= 10;
          }
      }

}



