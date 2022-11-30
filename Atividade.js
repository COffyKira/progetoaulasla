var soloSprite, soloImagem;
var trexSprite, trexAnimacao;
var obstaculoSprite,obstaculoAnimacao;

var o1 
var o2
var o3

var nuvemImagem, nuvemSprite;

function preload() {
    soloImagem = loadImage("solo.png");
    trexAnimacao = loadAnimation("trex1.png","trex2.png","trex3.png");
    nuvemImagem = loadImage("nuvem.png");
    obscaculosImagem = loadImage("obstaculo1.png,","obstaculo2.png","obstaculo3.png","obstaculo4.png","obstacuo6.png")
}


function setup() {
    createCanvas(600, 200);
    
    soloSprite = createSprite(300, 180, 300, 40);
    soloSprite.addImage(soloImagem);
    //adicionar velocidade para a sprite
    soloSprite.velocityX = -3;

    trexSprite = createSprite(50,170,50,50);
    trexSprite.addAnimation("correndo",trexAnimacao);
    trexSprite.scale=0.5;
 
}

var aleatorio = 0;
function draw() {
    background("white");


 

    if(soloSprite.x < 0 ){
        soloSprite.x = 300;
    }
    //verifica se apertou espaço
    if(keyDown("space")){
        //manda o trex para cima
        trexSprite.velocityY = -10;
    }
    
    //dá gravidade para o trex
    trexSprite.velocityY += 0.8;

    //manda o trex colidir com o solo
    trexSprite.collide(soloSprite)
    
    criarNuvens();
    drawSprites();
}

function criarNuvens(){
    //define o que ocorre a cada 60 quadros
    if(frameCount % 30 == 0){
        //gera um número aleatório redondo
        aleatorio = Math.round(random(0,100));
        //cria a sprite da nuvem
        nuvemSprite = createSprite(600,aleatorio);
        //adiciona a imagem
        nuvemSprite.addImage(nuvemImagem);
        //define a velocidade 
        nuvemSprite.velocityX = -3;
        //define o tamanho
        nuvemSprite.scale = 0.5;
        //mudar o depth
        trexSprite.depth = nuvemSprite.depth + 1;
    };
}
var a = 0
function criarCatus()
    if(frameCount % 60 == 0){
    aleatorio = Math.round(random(1,3));
    obstaculoSprite = createSprite(600,170);
   cactoSprite = createSprite(600,170)
    cactoSprite.velocityX = -3
    cactoSprite.scale = 0.5}
    switch (a) { 
        
        case 1:
            cactoSprite.addImage(01);
            break;
            case 2: 
            cactoSprite.addImage(02);
            break;
            case 3: 
            cactoSprite.addImage(03);
            default:
                brack;
    
    
    
    
    
        }
    
    



