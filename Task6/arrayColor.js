// Initialize an array with color names
var colors = ["Red", "Green", "Blue"];

// Display the array elements in the browser
document.write("<h3>Original Array:</h3>");
document.write(colors);

// Ask the user what color to add to the beginning of the array
var addBeginning = prompt("Enter a color to add to the beginning of the array:");

// Add the color to the beginning of the array
colors.unshift(addBeginning);

// Display the updated array in the browser
document.write("<h3>Updated Array (added " + addBeginning + " to the beginning):</h3>");
document.write(colors);

// Ask the user what color to add to the end of the array
var addEnd = prompt("Enter a color to add to the end of the array:");

// Add the color to the end of the array
colors.push(addEnd);

// Display the updated array in the browser
document.write("<h3>Updated Array (added " + addEnd + " to the end):</h3>");
document.write(colors);