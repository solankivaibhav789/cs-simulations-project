var input1,input2,button1,button2,button3,button4;
var isWater=false;
var temp=false;
var isFF=false;
var checkbox1,checkbox2;
var run;
var isRun=false;
var next;
var array = [255,100];
var i=0;
var state=[0,0,0,0,0,0,0];
var counta=[1,3,4,6];
var countb=[1,3,5];
var countc=[1,3,4,7];
var countd=[1,2]
var count=0;
var index=0;
var output;
function setup() {
	var mycan=createCanvas(windowWidth, windowHeight-40);
	mycan.parent('sketch-holder');
	//drawName();
	
		
	//var x=20;
	//var y=50;
	var sp=createSpan("temperature : ");
	sp.parent('sketch-holder');
	input1 = createInput();
	input1.parent('sketch-holder');
	//input1.position(20, y);

	//button1 = createButton('INSERT TEMP');
	//button1.position((input1.x + input1.width), y);
	//button1.mousePressed(funInput1);
	
	//input2 = createInput();
	//input2.position(300,y);

	//button2 = createButton('INSERT');
	//button2.position((input2.x + input2.width), y);
	//button2.mousePressed(funInput2);
	
	//textFont('monospace');
	//textSize(20);
	//fill(126, 165, 229);
	
	checkbox1=createCheckbox('water',false);
	checkbox1.position(290,height+5);
	checkbox1.changed(funCheckBox1);
	checkbox1.parent('sketch-holder');
	
	checkbox2=createCheckbox('Flora and Fauna',false);
	checkbox2.position(350,height+5);
	checkbox2.changed(funCheckBox2);
	checkbox2.parent('sketch-holder');
	
	
	button3=createButton('RUN');
	button3.position(490,height+5);
	button3.mousePressed(funRun);
	button3.parent('sketch-holder');
	
	button4=createButton('NEXT');
	button4.position(540,height+5);
	button4.mousePressed(funNext);
	button4.parent('sketch-holder');
	
}

function drawName()
{
	fill(250);
	textFont('monospace');
	textSize(25);
	noStroke();
	text("Decision Tree", 15, 40);
	push();
	fill(7,255,255);
	textSize(20);
	
	text("enter test data and press run,",20,height-40);
	text("and than next for simulate",20,height-20);
	pop();
}
function draw() {
	background(51);
	drawName();
	fill(250);
	textFont('monospace');
	textSize(25);
	text("Decision Tree", 15, 40);
	fill(100);
	textSize(15);
	
	var x=windowWidth/2-200;
	var y=75;
	var x1=x,y1=y;
	if(state[1]==1 && count==1)
	{
		f1();
	}
	else
	{
		f2();
	}
	rect(x-75, y, 200,80, 20);
	fill(array[0]);
	noStroke();
	text('temperature>50 degree', x-60, y+40);
	
	x=x/2
	y=200;
	var x2=x,y2=y;
	if(state[2]==1 && count==2)
	{
		f1();
	}
	else
	{
		f2();
	}
	fill(100);
	textSize(15);
	rect(x-75, y, 200,80, 20);
	noStroke();
	fill(array[0]);
	text('survival difficult', x-40, y+40);
	
	x=3*x;
	y=200
	var x3=x,y3=y;
	if(state[3]==1 && count==3)
	{
		f1();
	}
	else
	{
		f2();
	}
	fill(100);
	textSize(15);
	rect(x-75, y, 200,80, 20);
	noStroke();
	fill(array[0]);
	text('has water', x-25, y+40);
	
	x=windowWidth/2-100;
	y=350;
	var x4=x,y4=y;
	if(state[4]==1 && count==4)
	{
		f1();
	}
	else
	{
		f2();
	}
	fill(100);
	textSize(15);
	rect(x-75, y, 200,80, 20);
	noStroke();
	fill(array[0]);
	text('has flora & fauna', x-40, y+40);
	
	x=1.6*x;
	y=350;
	var x5=x,y5=y;
	if(state[5]==1 && count==5)
	{
		f1();
	}
	else
	{
		f2();
	}
	fill(100);
	textSize(15);
	rect(x-75, y, 200,80, 20);
	noStroke();
	fill(array[0]);
	text('survival difficult', x-40, y+40);
	
	x=windowWidth/2-250;
	y=500;
	var x6=x,y6=y;
	if(state[6]==1 && count==6)
	{
		f1();
	}
	else
	{
		f2();
	}
	fill(100);
	textSize(15);
	rect(x-75, y, 200,80, 20);
	noStroke();
	fill(array[0]);
	text('survival probable', x-40, y+40);
	
	x=windowWidth/2+125;
	y=500;
	var x7=x,y7=y;
	if(state[7]==1 && count==7)
	{
		f1();
	}
	else
	{
		f2();
	}
	fill(100);
	textSize(15);
	rect(x-75, y, 200,80, 20);
	noStroke();
	fill(array[0]);
	text('survival difficult', x-40, y+40);

	fill(100);
	stroke(2);
	line(x1,y1+80,x2,y2);
	line(x1,y1+80,x3,y3);
	line(x3,y3+80,x4,y4);
	line(x3,y3+80,x5,y5);
	line(x4,y4+80,x6,y6);
	line(x4,y4+80,x7,y7);
	fill(array[0]);
	noStroke();
	text('no',x1+x2/2,y1+y2/2);
	text('yes',x1-x2/2,y1+y2/2);
	text('yes',(x3+x4-110)/2,(y4+280)/2);
	text('no',(x3+x4+400)/2,(y4+280)/2);
	text('yes',(x4+x6)/2,(y6+420)/2);
	text('no',(x4+x6+350)/2,(y6+420)/2);
	//text('no',);
	
	if(isRun==true)
	{
		push();
		stroke(1);
		
		fill(159, 168, 37);
		rect(800,20,350,30);
		fill(38, 175, 118);
		rect(1150,20,200,30);
		
		fill(66, 134, 244);
		rect(800,50,100,50);
		fill(159, 66, 206);
		rect(800,100,100,50);
		
		fill(66, 134, 244);
		rect(900,50,100,50);
		fill(159, 66, 206);
		rect(900,100,100,50);
		
		fill(66, 134, 244);
		rect(1000,50,150,50);
		fill(159, 66, 206);
		rect(1000,100,150,50);
		
		fill(66, 134, 244);
		rect(1150,50,200,50);
		fill(159, 66, 206);
		rect(1150,100,200,50);
		pop();
		
		push();
		textSize(15);
		fill(255);
		//fill(104, 85, 29);
		text("temp",825,80);
		text("water",925,80);
		text("flora & fauna",1025,80);
		text("predicted output",1175,80);
		
		text("input",980,35);
		text("output",1210,35);
		pop();
		
		//fill(104, 85, 29);
		fill(255);
		text(temp,825,130);
		if(isWater==true)
		{
			text("yes",925,130);
		}
		else
		{
			text("no",925,130);
		}
		if(isFF==true)
		{
			text("yes",1050,130);
		}
		else
		{
			text("no",1050,130);
		}
		
		if(output==6)
		{
			text("survival probable",1175,130);
		}
		else if(output==2 || output==5 || output==7)
		{
			text("survival difficult",1175,130);
		}
		else{
		}
	}
	
	push();
	
	fill("yellow");
	rect(20,height-100,40,40);
	
	textSize(20);
	fill(7,7,7);
	text(" - current status",70,height-70);
	
	pop();
}

function funInput1()
{
	
}

function funInput2()
{
	
}

function funCheckBox1()
{
	if(this.checked())
	{
		isWater=true;
	}
	else
	{
		isWater=false;
	}
}

function funCheckBox2()
{
	if(this.checked())
	{
		isFF=true;
	}
	else
	{
		isFF=false;
	}
}

function funRun()
{
	isRun=true;
	temp=input1.value();
	button3.attribute('disabled','');
	funCheckBox1();
	funCheckBox2();
	print(isWater);
	print(isFF);
}

function f1()
{
	stroke(255, 204, 0);
	strokeWeight(4);
	//print("f1");
}
function f2()
{
	stroke(51);
	strokeWeight(4);
	//print(count,state[count]);
}
function funNext()
{
	/*if(count<7)
	{
	count=count+1;
	state[count]=1;
	print(count,state[count]);
	}
	if(count==3 && isWater)
	{
	count=count+1;
	state[count]=1;
	}
	if (count==4 && isFF)
	{
	count=count+1;
	state[count]=1;
	}
	if(count>7)
	{
	count=0
	}*/
	
	if(temp>50){
		if(index>=2)
		{
			index-=1;
			button4.attribute("disabled","");
		}
		count=countd[index];
		state[count]=1;
		output=countd[index];
		index=index+1;
		
	}
	else if(!isWater && !isFF){
		if(index>=3)
		{
			index-=1;
			button4.attribute("disabled","");
		}
		count=countb[index];
		state[count]=1;
		output=countb[index];
		index=index+1;
		
	}	
	else if(isWater && !isFF){
		if(index>=4)
		{
			index-=1;
			button4.attribute("disabled","");
		}
		
		count=countc[index];
		state[count]=1;
		output=countc[index];
		index=index+1;
		
	}
	else if(isWater && isFF){
		if(index>=4)
		{
			index-=1;
			button4.attribute("disabled","");
		}
		count=counta[index];
		state[count]=1;
		output=counta[index];
		index=index+1;
		
	}
	else if(!isWater){
		if(index>=3)
		{
			index-=1;
			button4.attribute("disabled","");
			
		}
		count=countb[index];
		state[count]=1;
		output=countb[index];
		index=index+1;
		
	}
}
