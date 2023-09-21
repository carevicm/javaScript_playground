function getMilk(money) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    
    
    console.log("buy " + calcBottles(money, 1.5) + " botteles of milk");
    
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  
    return calcChange(money, 1.5).toFixed(2);
  }
  function calcBottles(startingMoney, costPerBottle) {
    var numberOfBottleses = Math.floor(startingMoney / costPerBottle);
    return numberOfBottleses;
  }
  
  function calcChange(startingAmount, costPerBottle) {
    var change = startingAmount % costPerBottle;
    return change;
  }
  console.log("Hello Master, here is your " + getMilk(9, 4) + " change.");