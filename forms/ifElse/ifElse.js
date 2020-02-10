let name = prompt('What is your first name??');
let state = prompt('What state are you from? (ie. NE) ');
let temp = prompt('What Fahrenheit temperature is it outside right now? (ie. 50) ');

let outfit = ['Gosh! You need a coat and gloves! Its gonna be chilly ouside!!',  'You should just need a light jacket.',  'You should dress for warm weather with sandals, sunglasses and sunscreen.',  'Stay away from the outdoors. Its WICKED HOT out there.'];

if (temp <= 32) {
    alert(outfit[0]);
} else if (temp >= 32 && temp <=60) {
    alert(outfit[1]);
} else if (temp >= 61 && temp <=100) {
    alert(outfit[2]);
} else if (temp >=101) {
    alert(outfit[3]);
}

