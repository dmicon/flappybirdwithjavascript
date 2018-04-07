const cvs = document.getElementById("game");
const ctx = cvs.getContext("2d");

const bird = new Image();
bird.src = "images/bird.png";

const bg = new Image();
bg.src = "images/bg.png";

const fg = new Image();
fg.src = "images/fg.png";

const pipeNorth = new Image();
pipeNorth.src = "images/pipeNorth.png";


const pipeSouth = new Image();
pipeSouth.src = "images/pipeSouth.png";


let bX = 10;
let bY = 150;
let gravity = 1;
let score = 0;

const fly  = new Audio;
const points = new Audio;

fly.src = "sounds/fly.mp3";
points.src = "sounds/score.mp3";

document.addEventListener("keydown", moveUp);
document.addEventListener("touch", moveUp);
document.addEventListener("click", moveUp);

function moveUp () {
	bY -= 35;
	fly.play();
	};
	
let pipe = [];
pipe[0] = {
	x: cvs.width,
	y: 0
	};


function draw() {
	ctx.drawImage(bg,0,0);
	
	for(var i=0; i < pipe.length; i++) {
		ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
		ctx.drawImage(pipeSouth, pipe[i].x, pipe[i].y+pipeNorth.height+95);
		
		pipe[i].x--;
		
		if(bX >= pipe[i].x && bX+bird.width <= pipe[i].x+pipeNorth.width && (bY <= pipe[i].y+pipeNorth.height || bY+bird.height >= pipe[i].y+pipeNorth.height+95) || bY+bird.height >= cvs.height-fg.height){
			location.reload();
		};
		
		if(pipe[i].x == 5){
			score++;
			points.play();
			};
		
		if (pipe[i].x == cvs.width-188){
			pipe.push({
				x: cvs.width,
				y: Math.floor(Math.random() * pipeNorth.height) - pipeNorth.height
				});
			};
		};
			
	ctx.drawImage(fg,0,cvs.height-fg.height);
	console.log(cvs.height-fg.height);
	
	ctx.drawImage(bird,bX,bY);
	bY += gravity;
	
	ctx.fillStyle = "#000";
	ctx.font = "20px Verdana";
	ctx.fillText("Score : "+score,10,cvs.height-20);
	
	requestAnimationFrame(draw);
	};
	
//let playGame = setInterval (draw, 500);
draw();

