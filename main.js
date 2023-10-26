img = "";
status = "";
objects = [];
function setup() {
    canvas = createCanvas(380,380);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide()
}
function preload() {
    alarm = loadSound("iphone_alarm.mp3");
}

function draw() {
    image(video, 0,0,380,380);
  

    if (status != "") {
       
        objectDetector.detect(video, gotResults);
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status: Object Detected";
            precent = floor( objects[i].confidence * 100);
            text(objects[i].label + " " + precent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            rect(objects[i].x, objects[i].y, objects[i].width,objects[i].height)
        }
    }

    if (objects.length < 0) {
        alarm.play();
        document.getElementById("status").innerHTML = "status: Alarm is played"
    }

    else {
        alarm.stop();
        document.getElementById("status").innerHTML = "status: Alarm has stopped"
    }
}