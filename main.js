var noseX=0
var noseY=0
var nosePic

function preload(){
    nosePic = loadImage("clownnose.png")
}
function draw(){
    image(video,0,0,300,225);
    image(nosePic, noseX, noseY, 25,25)
    //fill("red");
   // circle(noseX,noseY,25)
}
function setup(){
    canvas = createCanvas(300, 225);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function Snapshot(){
    save("ninjas.jpg")
}
function modelLoaded(){
    console.log("modeloaded")
}
function gotPoses(results){
    if(results.length>0){
        //console.log(results)
        //console.log(results[0].pose.nose.x, results[0].pose.nose.y)
        noseX=results[0].pose.nose.x-10;
        noseY=results[0].pose.nose.y-60;

        
    }
}