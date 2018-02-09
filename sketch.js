var array = [10, 50, 2, 40, 15, 47, 23, 8, 49, 27, 13, 40, 35, 17, 30, 19];
var colors = [];

var randomize;
var next, previous, reset;
var sorted=0;
var run;
var delay=0;

var n=16;
var ii=16,jj=16;
//var ii = 1, jj = 16, n = 16;
var p=0,q=0;

function setup () {
  createCanvas(windowWidth, windowHeight - 40);
  randomizeArray();
  
  randomize = createButton("Randomize Array");
  randomize.mouseClicked(randomizeArray);

  for (var i = 0; i < n; i++) {
    colors.push("#BBDEFB");
  }

  next = createButton("Next Step");
  next.mouseClicked(nextStep);
  
  run=createButton("run");
  run.mouseClicked(runFun);
  		
  // previous = createButton("Previous Step");
  // previous.mouseClicked(previousStep);

  reset = createButton("Reset");
  reset.mouseClicked(function(){
    location.reload();
  });

}

function draw () {
  background(51);

  fill(250);
  textFont('monospace');
  textSize(25);
  text("Bubble Sort", 15, 40);
  fill(100);
  textSize(15);

  noFill();
  noStroke();

  for (var i = 0; i < array.length; i++) {
	if(color[i+1]=="#388E3C")
	{
			
	}
	else{
		
	if (i == q) {
      colors[i] = "#FF1744";
	  colors[i+1]="#FF1744";
	  i=i+1
    } else if (jj<i) {
       colors[i] = "#388E3C";
    }
	else {
      colors[i] = "#BBDEFB";
    }
	}
   }
  
  printArrayBar(array);

  if (sorted==1) {
	  for (var i = 0; i < array.length; i++)
	  {
		 colors[i] = "#388E3C"; 
	  }
	  printArrayBar(array);
    // textSize(32);
    fill(250);
    text("Array Sorted!", 15, height - 50);
  }
}

function randomizeArray () {
    for (var i = 0; i < n; i++) {
      array[i] = Math.floor(Math.random() * 50 + 1);
	}
	p=0;
	q=0;
}

function printArrayBar (array) {

  for (var i = 0; i < array.length; i++) {
    fill(colors[i]);
    printBar(300 + i * 50, y = height - 50, array[i]);
  }
}

function printBar (x, y, number) {

  var ratio = number * 7;
  rect(x, y - ratio, 30, ratio);
  text(number, x + 5, y + 25);
}

function nextStep () {
	if(p<ii)
	{
	  print(p)
	  if(q<(jj-1))
	  {
		  print(q)
		if(array[q]>=array[q+1])
		{
			var temp=array[q];
			array[q]=array[q+1];
			array[q+1]=temp;
		}
		q=q+1;
	  }
	  else
	  {
		  q=0;
		  p++;
		  jj=jj-1;
	  }
	}
	else
	{
		sorted=1;
		print("sorting complete")
		
	}
	print(array)
  // if (ii < n) {
    // if (jj > 0 && array[jj - 1] > array[jj]) {
      // var temp = array[jj];
      // array[jj] = array[jj - 1];
      // array[jj - 1] = temp;

      // jj--;
    // } else {
      // ii++;
      // jj = ii;
    // }
  // }
}

function previousStep () {

}

function runFun(){
	
	for(i=0;i<15,p<ii;i++)
	{
		/*while(delay<10000000)
		{
			delay=delay+1;
		}
		delay=0;
		nextStep ();
		while(delay<10000000)
		{
			delay=delay+1;
		}
		delay=0;*/

		delay_sec(100);
		nextStep ();
	}
	
}

function delay_sec(sec){
	for(i=0;i<sec;i++)
	{
		for(j=0;j<sec;j++)
		{
			
		}
	}
}