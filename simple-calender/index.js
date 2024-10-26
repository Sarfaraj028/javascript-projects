// getting elements 
const monthNameEl = document.querySelector(".month-name");
const dayNameEl = document.querySelector(".day-name");
const dayNumEl = document.querySelector(".day-num");
const yearNameEl = document.querySelector(".year-name");

//getting date
const date = new Date();

//getting dynamically
const month = date.toLocaleString("en", {month: "long"});
const day = date.toLocaleString('en',{weekday: "long"})
const dayNum = date.getDate()
const year = date.getFullYear()

//setting dynamically
monthNameEl.innerText = month
dayNameEl.innerText = day
dayNumEl.innerText = dayNum
yearNameEl.innerText = year