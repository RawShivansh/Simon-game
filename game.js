let computercolorlist = [];
let playercolorlist = [];
var colorlist = ["green","red","yellow","blue"];
var started=false;
var level = 1;
$(document).on("keydown",startgame);

function startgame(){
    
    if(!started){
    $("h1").text("Level "+level);
    computerentry();
    started=true;
    
    }

}

$(".btn").on("click",function(){
    var buttonclicked = $(this).attr("id");
    var buttonclickedclass = "."+ buttonclicked;
    tileanimation(buttonclicked);
    playsound(buttonclicked);
    playercolorlist.push(buttonclicked);
    checkresult(playercolorlist.length-1);
});

function computerentry(){
    var random = Math.floor(Math.random()*4);
    var randomcolor = colorlist[random];
    var randomcolorclass = "."+randomcolor;
    tileanimation(randomcolor);
    playsound(randomcolor);
    computercolorlist.push(randomcolor);

   
}

function checkresult(currentlevel){
    if(computercolorlist[currentlevel] === playercolorlist[currentlevel]){
        if(computercolorlist.length === playercolorlist.length){
        level++;
        setTimeout(function(){
            $("h1").text("Level "+level);
        },800);
        setTimeout(computerentry,800);
        playercolorlist=[];
        }

    }
    else{

        playsound('wrong');
        $("h1").text("Game over, press any key to start");
        startover();
    }
}


function tileanimation (colorclass){
    $("."+colorclass).addClass("pressed");
    setTimeout(function(){
        $("."+colorclass).removeClass("pressed");
    },170);
}

// function lostanimation(){
//     $("body").addClass("game-over");
// }

function playsound(color){
    switch(color){
        case 'blue' : {
            var blue = new Audio("./sounds/blue.mp3");
            blue.play();
            break;
        }
        case 'green' : {
            var green = new Audio("./sounds/green.mp3");
            green.play();
            break;
        }
        case 'red' : {
            var red = new Audio("./sounds/red.mp3");
            red.play();
            break;
        }
        case 'yellow' : {
            var yellow = new Audio("./sounds/yellow.mp3");
            yellow.play();
            break;
        }
        case 'wrong' : {
            $("body").addClass("game-over");
            setTimeout(function(){
                $("body").removeClass("game-over"); 
            },180);
            var wrong = new Audio("./sounds/wrong.mp3");
            wrong.play();
            break;
        }

    }
}
function startover(){
    level = 1;
    computercolorlist = [];
    playercolorlist=[];
    started=false;

}