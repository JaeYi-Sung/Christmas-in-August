

const body = document.querySelector("body");
//const footprints = document.querySelector("footprints");
const MIN_DUR = 3;


function makeSnow() {
    const snow = document.createElement("div");
    const delay = Math.random() * 10;
    const initialOpacity = Math.random();
    const duration = Math.random() * 5 + MIN_DUR
    const size = Math.random() * 12

    snow.classList.add("snow");
    // snow.style.left = `${Math.random() * window.screen.width}px`;
    snow.style.left = `${Math.random() * 100}vw`;
    snow.style.animationDelay = `${delay}s`;
    snow.style.opacity = initialOpacity * 5 ;
    snow.style.animation = `fall ${duration}s linear`;
    snow.style.width = `${size}px`;
    snow.style.height = `${size}px`;


    body.appendChild(snow);

    setTimeout( () => {
        body.removeChild(snow);
        makeSnow();
    }, (duration + delay) * 1000
    );

}



makeSnow();

for (let index = 0; index < 500; index++) {
    setTimeout(makeSnow, 1000 * index);
    makeSnow();
}


