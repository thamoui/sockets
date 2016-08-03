function setup() {
    createCanvas(900, 600);
    background(51);
    
    socket = io.connect('http://test-simplonco.rhcloud.com/:8080');
    socket.on('mouse', newDrawing);
}

function newDrawing(data){
    noStroke();
    fill(255, 0, 100);
    ellipse(data.x, data.y, 22, 22);  
    
}

function mouseDragged(){
    console.log('sending : ' + mouseX + ',' + mouseY);
    var data = {
       x: mouseX,
       y: mouseY
    }
    
    socket.emit('mouse', data);
    
    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 22, 22);
}

function draw(){
    
}
