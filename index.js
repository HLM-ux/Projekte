const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d"); 

// Draw a rectangle
ctx.fillStyle = "blue";
ctx.fillRect(80, 60, 150, 100);

// Draw a circle
ctx.arc(200, 150, 50, 0, Math.PI * 2, false);
ctx.fillStyle = "red";
ctx.fill();

// Draw a triangle
ctx.save();
ctx.translate(-80, -30);
ctx.beginPath();
ctx.moveTo(150, 70);
ctx.lineTo(80, 140);
ctx.lineTo(220, 140);
ctx.closePath(); 
ctx.fillStyle = 'green'; 
ctx.fill(); 
ctx.restore();

// Add text
ctx.fillStyle = "black";
ctx.font = "20px Arial";
ctx.fillText("Hello, Canvas!", 120, 50);

const heh = ctx
console.log(heh)




//  { }


/* FAILED ATTEMPT
const ourcanva = document.getElementById('fi1')
const canv = ourcanva.getContext('2d')

ourcanva.width = window.innerWidth
ourcanva.height = window.innerHeight

// my rectangle

canv.fillStyle = 'black';
canv.fillRect(10, 10, 150, 150);


const thecanva = document.getElementById('fi')
const thec = thecanva.getContext('2d')

//my rectange

thec.fillStyle = 'red'
thec.fillRect(20, 20, 100, 100)*/



