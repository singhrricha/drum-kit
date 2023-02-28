//  document.querySelectorAll("button")[0].addEventListener("click",function(){var audio = new Audio('sounds/crash.mp3');
//  audio.play();});
//  document.querySelectorAll("button")[1].addEventListener("click",function(){var audio = new Audio('sounds/kick-bass.mp3');
//  audio.play();});
//  document.querySelectorAll("button")[2].addEventListener("click",function(){var audio = new Audio('sounds/snare.mp3');
//  audio.play();});
//  document.querySelectorAll("button")[3].addEventListener("click",function(){var audio = new Audio('sounds/tom-1.mp3');
//  audio.play();});
//  document.querySelectorAll("button")[4].addEventListener("click",function(){var audio = new Audio('sounds/tom-2.mp3');
//  audio.play();});
//  document.querySelectorAll("button")[5].addEventListener("click",function(){var audio = new Audio('sounds/tom-3.mp3');
//  audio.play();});
//  document.querySelectorAll("button")[6].addEventListener("click",function(){var audio = new Audio('sounds/tom-4.mp3');
//  audio.play();});

var numberOfDrumButton=document.querySelectorAll(".drum").length;            //shortcut for applying abovve effect
for(var i=0;i<numberOfDrumButton;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){ 
        var buttonInnerHtml=this.innerHTML;
        makesound(buttonInnerHtml);
        
      });
      }
      document.addEventListener("keydown",function(event){
        makesound(event.key);
      });
      
      function makesound(key){
        switch(key) {
            case "q":
                var tom1=new Audio("sounds/crash.mp3");
                tom1.play();
                break;
                case "w":
                    var tom2=new Audio("sounds/kick-bass.mp3");
                    tom2.play();
                    break;
                 case "e":
                   var tom3=new Audio("sounds/snare.mp3");
                    tom3.play();
                    break;
                case "r":
                    var tom4=new Audio("sounds/tom-1.mp3");
                    tom4.play();
                    break;
                case "t":
                    var tom5=new Audio("sounds/tom-2.mp3");
                    tom5.play();
                    break;
                case "y":
                    var tom6=new Audio("sounds/tom-3.mp3");
                    tom6.play();
                    break;
                case "u":
                    var tom7=new Audio("sounds/tom-4.mp3");
                    tom7.play();
                    break;  
        }
      }