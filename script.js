const background = document.getElementById("background");

const totalFrames = 24;
const fps = 5;

const frames = [];
let currentFrame = 0;

function loadFrame(index) {
    return new Promise((resolve, reject) => {
        const img = new Image();

        img.onload = () => {
            resolve(img);
        };

        img.src = `assets/frame${String(index).padStart(3, "0")}.png`;
    });
}

async function startAnimation() {
    try {
        for (let i = 1; i <= totalFrames; i++) {
            const frame = await loadFrame(i);
            frames.push(frame);
        }

        background.style.backgroundImage = `url("${frames[0].src}")`;

        setInterval(() => {
            currentFrame++;

            if (currentFrame >= totalFrames) {
                currentFrame = 0;
            }

            background.style.backgroundImage = `url("${frames[currentFrame].src}")`;
        }, 1000 / fps);

    } catch (error) {
        console.error(error);
    }
}

startAnimation();
