status = "";
AC_image = "";

function preload(){
    AC_image = loadImage("AC.jpg");
}

function setup(){
    canvas = createCanvas(600 , 350);
    canvas.center();
    object_Detector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    object_Detector.detect(AC_image , gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(AC_image , 0 , 0 , 640 , 350);
}