//cut draw
function language() {
  createCanvas(2000, 1050)
  background(0);
  consol_intro();

  //next
  if(keyIsPressed && keyCode === 16)
  {
    if(keyInput === false && languageCheck === 'korean')
    {
      cutScene = 'cut0';
      keyInput = true;
    }
  }
  else
  {
    keyInput = false;
  }

  if(keyIsPressed && keyCode === 16)
  {
    if(keyInput === false && languageCheck === 'english')
    {
      cutScene = 'cutE0';
      keyInput = true;
    }
  }
  else
  {
    keyInput = false;
  }  

  //languageCheck
  if(contents === 'korean' || contents === "Korean" || contents === "KOREAN")
  {
    languageCheck = 'korean' 
  
    push();
    fill(255);
    textSize(80);
    textAlign(CENTER);
    text("You chose Korean!", width/2, 750)
    text("Press 'shift'", width/2, 900)
    pop(); 
  }
  else if(contents === 'english' || contents === "English" || contents === "ENGLISH")
  {
    languageCheck = 'english'


    push();
    fill(255);
    textSize(80);
    textAlign(CENTER);
    text("You chose English!", width/2, 750)
    text("Press 'shift'", width/2, 900)
    pop(); 
  }
  else
  {
    languageCheck = '' 
    push();
    fill(255);
    textSize(80);
    textAlign(CENTER);
    text("Please type the language you want to use", width/2, 750)
    text("[ Korean or English ]", width/2, 900)
    pop();   
  }


}
function cutDraw() {
  korean_Draw()
  English_Draw()
}
function korean_Draw() {
  if(cutScene === 'language' && stageCheck === false)
  {
    language();
  }

  //intro
  for(let i = 0; i <=18; i++)
  {
    imageNum = cut[i];
    cutNum = 'cut' + i;
    if(cutScene === cutNum && stageCheck === false)
    {
      cut(i);
    }
  }
  
  // cut18 -> stage1~3 -> cut19

  //Ending
  for(let i = 19; i <=30; i++)
  {
    imageNum = cut[i];
    cutNum = 'cut' + i;
    if(cutScene === cutNum && stageCheck === false && languageCheck === 'korean')
    {
      cut(i);
    }
  }
}
function English_Draw() {
  if(cutScene === 'language' && stageCheck === false)
  {
    language();
  }

  for(let i = 0; i <=18; i++)
  {
    imageNum = cutE[i];
    cutNum = 'cutE' + i;
    if(cutScene === cutNum && stageCheck === false)
    {
      cutE(i);
    }
  }

  // cutE18 -> stage1~3 -> cutE19

  //Ending
  for(let i = 19; i <=30; i++)
  {
    imageNum = cutE[i];
    cutNum = 'cutE' + i;
    if(cutScene === cutNum && stageCheck === false && languageCheck === 'english')
    {
      cutE(i);
    }
  }  
}

//1.
//                         cutScene = 'cut0'(korean)  
// function language() ->                     
//                         cutScene = 'cutE0'(English) 


//create cut image
function cut(i) { //Korean
  if(i > 18)
  {
    introSoundCheck = false;
  }
  else
  {
    introSoundCheck = true;
  }
  
  //variable
  imageNum = cut[i];
  nextCut = 'cut' + (i+1);

  //cutCondition
  if(i >= 14 && i <= 18)
  {
    createCanvas(2500, 1000)
    image(imageNum, 0, 0, 2500, 1000); //cut14~cut18 image size
  }
  else
  {
    createCanvas(2000, 1050)
    image(imageNum, 0, 0, 2000, 1050); //cut1~cut13 image size
  }

  if(i === 18) //cut18 to stage1
  {
    if(keyIsPressed && keyCode === 16)
    {
      if(keyInput === false)
      {
        stage = 'stageEffect1'
        keyInput = true;
        stageCheck = true;
        introSoundCheck = false;
      } 
    }
    else
    {
      keyInput = false;
    }
  }

  if(cutScene === 'cut19')
  {
    introSoundCheck = false
    backgroundCheck = false
  }

  //next scene
  if(keyIsPressed && keyCode === 16)
  {
    if(keyInput === false)
    {
      cutScene = nextCut;
      keyInput = true;
    }
  }
  else
  {
    keyInput = false;
  }
}
function cutE(i) { //English
  if(i > 18)
  {
    introSoundCheck = false;
  }
  else
  {
    introSoundCheck = true;
  }
  

  imageNum = cutE[i];
  nextCut = 'cutE' + (i+1);

  if(i >= 14 && i <= 18) //cut14~cut18 image size
  {
    createCanvas(2500, 1000)
    image(imageNum, 0, 0, 2500, 1000);
  }
  else
  {
    createCanvas(2000, 1050)
    image(imageNum, 0, 0, 2000, 1050); //cut1~cut13 image size
  }

  if(i === 18) //cut18 to stage1
  {
    if(keyIsPressed && keyCode === 16)
    {
      if(keyInput === false)
      {
        stage = 'stageEffect1'
        keyInput = true;
        stageCheck = true;
        introSoundCheck = false;
      } 
    }
    else
    {
      keyInput = false;
    }
  }

  if(cutScene === 'cutE19')
  {
    introSoundCheck = false
    backgroundCheck = false
  }

  //next scene
  if(keyIsPressed && keyCode === 16)
  {
    if(keyInput === false)
    {
      cutScene = nextCut;
      keyInput = true;
    }
  }
  else
  {
    keyInput = false;
  }
}
//2.
//cutScene = 'cut0'(korean)  ->  cut(0) //create image -> [shift key] -> cutScene = 'cut1' //↑ cutDraw() again -> cut(1) -> ...
//
//cutScene = 'cutE0'(English) -> cutE(0) //create image -> [shift key] -> cutScene = 'cut1' //↑ cutDraw() again -> cutE(1) -> ...