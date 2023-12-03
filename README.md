# Work-Day-Scheduler

A daily scheduler application to plan you day. Tasks stored to local storage so you can leave page and come back to check progress. 

## User Requirements

1) Must use dayjs() libray to get current time and date. 
2) Tasks must be stored to loacal storage and repopulated on page refresh.
3) Time blocks must be color coordinated based on current time (Past, Present & Future).
4) Current Date displayed on the top of the page.
5) Time blocks need a text area so user can enter there scheduled tasks.
6) Save buttons to save each task to local storage.

## Problem Solved

1) Current data added to header along with corect suffix (th, nd, rd, st) which uses a switch statement.
2) Added a welcome message to header that changes depending on the hour from dayjs().
3) Added some bootstrap column classes to improve display at smaller screen sizes.
4) Each save button saves only the item from its corresponding block to local storage.
5) Added a Clear All button to the bottom so user can easily remove all data to start a new day.
6) Added a Save All button To save all items to local storage. Saves having to click save for each individual element.
7) Added a delete button to remove completed tasks.

## Hosted Site

Go ahead and schedule you day here..... <br>
https://deanw77.github.io/Work-Day-Scheduler/

### Project Overview
As someone who likes to start each day with a to-to list this was a fun assignment. I found this a very practical project in that I will likely use the finished product daily now. 
I added in a few additional features that I though would be nice to have. A delete button for removing individual tasks as well as a delete all button for clearing everything at the end of the day. 
I like that the delete entry only displays on boxes that have an entry.
I also, on a least a couple of occasions filled out several boxes while forgetting to click the save button. So once I triggered a save button the previous other entries would be lost. To solve this I added a Save All button to the bottom so I could plan my entire day then save everything in one go. 

### Final Result

![Final Product](images/ScheduleScreencast.gif)

#### Worth Noting:
Taking the time to create a good plan using psuedocode REALLY helps the development process. I spent a couple of hours casually breaking down this project into smaller and smaller steps and writing my psuedocode. When it came to coding from that it was significantly more straighforward.
