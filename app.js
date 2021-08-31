var seconds = 0;
var minutes = 0;
var hours = 0;

//Define vars to hold "display" value
var displaySeconds = 0;
var displayMinutes = 0;
var displayHours = 0;

//Define var to hold setInterval() function
var time = 0;

//Define var to hold stopwatch status
var status = "start";

//Stopwatch function (logic to determine when to increment next value, etc.)
function Watch(){

    seconds++;

    //Logic to determine when to increment next value
    if(seconds / 60 === 1){
            seconds = 0;
            minutes++;

        if(minutes / 60 === 1){
                minutes = 0;
                hours++;
            }

    }

    //If seconds/minutes/hours are only one digit, add a leading 0 to the value
    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }

    if(hours < 10){
        displayHours = "0" + hours.toString();
    }
    else{
        displayHours = hours;
    }

    //Display updated time values to user
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;

}



function startStop(){

    if(status === "start"){

        //Start the stopwatch by calling the setInterval() function
        interval = window.setInterval(Watch, 1000);
        document.getElementById("start/Stop").innerHTML = "Stop";
        status = "stop";

    }
    else{

        window.clearInterval(interval);
        document.getElementById("start/Stop").innerHTML = "Start";
        status = "start";

    }

}
//reset the stopwatch
function reset(){

    window.clearInterval(time);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    // document.getElementById("start/Stop").innerHTML = "Stop";

}