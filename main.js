var Song=""
function preload(){
Song = loadSound("Magic.mp3")
}

function setup(){
    canvas = createCanvas(600,500)
    canvas.center();

    video = createCapture(VIDEO)
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('poseNet Is Intialized')
}
function gotPoses(results){
    
}

function draw(){
    image(video, 0, 0, 600, 500)
}

function play(){
    Song.play()
}