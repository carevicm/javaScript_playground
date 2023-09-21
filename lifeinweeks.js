function lifeInWeeks(age) {
    
/************Don't change the code above************/    
function lifeInWeeks(age) {
var yearsRemaining = 90 - age;
var days = yearsRemaining * 365;
var weeks = yearsRemaining * 52;
var months = yearsRemaining * 12;
console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
    
}

lifeInWeeks(39);
// var age = prompt("Enter your age: ")
var days =  (90-age)*365;
var weeks= (90-age)*52;
var months= (90-age)*12;
console.log(`You have ${days} days, ${weeks} weeks, and ${months} months left.`)
    
    
    
    
/*************Don't change the code below**********/
}

