//create a canvas from an HTML element
var canvas = document.getElementById('canvas');
//create a 2d drawing object
var ctx = canvas.getContext('2d');
//calculate the clock radius by using the height
var radius = canvas.height / 2;
ctx.translate(radius,radius);
radius = radius * 0.90;
//run drawClock every second
setInterval(drawClock,1000);
//draw and update clock each second
function drawClock(){
    drawFace(ctx,radius);
    drawNumbers(ctx,radius);
    drawTime(ctx,radius);
}
//draw the clock face
function drawFace(ctx,radius){
    //Draw outer circle
    ctx.beginPath();
    ctx.arc(0,0,radius,0,2*Math.PI); //initializes arc
    ctx.fillStyle = "White";
    ctx.fill();
    ctx.stroke(); //actually draws the arc
    //gradient
    var grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    //define gradient as stroke style
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.1;
    //draw center of clock
    ctx.beginPath();
    ctx.arc(0,0, radius*0.1,0,2*Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
}
//draw the numbers
function drawNumbers(ctx,radius){
    var angle;
    var num;
    ctx.font = radius*0.15 + "px arial"; //set font at 15% of radius
    ctx.textBaseline = "middle"; //set text alignment to middle
    ctx.textAlign = "center"; //set text alignment to center
    for(var i=0; i<=11; i++){
        if(i==0){ //12 o'clock case
            num = 12;
        }
        else{ //every other number case
            num = i;
        }
        angle = num * Math.PI/6;
        ctx.rotate(angle);
        ctx.translate(0, -radius*0.85);
        ctx.rotate(-angle);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(angle);
        ctx.translate(0, radius*0.85);
        ctx.rotate(-angle);
    }
}
//draw the current time
function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour = hour%12;
    //calculate angle of hour hand
    hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    //make hour hand 50% of canvas's radius
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    //calculate angle of minute hand
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    //make minute hand 80% of canvas's radius
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    //second
    //calculate angle of second hand
    second=(second*Math.PI/30);
    //make second hand 90% of canvas's radius
    drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width){
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}