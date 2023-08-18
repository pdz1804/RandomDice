heading = document.getElementById("heading");

ranNum1 = Math.floor(Math.random()*6) + 1;
ranNum2 = Math.floor(Math.random()*6) + 1;

imageName1 = "./images/dice" + ranNum1 + ".png";
imageName2 = "./images/dice" + ranNum2 + ".png";

img1 = document.getElementsByClassName("img1")[0];
img2 = document.getElementsByClassName("img2")[0];

img1.setAttribute("src", imageName1);
img2.setAttribute("src", imageName2);

if (ranNum1 > ranNum2) {
    heading.textContent = "🚩Player1 Wins";
}
else if (ranNum1 === ranNum2) {
    heading.textContent = "Draws";
}
else {
    heading.textContent = "Player2 Wins🚩";
}