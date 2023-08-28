let cameraX = 0;
let cameraX1 = 0;
let cameraZ = 300;
let cameraY = 0;
let moveSpeed = 15;
let rotationSpeed = 75;
let sphereX = random(-200, 200); 
let sphereY = random(-200, 200);
let sphereZ = -1000;

// Insert images
function preload()
{
  Skov = loadImage("Billeder/Skov.jpg");
  Night = loadImage("Billeder/Night.webp");
  Bjerg = loadImage("Billeder/Bjerg.png");
  Havet = loadImage("Billeder/Sea.avif");
  Desert = loadImage("Billeder/desert.jpg");
  Cave = loadImage("Billeder/Cave.avif");
}

function setup() 
{
  createCanvas(600, 500, WEBGL);
  angleMode(DEGREES);
}


function draw() 
{
  background(50);

 
  // Allows seeing with mouse
  if (mouseIsPressed && mouseButton === LEFT)
  {
  let cameraYRotation = map(mouseX, 0, width, -rotationSpeed, rotationSpeed);
  let cameraXRotation = map(mouseY, 0, height, -rotationSpeed, rotationSpeed);
  
  rotateX(-cameraXRotation);
  rotateY(-cameraYRotation);
  }

  noStroke();

  push();
  sphereZ = sphereZ + moveSpeed+40;
  translate(sphereX, sphereY, sphereZ);
  fill(red,green,blue);
  box(50,50,50);
  
  if (sphereZ > 300)
  {
    sphereZ = -1000;

    sphereX = random(-100, 100); 
    sphereY = random(-100, 100);

    if ( cameraX - sphereX < 50 && cameraX - sphereX > -50)
    {
      red = random(0,250);
      green = random(0,250);
      blue = random(0,250);
    
    }
  }
  pop();



  //Insert plane
  texture(Cave);
  minPlane(0,0, 0,0,200, 400,400);

  texture(Desert);
  //minPlane(0,0, 0,0,-200, 400,400);
 
  texture(Bjerg);
  minPlane(0,-90, 0,0,-200, 400,400);

  texture(Skov);
  minPlane(0,90, 0,0,-200, 400,400);

  push();
  texture(Night);
  minPlane(-90,0, 0,0,-200, 400,400);
  pop();

  push();
  texture(Havet);
  minPlane(90,0, 0,0,-200, 400,400);
  pop();


  // Allows movement with 'WASD'
  if (keyIsDown(87)) // W 
  { 
    cameraZ = cameraZ - moveSpeed;
  }

  if (keyIsDown(83)) // S 
  { 
    cameraZ = cameraZ + moveSpeed;
  }
  
  if (keyIsDown(65)) // A
  { 
    cameraX = cameraX - moveSpeed;
  }

  if (keyIsDown(68)) // D
  { 
    cameraX = cameraX + moveSpeed;
  }
  
  if (keyIsDown(32)) // Space
  {
    cameraY = cameraY - moveSpeed;
  }

  if (keyIsDown(17)) // Ctrl
  {
    cameraY = cameraY + moveSpeed;
  }

  if (keyIsDown(81)) // Q
  {
    cameraX1 = cameraX1 - moveSpeed;
  }

  if (keyIsDown(69))// E
  {
    cameraX1 = cameraX1 + moveSpeed * 1;
  }

  // camera position

  

  camera(cameraX, cameraY, cameraZ-75, cameraX + cameraX1, cameraY, cameraZ-300, 0, 1, 0);

  
}


//Create the function for the planes
function minPlane (VX,VY, x,y,z, a,b)
{
  push();
  rotateX(VX);
  rotateY(VY);
  translate(x, y, z);
  plane(a, b);
pop();
}