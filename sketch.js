var bg,cat,catIMG1,catIMG2,mouseIMG1,mouseIMG2,mouse
function preload() {
    //load the images here
    bg=loadImage("images/garden.png");
    catIMG1=loadAnimation("images/cat1.png");
    catIMG2=loadAnimation("images/cat2.png","images/cat3.png");
    catIMG3=loadAnimation("images/cat4.png")

    //mouse images
    mouseIMG1=loadAnimation("images/mouse1.png");
    mouseIMG2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseIMG3=loadAnimation("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(900,600);
    cat.addAnimation("catsleeping",catIMG1);
    cat.scale=0.2;

    mouse=createSprite(200,600);
    mouse.addAnimation("mousestanding",mouseIMG1);
    mouse.scale=0.2;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<cat.width/2-mouse.width/2){
       cat.velocityX=0;
       cat.addAnimation("catIMG3",catIMG3);
       cat.x=300;
       cat.scale=0.2;
       cat.changeAnimation("catIMG3");
       mouse.addAnimation("mouseIMG3",mouseIMG3);
       mouse.scale=0.2;
       mouse.changeAnimation("mouseIMG3");


        }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseIMG2);
    mouse.changeAnimation("mouseTeasing");
}
if(keyCode === LEFT_ARROW){
    cat.velocityX=-5
    cat.addAnimation("catRunning",catIMG2);
    mouse.changeAnimation("catRunning");
}

}
