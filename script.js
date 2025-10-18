const targetTime= Date.now() + 1 * 60 * 1000;//1min=>60sec=> 1sec=1000milisec  so 2*60*1000  

const timer= document.querySelector("#timer");
let intervalId;
function updateTime(){

const now= Date.now();
const diff= targetTime-now;

if(diff<=0){
timer.textContent="The wait is over! 🎉";
document.body.classList.add("active");
clearInterval(intervalId);   //so we don't get a negative value
return;
}

const minutes= Math.floor(diff/60000);  //to get min
const sec= Math.floor((diff%60000)/1000); //to get sec

timer.textContent= `${String(minutes).padStart(2, "0")} : ${String(sec).padStart(2, "0")}`;

}

updateTime();
 intervalId= setInterval(updateTime, 1000);