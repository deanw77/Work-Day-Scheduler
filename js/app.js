// Display the current date in the header
const currentDay = $("#currentDay");

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
currentDay.html(formattedDate + nthNumber(day));

// -----------------------------------------------------------------
// Add Time Blocks
const container = $(".container");
const currentHour = currentDate.format('H')

let hourBlock;
let timeBox;
let hour = 9;
let AMPM = "AM";
let timeBlock;
let saveBtn;

container.addClass("my-4");
// Loop to create all the blocks
for (let i = 0; i < 10; i++) {
    hour = 9;
    // hourBlock is each complete row
    hourBlock = $("<div>");
    hourBlock.addClass("row flex-row");

    // timeBox is the for the hour labels
    timeBox = $("<div>");
    timeBox.addClass("hour d-flex align-items-center justify-content-end col-3 col-sm-1");
    // Loop through to apply the correct hourlabel for each box
    hour = hour + i;
    let hourCheck = hour;
    if (hour > 12) hour = hour - 12;
    if (hour >= 12) AMPM = "PM";
    timeBox.text(hour + AMPM);

    // timeBlock is the textArea for each row
    timeBlock = $("<div>");
    timeBlock.addClass("time-block d-flex align-items-center col-7 col-sm-10")
    timeBlock.attr("data-number", hourCheck);
    // Compare the current time to block time and put in correct background
    if (parseInt(currentHour) > hourCheck){
        timeBlock.addClass("past");
    } else if (parseInt(currentHour) < hourCheck) {
        timeBlock.addClass("future");
    } else {
        timeBlock.addClass("present");
    }

    // Add save button with save icon for each row
    saveBtn = $("<div>");
    saveBtn.addClass("saveBtn col-2 col-sm-1");
    saveBtn.attr("data-number", hourCheck);
    saveBtn.text("💾");

    // For each hour append the containerwith a block
    // Then append each block with time, text area and save button
    container.append(hourBlock);
    hourBlock.append(timeBox);
    hourBlock.append(timeBlock);
    hourBlock.append(saveBtn);
}
// -----------------------------------------------------------------

// Create Text Area for each 1 hour slot
const tasks = $(".time-block");

let userTextArea;
// Add each of the textAreas
for (let i = 0; i < tasks.length; i++){
    let userTextArea = document.createElement("textarea");
    userTextArea.setAttribute("id", "hour" + tasks[i].dataset.number);
    userTextArea.classList.add("textarea")

    tasks[i].append(userTextArea);
}

// Get Save button to save to local storage
// Setup the local storage
// Have save button save each element to it's local storage spot
document.querySelectorAll('.saveBtn').forEach(item => {
    item.addEventListener('click', function(event) {
        let activeNumber = "hour" + this.dataset.number;
        let textContent = document.getElementById(activeNumber).value;
        localStorage.setItem(activeNumber, textContent);
        location.reload()
    })
});

// Populate daily tasks from local storage
for (let i = 0; i < tasks.length; i++){
    let stringTest = "hour" + (i + 9);
    let grab = localStorage.getItem(stringTest);
    document.getElementById(stringTest).textContent = grab;
}

// Add welcome message to the header
const header = $('header');

let welcomeMessage = $('<h5>');
welcomeMessage.css({"color": "green", "font-weight": "bold"});

if (currentHour < 12) {
    welcomeMessage.text("Good Morning, You have the whole day ahead of you!"); 
} else if (currentHour < 15) {
    welcomeMessage.text("Midday, You've still got time to be productive");
} else {
    welcomeMessage.text("Not long to go now, Let's get finished up");
}

header.append(welcomeMessage);

// Add a delete button to clear each task
let deleteTask;

for (let i = 0; i < tasks.length; i++){
    let stringTest = "hour" + (i + 9);
    let notEmpty = document.getElementById(stringTest).textContent;
    if (notEmpty !== '') {
        deleteTask = document.createElement("button");
        deleteTask.classList.add("fa", "fa-trash", "trash");
        deleteTask.setAttribute("style", "font-size:20px; border:none; background:none;");
        deleteTask.setAttribute("data-number", i + 9);
        tasks[i].append(deleteTask);
    }
}

document.querySelectorAll('.trash').forEach(item => {
    item.addEventListener('click', function(event) {
        let activeNumber = "hour" + this.dataset.number;
        localStorage.setItem(activeNumber, '');
        location.reload()
    })
});

// TODO: Add a Save All button to the bottom
const footer = document.querySelector('footer');
const saveAllBtn = document.createElement('button');

footer.classList.add("d-flex", "justify-content-center", "mb-5");
saveAllBtn.classList.add("btn", "btn-primary", "btn-lg", "mx-3");
saveAllBtn.textContent = "Save All";

footer.append(saveAllBtn)

saveAllBtn.addEventListener('click', function(event) {
    for (let i = 0; i < tasks.length; i++){
        let mySelector = "hour" + (i + 9);
        let mytext = document.getElementById(mySelector).value;

        localStorage.setItem(mySelector, mytext);
        location.reload();
    }
});

// Add a Clear All button at the bottom
const clearAllBtn = document.createElement('button');
clearAllBtn.classList.add("btn", "btn-primary", "btn-lg", "mx-3");
clearAllBtn.textContent = "Clear All";

footer.append(clearAllBtn)

clearAllBtn.addEventListener('click', function(event) {
    localStorage.clear();
    location.reload();
});