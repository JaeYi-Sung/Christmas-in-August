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
        
    }

    //🌱 새로 켜야함
    //🧬 다른 음원이 재생중이면 그 음원을 끄고 재생

    else if(is_play2){
        track2.pause();
        is_play2 = false;
        
        track1.play();
        is_play1 = true;
        
    }

    else if(is_play3){
        track3.pause();
        is_play3 = false;
        
        track1.play();
        is_play1 = true;
        
    }

    else if(is_play4){
        track4.pause();
        is_play4 = false;
        
        track1.play();
        is_play1 = true;
        
    }

    else if(is_play5){
        track5.pause();
        is_play5 = false;
        
        track1.play();
        is_play1 = true;
        
    }

    else if(is_play6){
        track6.pause();
        is_play6 = false;
        
        track1.play();
        is_play1 = true;
        
    }

    //📢 모두 꺼져 있으면 다시 재생
    else{
        track1.play();
        is_play1 = true;
       
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
        
    }

    // //🌱 새로 켜야함
    // //🧬 다른 음원이 재생중이면 그 음원을 끄고 재생
    else if(is_play1){
        track1.pause();
        is_play1 = false;
        
        track2.play();
        is_play2 = true;
        
    }

    else if(is_play3){
        track3.pause();
        is_play3 = false;
        
        track2.play();
        is_play2 = true;
        
    }

    else if(is_play4){
        track4.pause();
        is_play4 = false;
        
        track2.play();
        is_play2 = true;
        
    }

    else if(is_play5){
        track5.pause();
        is_play5 = false;
        
        track2.play();
        is_play2 = true;
        
    }

    else if(is_play6){
        track6.pause();
        is_play6 = false;
        
        track2.play();
        is_play2 = true;
        
    }

    //📢 모두 꺼져 있으면 다시 재생
    else{
        track2.play();
        is_play2 = true;
        
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
        
    }

    // //🌱 새로 켜야함
    // //🧬 다른 음원이 재생중이면 그 음원을 끄고 재생
    else if(is_play1){
        track1.pause();
        is_play1 = false;
        
        track3.play();
        is_play3 = true;
        
    }

    else if(is_play2){
        track2.pause();
        is_play2 = false;
        
        track3.play();
        is_play3 = true;
        
    }

    else if(is_play4){
        track4.pause();
        is_play4 = false;
        
        track3.play();
        is_play3 = true;
        
    }

    else if(is_play5){
        track5.pause();
        is_play5 = false;
        
        track3.play();
        is_play3 = true;
        
    }

    else if(is_play6){
        track6.pause();
        is_play6 = false;
        
        track3.play();
        is_play3 = true;
        
    }

    //📢 모두 꺼져 있으면 다시 재생
    else{
        track3.play();
        is_play3 = true;
        
    }
    
});

//🌈 Fantasize
document.querySelector(".Fantasize").addEventListener("click", function()
{

     //🚨 이미 켜져 있으면 끄기
     if(is_play4){
        track4.pause();
        is_play4 = false;
        
    }

    // //🌱 새로 켜야함
    // //🧬 다른 음원이 재생중이면 그 음원을 끄고 재생
    else if(is_play1){
        track1.pause();
        is_play1 = false;
        
        track4.play();
        is_play4 = true;
        
    }

    else if(is_play2){
        track2.pause();
        is_play2 = false;
        
        track4.play();
        is_play4 = true;
        
    }

    else if(is_play3){
        track3.pause();
        is_play3 = false;
        
        track4.play();
        is_play4 = true;
       
    }

    else if(is_play5){
        track5.pause();
        is_play5 = false;
        
        track4.play();
        is_play4 = true;
        
    }

    else if(is_play6){
        track6.pause();
        is_play6 = false;
        
        track4.play();
        is_play4 = true;
        
    }

    //📢 모두 꺼져 있으면 다시 재생
    else{
        track4.play();
        is_play4 = true;
        
    }
    
});

//🔥 FireEyes
document.querySelector(".FireEyes").addEventListener("click", function()
{

     //🚨 이미 켜져 있으면 끄기
     if(is_play5){
        track5.pause();
        is_play5 = false;
        
    }

    // //🌱 새로 켜야함
    // //🧬 다른 음원이 재생중이면 그 음원을 끄고 재생
    else if(is_play1){
        track1.pause();
        is_play1 = false;
        
        track5.play();
        is_play5 = true;
        
    }

    else if(is_play2){
        track2.pause();
        is_play2 = false;
        
        track5.play();
        is_play5 = true;
       
    }

    else if(is_play3){
        track3.pause();
        is_play3 = false;
        
        track5.play();
        is_play5 = true;
        
    }

    else if(is_play4){
        track4.pause();
        is_play4 = false;
        
        track5.play();
        is_play5 = true;
        
    }

    else if(is_play6){
        track6.pause();
        is_play6 = false;
        
        track5.play();
        is_play5 = true;
        
    }

    //📢 모두 꺼져 있으면 다시 재생
    else{
        track5.play();
        is_play5 = true;
        
    }
    
});


//🦄 FairyTale
document.querySelector(".FairyTale").addEventListener("click", function()
{

     //🚨 이미 켜져 있으면 끄기
     if(is_play6){
        track6.pause();
        is_play6 = false;
        
    }

    // //🌱 새로 켜야함
    // //🧬 다른 음원이 재생중이면 그 음원을 끄고 재생
    else if(is_play1){
        track1.pause();
        is_play1 = false;
        
        track6.play();
        is_play6 = true;
       
    }

    else if(is_play2){
        track2.pause();
        is_play2 = false;
       
        track6.play();
        is_play6 = true;
        
    }

    else if(is_play3){
        track3.pause();
        is_play3 = false;
       
        track6.play();
        is_play6 = true;
      
    }

    else if(is_play4){
        track4.pause();
        is_play4 = false;
      
        track6.play();
        is_play6 = true;
        
    }

    else if(is_play5){
        track5.pause();
        is_play5 = false;
        
        track6.play();
        is_play6 = true;
        
    }

    //📢 모두 꺼져 있으면 다시 재생
    else{
        track6.play();
        is_play6 = true;
       
    }
    
});


//track1
track1.addEventListener("ended", function(){ 
    is_play1 = false;
    //trackname1.style.display = "none";
});

track1.addEventListener("play", function() {
    is_play1 = true;
    //trackname1.style.display =  "block";
});

track1.addEventListener("pause", function() {
    is_play1 = false;
    //trackname1.style.display = "none";
});

//track2
track2.addEventListener("ended", function(){ 
    is_play2 = false;
    //trackname2.style.display = "none";
});

track2.addEventListener("play", function() {
    is_play2 = true;
    //trackname2.style.display =  "block";
});

track2.addEventListener("pause", function() {
    is_play2 = false;
    //trackname2.style.display = "none";
});


//track3
track3.addEventListener("ended", function(){ 
    is_play3 = false;
    //trackname3.style.display = "none";
});

track3.addEventListener("play", function() {
    is_play3 = true;
    //trackname3.style.display =  "block";
});

track3.addEventListener("pause", function() {
    is_play3 = false;
    //trackname3.style.display = "none";
});

//track4
track4.addEventListener("ended", function(){ 
    is_play4 = false;
    //trackname4.style.display = "none";
});

track4.addEventListener("play", function() {
    is_play4 = true;
    //trackname4.style.display =  "block";
});

track4.addEventListener("pause", function() {
    is_play4 = false;
    //trackname4.style.display = "none";
});

//track5
track5.addEventListener("ended", function(){ 
    is_play5 = false;
    //trackname5.style.display = "none";
});

track5.addEventListener("play", function() {
    is_play5 = true;
    //trackname5.style.display =  "block";
});

track5.addEventListener("pause", function() {
    is_play5 = false;
    //trackname5.style.display = "none";
});

//track6
track6.addEventListener("ended", function(){ 
    is_play6 = false;
    //trackname6.style.display = "none";
});

track6.addEventListener("play", function() {
    is_play6 = true;
    //trackname6.style.display =  "block";
});

track6.addEventListener("pause", function() {
    is_play6 = false;
    //trackname6.style.display = "none";
});