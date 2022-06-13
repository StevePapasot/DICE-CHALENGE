// Dicee one.
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
// We generate random number by using Math.random. This gives us random numbers from 0-0.99. In order to take number from 0-6 we multiply Math.random by six. Because we want rounded numbers we use Math.floor and because we want the numbers from 1 to 6 we add 1.
let randomDiceImage = "dice" + randomNumber1 + ".png"; // We created a new variable that randomly shows one of the six dice images.
let  randomImageSource = "images/" + randomDiceImage;  // The next step is to change the attribute value of the source.

//Change the attribute of the element.
let image1 = document.querySelectorAll("img")[0];
 

image1.setAttribute("src", randomImageSource);

//Dicee two.
var randomNumber2 = Math.floor(Math.random()*6) + 1;
let randomDiceImage2 = "dice" + randomNumber2 + ".png";
let randomImageSource2 = "images/" + randomDiceImage2;
let image2 = document.querySelectorAll ("img")[1];
image2.setAttribute("src" , randomImageSource2);


//Winner
if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
}else if (randomNumber1 = randomNumber2){
    document.querySelector("h1").innerHTML = "We have a Draw !";
}    