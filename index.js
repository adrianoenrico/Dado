var randomNumber1, randomNumber2, img1Source,img2Source;
randomNumber1 = Math.random();
randomNumber1 = 6*(randomNumber1) + 1;
randomNumber1 = Math.floor(randomNumber1);

randomNumber2 = Math.random();
randomNumber2 = 6 * (randomNumber2) + 1;
randomNumber2 = Math.floor(randomNumber2);

img1Source = "images/dice" + randomNumber1 + ".svg";
img2Source = "images/dice" + randomNumber2 + ".svg";

document.querySelector(".img1").setAttribute("src", img1Source);
document.querySelector(".img2").setAttribute("src", img2Source);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "🎈 Jogador 1 vence!!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerText = "Jogador 2 vence! 🎈";
}
else {
    document.querySelector("h1").innerText = "Empate, tentem novamente!";
}
