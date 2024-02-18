function setup() {
    createCanvas(600, 600);
}
  
function draw() {
    background(4, 30, 23);
    flower();
}
  
function flower() {    
    push();
    fill(100, 56, 200, 230);
    translate(300, 300);
    noStroke();
    for (var r3 = 0; r3 < 8; r3++) {
        if (frameCount <= 1200) {
            ellipse(2, 20 + frameCount/10, 20 + frameCount/20, 50 + frameCount/10);
        }
        if (frameCount > 400 && frameCount <= 1200) {
            ellipse(0, 50 + frameCount/20, 50, 70+ frameCount/50)
        }
        rotate(PI / 4);
    }
    pop();
}