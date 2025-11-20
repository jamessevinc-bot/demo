let collection = []
var ballCount = 200
function setup() {
  createCanvas(400, 400);
  for(i=0;i<ballCount;i++){
    collection.push({
    size: random(3,10),
    x: random(0,width),
    y: random(0,100),
    speed: random(1,5)                    
    })

  }
}

function draw() {
background(220);
for(j=0; j<collection.length;j++){
  collection[j].y += collection[j].speed
  ellipse(collection[j].x,collection[j].y,collection[j].size)
  if(collection[j].y>=400){
  collection[j].y = 0
  collection[j].x = random(0,width)
  collection[j].speed = random(1,5) 
}
}
}
