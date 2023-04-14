// prompt the user for the city name
var city = prompt("Enter city name:").toLowerCase();

// check if the city name is "Karachi"
if (city === "karachi") {
    alert("Welcome to the city of lights");
}
// check if the city name is "Lahore"
else if (city === "lahore") {
    alert("Welcome to the heart of Pakistan");
}
// check if the city name is "Islamabad"
else if (city === "islamabad") {
    alert("Welcome to the capital of Pakistan");
}
// check if the city name is "Peshawar"
else if (city === "peshawar") {
    alert("Welcome to the city of flowers");
}
// check if the city name is "Quetta"
else if (city === "quetta") {
    alert("Welcome to the fruit garden of Pakistan");
}
// if city name is not recognized
else {
    alert("Welcome to " + city.toUpperCase());
}