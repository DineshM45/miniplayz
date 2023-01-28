var is_playing = false;
var score = 0;
var time_Remaining;
var action;
var correct_answser ;
document.getElementById("StartReset").onclick=function(){
    if(is_playing==true){
        location.reload();     //to reload this current page if click on resetGame button.
    }else{
        is_playing = true;
        score = 0; 
        time_Remaining = 60;
        hide("Gameover");
        document.getElementById("StartReset").innerHTML = "Reset Game";
        document.getElementById("scorevalue").innerHTML = score;
        show("timeRemaining"); //to make visible the Timer.
        document.getElementById("secvalue").innerHTML = time_Remaining;
        countdown();
        create_question();
        for(var i=1;i<5;i++){
            document.getElementById("box"+i).onclick=function(){
                if(is_playing==true){
                   if(this.innerHTML == correct_answser){
                    score++;
                    document.getElementById("scorevalue").innerHTML = score;
                    show("correct");
                    setTimeout(function(){
                        hide("correct")
                    },300);
                    create_question();
                   }else if(this.innerHTML != correct_answser){
                      show("wrong");
                      setTimeout(function(){
                        hide("wrong")
                    },300);
                      
                   }
    
                }
            }
        }

       
    }
}

function countdown(){
     setInterval(function(){
      action =   time_Remaining -=1;
        document.getElementById("secvalue").innerHTML = time_Remaining;
        if(time_Remaining < 0){
            stopCountdown();
             show("Gameover");
             hide("timeRemaining");
             hide("correct");
             hide("wrong");
             document.getElementById("StartReset").innerHTML = "Start Game";
             is_playing = false;
             document.getElementById("marksvalue").innerHTML = score;
            
        }
    },1000);
 

}
function stopCountdown(){
    time_Remaining = 0;
       clearInterval(action);
}
function hide(ID){
    document.getElementById(ID).style.display="none";
}
function show(ID){
    document.getElementById(ID).style.display="block";
}
function create_question(){
    var x= 1+Math.round(Math.random()*9);
    var y =1+Math.round(Math.random()*9);
    document.getElementById("x").innerHTML = x;
    document.getElementById("y").innerHTML = y;
     correct_answser = x*y;
    var place_ele = 1+Math.round(Math.random()*3);
    document.getElementById("box"+place_ele).innerHTML = correct_answser; 
    var answers = [correct_answser];
for(var i=1;i<5;i++){
           if(place_ele !== i){
            var wrong_answers;
                 do{
                      wrong_answers = ( 1+Math.round(Math.random()*9))*( 1+Math.round(Math.random()*9));
                 }while(answers.indexOf(wrong_answers)>-1) 
                 document.getElementById("box"+i).innerHTML = wrong_answers;
                 answers.push(wrong_answers);
                    
           
        }

    }   
}
