

function execute(){function rollDice1(){
    var a = Math.random();
    a=Math.floor(a*6);
    a+=1;
    return a;
}

function rollDice2(img){
    var a=rollDice1()
    switch(a){
        case 1:
            document.querySelector(img).setAttribute("src","dice1.png");
            return a;
            break;
        case 2:
            document.querySelector(img).setAttribute("src","dice2.png");
            return a;
            break;
        case 3:
            document.querySelector(img).setAttribute("src","dice3.png");
            return a;
            break;
        case 4:
            document.querySelector(img).setAttribute("src","dice4.png");
            return a;
            break;
        case 5:
            document.querySelector(img).setAttribute("src","dice5.png");
            return a;
            break;
        case 6:
            document.querySelector(img).setAttribute("src","dice6.png");
            return a;
            break;
    }
}
var randomNumber1 = rollDice2(".img1");
var randomNumber2 = rollDice2(".img2");
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}
}


