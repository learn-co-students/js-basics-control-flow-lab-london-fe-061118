function scuberGreetingForFeet(someValue) {
    //this is where we can use conditionals given our argument, someValue
    //don't forget to return whatever the result is!
    let result
    if (someValue <400){
      result = 'This one is on me!';
    }
    else if (someValue >2000){
      result = 'I will gladly take your thirty bucks.';
    }
    if (someValue >2500){
        result = 'No can do.';
      }
    return result
  }
  
    function ternaryCheckCity(cityName) {
    //this is where we can use conditionals given our argument, someValue
    //don't forget to return whatever the result is!
    let result
    if (cityName == "NYC"){
      result = 'Ok, sounds good.';
    }
    if (cityName != "NYC"){
        result = 'No go.';
      }
    return result
  }


  function switchOnCharmFromTip(tipValue) {
    //this is where we can use conditionals given our argument, someValue
    //don't forget to return whatever the result is!
    let result
    if (tipValue == "generous"){
        result = 'Thank you so much.';
    }
    else if (tipValue == "not as generous"){
        result = 'Thank you.';
    }   
    else if (tipValue != "anything else"){
        result = 'Bye.';
    }   


    return result
  }






