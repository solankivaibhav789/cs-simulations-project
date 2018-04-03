//var page=[1,2,2,1,3,4,2,3,4,5];
//var page=[7,5,1,2,5,3,5,4,2,3];
//var page=[1,2,3,4,1,2,5,1,2,3,4,5];
//var pageFrame=3;
var page=[];
var pageFrame;
var pageReplace=[];
var pageDist=[];
var pageCount=[];
var dist1=20;
var pagePosition=[];

/*var page=[];
var pageFrame=0;
var pageReplace=[];
*/

var isRun=false;
var isFrame=false;
var isFull=false;
var NumFault=0;
var k=0;
var p=0;
function setup() 
{
	var mycan=createCanvas(windowWidth, windowHeight-40);
	mycan.parent('sketch-holder');
	
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
		stroke(20);
		strokeWeight(5);
		
		
		
		x=100;
		y=250;
		for(var i=0;i<pageFrame;i++)
		{
			if(pagePosition[k-1]==i)
			{
				print("vaibhav");
				stroke(66, 134, 244);
				rect(x+i*50,y,50,50);
			}
			else
			{
				print("k");
				print(k);
				stroke(20);
				rect(x+i*50,y,50,50);
			}
			//rect(x+i*50,y,50,50);
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
	fill(255);
	text("LRU-Page Replacement Algorithm", 15, 40);
	pop();
}

function bpageframe_click()
{
	var zero=0;
	var twenty=20;
	isFrame=true;
	if(input1.value()!="" & input1.value()<=4)
	{
		pageFrame=input1.value();
		bpageframe.attribute("disabled","");
		for(var i=0;i<pageFrame;i++)
		{
			pageReplace.push(zero);
		}
		for(var i=0;i<pageFrame;i++)
		{
			pageDist.push(twenty);
		}
		for(var i=0;i<pageFrame;i++)
		{
			pageCount.push(twenty);
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
				pagePosition.push(i);
				dist1-=1;
				pageCount[i]=dist1;
				isFound=true;
				break;
			}
		}
		
		if(isFound!=true & isFull==true)
		{
			var maxCount=max(pageCount);
			var index=0;
			for(var i=pageReplace.length-1;i>=0;i--)
			{
				if(maxCount==pageCount[i])
				{
					index=i;
				}
			}
			p=index;
			dist1-=1;
			pageCount[p]=dist1;
			
			pageReplace[p]=page[k];
			pagePosition.push(p);
			NumFault+=1;
		}
		
		if(isFound!=true & isFull==false)
		{
			pageReplace[p]=page[k];
			dist1-=1;
			pageCount[p]=dist1;
			pagePosition.push(p);
			NumFault+=1;
			if(p<(pageFrame-1))
			{
				p=p+1;
			}
			else
			{
				isFull=true;
			}
		}
		
		print("pagecount");
		print(pageCount);
		k=k+1;
	}
	else{
		bnext.attribute("disabled","");
	}
	
	
}

function bexample_click()
{
	page=[1,2,3,4,1,2,5,1,2,3,4,5];
	bexample.attribute("disabled","");
}