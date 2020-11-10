function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(fita.configuracoes.frameRate);
  //somDoJogo.loop();
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  jogo.setup();
  cenas = {
    jogo,
    telaInicial,
  };
  
  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);

}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}
