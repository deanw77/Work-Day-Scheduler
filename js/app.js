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


