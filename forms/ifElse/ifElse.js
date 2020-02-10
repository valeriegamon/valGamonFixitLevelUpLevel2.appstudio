//Declare variables
let userName = prompt('What is your first name??');
let userState = prompt('What state are you from? (ie. NE) ');
let userTemp = Number(prompt('What Fahrenheit temperature is it outside right now? (ie. 50) '));

//String method to convert the first letter of the user name to a capital in case the user used all lower case.
const nameCapitalized = (userName.charAt(0).toUpperCase() + userName.slice(1)); 

//String method to convert the state entered to all capitals in case the user used lower case.
const stateCapitalized = (userState.toUpperCase()); 

//All output options
let outfit = [`Gosh ${nameCapitalized}! You need to wear a warm coat, hat, scarf and gloves.!`,  `${nameCapitalized}, wear a warm coat but you won't need a hat, scarf or gloves.`,  `${nameCapitalized}, you should wear your warmest coat, a warm hat, a scarf, and warm gloves.`,  `${nameCapitalized}, wear a warm coat, hat and gloves. Maybe a scarf too.`];  

//if/else method for determining what they should wear based on state and temps
if (userTemp < 32 && stateCapitalized == 'NE') {
    NSB.MsgBox(outfit[0]);
} else if (userTemp >= 32 && userTemp <=50 && stateCapitalized == 'NE') {
    NSB.MsgBox(outfit[1]);
} else if (userTemp >= 32 && userTemp <=50 && stateCapitalized == 'FL') {
    NSB.MsgBox(outfit[2]);
} else if (userTemp >50 && userTemp <=70 && stateCapitalized == 'FL') {
    NSB.MsgBox(outfit[3]);
}

//Done!