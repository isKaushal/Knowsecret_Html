// side bar date 
let secondsing  = document.getElementById("date")


let container = document.getElementById("sidebar-container-timedate")

const monthEng = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
let today = new Date();
const DATE = today.getDate();
const MONTH = monthEng[today.getMonth()];
const YEAR = today.getFullYear();

container.innerHTML = `
    <div id="date" class="date">${DATE}</div>
    <div id="month" class="month">${MONTH}</div>
    <div id="year" class="year">${YEAR}</div>
`
// side bar date 
