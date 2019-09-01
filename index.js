var randomNumber1, randomNumber2, img1,img2;
randomNumber1 = Math.random();
randomNumber1 = 6*(randomNumber1) + 1;
randomNumber1 = Math.floor(randomNumber1);

randomNumber2 = Math.random();
randomNumber2 = 6 * (randomNumber2) + 1;
randomNumber2 = Math.floor(randomNumber2);

img1 = "images/dice" + randomNumber1 + ".png";
img2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", img1);
document.querySelector(".img2").setAttribute("src", img2);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "🎈 Jogador 1 vence!!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerText = "Jogador 2 vence! 🎈";
}
else {
    document.querySelector("h1").innerText = "Empate, tentem novamente!";
}
