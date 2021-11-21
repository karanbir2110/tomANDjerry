var tom;
var jerry;


function preload() {
    //load the images here
    bgimage = loadImage("images/garden.png");
    cat1  = loadAnimation("images/cat1.png")
    mouse1 = loadAnimation("images/mouse1.png");
    catmoving = loadAnimation("images/cat2.png","images/cat3.png")
    mouseteasing = loadAnimation("images/mouse2.png","images/mouse3.png")
    catend = loadAnimation("images/cat4.png");
    mouseend = loadAnimation("images/mouse4.png");


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   tom = createSprite(800,600);
   tom.addAnimation("catsitting",cat1);
   tom.scale = 0.2;

   jerry = createSprite(200,600);
   jerry.addAnimation("mouserunning",mouse1)
   jerry.scale = 0.2;

}

function draw() {

    background(bgimage);
    //Write condition here to evalute if tom and jerry collide
     
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.addAnimation("cat4",catend);
        tom.changeAnimation("cat4");
        tom.velocityX = 0;

        jerry.addAnimation("mouse4",mouseend);
        jerry.changeAnimation("mouse4");


    }


    drawSprites();

}


function keyPressed(){

  //For moving and changing animation write code here
   if(keyCode === LEFT_ARROW){
       tom.velocityX = -2
       tom.addAnimation("cat2",catmoving);
       tom.changeAnimation("cat2")

       jerry.addAnimation("mouse2",mouseteasing);
       jerry.changeAnimation("mouse2");
   }

}
