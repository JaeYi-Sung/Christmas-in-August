

//✅ Check Is Play
var is_play1 = false;
var is_play2 = false;
var is_play3 = false;
var is_play4 = false;
var is_play5 = false;
var is_play6 = false;


//🎧 Audio Variables
const track1 = document.getElementById("track01");
const track2 = document.getElementById("track02");
const track3 = document.getElementById("track03");
const track4 = document.getElementById("track04");
const track5 = document.getElementById("track05");
const track6 = document.getElementById("track06");


//🍯 Auto Play Title 
basic_Audio = track1;
//basic_Audio.play();
//is_play1 = true;


//🩵 Track Name
var trackname1 = document.getElementsByClassName("Trackname1")[0];
var trackname2 = document.getElementsByClassName("Trackname2")[0];
var trackname3 = document.getElementsByClassName("Trackname3")[0];
var trackname4 = document.getElementsByClassName("Trackname4")[0];
var trackname5 = document.getElementsByClassName("Trackname5")[0];
var trackname6 = document.getElementsByClassName("Trackname6")[0];


// document.querySelector(".heart-holder").addEventListener("click", function(){
//     basic_Audio.pause();
//     basic_play = false;
// });

//💄 LipGloss 
document.querySelector(".Lipgloss").addEventListener("click", function()
{

    //🚨 이미 켜져 있으면 끄기
    if(is_play1){
        track1.pause();
        is_play1 = false;
        trackname1.style.display = "none";
    }

    //🌱 새로 켜야함
    //🧬 다른 음원이 재생중이면 그 음원을 끄고 재생

    else if(is_play2){
        track2.pause();
        is_play2 = false;
        trackname2.style.display = "none";
        track1.play();
        is_play1 = true;
        trackname1.style.display = "block";
    }

    else if(is_play3){
        track3.pause();
        is_play3 = false;
        trackname3.style.display = "none";
        track1.play();
        is_play1 = true;
        trackname1.style.display = "block";
    }

    else if(is_play4){
        track4.pause();
        is_play4 = false;
        trackname4.style.display = "none";
        track1.play();
        is_play1 = true;
        trackname1.style.display = "block";
    }

    else if(is_play5){
        track5.pause();
        is_play5 = false;
        trackname5.style.display = "none";
        track1.play();
        is_play1 = true;
        trackname1.style.display = "block";
    }

    else if(is_play6){
        track6.pause();
        is_play6 = false;
        trackname6.style.display = "none";
        track1.play();
        is_play1 = true;
        trackname1.style.display = "block";
    }

    //📢 모두 꺼져 있으면 다시 재생
    else{
        track1.play();
        is_play1 = true;
        trackname1.style.display = "block";
    }


    // console.log("one")
    // console.log("is_play1")
    // console.log(is_play1)
    // console.log("is_play2")
    // console.log(is_play2)
    
    
});

//🍓 PassionFruit
document.querySelector(".PassionFruit").addEventListener("click", function()
{

     //🚨 이미 켜져 있으면 끄기
     if(is_play2){
        track2.pause();
        is_play2 = false;
        trackname2.style.display = "none";
    }

    // //🌱 새로 켜야함
    // //🧬 다른 음원이 재생중이면 그 음원을 끄고 재생
    else if(is_play1){
        track1.pause();
        is_play1 = false;
        trackname1.style.display = "none";
        track2.play();
        is_play2 = true;
        trackname2.style.display = "block";
    }

    else if(is_play3){
        track3.pause();
        is_play3 = false;
        trackname3.style.display = "none";
        track2.play();
        is_play2 = true;
        trackname2.style.display = "block";
    }

    else if(is_play4){
        track4.pause();
        is_play4 = false;
        trackname4.style.display = "none";
        track2.play();
        is_play2 = true;
        trackname2.style.display = "block";
    }

    else if(is_play5){
        track5.pause();
        is_play5 = false;
        trackname5.style.display = "none";
        track2.play();
        is_play2 = true;
        trackname2.style.display = "block";
    }

    else if(is_play6){
        track6.pause();
        is_play6 = false;
        trackname6.style.display = "none";
        track2.play();
        is_play2 = true;
        trackname2.style.display = "block";
    }

    //📢 모두 꺼져 있으면 다시 재생
    else{
        track2.play();
        is_play2 = true;
        trackname2.style.display = "block";
    }

    // console.log("two")
    // console.log("is_play1")
    // console.log(is_play1)
    // console.log("is_play2")
    // console.log(is_play2)
    
});

//💡 Lighthouse
document.querySelector(".Lighthouse").addEventListener("click", function()
{

     //🚨 이미 켜져 있으면 끄기
     if(is_play3){
        track3.pause();
        is_play3 = false;
        trackname3.style.display = "none";
    }

    // //🌱 새로 켜야함
    // //🧬 다른 음원이 재생중이면 그 음원을 끄고 재생
    else if(is_play1){
        track1.pause();
        is_play1 = false;
        trackname1.style.display = "none";
        track3.play();
        is_play3 = true;
        trackname3.style.display = "block";
    }

    else if(is_play2){
        track2.pause();
        is_play2 = false;
        trackname2.style.display = "none";
        track3.play();
        is_play3 = true;
        trackname3.style.display = "block";
    }

    else if(is_play4){
        track4.pause();
        is_play4 = false;
        trackname4.style.display = "none";
        track3.play();
        is_play3 = true;
        trackname3.style.display = "block";
    }

    else if(is_play5){
        track5.pause();
        is_play5 = false;
        trackname5.style.display = "none";
        track3.play();
        is_play3 = true;
        trackname3.style.display = "block";
    }

    else if(is_play6){
        track6.pause();
        is_play6 = false;
        trackname6.style.display = "none";
        track3.play();
        is_play3 = true;
        trackname3.style.display = "block";
    }

    //📢 모두 꺼져 있으면 다시 재생
    else{
        track3.play();
        is_play3 = true;
        trackname3.style.display = "block";
    }
    
});

//🌈 Fantasize
document.querySelector(".Fantasize").addEventListener("click", function()
{

     //🚨 이미 켜져 있으면 끄기
     if(is_play4){
        track4.pause();
        is_play4 = false;
        trackname4.style.display = "none";
    }

    // //🌱 새로 켜야함
    // //🧬 다른 음원이 재생중이면 그 음원을 끄고 재생
    else if(is_play1){
        track1.pause();
        is_play1 = false;
        trackname1.style.display = "none";
        track4.play();
        is_play4 = true;
        trackname4.style.display = "block";
    }

    else if(is_play2){
        track2.pause();
        is_play2 = false;
        trackname2.style.display = "none";
        track4.play();
        is_play4 = true;
        trackname4.style.display = "block";
    }

    else if(is_play3){
        track3.pause();
        is_play3 = false;
        trackname3.style.display = "none";
        track4.play();
        is_play4 = true;
        trackname4.style.display = "block";
    }

    else if(is_play5){
        track5.pause();
        is_play5 = false;
        trackname5.style.display = "none";
        track4.play();
        is_play4 = true;
        trackname4.style.display = "block";
    }

    else if(is_play6){
        track6.pause();
        is_play6 = false;
        trackname6.style.display = "none";
        track4.play();
        is_play4 = true;
        trackname4.style.display = "block";
    }

    //📢 모두 꺼져 있으면 다시 재생
    else{
        track4.play();
        is_play4 = true;
        trackname4.style.display = "block";
    }
    
});

//🔥 FireEyes
document.querySelector(".FireEyes").addEventListener("click", function()
{

     //🚨 이미 켜져 있으면 끄기
     if(is_play5){
        track5.pause();
        is_play5 = false;
        trackname5.style.display = "none";
    }

    // //🌱 새로 켜야함
    // //🧬 다른 음원이 재생중이면 그 음원을 끄고 재생
    else if(is_play1){
        track1.pause();
        is_play1 = false;
        trackname1.style.display = "none";
        track5.play();
        is_play5 = true;
        trackname5.style.display = "block";
    }

    else if(is_play2){
        track2.pause();
        is_play2 = false;
        trackname2.style.display = "none";
        track5.play();
        is_play5 = true;
        trackname5.style.display = "block";
    }

    else if(is_play3){
        track3.pause();
        is_play3 = false;
        trackname3.style.display = "none";
        track5.play();
        is_play5 = true;
        trackname5.style.display = "block";
    }

    else if(is_play4){
        track4.pause();
        is_play4 = false;
        trackname4.style.display = "none";
        track5.play();
        is_play5 = true;
        trackname5.style.display = "block";
    }

    else if(is_play6){
        track6.pause();
        is_play6 = false;
        trackname6.style.display = "none";
        track5.play();
        is_play5 = true;
        trackname5.style.display = "block";
    }

    //📢 모두 꺼져 있으면 다시 재생
    else{
        track5.play();
        is_play5 = true;
        trackname5.style.display = "block";
    }
    
});


//🦄 FairyTale
document.querySelector(".FairyTale").addEventListener("click", function()
{

     //🚨 이미 켜져 있으면 끄기
     if(is_play6){
        track6.pause();
        is_play6 = false;
        trackname6.style.display = "none";
    }

    // //🌱 새로 켜야함
    // //🧬 다른 음원이 재생중이면 그 음원을 끄고 재생
    else if(is_play1){
        track1.pause();
        is_play1 = false;
        trackname1.style.display = "none";
        track6.play();
        is_play6 = true;
        trackname6.style.display = "block";
    }

    else if(is_play2){
        track2.pause();
        is_play2 = false;
        trackname2.style.display = "none";
        track6.play();
        is_play6 = true;
        trackname6.style.display = "block";
    }

    else if(is_play3){
        track3.pause();
        is_play3 = false;
        trackname3.style.display = "none";
        track6.play();
        is_play6 = true;
        trackname6.style.display = "block";
    }

    else if(is_play4){
        track4.pause();
        is_play4 = false;
        trackname4.style.display = "none";
        track6.play();
        is_play6 = true;
        trackname6.style.display = "block";
    }

    else if(is_play5){
        track5.pause();
        is_play5 = false;
        trackname5.style.display = "none";
        track6.play();
        is_play6 = true;
        trackname6.style.display = "block";
    }

    //📢 모두 꺼져 있으면 다시 재생
    else{
        track6.play();
        is_play6 = true;
        trackname6.style.display = "block";
    }
    
});