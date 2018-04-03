var angle = 0;
var angle_slider, length_slider, depth_slider;
var len = 200;
var depth = 4;

var instruction = "Change Length and Angle using Sliders"

function setup () {
  var mycan=createCanvas(windowWidth, windowHeight - 40);
  mycan.parent('sketch-holder');
  var v1=createSpan("  |  ");
  v1.parent('sketch-holder');
  var v2=createSpan("Angle : ");
  v2.parent('sketch-holder');
  
  angle_slider = createSlider(0, TWO_PI, PI / 4, 0.01);
  angle_slider.parent('sketch-holder');
  var v3=createSpan("  |  ");
  v3.parent('sketch-holder');
  var v4=createSpan("Length : ");
  v4.parent('sketch-holder');
  length_slider = createSlider(0, 300, 200);
  length_slider.parent('sketch-holder');
  var v5=createSpan("  |  ");
  v5.parent('sketch-holder');
  var v6=createSpan("Depth : ");
  v6.parent('sketch-holder');
  depth_slider = createSlider(0, 5, 4, 0.5);
  depth_slider.parent('sketch-holder');
}

function draw () {
  background(51);

  fill(250);
  noStroke();
  textFont('monospace');
  textSize(25);
  text("Fractal Tree", 15, 40);
  textSize(20);
  text(instruction, 15, windowHeight - 60);
  fill(100);
  noFill();
  noStroke();

  stroke(250);
  translate(width / 2, height);
  angle = angle_slider.value();
  len = length_slider.value();
  depth = depth_slider.value();

  branch(len);
  // text(angle, 100, 100);
}

function branch (len) {
  line(0, 0, 0, -len);
  translate(0, -len);

  if (len > depth) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }

}
