// Taking input from the user
var subject1Marks = +(prompt("Enter marks obtained in Subject 1:"));
var subject2Marks = +(prompt("Enter marks obtained in Subject 2:"));
var subject3Marks = +(prompt("Enter marks obtained in Subject 3:"));
var totalMarks = +(prompt("Enter total marks:"));

// Calculating the total marks obtained
var totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;

// Calculating the percentage
var percentage = (totalObtainedMarks / totalMarks) * 100;

// Computing the grade and remarks
var grade = "";
var remarks = "";
if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

// Displaying the result
document.write("<h1>Marks Sheet</h1>");
document.write("<p>Total marks: " + totalMarks + "</p>");
document.write("<p>Marks obtained: " + totalObtainedMarks + "</p>");
document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
document.write("<p>Grade: " + grade + "</p>");
document.write("<p>Remarks: " + remarks + "</p>");
