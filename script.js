var msec = 0 ;
var seconds = 0 ;
var minutes = 0;
var hours = 0 ;
var timer = null ;




function startTimer(params) {
    if (timer !==null) {
        return;
    }
    timer = setInterval(run, 10);
    
}
function run (){
  msec++;
  if(msec ==100){
     msec = 0;
     seconds++;
  if(seconds == 60){
    seconds = 0;
    minutes++;
    if(minutes == 60){
        minutes = 0;
        hours++;
    }
  }
}
  updateDisplay();
}
function stopTimer(){
    clearInterval(timer);
    timer = null;
    updateDisplay();
}
function resetTimer(){
    clearInterval(timer);
    timer = null;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();

}
function updateDisplay() {
    var display = document.getElementById("display");
    display.innerText = (hours < 10 ? "0" + hours : hours) + ":" +
                        (minutes < 10 ? "0" + minutes : minutes) + ":" +
                        (seconds < 10 ? "0" + seconds : seconds)+ ":" +
                        (msec < 10 ? "0" + msec :msec);
}