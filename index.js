
// Dice1
var randomNumber=Math.random();
randomNumber1=(Math.floor(randomNumber*6))+1;
console.log("Random number1: "+randomNumber1);
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");

// Dice2
var randomNumber2=Math.random();
randomNumber2=(Math.floor(randomNumber2*6))+1;
console.log("Random number2: "+randomNumber2);
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

//Winner, Looser or Draw
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
}else{
    document.querySelector("h1").innerHTML="Draw!";
}
