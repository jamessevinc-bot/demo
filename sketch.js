let collection = []
var ballCount = 200
function setup() {
  createCanvas(400, 400);
  for(i=0;i<ballCount;i++){
    collection.push({
    size: random(30),
    x: random(0,width),
    y: random(0,100),
    speed: random(1,5)                    
    })

  }
}
var snowflake1 = 0
var snowflake2 = 0
var snowflake3 = 0
function preload (){
  snowflake1 = loadImage("Images/snowflake0.png")
  snowflake2 = loadImage("Images/snowflake1.png")
  snowflake3 = loadImage("Images/snowflake2.png")
}

function draw() {
background(220);
for(j=0; j<collection.length;j++){
  collection[j].y += collection[j].speed
  if(j%2==0){
  image(snowflake1,collection[j].x,collection[j].y,collection[j].size,collection[j].size)
  }
  if(j%3==0){
  image(snowflake2,collection[j].x,collection[j].y,collection[j].size,collection[j].size)
  }
  else{
  image(snowflake3,collection[j].x,collection[j].y,collection[j].size,collection[j].size)
  }
  if(collection[j].y>=400){
  collection[j].y = 0
  collection[j].x = random(0,width)
  collection[j].speed = random(1,5) 
}
}
}
