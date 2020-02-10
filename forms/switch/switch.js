//Declare variables
let userName1 = prompt('What is your first name??');
let userState1 = prompt('What state are you from? (ie. NE) ');
let userTemp1 = Number(prompt('What Fahrenheit temperature is it outside right now? (ie. 50) '));

//String method to convert the first letter of the user name to a capital in case the user used all lower case.
const nameCapitalized1 = (userName1.charAt(0).toUpperCase() + userName1.slice(1)); 

//String method to convert the state entered to all capitals in case the user used lower case.
const stateCapitalized1 = (userState1.toUpperCase()); 

//All output options
let outfits = [`Gosh ${nameCapitalized1}! You need to wear a warm coat, hat, scarf and gloves.!`,  `${nameCapitalized1}, wear a warm coat but you won't need a hat, scarf or gloves.`,  `${nameCapitalized1}, you should wear your warmest coat, a warm hat, a scarf, and warm gloves.`,  `${nameCapitalized1}, wear a warm coat, hat and gloves. Maybe a scarf too.`];  

//switch method for determining what they should wear based on state and temps
switch (true) {
  case userTemp1 < 32 && stateCapitalized1 == 'NE':
    NSB.MsgBox(outfits[0]);
    alert(outfits[0]);
    break;
  case userTemp1 >= 32 && userTemp1 <=50 && stateCapitalized1 == 'NE':
    NSB.MsgBox(outfits[1]); 
    alert(outfits[1]); 
    break;
  case userTemp1 >= 32 && userTemp1 <=50 && stateCapitalized1 == 'FL':
    NSB.MsgBox(outfits[2]);
    alert(outfits[2]);
    break;
  case userTemp1 >50 && userTemp1 <=70 && stateCapitalized1 == 'FL'
    NSB.MsgBox(outfits[3]);
    alert(outfit[3]);
    break;
}

