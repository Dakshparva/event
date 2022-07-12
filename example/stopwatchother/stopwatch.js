let Hour,
timer,
Minute,
Seconds,
interval;

let getSeconds = 0;
getMinutes=0;
getHours=0;

function Stopwatch(){
    this.start =function(){
        Hour =document.getElementById("Hour");
        Minute= document.getElementById("Minute");
        Seconds =document.getElementById("Seconds");

        if(getSeconds>=0){
            getSeconds++;
            Seconds.innerHTML= getSeconds;
        }

        if(getSeconds<10){
            Seconds.innerHTML="0" + getSeconds;
        }

        if(getSeconds>=60){
            getSeconds=0;
            getMinutes=0;
            Minute.innerHTML =getMinutes;
        }

        if(getMinutes<10){
            Minute.innerHTML ="0"+ getMinutes;
        }

        if(getMinutes>=60){
            getMinutes = 0;
            getHours++;
            Hour.innerHTML = getHours;
        }
        if(getHours<10){
            Hour.innerHTML= "0" + getHours + ":";
        }
        interval = setTimeout(Object.Start,1000)
    }
}
this.Stop = function(){
    clearTimeout(interval);
}
this.Reset = function(){
    if(getSeconds>=0){
        getSeconds= 0 ;
        getHours = 0;
        getMinutes= 0;

        Seconds.innerHTML= "0"+ getSeconds;
        Minute.innerHTML= "0"+ getMinutes + ":";
        Hour.innerHTML= "0"+ getHours+ ":";
        clearTimeout(interval);
    }
}
let Object = new Stopwatch();
