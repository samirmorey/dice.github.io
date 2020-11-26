var randomNo1 = Math.floor(Math.random() * 6) + 1;
var randomDice= "dice"+randomNo1+".png";
var randomSource= "images/" + randomDice;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomSource);

var randomNo2 = Math.floor(Math.random() * 6) + 1;
var randomDice2= "dice"+randomNo2+".png";
var randomSource= "images/" + randomDice2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomSource);

if(randomNo1 > randomNo2){
  document.querySelector("h1").innerHTML= "🚩player1 wins";

}
else if(randomNo2 > randomNo1){
    document.querySelector("h1").innerHTML= "player2 wins🚩";
}
else{
    document.querySelector("h1").innerHTML="match draw";

}
