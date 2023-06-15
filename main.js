function preload() {

}
    
    function setup() {
canvas=createCanvas(500,500)
    canvas.position(500,250)
    video=createCapture(VIDEO);
    video.hide()
    tintcolor="";
    }
    
    function draw() {
    image(video,0,0,500,500)
    tint(tintcolor)
    fill ("red")
    stroke("red")
    circle(50,50,50)

    fill ("red")
    stroke("red")
    circle(450,50,50)

    fill ("red")
    stroke("red")
    circle(50,450,50)
    
    fill ("red")
    stroke("red")
    circle(450,450,50)

    fill ("green")
    stroke ("green")
    rect (40,75,20,350)

    fill ("green")
    stroke ("green")
    rect (443,75,20,350)

    fill ("green")
    stroke ("green")
    rect (75,40,350,20)

    fill ("green")
    stroke ("green")
    rect (75,440,350,20)
    }
function take_snapshot(){
save("Dessvin.png")
}
function Filter_tint(){
tintcolor=document.getElementById("color").value ;
}