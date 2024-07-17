const grid = document.getElementById("container-cards");
let gridValue = [];
let randomNumber;
let errors = 0;

//creates an array with numbers 1 to 12
for(let i = 0; i < 12; i++){
    do{
       randomNumber = Math.floor(Math.random() * 12) + 1;
    } while(gridValue.includes(randomNumber));
    gridValue.push(randomNumber);
}

console.log(gridValue);


//cards generation
gridValue.forEach(function(number) {

    //create a new div it will contain 1 card img
    let newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.id = `${number}`;

    //create a new img tag it will contain the back card img
    let newImg = document.createElement('img');
    newImg.src = './assets/images/back.png';
    newImg.alt = 'card';

    //add img tag to newCard
    newCard.appendChild(newImg);

    //add newCard to the cards grid
    grid.appendChild(newCard);

    console.log(number);
});
