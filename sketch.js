var gardenImg;
var cat,cat1,cat2,cat3,cat4;
var mouse,mouse1,mouse2,mouse3,mouse4;

function preload() {
    //load the images here
    
    // Background Image
    gardenImg=loadImage("garden.png");
    //Cats Images
    cat1=loadImage("cat1");
    cat2=loadImage("cat2");
    cat3=loadImage("cat3");
    cat4=loadImage("cat4");

    // Mouse Images
    mouse1=loadImage("mouse1.png");
    mouse2=loadImage("mouse2.png");
    mouse3=loadImage("mouse3.png");
    mouse4=loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat= createSprite(900,600);
    mouse= createSprite(200,600);
    cat.addAnimation("catSetting",cat1);
    mouse.addAnimation("mouseSetting",mouse1);
    mouse.scale=0.15;
    cat.scale=0.25;
    keyPressed();
}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("catImage",cat3);
        cat.x=300;
        cat.scale=0.2;
        mouse.addAnimation("mouseImage",mouse3);
        mouse.scale=0.15;
    
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
mouse.addAnimation("mouse2Animation",mouse2);
cat.velocityX=-5;
cat.addAnimation("cat2Animation",cat2);


}
