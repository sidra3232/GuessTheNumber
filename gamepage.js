// generation of random value
var y = Math.floor(Math.random() * 10 + 1);
// count of attempts// 
var x = document.getElementById("guessField").value;
// until hit
if(x == y)
{
    alert("CONGRATULATIONS!!!" +playername+ " YOU GUESS IT RIGHT IN "
    + guess + " GUESS ");
}
  
// function for the number sent by the user//
else if (x > y)
{
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER")
}
function playAgaind() {
    y = Math.florr(Math.random() * 10 +1);
}