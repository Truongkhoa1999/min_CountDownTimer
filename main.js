var inputTime = 1;
var time = inputTime * 60;
var countDown = document.getElementById("count-down");
const clearInter = setInterval(countdownFunction,1000);
function countdownFunction() {
    const timeinMinute = Math.floor(time / 60);
    let timeinSecond = time % 60;
    countDown.innerHTML = `${timeinMinute}:${timeinSecond}`;
    time--;
    if (time < 0) {
    clearInterval(clearInter)
    countDown.innerHTML = "0:0"

}
} 