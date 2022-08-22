noseX = 0;
noseY = 0;



function preload()
{
img = loadImage('https://i.postimg.cc/W42wdDMf/580b57fbd9996e24bc43bed5.png');
}

function draw()
{
image(video,0,0,400,400);

image(img, noseX , noseY , 30 , 30);
}

function setup()
{
canvas = createCanvas(400,400);
canvas.center();
 video = createCapture(VIDEO);
 video.size(400,400);
 video.hide();
 posenet = ml5.poseNet(video,modelLoaded);

 posenet.on('pose', gotPoses);
}

function snapshot()
{
  save("filterpic.png");
}

function modelLoaded()
{
  console.log("yeh dil mange more");
}

function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
console.log("nose x : " + results[0].pose.nose.x);
console.log("nose y :" + results[0].pose.nose.y);

noseX = results[0].pose.nose.x - 12;
noseY = results[0].pose.nose.y - 9;
}
}