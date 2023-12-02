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

container.classList.add("my-4");
// Loop to create all the blocks
for (let i = 0; i < 10; i++) {
    hour = 9;
    // hourBlock is each complete row
    hourBlock = document.createElement("div");
    hourBlock.classList.add("row", "flex-row");

    // timeBox is the for the hour labels
    timeBox = document.createElement("div");
    timeBox.classList.add("hour",  "d-flex", "align-items-center", "justify-content-end", "col-3", "col-sm-1");
    // Loop through to apply the correct hourlabel for each box
    hour = hour + i;
    let hourCheck = hour;
    if (hour > 12) hour = hour - 12;
    if (hour >= 12) AMPM = "PM";
    timeBox.textContent = hour + AMPM;

    // timeBlock is the textArea for each row
    timeBlock = document.createElement("div");
    timeBlock.classList.add("textarea", "col-7", "col-sm-10")
    timeBlock.setAttribute("data-number", hourCheck);
    // Compare the current time to block time and put in correct background
    if (parseInt(currentHour) > hourCheck){
        timeBlock.classList.add("past");
    } else if (parseInt(currentHour) < hourCheck) {
        timeBlock.classList.add("future");
    } else {
        timeBlock.classList.add("present");
    }

    // Add save button with save icon for each row
    saveBtn = document.createElement("div");
    saveBtn.classList.add("saveBtn", "col-2", "col-sm-1");
    saveBtn.setAttribute("data-number", hourCheck);
    saveBtn.textContent = "💾";

    // For each hour append the containerwith a block
    // Then append each block with time, text area and save button
    container.append(hourBlock);
    hourBlock.append(timeBox);
    hourBlock.append(timeBlock);
    hourBlock.append(saveBtn);
}
// -----------------------------------------------------------------


