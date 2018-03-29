var page=[1,2,2,1,3,4,2,3,4,5];
var pageFrame=3;
var pageReplace=[];

/*var page=[];
var pageFrame=0;
var pageReplace=[];
*/

var isRun=false;
var NumFault=0;
var k=0;
var p=0;
function setup() 
{
	createCanvas(windowWidth, windowHeight-40);
	
	input1=createInput();
	
	bpageframe = createButton("page frame");
	bpageframe.mouseClicked(bpageframe_click);
	
	input2=createInput();
	
	bpageEnter=createButton("Enter page");
	bpageEnter.mouseClicked(bpageEnter_click);
	
	brun=createButton("Run");
	brun.mouseClicked(brun_click);
	
	bnext=createButton("Next");
	bnext.mouseClicked(bnext_click);
	
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
	
	
	if(isRun==true)
	{
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
		stroke(20);
		strokeWeight(5);
		
		
		
		x=100;
		y=250;
		for(var i=0;i<pageFrame;i++)
		{
			rect(x+i*50,y,50,50);
			push();
			noStroke();
			textSize(20)
			fill(7,7,7);
			if(pageReplace[i]!=0)
			{
				text(pageReplace[i],x+17+i*50,279);
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
	fill(100);
	text("FIFO-Page Replacement Algorithm", 15, 40);
	pop();
}

function bpageframe_click()
{
	var zero=0;
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
	print("k");
	print(k);
	
		
	if(k<page.length)
	{
		for(var i=0;i<pageReplace.length;i++)
		{
			if(pageReplace[i]==page[k])
			{
				isFound=true;
				break;
			}
		}
		
		if(isFound!=true)
		{
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
		}
		k=k+1;
	}
	else{
		bnext.attribute("disabled","");
	}
	
	
}