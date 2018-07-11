// Write your code in this file!


function scuberGreetingForFeet (Feet) { 
  if (Feet <= 400){
    return ('This one is on me!');
  }

   else if (Feet >2500) {
    return ('No can do.');
  }

  else if (Feet >= 2000) {
    return ('I will gladly take your thirty bucks.');
  } 
  
}


function ternaryCheckCity(city) {
let answer = city == "NYC" ? "Ok, sounds good." : "No go.";
return answer;
}


function switchOnCharmFromTip (generosity) {
switch (generosity) {
  case  "generous":
  return ("Thank you so much.");
  break;
  case "not as generous":
  return("Thank you.");
  break;
  default:
  return ("Bye.");
}

}








