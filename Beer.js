var numberOfBottles = 99

while(numberOfBottles > 0) {
    var bottleWord = "bottles";
    
    if (numberOfBottles === 1) {
        bottleWord = "bottle";
    }
   console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
    
    numberOfBottles--;
    
 if (numberOfBottles === 0) {
        console.log("No more bottles of beer on the wall.");
    } else {
        console.log(numberOfBottles + " " + (numberOfBottles === 1 ? "bottle" : "bottles") + " of beer on the wall.");
    }
}