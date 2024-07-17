const grid = document.getElementById("container-cards");
let gridValue = [];
let randomNumber;

//creates an array with numbers 1 to 12
for(let i = 0; i < 12; i++){
    do{
       randomNumber = Math.floor(Math.random() * 12) + 1;
    } while(gridValue.includes(randomNumber));
    gridValue.push(randomNumber);
}

console.log(gridValue);