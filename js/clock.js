const clock = document.querySelector("h2#clock");
const today = document.querySelector("#today");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,'0');
    const minutes = String(date.getMinutes()).padStart(2,'0');
    const seconds = String(date.getSeconds()).padStart(2,'0');
   
    clock.innerText = `${hours}:${minutes}:${seconds}`;

    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const dateStr = year + '.' + month + '.' + day ;

    today.innerText = dateStr;
}

getClock()
setInterval(getClock,1000);


