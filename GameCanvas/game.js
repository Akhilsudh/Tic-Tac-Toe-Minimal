var xflag = 1;
var oflag = 0;
var x;
var y;
var position;
var alreadySet;
var yourTurn = 1;
var arr = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];
var socket;

function setup()
{
	createCanvas(600,600);
	background(51);
	stroke(255);
	line(200, 0, 200, 600);
	line(400, 0, 400, 600);
	line(0, 200, 600, 200);
	line(0, 400, 600, 400);
	socket = io.connect('http://192.168.1.142:3030');
	socket.on('mouse', newTurn);
}

function newTurn(data)
{
	arr = data.A;
	drawArr(arr);
	xflag = data.X;
	oflag = data.O;
	yourTurn = 1;
}

function mouseClicked()
{
	if(yourTurn)
	{	
		yourTurn = 0;
		x=mouseX;
		y=mouseY;
		alreadySet = 0;
		while(!alreadySet)
		{
			checkPosition();
			setsetFlag();
		}
		var socketData =
			{
				A: arr,
				X: !xflag,
				O: !oflag
			}
		drawArr(arr);
		checkArr(arr);
		socket.emit('mouse', socketData);
	}
}

function checkPosition()
{
	if(x > 0 && x < 200 && y > 0 && y < 200)
		position = 0;
	if(x > 200 && x < 400 && y > 0 && y < 200)
		position = 1;
	if(x > 400 && x < 600 && y > 0 && y < 200)
		position = 2;
	
	if(x > 0 && x < 200 && y > 200 && y < 400)
		position = 3;
	if(x > 200 && x < 400 && y > 200 && y < 400)
		position = 4;
	if(x > 400 && x < 600 && y > 200 && y < 400)
		position = 5;
	
	if(x > 0 && x < 200 && y > 400 && y < 600)
		position = 6;
	if(x > 200 && x < 400 && y > 400 && y < 600)
		position = 7;
	if(x > 400 && x < 600 && y > 400 && y < 600)
		position = 8;
}

function setsetFlag()
{
	if(position == 0 && arr[0][0] == 0)
	{
		setArray(0,0);
		alreadySet = 1;
	}
	if(position == 1 && arr[0][1] == 0)
	{
		setArray(0,1);
		alreadySet = 1;
	}
	if(position == 2 && arr[0][2] == 0)
	{
		setArray(0,2);
		alreadySet = 1;	
	}
	if(position == 3 && arr[1][0] == 0)
	{
		setArray(1,0);
		alreadySet = 1;
	}
	if(position == 4 && arr[1][1] == 0)
	{
		setArray(1,1);
		alreadySet = 1;
	}
	if(position == 5 && arr[1][2] == 0)
	{
		setArray(1,2);
		alreadySet = 1;
	}
	if(position == 6 && arr[2][0] == 0)
	{
		setArray(2,0);
		alreadySet = 1;
	}
	if(position == 7 && arr[2][1] == 0)
	{
		setArray(2,1);
		alreadySet = 1;
	}
	if(position == 8 && arr[2][2] == 0)
	{
		setArray(2,2);
		alreadySet = 1;
	}
}

function setArray(i, j)
{
	if(xflag == 1 && oflag == 0)
		arr[i][j]='X';
	if(xflag == 0 && oflag == 1)
		arr[i][j]='O';
}

function drawArr(data)
{
	for(var i=0;i<3;i++)
	{
		for(var j=0;j<3;j++)
		{
			if(data[i][j] == 'X')
				drawX(i,j);
			else if(data[i][j] == 'O')
				drawO(i,j);
		}
	}
}

function checkArr()
{
	if(arr[0][0]==arr[0][1]==arr[0][2]=='X' || arr[0][0]==arr[1][0]==arr[2][0]=='X' || 
		arr[0][1]==arr[1][1]==arr[2][1]=='X' || arr[0][2]==arr[1][2]==arr[2][2]=='X' || 
		arr[1][0]==arr[1][1]==arr[1][2]=='X' || arr[2][0]==arr[2][1]==arr[2][2]=='X' ||
		arr[0][0]==arr[1][1]==arr[2][2]=='X' || arr[0][2]==arr[1][1]==arr[2][0]=='X')
	{
		printWin('X');
	}
	if(arr[0][0]==arr[0][1]==arr[0][2]=='O' || arr[0][0]==arr[1][0]==arr[2][0]=='O' || 
		arr[0][1]==arr[1][1]==arr[2][1]=='O' || arr[0][2]==arr[1][2]==arr[2][2]=='O' || 
		arr[1][0]==arr[1][1]==arr[1][2]=='O' || arr[2][0]==arr[2][1]==arr[2][2]=='O' ||
		arr[0][0]==arr[1][1]==arr[2][2]=='O' || arr[0][2]==arr[1][1]==arr[2][0]=='O')
	{
		printWin('O');
	}
}

function printWin(res)
{

}

function drawX(i,j)
{
	stroke(255);
	if(i==0 && j==0)
	{
		line(0,0,200,200);
		line(200,0,0,200);
	}
	if(i==0 && j==1)
	{
		line(200,0,400,200);
		line(400,0,200,200);
	}
	if(i==0 && j==2)
	{
		line(400,0,600,200);
		line(600,0,400,200);
	}

	if(i==1 && j==0)
	{
		line(0,200,200,400);
		line(200,200,0,400);
	}
	if(i==1 && j==1)
	{
		line(200,200,400,400);
		line(400,200,200,400);
	}
	if(i==1 && j==2)
	{
		line(400,200,600,400);
		line(600,200,400,400);
	}

	if(i==2 && j==0)
	{
		line(0,400,200,600);
		line(200,400,0,600);
	}
	if(i==2 && j==1)
	{
		line(200,400,400,600);
		line(400,400,200,600);
	}
	if(i==2 && j==2)
	{
		line(400,400,600,600);
		line(600,400,400,600);
	}
}

function drawO(i,j)
{
	fill(255);
	if(i==0 && j==0)
	{
		ellipse(100,100,200,200);
	}
	if(i==0 && j==1)
	{
		ellipse(300,100,200,200);
	}
	if(i==0 && j==2)
	{
		ellipse(500,100,200,200);
	}

	if(i==1 && j==0)
	{
		ellipse(100,300,200,200);
	}
	if(i==1 && j==1)
	{
		ellipse(300,300,200,200);
	}
	if(i==1 && j==2)
	{
		ellipse(500,300,200,200);
	}

	if(i==2 && j==0)
	{
		ellipse(100,500,200,200);
	}
	if(i==2 && j==1)
	{
		ellipse(300,500,200,200);
	}
	if(i==2 && j==2)
	{
		ellipse(500,500,200,200);
	}	
}

function draw()
{

}