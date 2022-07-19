

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
            break;
        case 2:
            document.querySelector(img).setAttribute("src","dice2.png");
            break;
        case 3:
            document.querySelector(img).setAttribute("src","dice3.png");
            break;
        case 4:
            document.querySelector(img).setAttribute("src","dice4.png");
            break;
        case 5:
            document.querySelector(img).setAttribute("src","dice5.png");
            break;
        case 6:
            document.querySelector(img).setAttribute("src","dice6.png");
            break;
    }
}
rollDice2(".img1");
rollDice2(".img2");
}


