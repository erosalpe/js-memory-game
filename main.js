const grid = document.getElementById("container-cards");
const error = document.getElementById("errors-counter");
const overlay = document.getElementById('overlay');
let gridValue = [];
let randomNumber;
let errors = 0;
let first = 0;
let second = 0;
let score = 0;

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
    newCard.addEventListener('click', cardCheck);
    newCard.classList.add('card');
    
    

    //create a new img tag it will contain the back card img
    let newImg = document.createElement('img');
    newImg.src = './assets/images/back.png';
    newImg.alt = 'card';
    newImg.id = `${number}`;

    //add img tag to newCard
    newCard.appendChild(newImg);

    //add newCard to the cards grid
    grid.appendChild(newCard);

    console.log(number);
});

function setImg(id){
    //console.log(id);
    let tag = document.getElementById(`${id}`);
    //console.log(tag);
    switch(id){
        case 1:
        case 12:
            tag.src = './assets/images/alien.png';
            break;
        case 2:
        case 11:
            tag.src = './assets/images/bug.png';
            break;
        case 3:
        case 10:
            tag.src = './assets/images/duck.png';
            break;
        case 4:
        case 9:
            tag.src = './assets/images/rocket.png';
            break;
        case 5:
        case 8:
            tag.src = './assets/images/spaceship.png';
            break;
        case 6:
        case 7:
            tag.src = './assets/images/tiktac.png';
            break;
        default:
            console.log('error');
    }
}

function resetImg(id){
    let tag = document.getElementById(`${id}`);
    tag.src = './assets/images/back.png';
}

function cardCheck(event){
    console.log('questo è : ', event.target.id);
    setImg(parseInt(event.target.id, 10));

    if(first === 0){
        first = parseInt(event.target.id, 10);
    } else if(first > 0){
        second = parseInt(event.target.id, 10);
        overlay.style.display = 'block';
    }

    console.log(first, second);

    if(first != 0 && second != 0){
        if(first + second === 13){
            console.log('sono uguali');
            first = 0;
            second = 0;
            if(score < 5){
                score ++;
            } else {
                grid.innerHTML = 'Hai vinto!'
                grid.classList.add('win');
            }
            overlay.style.display = 'none';
        } else {
            setTimeout(()=>{
                console.log('sono diversi')
                resetImg(first);
                resetImg(second);
                first = 0;
                second = 0;
                errors ++;
                error.innerHTML = `Errori : ${errors}`;
                overlay.style.display = 'none';
            },500);
            
        }
    }
    
    //console.log(parseInt(event.target.id, 10));
}
