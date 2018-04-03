//var page=[1,2,2,1,3,4,2,3,4,5];
var page=[];
var pageFrame;
var pageReplace=[];
var pagePosition=[];
var positionK=[];
var positionP=[];
//var page=[];
//var pageFrame=0;
//var pageReplace=[];
var counter=0;

var isRun=false;
var isFrame=false;
var NumFault=0;
var k=0;
var p=0;
function setup() 
{
	var mycan = createCanvas(windowWidth, windowHeight - 40);
	mycan.parent('sketch-holder');
	//createCanvas(windowWidth, windowHeight-40);
	
	bexample=createButton("pre entered page");
	bexample.mouseClicked(bexample_click);
	bexample.parent('sketch-holder');
	
	input1=createInput();
	input1.parent('sketch-holder');
	
	
	
	bpageframe = createButton("page frame");
	bpageframe.mouseClicked(bpageframe_click);
	bpageframe.parent('sketch-holder');
	
	input2=createInput();
	input2.parent('sketch-holder');
	
	bpageEnter=createButton("Enter page");
	bpageEnter.mouseClicked(bpageEnter_click);
	bpageEnter.parent('sketch-holder');
	
	brun=createButton("Run");
	brun.mouseClicked(brun_click);
	brun.parent('sketch-holder');
	
	bnext=createButton("Next");
	bnext.mouseClicked(bnext_click);
	bnext.parent('sketch-holder');
	
}



function draw() 
{
	background(51);
	drawName();
	
	push();
	fill(3, 249, 171);
	stroke(20);
	strokeWeight(5);
	var x=100;
	var y=100;
	if(page.length>=10)
	{
		bpageEnter.attribute("disabled","");
	}
	for(var i=0;i<page.length;i++)
	{
		rect(x+i*50,y,50,50);
		push();
		noStroke();
		textSize(20);
		fill(7,7,7);
		text(page[i],x+17+i*50,129);
		pop();
	}
	pop();
	
	push();
		textFont('monospace');
		textSize(20);
		fill(153, 133, 64);
		text("Entered Page list", 100, 90);
	pop();
	
	if(isFrame==true)
	{
		x=100;y=250;
		for(var i=0;i<pageFrame;i++)
		{
			push();
				fill(252, 93, 226);
		//stroke(20);
		strokeWeight(5);
				stroke(20);
				rect(x+i*50,y,50,50);
				pop();
		}
	}
	
	if(isRun==true)
	{
		x=100;y=100;
		for(var i=0;i<page.length;i++)
		{
			
			push();
			fill(3, 249, 171);
			strokeWeight(5);
			if(k==i)
			{
				stroke(255, 204, 0);
			}
			else
			{
				stroke(20);
			}
			rect(x+i*50,y,50,50);
			pop();
			push();
			noStroke();
			textSize(20);
			fill(7,7,7);
			text(page[i],x+17+i*50,129);
			pop();
		}
		
		push();
		fill(252, 93, 226);
		//stroke(20);
		strokeWeight(5);
		
		
		
		x=100;
		y=250;
		

		
		for(var i=0;i<pageFrame;i++)
		{
			if(pagePosition[k-1]==i)
			{
				//print("vaibhav");
				stroke(66, 134, 244);
				rect(x+i*50,y,50,50);
			}
			else
			{
				//print("k");
				//print(k);
				stroke(20);
				rect(x+i*50,y,50,50);
			}
			
			push();
			noStroke();
			textSize(20)
			fill(7,7,7);
			if(pageReplace[i]!=0)
			{
				/*var x1=100,y1=100;
				var x2=100,y2=250;
				//var e1=new element(x1,y1);
				var e1=new element(x1+positionK[k]*50,y1);
				var e2=new element(x2+positionP[i]*50,y2);
				if(counter<4500)
				{
					animation(e1,e2);
				}*/
				text(pageReplace[i],x+17+i*50,279);
				
				/*var x2=100,y2=250;
				
				var e2={x2+i*50,y2};
				animation();*/
			}
			pop();
		}
			
		pop();
		
		push();
		stroke(20);
		strokeWeight(5);
		fill(132, 93, 191);
		rect(800,100,50,50);
		noStroke();
		textSize(20);
		fill(7,7,7);
		text(NumFault,820,120);
		
		textFont('monospace');
		textSize(20);
		fill(153, 133, 64);
		text("NUM OF FAULT", 770, 95);
		
		text("page frame",100,240);
		
		pop();		
	}
}

function drawName()
{
	push();
	textFont('monospace');
	textSize(30);
	fill(255);
	text("FIFO-Page Replacement Algorithm", 15, 40);
	pop();
}

function bpageframe_click()
{
	var zero=0;
	isFrame=true;
	if(input1.value()!="" & input1.value()<=4)
	{
		pageFrame=input1.value();
		bpageframe.attribute("disabled","");
		for(var i=0;i<pageFrame;i++)
		{
			pageReplace.push(zero);
		}
	}
	else{}
}

function bpageEnter_click()
{
	if(input2.value()!="")
	{
		page.push(input2.value());
	}
	else
	{
	}
}

function brun_click()
{
	isRun=true;
	bpageEnter.attribute("disabled","");
	//print("pageframe");
	//print(pageFrame);
	//print("page");
	//print(page);
	brun.attribute("disabled","");
}

function bnext_click()
{
	var isFound=false;
	//print("k");
	//print(k);
	
		
	if(k<page.length)
	{
		for(var i=0;i<pageReplace.length;i++)
		{
			if(pageReplace[i]==page[k])
			{
				pagePosition.push(i);
				isFound=true;
				break;
			}
		}
		
		if(isFound!=true)
		{
			pagePosition.push(p);
			pageReplace[p]=page[k];
			NumFault+=1;
			if(p<(pageFrame-1))
			{
				p=p+1;
			}
			else
			{
				p=0;
			}
			positionK.push(k);
			positionP.push(p);
			
			var x1=100,y1=100;
				var x2=100,y2=250;
				//var e1=new element(x1,y1);
				var e1=new element(x1+positionK[k]*50,y1);
				var e2=new element(x2+positionP[i]*50,y2);
				
				animation(e1,e2);
				
		}
		k=k+1;
		print(pagePosition);
		print("position vaibhav");
		print(positionK);
		print(positionP);
		print("vaibhav");
	}
	else{
		bnext.attribute("disabled","");
	}
	
	
}

function animation(e1,e2){

  //console.log(e1);
   //console.log(e2);
  //
  print("animation");
  frameRate(50);
  flag1 = false;
  var del_x = e2.x - e1.x;
  var del_y = e2.y - e1.y;

  var len = Math.round(Math.pow((del_x)*(del_x)+(del_y)*(del_y),0.5));

  var cx = del_x/len;
  var cy = del_y/len;
if(e1.x!=e2.x){
  e1.x = e1.x + cx;
  e1.y = e1.y + cy;
  showElement(e1);
}
counter = counter + 1;

}

function showElement(e1)
{
	fill(3, 249, 171);
	strokeWeight(5);
	rect(e1.x,e1.y,50,50);
}

function element(x,y){
  this.x = x;
  this.y = y;
}

function bexample_click()
{
	page=[1,2,2,1,3,4,2,3,4,5];
	bexample.attribute("disabled","");
}