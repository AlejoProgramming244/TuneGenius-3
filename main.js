song_1 = "";
song_2 = "";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

function setup()
{
    Canvas = createCanvas(600, 500);
    Canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
    console.log("Modelo P5 Inicializado");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;

        console.log("Coordenada Mizquierda en x: " + leftWristX + "Coordenada Mizquierda en y: " + leftWristY);

        rightWristX = results[0].pose.rightWristX.x;
        rightWristY = results[0].pose.rightWristY.y;

        console.log("Coordenada Mderecha en x: " + rightWristX + "Coordenada Mderecha en y: " + rightWristY);
    }
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function preload()
{
    song_1 = loadSound("Past_Lives.mp3");
    song_2 = loadSound("Believer.mp3");
}

function r()
{

}