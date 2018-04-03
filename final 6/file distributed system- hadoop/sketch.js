var fileSize=256;
var isFile=false;
var step=0;
var blockSize=64;
var arrayblock=[];
var serverList=[1,2,3,4,5,6];
var replica=0;
var x=0,p=0;
var nBlock=0;
var blockLoc=[700,60,900,60,1100,60,700,150,900,150,1100,150];
var node=[];
var nodeN=[];
//var node=[1,4,3,5,4,6,2,3];			//first block is on first two index 1 and 4 because there is two replica
//var nodeN=[1,1,2,2,3,3,4,4];		
//nodeN[i] on node[i] th location
var nodecount=[0,0,0,0,0,0];		//count how many node in each server
var serverHaveNode=[0,0,0,0,0,0];
var nodeLoc=[];
var v,v1;
var count=1;
var n;
function setup() {
	var mycan=createCanvas(windowWidth, windowHeight-40);
	mycan.parent('sketch-holder');
	
	input1=createInput();
	input1.parent('sketch-holder');
	
	button1 = createButton("Total size");
	button1.mouseClicked(button1_click);
	button1.parent('sketch-holder');
	
	input2=createInput();
	input2.parent('sketch-holder');
	
	button2 = createButton("Replica");
	button2.mouseClicked(button2_click);
	button2.parent('sketch-holder');
	
	next=createButton("next");
	next.mouseClicked(nextClick);
	next.parent('sketch-holder');
	
	//run=createButton("run");
}

function draw() {
	background(51);
	drawName();
	push();
	fill(100);
	rect(60, 60, 180, 150, 20);
	textFont('monospace');
	textSize(20);
	fill(0,255,255);
	text("Name Node",80,250);
	
	fill(100);
	rect(700, 60, 150, 150, 20);
	
	fill(100);
	rect(900, 60, 150, 150, 20);
	
	fill(100);
	rect(1100, 60, 150, 150, 20);
	
	fill(100);
	rect(700, 300, 150, 150, 20);
	
	fill(100);
	rect(900, 300, 150, 150, 20);
	
	fill(100);
	rect(1100, 300, 150, 150, 20);
	
	if(isFile)
	{
		//fill(0, 102, 153);
		fill(133, 252, 167);
		//rect(arrayblock[0],80,arrayblock[1],50);
		rect(80,80,135,50);
		
	}
	fill(0, 102, 153);
	rect(707,80,135,50);
	
	
	fill(0, 102, 153);
	rect(907,80,135,50);
	
	fill(0, 102, 153);
	rect(1107,80,135,50);
	
	fill(0, 102, 153);
	rect(707,320,135,50);
	
	fill(0, 102, 153);
	rect(907,320,135,50);
	
	fill(0, 102, 153);
	rect(1107,320,135,50);
	//print("b");
	pop();	
	
	textFont('monospace');
	textSize(20);
	fill(0,255,255);
	text("server1",725,250);
	text("server2",925,250);
	text("server3",1125,250);
	text("server4",725,490);
	text("server5",925,490);
	text("server6",1125,490);
	
	
	push();
	fill(0, 102, 153);
	rect(50,height-100,40,40);
	fill(163, 21, 153);
	rect(50,height-150,40,40);
	fill(133, 252, 167);
	rect(50,height-200,40,40);
	
	fill(255);
	text(" - available disk at server",100,height-70);
	text(" - file divided into 64 mb block",100,height-120);
	text(" - whole file",100,height-170);
	pop();
	
	var j=0;
	
		for(var i=0;i<nBlock;i++)
		{
			fill(163, 21, 153);
			j=i+1;
			//rect(arrayblock[i]+80,200,arrayblock[j],50);
			rect(arrayblock[i]+80,80,v,50);
			fill(7,7,7);
			text(j,arrayblock[i]+90,105);
		}
	if(step==2)
	{
		j=0;
		var p=nodeLoc.length-2;
		for(var i=0;i<=p;i+=2)
		{
			fill(163,21,153);
			j=i+1;
			rect(nodeLoc[i],nodeLoc[j],v1,50);
			
			/*if(count>0)
			{
				x=x+1
				count-=1;
			}
			else
			{
				count=replica-1;
			}*/
			fill(7,7,7);
			x=i/2;
			text(nodeN[x],nodeLoc[i]+5,nodeLoc[j]+30);
			/*if(node[i]==1)
			{
				nodecount[0]=nodecount[0]-1;
				rect(707+v*nodecount[0],80,v,50);
			}
			else if (node[i]==2)
			{
				rect(907,80,v,50);
			}
			else if (node[i]==3)
			{
				rect(1107,80,v,50);
			}
			else if (node[i]==4)
			{
				rect(707,300,v,50);
			}
			else if (node[i]==5)
			{
				rect(907,300,v,50);
			}
			else if (node[i]==6)
			{
				rect(1107,300,v,50);
			}*/
		}
	}
}

function drawName(){
	push();
  textFont('monospace');
  textSize(30);
  fill(255);
  text("File Distributed System-Hadoop", 15, 40);
  pop();
  push();
  fill(7,255,255);
  textSize(20);
  text("enter file size(<=256) and enter no. of replica(<=4) and press next",20,height-20);
  pop();
}

function button1_click()
{
	fileSize=input1.value();
	if(fileSize>256)
	{
		fileSize=0;
	}
	else
	{
		button1.attribute("disabled","");
		isFile=true;
	}
	//arrayblock.push(80);
	//arrayblock.push(135);
}

function button2_click()
{
	var a=input2.value();
	if(a>0 & a<4)
	{
		replica=a;
		n=nBlock*replica;
		button2.attribute("disabled","");
	}
	else
	{
		
	}
	
}

function nextClick()
{
	step=step+1;
	if(step==1)
	{
		//arrayblock.splice(0,2);
		isFile=false;
		//print("p");
		if(fileSize>64)
		{
			nBlock=fileSize/blockSize;
		}
		else
		{
			nBlock=1;
		}
		//print(nBlock);
		v=135/nBlock;
		for(var i=0;i<nBlock;i++)
		{
			
			fill(163, 21, 153);
			rect(x+80,80,v,50);
			arrayblock.push(x);
			//arrayblock.push(v);
			x=x+v;
			//print("a");
		}
		//print(arrayblock);
	}
	else if(step==2)
	{
		shuffle1();
		
		
		
		print(node);
		next.attribute("disabled","");
		/*var j=1;
		for(var i=0;i<total;i++)
		{
			if(j>replica)
			{
				j=1;
			}
			
				//fill(163, 21, 153);
				//j=i+1;
				//rect(arrayblock[i]+80,200,arrayblock[j],50);
				//rect(arrayblock[i]+80,80,v,50);
				fill(7,7,7);
				text(node[i],arrayblock[i]+90,105+10*j);
			
		}*/
		
		
		/////////////////////////////////
		/*for(var j=0;j<replica;j++)
		{
			var random;
			print(serverList.length);
			for (var i = serverList.length; i--; ) 
			{
				random=serverList.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
				node.push(random);
				console.log(random);
			}
			node.push(random);
		}
		print(node);*/
		/*for(var i=0;i<8;i++)
		{
			if();
			nodeLoc.push();
		}
		*/
		///////////////////////////////////
		
		/*for(var j=0;j<nBlock;j++)
		{
			var random;
			var counter=replica;
			print(serverList.length);
			for (var i = serverList.length; i--; ) 
			{
				random=serverList.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
				if(counter<=0)
				{
					break;
				}
				counter=counter-1;
				node.push(random);
				//console.log(random);
			}
			nodeN.push((j+1));
			nodeN.push((j+1));
			//console.log(node);
		}
		print(node);
		print(nodeN);*/
		
		
		
		var total=nBlock*replica;
		/*var j=1;
		for(var i=0;i<total;i++)
		{
			j+=1;
			if(j>replica)
			{
				j=1;
			}
			fill(7,7,7);
			text(node[i],x+80+v,130+j*10);
			//arrayblock.push(x);
			//arrayblock.push(v);
			x=x+v;
			//print("a");
		}*/
		
		for(i=0;i<total;i++)
		{
			v1=135/8;
		if(node[i]==1)
		{
			//print("hello");
			nodecount[0]=nodecount[0]-1;
			x=707+v1*nodecount[0];
			nodeLoc.push(x);
			nodeLoc.push(80);
		}
		else if (node[i]==2)
		{
			nodecount[1]=nodecount[1]-1;
			x=907+v1*nodecount[1];
			nodeLoc.push(x);
			nodeLoc.push(80);
			
		}
		else if (node[i]==3)
		{
			nodecount[2]=nodecount[2]-1;
			x=1107+v1*nodecount[2];
			nodeLoc.push(x);
			nodeLoc.push(80);

		//	rect(1107,80,v,50);
		}
		else if (node[i]==4)
		{
			nodecount[3]=nodecount[3]-1;
			x=707+v1*nodecount[3];
			nodeLoc.push(x);
			nodeLoc.push(320);

		//	rect(707,300,v,50);
		}
		else if (node[i]==5)
		{
			nodecount[4]=nodecount[4]-1;
			x=907+v1*nodecount[4];
			nodeLoc.push(x);
			nodeLoc.push(320);

		//	rect(907,300,v,50);
		}
		else if (node[i]==6)
		{
			nodecount[5]=nodecount[5]-1;
			x=1107+v1*nodecount[5];
			nodeLoc.push(x);
			nodeLoc.push(320);

		//	rect(1107,300,v,50);
		}
		//print(nodeLoc);
		}
		
	}
}


function shuffle1() 
{
	for(var j=0;j<nBlock;j++)
	{
    var ctr = serverList.length, temp, index;

// While there are elements in the array
    while (ctr > 0) 
	{
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = serverList[ctr];
        serverList[ctr] = serverList[index];
        serverList[index] = temp;
    }
	//print(serverList);
	
	for(var i=0;i<replica;i++)
	{
		node.push(serverList[i]);
	}
	//print(node);
	}
	findNodecount();
	findNodeN();
}

function findNodecount()
{
	var a=[1,2,3,4,5,6];
	var p=nBlock*replica;
	for(var j=0;j<6;j++)
	{
		for(var i=0;i<p;i++)
		{
			if(a[j]==node[i])
			{
				nodecount[j]=nodecount[j]+1;
			}
			print("h");
		}
	}
	//print("vaibhav");
	//print(nodecount);
	//print("vaibhav");
}

function findNodeN()
{
	for(var i=1;i<=nBlock;i++)
	{
		for(var j=0;j<replica;j++)
		{
			nodeN.push(i);
		}
	}
}