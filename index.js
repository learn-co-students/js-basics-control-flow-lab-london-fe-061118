function scuberGreetingForFeet(someValue) {
  //this is where we can use conditionals given our argument, someValue
  //don't forget to return whatever the result is!
  if (someValue <= 400) {
    return 'This one is on me!';
    
  }
  else if (someValue > 2000 && someValue < 2500) {
    return 'I will gladly take your thirty bucks.'; 
  }
  else if (someValue >= 2500) {
    return 'No can do.';
  }
}
//done

function ternaryCheckCity(City) {
  if (City =="NYC") {
   return "Ok, sounds good.";
 }
 else if (City == "Pittsburgh") {
   return 'No go.';
 }
}

//done

function switchOnCharmFromTip(Tip) {
  if (Tip == "generous" ) {
    return "Thank you so much.";
  } 
  else if (Tip == "not as generous") {
    return "Thank you.";
  }
  else if (Tip = "thanks for everything") {
    return "Bye.";
  }
  
}

//done

