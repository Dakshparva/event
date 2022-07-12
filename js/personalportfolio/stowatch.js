var Hr=00;
var Min=00;
var Sec=00;


var timer = false;



function Start(){
timer =true;
Stopwatch();
}
function Pause(){
timer =false;
}
function Stop(){
timer =false;
}
function Stopwatch() 
{
if(timer== true){
if(Sec == 60){
Min = Min+1;
Sec =00;
}
}

if(Min == 60){
Hr = Hr +1;
Min =00;
Sec =00;
}



document.getElementById("Hr").innerHTML = Hr;
document.getElementById("Min").innerHTML = Min;
document.getElementById("Sec").innerHTML = Sec;

    setTimeout("Stopwatch()" ,10);
}

