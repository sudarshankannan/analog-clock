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
    ctx.arc(radius,radius,radius,0,2*Math.PI);
}
//draw the numbers
function drawNumbers(cutx,radius){

}
//draw the current time
function drawTime(ctx,radius){
    //draw needle
}