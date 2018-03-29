var empty=10;
var full=0;
var mutex=1;
var isProduceCont=false;
var isConsumeCont=false;
var isDeadlockCont=false;
//var stack=[-1,0,1,2,3,4,5,6,7,8,9,10,11];
var stack=[11,10,9,8,7,6,5,4,3,2,1,0,-1];
var status1=[0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var status2=[0,]
var currentPoint=10;
var semaphore=0;
var isUp=false;
var isDown=false;
var isProduce=false;
var isConsume=false;
var isProduceSleep=false;
var isConsumeSleep=false;
var isProduceWakeup=false;
var isConsumeWakeup=false;

function setup() {
	createCanvas(windowWidth, windowHeight-40);
	//createCanvas(windowWidth-400, windowHeight-40);
	
	bproduce = createButton("Produce");
	bproduce.mouseClicked(bproduce_click);
	
	bconsume = createButton("consume");
	bconsume.mouseClicked(bconsume_click);
	
	//bdeadlock = createButton("deadlock");
	//bdeadlock.mouseClicked(bdeadlock_click);
	//bdeadlock.attribute("disabled","");
	
	bnext=createButton("next");
	bnext.mouseClicked(bnext_click);
	bnext.attribute('disabled', '');
	
	/*var div = createDiv('Hello ').size(800, 800);
	div.html('World', true);*/
}

function draw() {
	background(51);
	drawName();
	var x=200,y=100,dx=150,dy=40;
	for(var i=0;i<10;i++)
	{
		y=y+dy;
		if(status1[i]==1)
		{
			push();
			//fill(100);
			fill(82, 111, 158);
			rect(x,y,dx,dy);
			pop();
		}
		else
		{
			rect(x,y,dx,dy);
		}	
	}
	
	rect(700,100,40,40);
	//rect(900,100,40,40);
	rect(1100,100,40,40);
	
	push();
	if(isProduceSleep==true)
	{
		fill(249, 13, 4);
	}
	else
	{
		
	}
	rect(500,250,150,50);
	pop();
	text("producer",520,277);
	push();
	if(isConsumeSleep==true)
	{
		fill(249, 13, 4);
	}
	else
	{
		
	}
	rect(500,350,150,50);
	pop();
	text("consumer",520,377);
	
	
	push();
	textFont('monospace');
	textSize(20);
	fill(100);
	
	text("empty",700,80);
	//text("mutex",900,80);
	text("full",1100,80);
	
	text(empty,710,120);
	//text(mutex,910,120);
	text(full,1110,120);
	pop();
	
	push();
	fill(174, 194, 226);
	rect(700,200,450,300);
	pop();
	
	textSize(25);
	var p1=720,p2=230;
	var p=[230,260,290,320,350,380,410];
	if(isUp==true)
	{
		push();
		fill(220, 66, 244);
		text("up operation on mutex",720,p[0]);
		pop();
	}
	if(isProduceSleep==true)
	{
		push();
		fill(220, 66, 244);
		text("producer go to sleep",720,p[1]);
		pop();
	}
	if(isConsumeSleep==true)
	{
		push();
		fill(220, 66, 244);
		text("consumer go to sleep",720,p[1]);
		pop();
	}
	if(isProduceWakeup==true)
	{
		push();
		fill(220, 66, 244);
		text("producer wake up",720,p[3]);
		pop();
	}
	if(isConsumeWakeup==true)
	{
		push();
		fill(220, 66, 244);
		text("consumer wake up",720,p[3]);
		pop();
	}
	if(isProduce==true)
	{
		push();
		fill(220, 66, 244);
		text("produce the item",720,p[2]);
		pop();
	}
	if(isConsume==true)
	{
		push();
		fill(220, 66, 244);
		text("consume the item",720,p[2]);		
		pop();
	}
	if(isDown==true)
	{
		push();
		fill(220, 66, 244);
		text("down operation on mutex",720,p[4]);
		pop();
	}
}

function drawName()
{
	push();
	textFont('monospace');
	textSize(30);
	fill(100);
	text("Producer consumer problem", 15, 40);
	pop();
}

function bproduce_click()
{
	if(currentPoint>0)
	{
		isProduce=true;
		isConsume=false;
		isConsumeWakeup=false;
		isProduceSleep=false;
		up();
		/*push();
		fill(220, 66, 244);
		text("up operation on mutex",720,230);
		pop();
		*/
		empty-=1;
		full+=1;
		bconsume.removeAttribute('disabled');
		if(semaphore==1)
		{
			isConsumeWakeup=true;
		isConsumeSleep=false;
		isUp=true;
		isDown=true;
		isConsumeSleep=false;
		isConsume=false;
			//isConsumeWakeup=true;
			//isConsumeSleep=false;
			//semaphore=0;
			//bconsume_click();
			bnext.removeAttribute('disabled');
			bconsume.attribute('disabled','');
			bproduce.attribute('disabled','');
		}
		currentPoint-=1;
		status1[currentPoint]=1;
		//print(currentPoint);
		down();
		
	}
	else if(currentPoint==0)
	{
		isProduceSleep=true;
		isProduce=false;
		isProduceWakeup=false;
		isConsume=false;
		semaphore=1;
		bproduce.attribute('disabled', '');
		
	}
	
}


function bconsume_click()
{
	if(currentPoint<10)
	{
		isUp=true;
		isDown=true;
		isConsume=true;
		isProduce=false;
		isConsumeWakeup=false;
		isConsumeSleep=false;
		up();
		empty+=1;
		full-=1;
		bproduce.removeAttribute('disabled');
		if(semaphore==1)
		{
			isConsumeWakeup=false;
			isProduceWakeup=true;
			isProduceSleep=false;
		isConsumeSleep=false;
		isUp=true;
		isDown=true;
		isConsume=true;
		isProduce=false;
			//isProduceWakeup=true;
			//isProduceSleep=false;
			bnext.removeAttribute('disabled');
			bconsume.attribute('disabled','');
			bproduce.attribute('disabled','');
			//semaphore=0;
			//status1[currentPoint]=1;
		}
		status1[currentPoint]=0;
		currentPoint+=1;	
		//print(currentPoint);
		down();
	}
	else if(currentPoint==10)
	{
		isConsumeSleep=true;
		isConsumeWakeup=false;
		isConsume=false;
		isProduce=false;
		semaphore=1;
		bconsume.attribute('disabled', '');
		
	}
}

function bdeadlock_click()
{
	
}

function bnext_click()
{
	if(semaphore==1 & currentPoint==1)
	{
	
		isUp=true;
		isDown=true;
		isConsumeSleep=false;
		isConsume=false;
		isProduce=true;
		isProduceSleep=false;
		isProduceWakeup=false;
		isConsumeSleep=false;
		isConsumeWakeup=false;
		semaphore=0;
		bproduce.removeAttribute('disabled');
		bconsume.removeAttribute('disabled');
		bnext.attribute('disabled','');
		currentPoint-=1;
		status1[currentPoint]=1;
		
	}
	else if(semaphore==1 & currentPoint==9)
	{
		isProduceWakeup=false;
		isProduceSleep=false;
		isUp=true;
		isDown=true;
		isConsumeSleep=false;
		isConsume=true;
		isProduce=false;
		isProduceSleep=false;
		isConsumeWakeup=false;
		semaphore=0;
		bproduce.removeAttribute('disabled');
		bconsume.removeAttribute('disabled');
		bnext.attribute('disabled','');
		status1[currentPoint]=0;
		currentPoint+=1;
	}
}

function up()
{
	isUp=true;
	mutex=1;
	push();
	fill(220, 66, 244);
	text("up operation on mutex",700,240);
	pop();
}

function down()
{
	isDown=true;
	mutex=0;
	push();
	fill(220, 66, 244);
	text("down operation on mutex",700,260);
	pop();
}