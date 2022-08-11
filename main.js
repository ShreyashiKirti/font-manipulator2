leftWristX=0;
rightWristX=0;
difference=0;


function setup(){
video= createCapture(VIDEO);
video.size(500,400);
video.position(10,150)

canvas= createCanvas(600,389);
canvas.position(550,150);

poseNet= ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log('Model is loaded');
}

function gotPoses(results){
if(results.length>0){
console.log(results);

leftWristX= results[0].pose.leftWrist.x;
rightWristX= results[0].pose.rightWrist.x;
difference=floor(leftWristX-rightWristX);
}
}

function draw(){
background('#427d64');
document.getElementById("font_size").innerHTML='The size of the text is '+difference+'px';
textSize(difference);
fill('white');
text('Shreyashi',5,20);
}