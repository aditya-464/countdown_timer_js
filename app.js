const months = [
    "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"
];
const days = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];
const futureDate = new Date(2022, 9, 21, 11, 30, 0, 0);
let year = futureDate.getFullYear();
let monthNum = futureDate.getMonth();
let month = months[monthNum];
let date = futureDate.getDate();
let day = days[futureDate.getDay()];
let hours = futureDate.getHours();
let minutes = futureDate.getMinutes();
const deadlineDetails = document.querySelector(".deadline-details");
deadlineDetails.innerHTML = `Giveaway Ends On ${day}, ${date} ${month} ${year} ${hours}:${minutes}am`;

const countdownDiv = document.querySelector(".countdown");
const timeFormats = document.querySelectorAll(".countdown h2");
// all time values are in ms
function getRemainingTime() {
    const currentDate = new Date();
    const t = futureDate.getTime() - currentDate.getTime();
    let oneDay = 24 * 60 * 60 * 1000;
    let oneHour = 60 * 60 * 1000;
    let oneMinute = 60 * 1000;

    let diffDay = Math.floor(t / oneDay);
    let diffHours = Math.floor((t % oneDay) / oneHour);
    let diffMins = Math.floor((t % oneHour) / oneMinute);
    let diffSecs = Math.floor((t % oneMinute) / 1000);

    const values = [diffDay, diffHours, diffMins, diffSecs];
    function format(item){
        if(item<10){
            return (item =`0${item}`);
        }
        else return item;
    }
    timeFormats.forEach(function(timeFormat, index){
        timeFormat.innerHTML = format(values[index]);
    })

    if (t < 0) {
        clearInterval(countdown);
        countdownDiv.innerHTML = `<h3 class="expired">sorry, this giveaway has expired!</h3>`;
    }
}
let countdown = setInterval(getRemainingTime,1000);
getRemainingTime();

