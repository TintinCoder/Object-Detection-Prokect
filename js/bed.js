let img = ''

function preload(){
    img = loadImage('../images/bedroom.png')
}

function setup(){
    var canvas;
    canvas = createCanvas(500, 500)
    canvas.center()
}

function draw(){
    image(img, 0, 0, 500, 500)
}