var satellite, earth, earth1, jupiter, sun, callisto, pluto, blackHole, PLAY, asteroid, asteroid_img1, asteroid_img2, earth_moon, earth_moon_img, moon, mars, mars_image, asteroid, ast1, ast2, ast1_image, ast2_image;
var europa, europa_img;
var gameState = PLAY;


function preload()
{
  background1 = loadImage("images/Dbg1.jpg");
  background3 = loadImage("images/Dbg3.jpg");
  background4 = loadImage("images/Dbg4_long.jpg");
  space_asteroid = loadImage("images/space_ast.png");

  satellite1_up = loadImage("images/satellite_image.png");
  satellite2_down = loadImage("images/satellite_down.jpg");
  satellite3_right = loadImage("images/satellite_right.jpg");
  satellite4_left = loadImage("images/satellite_left.jpg");

  satellite11_up = loadImage("images/satellite2_up.png");
  satellite22_down = loadImage("images/satellite2_down.png");
  satellite33_right = loadImage("images/satellite2_right.png");
  satellite44_left = loadImage("images/satellite2_left.png");

  jupiter_image = loadAnimation("images/jupiter.gif");
  callisto_image = loadAnimation("images/callisto.jpg");
  pluto_image = loadAnimation("images/pluto_planet.gif");

  earth = loadAnimation("images/earth.gif");
  sun_image = loadAnimation("images/sun7.gif");
  blackhole_image = loadImage("images/blackholeimage.gif");
  earth_moon_img = loadAnimation("images/earth_moon.gif");
  mars_image = loadAnimation("images/mars_image.gif");

  europa_img = loadAnimation("images/eurpoa.gif");

  notifi = loadSound("sounds/space_notifcation_sound.mp3");
  ast1_image = loadImage("images/ast1_img.png");
  ast2_image = loadImage("images/ast2_img.png");

  
}

function setup() {
  createCanvas(1380,700);
  
  //createSprite(400, 200, 50, 50);


  earth1 = createSprite(displayWidth/2, 300, 10, 10);
  earth1.addAnimation("earth_spinning", earth);
  earth1.scale = 0.5;
  
  jupiter = createSprite(-1100, -4000, 10, 10);
  jupiter.addAnimation("jupiter_spinning", jupiter_image);
  jupiter.scale = 0.5;

  europa = createSprite(1200, -4200, 100, 100);
  europa.addAnimation("europa", europa_img);
  //europa.scale = 0.3;

  satellite = createSprite(displayWidth/2, 138, 10, 10);
  satellite.addAnimation("satellite_spinning", satellite1_up);
  satellite.scale = 0.3;

  sun = createSprite(displayWidth/2, 1300, 10, 10);
  sun.addAnimation("sun_animation", sun_image);
  sun.scale = 2.4;

  pluto = createSprite(100, 300, 10, 10);
  pluto.addAnimation("pluto_spinning", pluto_image);
  pluto.scale = 0.3;

  earth_moon = createSprite(-177, -508, 10, 10);
  earth_moon.addAnimation("moon_spinning", earth_moon_img);
  earth_moon.scale = 0.1;

  mars = createSprite(-1500, -2000, 10, 10);
  mars.addAnimation("mars_spinning", mars_image);
  mars.scale = 1.5;

}

function draw() {
  background(background3); 
  gameState = PLAY;

 if(gameState === PLAY)
 {
  camera.position.x = satellite.x;
  camera.position.y = satellite.y;

  textSize(20);
  fill("WHITE")
  text("X:"+satellite.x, camera.position.x+500, camera.position.y-300)
  fill("WHITE")
  text("Y:"+satellite.y, camera.position.x+500, camera.position.y-280)
  
  // command's given to satellite to change it's position;
        if(keyIsDown(UP_ARROW))
        {
            satellite.y = satellite.y-=2;
        }
        if(keyIsDown(DOWN_ARROW))
        {
            satellite.y = satellite.y+=2;
        }
        if(keyIsDown(RIGHT_ARROW))
        {
            satellite.x = satellite.x+=2;
        }
        if(keyIsDown(LEFT_ARROW))
        {
            satellite.x = satellite.x-=2;
        }

        if(satellite.y<300 && satellite.y>-100)
        {
          fill("YELLOW");
          textSize(20);
          text("Welcome to the 'Mystery of the Lost Planet' || Use Arrow keys to navigate", camera.position.x-680, camera.position.y-300)
        }
        if(satellite.y<300 && satellite.y>-100)
        {
          fill("YELLOW");
          textSize(20);
          text("Captain! we are ready, proceed to the cords [y:-120] || Instruction's will be given", camera.position.x-680, camera.position.y-250)
        }
        if(satellite.y<300 && satellite.y>-100)
        {
          fill("AQUA");
          textSize(20);
          text("Cordinates", camera.position.x+480, camera.position.y-260)
        }
        if(satellite.y<-100 && satellite.y>-350)
        {
          fill("CYAN");
          textSize(20);
          text("Command Center: Welcome! CAPTAIN", camera.position.x-680, camera.position.y-300)
        }
        if(satellite.y<-100 && satellite.y>-350)
        {
          fill("CYAN");
          textSize(20);
          text("We will be informing you the instrunction on your screen", camera.position.x-680, camera.position.y-270)
        }
        if(satellite.y<-100 && satellite.y>-480)
        {
          fill("CYAN");
          textSize(20);
          text("Kindly continue going upwards", camera.position.x-680, camera.position.y-240)
          //.loop(true);
          //notifi.play();
        }
        if(satellite.y<-100 && satellite.y>-110)
        {
          notifi.play();
        }
        if(satellite.y<-500 && satellite.y>-800)
        {
          fill("CYAN");
          textSize(20);
          text("Captain! We got come cords of plantes, you may explore if you want", camera.position.x-680, camera.position.y-300)
        }

        if(satellite.y<-500 && satellite.y>-510)
        {
          notifi.play();
        }

        if(satellite.y<-500 && satellite.y>-800)
        {
          fill("CYAN");
          textSize(20);
          text("Earth's Moon = x,-177 | y,-508", camera.position.x-680, camera.position.y-270)
        }
        if(satellite.y<-500 && satellite.y>-800)
        {
          fill("CYAN");
          textSize(20);
          text("Mars = x,-1500 | y,-2000", camera.position.x-680, camera.position.y-240)
        }
        if(satellite.y<-500 && satellite.y>-800)
        {
          fill("CYAN");
          textSize(20);
          text("Proceed to the cords y, -800", camera.position.x-680, camera.position.y-210)
        }
        if(satellite.y<-800 && satellite.y>-900)
        {
          fill("CYAN");
          textSize(20);
          text("Captain! we got some bad news........", camera.position.x-680, camera.position.y-300)
        }
        if(satellite.y<-800 && satellite.y>-900)
        {
          fill("CYAN");
          textSize(20);
          text("continue going in the negative Y direction", camera.position.x-680, camera.position.y-270)
        }
        if(satellite.y<-800 && satellite.y>-900)
        {
          fill("CYAN");
          textSize(20);
          text("You are about to cross the asteroid belt between", camera.position.x-680, camera.position.y-240)
        }
        if(satellite.y<-800 && satellite.y>-900)
        {
          fill("CYAN");
          textSize(20);
          text("We are speeding up your speed || head in the upward direction fastly !!", camera.position.x-680, camera.position.y-210)
          if(keyIsDown(UP_ARROW)){
            satellite.y = satellite.y-=2.9;
          }
        }
        }

        if(satellite.y<-3000 && satellite.y>-3300)
         {
          fill("LIME");
          textSize(20);
          text("Congratulation's!!! You have crossed the asteroid belt!", camera.position.x-680, camera.position.y-330)
         }
         if(satellite.y<-3000 && satellite.y>-3300)
         {
          fill("WHITE");
          textSize(20);
          text("Alert!! You are about to get caught in jupiter's atmosphere", camera.position.x-680, camera.position.y-300)
         }
         if(satellite.y<-3000 && satellite.y>-3400)
         {
          fill("WHITE");
          textSize(20);
          text("Alert!! change your X cords between 1100-1180 And countinue going up", camera.position.x-680, camera.position.y-270)
         }
         /*if(satellite.y<-2200 && satellite.y>-2300)
        {
          fill("WHITE");
          textSize(20);
          text("Jupiter = x, -1100, | y, -4000", camera.position.x-680, camera.position.y-300)
         }*/
         if(satellite.y<-3000 && satellite.y>-4000)
         {
          fill("LIME");
          textSize(20);
          text("Goal1: Reach the moon of jupiter || Cords: x, 1200 | y,-4200", camera.position.x-680, camera.position.y-240)
         }



         if(satellite.y<-900 && satellite.y>-3000)
         {
          background(space_asteroid)

          textSize(20);
          fill("WHITE")
          text("X:"+satellite.x, camera.position.x+500, camera.position.y-300)
          fill("WHITE")
          text("Y:"+satellite.y, camera.position.x+500, camera.position.y-280)

          if(keyIsDown(UP_ARROW)){
            satellite.y = satellite.y-=5;
          }
          if(keyIsDown(DOWN_ARROW)){
            satellite.y = satellite.y+=5;
          }
          if(keyIsDown(LEFT_ARROW)){
            satellite.x = satellite.x-=5;
          }
          if(keyIsDown(RIGHT_ARROW)){
            satellite.x = satellite.x+=5;
          }

          if(frameCount % 20 === 0)
          {
            var asteroid = createSprite(random(0, 1500), camera.position.y-800, 10, 10);
            asteroid.velocityY = 10;
            asteroid.lifetime = 3000;
            asteroid.addImage(ast1_image);
            asteroid.scale = 0.3;
          }
          if(frameCount % 40 === 0)
          {
            var asteroid2 = createSprite(random(0, 1500), camera.position.y-800, 10, 10);
            asteroid2.velocityY = 10;
            asteroid2.velocityX = -2;
            asteroid2.lifetime = 3000;
            asteroid2.addImage(ast2_image);
            asteroid2.scale = 0.1;
          }

        }
     
            if(satellite.isTouching(europa)){
              textSize(20)
              fill("LIGHTGREEN");
              text("Getting planet Pluto Cordinates..........", 1199, -4200);
            }
            if(satellite.y<-4000)
            {
              textSize(20)
              fill("CYAN");
              text("Pluto Cordinate's = x:00, y:00")
            }
            


  drawSprites();
}

 
  

  

        

 

/*function end()
{
  background(background1);

  fill("RED");
  textSize(40)
  text("||SATELLITE DESTROYED|| (Reload to restart)", displayWidth/2-200, displayHeight/2);

  console.log("Reload to play again");
}*/