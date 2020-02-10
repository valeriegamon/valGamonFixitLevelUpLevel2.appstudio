let userName = prompt('What is your first name??');
let userState = prompt('What state are you from? (ie. NE) ');
let userTemp = Number(prompt('What Fahrenheit temperature is it outside right now? (ie. 50) '));

const nameCapitalized = (userName.charAt(0).toUpperCase() + name.slice(1)); 
const stateCapitalized = (userState.toUpperCase()); 

let outfit = [`Gosh ${nameCapitalized}! You need to wear a warm coat, hat, scarf and gloves.!`,  `${nameCapitalized}, wear a warm coat but you won't need a hat, scarf or gloves.`,  `${nameCapitalized}, you should wear your warmest coat, a warm hat, a scarf, and warm gloves.`,  `${nameCapitalized}, wear a warm coat, hat and gloves. Maybe a scarf too.`];  

if (userTemp < 32 && stateCapitalized == 'NE') {
    alert(outfit[0]);
} else if (userTemp >= 32 && userTemp <=50 && stateCapitalized == 'NE') {
    alert(outfit[1]);
} else if (userTemp >= 32 && userTemp <=50 && stateCapitalized == 'FL') {
    alert(outfit[2]);
} else if (userTemp >50 && userTemp <=70 && stateCapitalized == 'FL') {
    alert(outfit[3]);
}
