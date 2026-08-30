const background = document.getElementById("background");

const totalFrames = 60;
const fps = 30;

const frames = [];
let currentFrame = 0;

for (let i = 1; i <= totalFrames; i++) {
    const img = new Image();
    img.src = `assets/background/frame${String(i).padStart(3, "0")}.webp`;
    frames.push(img);
}

function showFrame() {
    const frame = frames[currentFrame];

    if (frame.complete) {
        background.style.backgroundImage = `url("${frame.src}")`;
    }

    currentFrame++;

    if (currentFrame >= totalFrames) {
        currentFrame = 0;
    }
}

setInterval(showFrame, 1000 / fps);
showFrame();
