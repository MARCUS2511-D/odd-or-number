
var oddOrEven = +prompt("Enter any number that you want, and we'll find wether it's odd or even") 

while(isNaN(oddOrEven)){
    oddOrEven = +prompt("Told you Dumb, enter the number")
}
if (oddOrEven % 2 === 0) {
    alert("You entered even number " + oddOrEven);
}
else if (oddOrEven % 2 === 1) {
    alert ("You entered odd number " + oddOrEven);
} else {
    alert ("You entered something other than a number");
}



