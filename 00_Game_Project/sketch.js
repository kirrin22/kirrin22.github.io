//nextEffect
let kmuWidth = 500;
let kmuHeight = 366
let degree = 0.0;
let theta = 0.0;
let fadeEffect;
let windowScreen;

//move & jump
let velocity = 10;
let movingVel = 14;
let fallVelocity = 15;
let jumpPower = 10;
let jumpCount = 0;
let jump = false;

//checks
let consolCheck = false;

let rect1_1Check = false;
let rect2_1Check = false;
let rect2_2Check = false;
let rect3_1check = false;
let ellipse3_1check = false;
let ellipse3_2check = false;

let stage4Check = false; // if it is "true" --> player can see the coordinates

let linkCheck = false;

let introSoundCheck = false;
let nextSoundCheck = false;
let backgroundCheck = false;
let jumpSoundCheck = false;
let gameOverCheck = false;
let endingSoundCheck = false;

//player(c === class)
let player_c;
let player_c2;
let player_c3;
let player_c4;

let px = 100, py = 750, pw = 80, ph = 150;
let ground = 900;
let sky = 0;

//Related to game functions
let stageCheck = false;
let contents = ''; //key of consol

let stage = 'intro';
let cutScene = 'language';
let languageCheck ='';
// let languageCheck = 'korean';
let keyInput = false;

function setup() {
  window.open('https://p5js.org/ko/reference/', 'p5.js Reference', 'width=600, height=600')

  //player Class
  player_c = new Player();
  player_c2 = new Player();
  player_c3 = new Player();
  player_c4 = new Player();


  fadeEffect = 0;
  contents ="";
  createCanvas(2500, 1000);

  //cutScene
  cutImageLoad()

  myFont = loadFont('tway_air.ttf')

  img_portal = loadImage('image/portal.png')

  img_stage1 = loadImage('image/background_stage1.jpg')
  img_stage2 = loadImage('image/background_stage2.jpg')
  img_stage3 = loadImage('image/background_stage3.jpg')
  img_stage4 = loadImage('image/background_stage4.jpg')

  img_Person = loadImage('image/person_Right.png');
  img_Right= loadImage('image/person_Right.png');
  img_Left = loadImage('image/person_Left.png');

  kmuImage = loadImage('image/Haksamo.png')


  bridge_1 = loadImage('image/bridge_1.png');
  bridge_2_1 = loadImage('image/bridge_2_1.png');
  bridge_2_2 = loadImage('image/bridge_2_2.png');

  rectStage3 = loadImage('image/rectStage3.png');
  ellipse_3_1 = loadImage('image/ellipse1.png');
  ellipse_3_2 = loadImage('image/ellipse2.png');
  rect_3 = loadImage('image/rect1.png');
  exitDoor = loadImage('image/exitDoor.png');

  introMusic = createAudio('sound/intro_music.mp3')
  backgroundMusic = createAudio('sound/background.mp3');
  jumpSound = createAudio('sound/jump.mp3')
  gameOverSound = createAudio('sound/gameOverSound.mp3');
  endingSound = createAudio('sound/ending.mp3');
  nextSound = createAudio('sound/nextEffect.mp3');
}
function draw() {
  //cutScene 
  cutDraw() //image(Kr/En) cutScene

  //stage
  if(stage === 'stageEffect1')
  {
    stageEffect_1();
    backgroundCheck = true
  }
  if(stage === 'stage1')
  {
    stage_1();
  }
  else if(stage === 'stageEffect2')
  {
    stageEffect_2();
  }
  else if(stage === 'stage2')
  {
    stage_2();
  }
  else if(stage === 'stageEffect3')
  {
    stageEffect_3();
  }
  else if(stage === 'stage3')
  {
    stage_3();
  }
  else if(stage === 'stage4')
  {
    stage_4();
  }
  else if(stage === 'stageEffect4')
  {
    stageEffect_4();
  }
  else if(stage === 'gameOver')
  {
    gameOver()
    gameOverCheck = true;
  }


  //music
    //intro
  if(introSoundCheck === true)
  {
    introMusic.loop();
  }
  else if(introSoundCheck === false)
  {
    introMusic.stop();
  }

    //background
  if(backgroundCheck === true)
  {
    backgroundMusic.loop();
    backgroundMusic.volume(0.5)
  }
  else if(backgroundCheck === false)
  {
    backgroundMusic.stop();
  }

    //gameOver
  if(gameOverCheck === true)
  {
    gameOverSound.loop();
    gameOverSound.volume(0.1)
  }
  else if(gameOverCheck === false)
  {
    gameOverSound.stop();
  }
    //ending
  if(endingSoundCheck === true)
  {
    endingSound.loop();
    endingSound.volume(0.1);
  }
}


function stageEffect_1() {
  print(keyInput)
  push()
  createCanvas(2500, 1000);
  background(0);
  pop()
  
  push()
  ellipseMode();
  ellipse(width/5, height*2/3, 100)
  ellipse(width*1/2, height*2/3, 100)
  ellipse(width*4/5, height*2/3, 100)
  pop()

  push()
  stroke(255);
  strokeWeight(5);
  line(width/5, height*2/3, width*4/5, height*2/3);
  pop()

  push();
  //KMU mark
  imageMode(CENTER)
  image(kmuImage, kmuWidth, kmuHeight, 400, 450)


  //effect
  theta = radians(degree);
  kmuHeight = 366 + height/15* sin(theta/2);
  degree += 8;

  push()
  fill(255);
  textSize(50);
  textAlign(CENTER);
  text('Next: "Shift"', 1250, height*5.6/6)
  pop()
  push()
  fill(255);
  textSize(100);
  textAlign(CENTER)
  text("Game Start!", 1250, height*5/6)
  pop()
  if(keyIsPressed && keyCode === 16)
  {
    if(keyInput === false)
    {
      keyInput = true;
      stage = 'stage1';
    }      
  }
  else
  {
    keyInput = false;
  }
  pop();
} 
function stage_1() {
  gameOverCheck = false
  createCanvas(2500, 1000)
  textFont("Helvetica");
  //wall
  if(player_c.px < 0 || player_c.px > 2500)
  {
    player_c.px = 0;
  }
  if(player_c.py < 0)
  {
    player_c.py = 0;
  }

  //back_background
  image(img_stage1, 0, 0, 2500, 1000)

  //ground
  fill(0);
  rect(0, ground, 700, 100)
  rect(1690, ground, 1200, 100)

  //portal(next stage)
  image(img_portal, 2150, 560, 350, 350)
  if(player_c.px > 2250)
  {
    stage = 'stageEffect2';
    consolCheck = false;
    contents = ""
    keyInput = true;
  }

  //bridge
  if(rect1_1Check === true)
  {
    rect(750, 900, 900, 100);
  }


  if(contents == 'rect(750,900,900,100)' || contents == 'rect(750, 900, 900, 100)' || contents == 'rect(750,900,900,100)')
  {
    rect1_1Check = true;
  }

  //bridge_display
  push();
  strokeWeight(3);
  fill(255)
  if(rect1_1Check === false)
  {
    image(bridge_1, 540, 630, 1125, 400)
  }
  pop();

  push();
  textSize(80);
  textFont(myFont);
  text("rect", 1135, 970);
  pop();
  
  //collisions
  collisions_1()

  //player
  player_c.person();
  player_c.moving();

  //jump
  player_c.jumpF();


  //consol
  if(keyIsPressed) //run console
  {
    if(key === '`' || key === '~')
    {
      contents = ""
      consolCheck = true
    }
  }

  if(match(contents,"Enter") == "Enter") //close console
  {
    contents = ""
    consolCheck = false
  }

  if(consolCheck === true)
  {
    consol_1();
  }


  //game over
  if (player_c.py > 880) 
  {
    stage = 'gameOver';
  }

}
function collisions_1() {
  //collisions
  if(player_c.py > 750)
  {
   if(player_c.px > 700 && player_c.px < 1700-pw)
   {
    player_c.py += fallVelocity;
     
    if(rect1_1Check === true)
    {
     player_c.py = 750;
    }
   }
   if(player_c.px > 0 && player_c.px < 700)
   {
    player_c.py = 750;
   }
   if(player_c.px > 1690-pw && player_c.px < 2500)
   {
    player_c.py = 750;
   }
  }
  
}
function gameOver() {
  backgroundCheck = false
  push();
  createCanvas(2500, 1000)
  background(0);
  
  //text
  fill(255, 0, 0, fadeEffect);
  textSize(300);
  textAlign(CENTER);
  text("YOU DIED", 1250, 500);
  
  fill(255, fadeEffect);
  textSize(90);
  textAlign(CENTER);
  text("If you want to try again, press 'Shift'" , 1250, 650);

  fadeEffect += 2.5;
  
  if(keyCode === 16)
  {
    player_c.px = 100;
    player_c.py = 800;
    contents = "";
    consolCheck = false;
    gameOverCheck = false
    backgroundCheck = true;
    stage = 'stage1'
  }
  pop();
}


function stageEffect_2() {
  push()
  print(keyInput)
  createCanvas(2500, 1000);
  background(0);
  
  push()
  ellipseMode();
  ellipse(width/5, height*2/3, 100)
  ellipse(width*1/2, height*2/3, 100)
  ellipse(width*4/5, height*2/3, 100)
  pop()

  push()
  stroke(255);
  strokeWeight(5);
  line(width/5, height*2/3, width*4/5, height*2/3);
  pop()

  push();
  //KMU mark
  imageMode(CENTER)
  image(kmuImage, kmuWidth, kmuHeight, 400, 450)

  kmuWidth += 16;
  if(kmuWidth > 1250)
  {
    kmuWidth = 1250
  }

  //effect
  if(kmuWidth === 1250)
  {
    theta = radians(degree);
    kmuHeight = 366 + height/15* sin(theta/2);
    degree += 8;
  
    push()
    fill(255);
    textSize(50);
    textAlign(CENTER);
    text('Next: "Shift"', 1250, height*5.6/6)
    pop()
    push()
    fill(255);
    textSize(100);
    textAlign(CENTER)
    text("Stage1 Clear!", 1250, height*5/6)
    pop()
    if(keyIsPressed && keyCode === 16)
    {
      if(keyInput === false)
      {
        keyInput = true;
        stage = 'stage2';
      }      
    }
    else
    {
      keyInput = false;
    }
    pop();
  }
  pop();
}
function stage_2() {

  textFont("Helvetica");
  createCanvas(2500, 1000);

  //back_background
  image(img_stage2, 0, 0, 2500, 1000)

  //ground
  fill(0);
  rect(0, ground, 2500, 100)

  //portal(next stage)
  image(img_portal, 2150, 85, 350, 350)

  if(player_c2.px > 2350-(pw+20))
  {
    stage = 'stageEffect3';
    contents = ""
    consolCheck = false;
    keyInput = true;
    jumpPower = 10;
  }

  //wall
  push();
  fill(0);
  rect(1400, 400, 1100, 500);
  pop();

  //Stair1
  if (contents == 'rect(300,75,500,70)' || contents == 'rect(300, 75, 500, 70)' || contents == 'rect(300,75,500,70)')
  {
    rect2_1Check = true;
  }
  if(rect2_1Check === true)
  {
    rect(300, 750, 500, 70)
  }
  else if(rect2_1Check === false)
  {
    image(bridge_2_1, 115, 603, 700, 230);
  }

  //stair2
  if (contents == 'rect(850,550,500,70)' || contents == 'rect(850, 550, 500, 70)' ||contents == 'rect(850,550,500,70)')
  {
    rect2_2Check = true;
  }
  if(rect2_2Check === true)
  {
    rect(850, 550, 500, 70)
  }
  else if(rect2_2Check === false)
  {
    image(bridge_2_2, 665, 405, 700, 230)
  }
  //Stair1_display
 
  collisions_2()

  //player
  player_c2.person();
  player_c2.moving();

  //jump
  jumpPower = 12
  player_c2.jumpF();

  //consol
  if(keyIsPressed) //run console
  {
    if(key === '`' || key === '~')
    {
      contents = ""
      consolCheck = true
    }
  }

  if(match(contents,"Enter") == "Enter") //close console
  {
    contents = ""
    consolCheck = false
    
  }

  if(consolCheck === true)
  {
    consol_1();
  }
}
function collisions_2() {
  //wall
  if(player_c2.px < 0)
  {
    player_c2.px = 0;
  }
  if(player_c2.py < 0)
  {
    player_c2.py = 0;
  }

  //collisions
  if(player_c2.px > 0-pw && player_c2.px < 2500)
  {
    //ground
    if(player_c2.py > 750) //ground's y = 900
    {
      player_c2.py = 750;
    }

    //stair1
    if(player_c2.px > 300-pw && player_c2.px < 800 
      && player_c2.py > 750-ph && player_c2.py < 820-ph)
    {
      if(rect2_1Check === true)
      {
        player_c2.py = 750 - ph
        jumpCount = 0;
      }
    }
    //stair2
    if(player_c2.px > 850-pw && player_c2.px < 1350 
      && player_c2.py > 550-ph && player_c2.py < 620-ph)
    {
      if(rect2_2Check === true)
      {
        player_c2.py = 550 - ph;
        jumpCount = 0;
      }
    }
    
    //hill(?)
    if(player_c2.px > 1400-pw && player_c2.px < 2500-pw 
      && player_c2.py > 400-ph && player_c2.py < 600-ph)
    {
      player_c2.py = 400 - ph;
      jumpCount = 0;
    }
    
    if(player_c2.px > 1400-(pw+50) && player_c2.px < 2500
     && player_c2.py > 400)
    {
      player_c2.px = 1400-(pw+50);
    }
  }
}


function stageEffect_3() {
  print(keyInput)
  push()
  createCanvas(2500, 1000);
  background(0);
  pop()
  
  push()
  ellipseMode();
  ellipse(width/5, height*2/3, 100)
  ellipse(width*1/2, height*2/3, 100)
  ellipse(width*4/5, height*2/3, 100)
  pop()

  push()
  stroke(255);
  strokeWeight(5);
  line(width/5, height*2/3, width*4/5, height*2/3);
  pop()

  push();
  //KMU mark
  imageMode(CENTER)
  image(kmuImage, kmuWidth, kmuHeight, 400, 450)

  kmuWidth += 16;
  if(kmuWidth > 2000)
  {
    kmuWidth = 2000
  }
  pop();
  //effect
  push();
  if(kmuWidth === 2000)
  {
    theta = radians(degree);
    kmuHeight = 366 + height/15* sin(theta/2);
    degree += 8;
  
    push()
    fill(255);
    textSize(50);
    textAlign(CENTER);
    text('Next: "Shift"', 1250, height*5.6/6)
    pop()
    push()
    fill(255);
    textSize(100);
    textAlign(CENTER)
    text("Stage2 Clear!", 1250, height*5/6)
    pop()
    if(keyIsPressed && keyCode === 16)
    {
      if(keyInput === false)
      {
        keyInput = true;
        stage = 'stage3';
        consolCheck = false;
      }      
    }
    else
    {
      keyInput = false;
    }
    pop();
  }
  pop();
}
function stage_3() {
  createCanvas(2500, 1000);

  //back_background
  image(img_stage3, 0, 0, 2500, 1000)

  //ground
  push();
  fill(0);
  rect(0, ground, 6000, 100);
  imageMode(CENTER);
  pop();
  

  //Obstacle
  Obstacle()
  
  // ellipse(750, 320, 400)
  // rect(1250, 320, 400)
  // ellipse(1750, 320, 400);


  //portal(next stage)
  image(img_portal, 2200, 590, 350, 350)
  if(player_c3.px > 2250)
  {
    stage = 'stage4';
    player_c4.px = 100
    contents = ""
    consolCheck = false;
    stage4Check = true; //⭐⭐⭐⭐⭐
  }

  //collisions
  collisions_3()

  //consol
  if(keyIsPressed) //run console
  {
    if(key === '`' || key === '~')
    {
      contents = ""
      consolCheck = true
    }
  }

  if(match(contents,"Enter") == "Enter") //close console
  {
    contents = ""
    consolCheck = false
    
  }

  if(consolCheck === true)
  {
    consol_3()
  }

  //player
  player_c3.person();
  player_c3.moving();

  //jump
  jumpPower = 10
  player_c3.jumpF();

}
function collisions_3() {
  //wall
  if(player_c3.px < 0)
  {
    player_c3.px = 0;
  }

  if(player_c3.py < 0)
  {
    player_c3.py = 0;
  }

  //ground
  if(player_c3.px > 0-pw && player_c3.px < 2500-pw)
  {
    if(player_c3.py > 750)
    {
      player_c3.py = 750;
    }
  }
}
function Obstacle() {
  //Obstacle
  image(rectStage3, 500, 70, 1500, 500)

  //leftEllipse
  if(contents == 'ellipse(750,320,400)' || contents === 'ellipse(750, 320, 400)' || contents === 'ellipse(750,320,400)' || contents === 'ellipse(750, 320, 400, 400)' || contents === 'ellipse(750,320,400,400)')
  {
    ellipse3_1check = true; //⭐
  }
  if(ellipse3_1check === true)
  {
    if(languageCheck  === 'korean')
    {
      push()
      strokeWeight(13)
      stroke(100)
      fill(255)
      ellipse(750, 320, 400);
      pop()

      push();
      fill(0)
      textAlign(CENTER);
      textFont(myFont);
      textSize(100);
      text("도", 750, 350)
      pop()
    }
    else if(languageCheck === 'english')
    {
      push()
      strokeWeight(13)
      stroke(100)
      fill(255)
      ellipse(750, 320, 400);
      pop()
  
      push();
      fill(0)
      textAlign(CENTER);
      textFont(myFont);
      textSize(100);
      text("Ru", 750, 350)
      pop()
    }
  }
  else if(ellipse3_1check === false && stage4Check === true) // && stage4Check === true
  {
    image(ellipse_3_1, 573, 140, 350, 340)
  }

  //middleRect
  if(contents == 'rect1(1250,320,400)' || contents === 'rect(1250, 320, 400)' || contents === 'rect(1250,320,400)' || contents === 'rect(1250, 320, 400, 400)' || contents === 'rect(1250,320,400,400)')
  {
    rect3_1check = true;
  }
  if(rect3_1check === true)
  {
    if(languageCheck === 'korean')
    {
      push()
      strokeWeight(13)
      stroke(100)
      rectMode(CENTER);
      fill(255)
      rect(1250, 320, 400)
      pop()
  
      push();
      fill(0)
      textAlign(CENTER);
      textFont(myFont);
      textSize(100);
      text("망", 1250, 350)
      pop()
    }
    else if(languageCheck === 'english')
    {
      push()
      strokeWeight(13)
      stroke(100)
      rectMode(CENTER);
      fill(255)
      rect(1250, 320, 400)
      pop()
  
      push();
      fill(0)
      textAlign(CENTER);
      textFont(myFont);
      textSize(100);
      text("n", 1250, 350)
      pop()
    }
  }
  else if(rect3_1check === false && stage4Check === true)
  {
    image(rect_3, 1065, 140, 350, 340)
  }

  //rightEllipse
  if(contents == 'ellipse(1750,320,400)' || contents === 'ellipse(1750, 320, 400)' || contents === 'ellipse(1750,320,400)' || contents === 'ellipse(1750, 320, 400, 400)' || contents === 'ellipse(1750,320,400,400)')
  {
    ellipse3_2check = true;
  }
  if(ellipse3_2check === true)
  {
    if(languageCheck === 'korean')
    {
      push()
      strokeWeight(13)
      stroke(100)
      fill(255)
      ellipse(1740, 315, 400);
      pop()
  
      push();
      fill(0)
      textAlign(CENTER);
      textFont(myFont);
      textSize(100);
      text("쳐", 1750, 350)
      pop()
    }
    else if(languageCheck === 'english')
    {
      push()
      strokeWeight(13)
      stroke(100)
      fill(255)
      ellipse(1740, 315, 400);
      pop()
  
      push();
      fill(0)
      textAlign(CENTER);
      textFont(myFont);
      textSize(100);
      text("away", 1750, 350)
      pop()
    }
  }
  else if(ellipse3_2check === false && stage4Check === true)
  {
    image(ellipse_3_2, 1563, 140, 350, 340)
  }

}


function stage_4() {
  //ground
  createCanvas(2500, 1000);

  //back_background
  image(img_stage4, 0, 0, 2500, 1000)  
  fill(0);
  rect(0, ground, 6000, 100)

  //exit
  exit()

  //portal(back)
  image(img_portal, -170, 590, 350, 350)
  if(player_c4.px < 20)
  {
    stage = 'stage3';
    player_c3.px = 2100
    contents = ""
    consolCheck = false;
  }

  //collisions
  collisions_4()

  //player
  player_c4.person();
  player_c4.moving();

  //jump
  jumpPower = 10
  player_c4.jumpF();

  //consol
  if(keyIsPressed) //run console
  {
    if(key === '`' || key === '~')
    {
      contents = ""
      consolCheck = true
    }
  }

  if(match(contents,"Enter") == "Enter") //close console
  {
    contents = ""
    consolCheck = false 
  }

  if(consolCheck === true)
  {
    consol_1()
  }
}
function collisions_4() {
  //ground
  if(player_c4.px > 0-pw && player_c4.px < 2500-pw)
  {
    if(player_c4.py > 750)
    {
      player_c4.py = 750;
    }
  }

  //muntin
  if(player_c4.px > 2025-(pw+60))
  {
    if(ellipse3_1check === true && ellipse3_2check === true 
      && rect3_1check === true)
    {
      player_c4.px = player_c4.px;
    }
    else
    {
      player_c4.px = 2025-(pw+60);
    }

  }
}
function exit() {
  //portal(ending)
  if(player_c4.px > 2300)
  {
    stage = 'stageEffect4'
    keyInput = false
  }

  //exit
  push();
  image(exitDoor, 2200, 530, 300, 370)
  stroke(255);
  strokeWeight(10);
  fill(0)
  rect(2000, 310, 500, 180)
  pop();

  push()
  strokeWeight(5);
  stroke(100)
  fill(255)
  ellipse(2100, 400, 130)
  ellipse(2400, 400, 130)
  ellipse(2250, 400, 130) 
  pop();
  
  //muntin
  push()
  fill(150);
  strokeWeight(5);
  stroke(0)
  if(ellipse3_1check === false) 
  {
    rect(2125, 500, 15, 395)
  }
  if(rect3_1check === false)
  {
    rect(2075, 500, 15, 395)
  }
  if(ellipse3_2check === false)
  {
    rect(2025, 500, 15, 395)
  }

  // rect(2025, 500, 15, 395)
  // rect(2075, 500, 15, 395)
  // rect(2125, 500, 15, 395)
  pop()

  //light
  if(ellipse3_1check === true)
  {
    push()
    strokeWeight(7);
    stroke(225)
    fill(0, 170, 0)
    ellipse(2100, 400, 130)
    pop();
  }
  if(ellipse3_2check === true)
  {
    push()
    strokeWeight(7);
    stroke(225)
    fill(0, 170, 0)
    ellipse(2400, 400, 130)
    pop();
  }
  if(rect3_1check === true)
  {
    push()
    strokeWeight(7)
    stroke(250)
    fill(0, 170, 0)
    ellipse(2250, 400, 130) 
    pop();
  }
} 


function stageEffect_4() {
  print(keyInput)
  push()
  createCanvas(2500, 1000);
  background(0);
  pop()
  
  push()
  ellipseMode();
  ellipse(width/5, height*2/3, 100)
  ellipse(width*1/2, height*2/3, 100)
  ellipse(width*4/5, height*2/3, 100)
  pop()

  push()
  stroke(255);
  strokeWeight(5);
  line(width/5, height*2/3, width*4/5, height*2/3);
  pop()

  push();
  //KMU mark
  imageMode(CENTER)
  image(kmuImage, kmuWidth, kmuHeight, 400, 450)

  kmuWidth += 13;
  if(kmuWidth > 2000)
  {
    kmuWidth = 2000
  }
  pop();
  //effect
  push();
  if(kmuWidth === 2000)
  {
    theta = radians(degree);
    kmuHeight = 366 + height/15* sin(theta/2);
    degree += 8;
  
    push()
    fill(255);
    textSize(50);
    textAlign(CENTER);
    text('Ending: "Shift"', 1250, height*5.6/6)
    pop()
    push()
    fill(255);
    textSize(100);
    textAlign(CENTER)
    text("All Stage Clear!!", 1250, height*5/6)
    pop()
    if(keyIsPressed && keyCode === 16)
    {
      if(keyInput === false)
      {
        keyInput = true;
        stageCheck = false
        stage = 'ending'
        if(languageCheck === 'korean')
        {
          endingSoundCheck = true
          cutScene = 'cut19'
        }
        if(languageCheck === 'english')
        {
          endingSoundCheck = true
          cutScene = 'cutE19'
        } 
      }      
    }
    else
    {
      keyInput = false;
    }
    pop();
  }
  pop();
}


//console typing
//Referred to p5.js official reference
//https://editor.p5js.org/michellu0929/sketches/KL0ydodUa
function consol_intro() { //Location: cut_Scene.js / language()
  push();
  stroke(255);
  strokeWeight(10);
  fill(0);
  rectMode(CENTER);
  rect(width/2, 300, 800, 400);
  pop();

  push()
  fill(255, 255, 0);
  
  textSize(60);
  text('> ' + contents, 630, 180)
  pop();

  if(match(contents,"Enter") == "Enter") //close console
  {
    contents = "";
  }
}
function consol_1() {
  push();
  stroke(255);
  strokeWeight(10);
  fill(0);
  rect(0, 0, 800, 400);
  pop();

  push()
  fill(255, 255, 0);
  
  textSize(60);
  text('> ' + contents, 20, 60)
  pop();
}
function consol_3() {
  push();
  strokeWeight(10);
  if(ellipse3_1check === true)
  {
    stroke(255);
    fill(0);
  }
  else
  {
    stroke(255, 255, 255, 180);
    fill(0, 0, 0, 190);
  }
  rect(0, 0, 850, 400);
  pop();

  push()
  if(ellipse3_1check === true)
  {
    fill(255, 255, 0);
  }
  else
  {
    fill(255, 255, 0, 100);
  }
  textSize(60);
  text('> ' + contents, 20, 60)
  pop();
}
function keyTyped() {

  contents += key;
}
function keyReleased(){
  if (keyCode == BACKSPACE)
  {
    contents = contents.substring(0, contents.length -1); 
  }
  
}