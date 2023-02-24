const RADIUS = 20;
const DIAMETER = RADIUS * 2;

let balls = [];
let gameInterval;

const spawnCount = document.querySelector('#num');
const gravityStrength = document.querySelector('#gravity'); 

const canvas = document.querySelector('canvas');
canvas.width = 600;
canvas.height = 400;
let ctx = canvas.getContext("2d");

function resetCanvas() {
    balls = [];
    
    startSimulation();
}

function startSimulation(){
    const numBalls = Number(spawnCount.value);
    for(let i = 0; i < numBalls; i++) {
        const newBall = {
            position: {
                x: 
                Math.floor(Math.random() * (canvas.width - DIAMETER) + RADIUS),
                y: Math.floor(Math.random() * (canvas.height - 2 * DIAMETER)),
            },

            velocity: {
                x:0,
                y:0,
            },
            color: {
                red:Math.floor(Math.random() *256),
                blue:Math.floor(Math.random() *256),
                green:Math.floor(Math.random() *256),
            },

        };
        balls.push(newBall);
    }
    drawObjects();
}

function drawObjects() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    for(let ball of balls){
        ctx.beginPath();
        ctx.arc(ball.position.x, ball.position.y, RADIUS,0, 2 *  Math.PI)
        ctx.fillStyle = `rgb(${ball.color.red}),rgb(${ball.color.green},rgb(${ball.color.blue}))`;
        ctx.fill();
    }
}

resetCanvas()

const resetButtons = document.querySelectorAll('button');
for (let buton of resetButtons) button.addEventListener('click', resetCanvas)

/*
const ball = {
    position: {
        x: number,
        y: number 

    }
    ,
    velocity: {
        x: number, 
        y: number
    }
    ,
    color: {
        red: number,
        blue: number, 
        green: number
    }
}
*/