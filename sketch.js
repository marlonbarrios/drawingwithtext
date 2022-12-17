

var x = 0;
var y = 0;
var stepSize = 6.0;

var font = 'helvetica';

var letters=[];

var fontSizeMin = 20;
var angleDistortion = 0.0;

var counter = 0;

let gd;


function setup() {
  // use full screen size
  createCanvas(windowWidth, windowHeight);
  background(245);
  cursor(CROSS);
  x = mouseX;
  y = mouseY;
  textFont(font);
  fill(random(0,255), random(0,100), random(0,100));
  textAlign(LEFT,);
  loadJSON('https://type.fit/api/quotes', gotData);
}

function gotData(data) {
  letters = data[Math.floor(random(0, data.length))];
  console.log(letters); 
  textSize(30);0
  text(letters.author, width-300, height-40);
}

function draw() {
  if (mouseIsPressed && mouseButton == LEFT) {
    var d = dist(x, y, mouseX, mouseY);
    textSize(fontSizeMin + d / 2);
    var newLetter = letters.text.charAt(counter);;
    stepSize = textWidth(newLetter);
    if (d > stepSize) {
      var angle = atan2(mouseY - y, mouseX - x);

      push();
      translate(x, y);
      rotate(angle + random(angleDistortion));
      text(newLetter, 0, 0);
      pop();
      counter++;
     if (counter >= letters.text.length) counter = 0;
      x = x + cos(angle) * stepSize;
      y = y + sin(angle) * stepSize;
    
    }
  }
}

function mousePressed() {
  x = mouseX;
  y = mouseY;
}

function keyPressed() {
  if (key == 's' || key == 'S') {
    save('myCanvas.jpg');
  }
}



