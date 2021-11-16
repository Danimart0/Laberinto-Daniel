var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Cuando el cubo blanco toca a sofia sale texto: GANASTE para el juego y pone fondo Rojo.
//Al tocar con las paredes rojas . se te regresara al inicio
// si "mueres"  5 veces el juego se parará y perderas
var wal1 = createSprite(58,130, 15,150);
var wal2 = createSprite(1, 160, 30 ,190);
var wal3 = createSprite(7, 330, 15 ,155);
var wal4 = createSprite(14, 300, 300 ,20);
var wal5 = createSprite(2, 140, 30 ,190);
var wal6 = createSprite(100, 240, 100 ,20);
var wal7 = createSprite(190,235,10,150);
var wal8 = createSprite(185,390,10,150);
var wal9 = createSprite(81,356,30,30);
var wal10 = createSprite(112,174,15,90);
var wal10 = createSprite(112,174,15,90);
var wal11 = createSprite(147,185,15,90);
var wal12 = createSprite(150,129,90,15);
var wal13 = createSprite(90,71,20,20);
var wal14 = createSprite(119,40,20,100);
var wal15 = createSprite(196,80,100,20);
var wal16 = createSprite(223,170,20,140);
var wal17 = createSprite(325,76,155,19);
var wal18 = createSprite(239,330,19,115);
var wal19 = createSprite(316,280,125,16);
var wal20 = createSprite(342,200,16,125);
var wal21 = createSprite(265,223,16,16);
var wal22 = createSprite(307,201,16,16);
var wal23 = createSprite(307,201,16,16);
var wal24 = createSprite(266,150,100,16);
var wal25 = createSprite(372,120,16,16);
var wal26 = createSprite(121,335,10,10);

var life = 0;

var cubo1 = createSprite (37, 17,15, 15);
var copa = createSprite (368, 390 ,15,15 );

cubo1.shapeColor="whait";
copa.shapeColor="yellow";
wal1.shapeColor="pink";
wal2.shapeColor="pink";
wal3.shapeColor="pink";
wal4.shapeColor="red";
wal5.shapeColor="red";
wal6.shapeColor="pink";
wal7.shapeColor="pink";
wal8.shapeColor="pink";
wal9.shapeColor="pink";
wal10.shapeColor="pink";
wal11.shapeColor="red";
wal12.shapeColor="pink";
wal13.shapeColor="red";
wal14.shapeColor="red";
wal15.shapeColor="pink";
wal16.shapeColor="pink";
wal17.shapeColor="red";
wal18.shapeColor="red";
wal19.shapeColor="pink";
wal20.shapeColor="pink";
wal21.shapeColor="red";
wal22.shapeColor="red";
wal23.shapeColor="red";
wal24.shapeColor="pink";
wal25.shapeColor="red";
wal26.shapeColor="black";

function draw() {
background("black");
textSize(15);
stroke ("red");
text("Lives: " + life,201,16);
 
 
 
textSize(20);
stroke ("whait");
text("Sofia", 34,43);
textSize(20);
stroke ("whait");
text("Copa", 350,353);
textSize(15);
stroke ("whait");
text("LLega a la copa sin tocar nada Rojo", 120,40);


  createEdgeSprites();
  
    
 if (cubo1.isTouching(copa)) {
  background("white");
  textSize(80);
stroke ("yellow");
text(" ¡GANASTE !", 3,204);
  cubo1.velocityX=0;
  cubo1.velocityY=0;
  }
   //Cubos rojos
  if (cubo1.isTouching(wal4)||
  cubo1.isTouching(wal5)||
  cubo1.isTouching(wal11)||
  cubo1.isTouching(wal13)||
  cubo1.isTouching(wal14)||
  cubo1.isTouching(wal17)||
  cubo1.isTouching(wal18)||
  cubo1.isTouching(wal21)||
  cubo1.isTouching(wal22)||
  cubo1.isTouching(wal25)){
 
    
  cubo1.x=  35;
  cubo1.y= 15;
  life = life + 1;
  }
 if (life == 5) {
   
  textSize(80);
stroke ("whait");
text("PERDISTE", 3,204);
  cubo1.velocityX=0;
  cubo1.velocityY=0;
    
  }
  
  if (cubo1.isTouching(wal26)) {
    cubo1.x= 332;
    cubo1.y= 375;
  }
  
 
// Movimiento de cubo - flechas de la computadora.
  
  if (keyDown("RIGHT_ARROW")) {
   cubo1.velocityX = 4
   ;
   cubo1.velocityY = 0;
 }
 if (keyDown("LEFT_ARROW")) {
   cubo1.velocityX = -4;
   cubo1.velocityY = 0;
 }
   if (keyDown("UP_ARROW")) {
   cubo1.velocityX = 0;
   cubo1.velocityY = -4;
 }     
  
 if (keyDown("DOWN_ARROW")) {
   cubo1.velocityX = 0;
   cubo1.velocityY = 4;
 }     

cubo1.bounceOff(wal1);
cubo1.bounceOff(wal2); 
cubo1.bounceOff(wal3); 
cubo1.bounceOff(wal4);
cubo1.bounceOff(wal5);
cubo1.bounceOff(wal6);
cubo1.bounceOff(wal7);
cubo1.bounceOff(wal8);
cubo1.bounceOff(wal9);
cubo1.bounceOff(wal10);
cubo1.bounceOff(wal11);
cubo1.bounceOff(wal15);
cubo1.bounceOff(wal16);
cubo1.bounceOff(wal19);
cubo1.bounceOff(wal20);
cubo1.bounceOff(wal21);
cubo1.bounceOff(wal22);




cubo1. bounceOff(edges);
drawSprites();

}





















// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
