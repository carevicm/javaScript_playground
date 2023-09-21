prompt("What is your name");
prompt("Your love name?");

var loveScore = Math.random() * 100 + 1;
loveScore = Math.floor(loveScore);

if (loveScore > 70) {
    alert("Your love score is " + loveScore + "%." + " You love each other")
}
if (loveScore > 30 && loveScore <=70) {
    alert("Your love score is " + loveScore + "%.")
}
if (loveScore <30) {
    alert("Your love score is " + loveScore + "%." + " You socks")
}