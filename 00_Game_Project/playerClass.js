class Player {
    constructor() {
        this.img_Person = loadImage('image/person_Right.png');
        this.img_Right = loadImage('image/person_Right.png');
        this.img_Left = loadImage('image/person_Left.png');

        this.px = 100
        this.py = 750
        this.pw = 80
        this.ph = 150
        this.movingVel = 13
    }
    person() {
        image(this.img_Person, this.px, this.py - 50, 150, 200);
    } 
    moving() {
        //moving
        if(keyIsDown(LEFT_ARROW))
        {
            this.px -= this.movingVel;
            this.img_Person = this.img_Left
        }
        if(keyIsDown(RIGHT_ARROW))
        {
            this.px += this.movingVel;
            this.img_Person = this.img_Right
        }
    }
    jumpF() { //"Mr.Erdreich"'s youtube reference.
              //https://www.youtube.com/watch?v=StoBCNiQakM&t=485s
         //jumpCheck
        if(keyIsDown(UP_ARROW))
        {
          jump = true;
          jumpSoundCheck = true
          if(jumpSoundCheck === true)
          {
            jumpSound.play();
            jumpSound.volume(0.5)
          }
        }
        else
        {
          jump = false;
        }
      
        //realJump
        if(this.py >= ground-ph && jump == false)
        {
          
          if(this.px > 700 && this.px < 1690-pw)
          {
            this.py += fallVelocity;
          }
          jumpCount = 0; 
      
        }
        else
        {
            this.py += velocity; 
        }
      
        if(jump == true)
        {
          if(jumpCount >= jumpPower) 
          {
            if(this.py > ground)
            {
                this.py = 750 
            }
            else
            {
              velocity = fallVelocity;
            } 
          }
          else
          {
            velocity = -jumpPower;
            jumpCount = jumpCount + 0.7; 
          }
        }
        else
        {
          velocity = fallVelocity; 
        }
    }
}