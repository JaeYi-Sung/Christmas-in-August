
//const body = document.querySelector("body");
//const footprints = document.querySelector("footprints");
//const MIN_DUR = 3;


//clickEvent - touch로 바꿀 수도 있음
const snowClick = (e) => {
    

    const snow = document.createElement("div");
    //snow.innerText = "♥︎";
    //document.querySelector(".footprints").appendChild(snow);

    snow.classList.add("clicksnow");
    const delay = Math.random() * 10;
    const initialOpacity = Math.random();
    const duration = Math.random() * 2 + MIN_DUR
    const size = Math.random() * 12 + 8

    //snow.classList.add("snow");
    // snow.style.left = `${Math.random() * window.screen.width}px`;
    snow.style.left = `${Math.random() * 100}vw`;
    snow.style.animationDelay = `${delay}s`;
    snow.style.opacity = initialOpacity * 5 ;
    snow.style.animation = `fall ${duration}s linear`;
    snow.style.width = `${size}px`;
    snow.style.height = `${size}px`;
    snow.style.top = `${e.clientY}px`;
    snow.style.left = `${e.clientX}px`;

    //snow.style.top = `calc(${e.y}px - 0.5em)`;
    //snow.style.left = `calc(${e.y}px - 0.5em)`;

    body.appendChild(snow);

    setTimeout( () => {
        body.removeChild(snow);
        //snowClick();
    }, (duration + delay) * 200
    );

    //하트 랜덤 크기
    // snow.style.fontSize = `${Math.random() * 8 + 2}rem`;
    // //하트 위치 
    // snow.style.top = `calc(${e.y}px - 0.5em)`;
    // snow.style.left = `calc(${e.y}px - 0.5em)`;
    // footprints.appendChild(snow)
    
    // console.log("click snow");
    // console.log(e);
}

//window 클릭 시 실행
window.addEventListener("click", snowClick);


