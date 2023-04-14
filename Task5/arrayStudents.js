// Array to store student names
var names = [];

// Array to store student scores
var scores = [];

// Get names and scores from user
var name1 = prompt("Enter the name of student 1:");
var score1 = parseInt(prompt("Enter the score of student 1 out of 500:"));
var name2 = prompt("Enter the name of student 2:");
var score2 = parseInt(prompt("Enter the score of student 2 out of 500:"));
var name3 = prompt("Enter the name of student 3:");
var score3 = parseInt(prompt("Enter the score of student 3 out of 500:"));

names.push(name1);
names.push(name2);
names.push(name3);

scores.push(score1);
scores.push(score2);
scores.push(score3);

// Calculate percentage for each student
var percentage1 = (scores[0] / 500) * 100;
var percentage2 = (scores[1] / 500) * 100;
var percentage3 = (scores[2] / 500) * 100;

// Display scores and percentages
document.write("<p> Score of " + names[0] + " is " + scores[0] + ". Percentage: " + percentage1.toFixed(2) + "% </p>");
document.write("<p> Score of " + names[1] + " is " + scores[1] + ". Percentage: " + percentage2.toFixed(2) + "% </p>");
document.write("<p> Score of " + names[2] + " is " + scores[2] + ". Percentage: " + percentage3.toFixed(2) + "% </p>");
