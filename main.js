leftEyeX=0;
leftEyeY=0;
function preload()
{
eyes = loadImage("GAwl.gif");
}
function setup()
{
canvas = createCanvas(500,500);
canvas.center();
video = createCapture(VIDEO);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);
}
function modelLoaded()
{
console.log("Model is loaded");
}
function gotPoses(result)
{
if(results.length > 0);
{
console.log(results);
leftEyeX = results[0].pose.leftEye.x;
leftEyeY = results[0].pose.leftEye.y;
}
}
function draw()
{
background("grey");
image(eyes, leftEyeX,leftEyeY,80,40);
}