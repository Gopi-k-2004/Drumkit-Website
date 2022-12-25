
var n=document.getElementsByClassName("box").length;
console.log(n);
for(var i=0;i<n;i++){
    document.getElementsByClassName("box")[i].addEventListener("click",function(){
       var buttoninnerHTML=this.innerHTML;
       makeSound(buttoninnerHTML);
       addAnimation(buttoninnerHTML);
    })
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    addAnimation(event.key);
});

var audio1 = new Audio("sounds/crash.mp3");
var audio2 = new Audio("sounds/kick-bass.mp3");
var audio3 = new Audio("sounds/snare.mp3");
var audio4 = new Audio("sounds/tom-1.mp3");
var audio5 = new Audio("sounds/tom-2.mp3");
var audio6 = new Audio("sounds/tom-3.mp3");
var audio7 = new Audio("sounds/tom-.4mp3");

function makeSound(key){
    switch(key){
    case "j": 
             var audio1 = new Audio("sounds/crash.mp3");
              audio1.play();
              break;
    case "k": 
             var audio2 =  new Audio("sounds/kick-bass.mp3");
              audio2.play();
              break;
    case "l": 
             var audio3 = new Audio("sounds/snare.mp3");
              audio3.play();
              break;
    case "w": 
             var audio4 = new Audio("sounds/tom-1.mp3");
              audio4.play();
              break;
    case "a": 
             var audio5 = new Audio("sounds/tom-2.mp3");
              audio5.play();
              break;
    case "s": 
             var audio6 = new Audio("sounds/tom-3.mp3");
              audio6.play();
              break;
    case "d": 
             var audio7 = new Audio("sounds/tom-4.mp3");
              audio7.play();
              break;

    }
}

// adding animation

function addAnimation(currentkey){
    var activebutton =document.querySelector(" ."+currentkey);
    activebutton.classList.add("pressed");

    setTimeout(function(){
        activebutton.classList.remove("pressed")
    },100);
}
;