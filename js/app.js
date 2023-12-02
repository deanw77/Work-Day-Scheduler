// Display the current date in the header
const currentDay = document.querySelector("#currentDay");

const currentDate = dayjs(); 
const formattedDate = currentDate.format('dddd[,] MMMM D'); 
const day = parseInt(currentDate.format('D'));

// Switch statement to get the correct suffix for date
const nthNumber = (D) => {
    if (D > 3 && D < 21) return 'th';
    switch (D % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
};

// Display todays date, with the correct suffix to the screen.
currentDay.innerHTML = formattedDate + nthNumber(day);

// -----------------------------------------------------------------
// Add Time Blocks
const container = document.querySelector(".container");
const currentHour = currentDate.format('H')

let hourBlock;
let timeBox;
let hour = 9;
let AMPM = "AM";
let timeBlock;
let saveBtn;

for (let i = 0; i < 10; i++) {
    hour = 9;
    hourBlock = document.createElement("div");
    hourBlock.classList.add("time-block", "row", "d-flex", "flex-row");

    timeBox = document.createElement("div");
    timeBox.classList.add("hour",  "d-flex","align-items-center", "justify-content-end", "col-3", "col-sm-1");

    hour = hour + i;
    let hourCheck = hour;
    if (hour > 12) hour = hour - 12;
    if (hour >= 12) AMPM = "PM";
    timeBox.textContent = hour + AMPM;

    timeBlock = document.createElement("div");
    timeBlock.classList.add("textarea", "col-7", "col-sm-10")
    if (parseInt(currentHour) > hourCheck){
        timeBlock.classList.add("past");
        
    } else if (parseInt(currentHour) < hourCheck) {
        timeBlock.classList.add("future");
    } else {
        timeBlock.classList.add("present");
    }

    saveBtn = document.createElement("div");
    saveBtn.classList.add("saveBtn", "col-2", "col-sm-1");
    //saveBtn.setAttribute("style", "width:20%")
    saveBtn.textContent = "💾";

    container.append(hourBlock);
    hourBlock.append(timeBox);
    hourBlock.append(timeBlock);
    hourBlock.append(saveBtn);
}


