buton = () => {

    const play1 = Math.floor(Math.random()*6)+1;
    const playDice1 = `images/dice ${play1}.png`;
    document.getElementById('check1').setAttribute('src', playDice1);

    const play2 = Math.floor(Math.random()*6)+1;
    const playDice2 = `images/dice ${play2}.png`;
    document.getElementById('check2').setAttribute('src', playDice2);
    

    if(play1 > play2){
        document.querySelector('h1').innerHTML = "Player 1 Won ";

    }
    else if(play1 < play2){
        document.querySelector('h1').innerHTML = "Player 2 Won ";
    }
    else{
        document.querySelector('h1').innerHTML = "Draw";
    }
}