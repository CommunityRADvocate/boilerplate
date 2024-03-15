// // BLOCKS AND SCOPE
// let dusk = '';

// if(dusk) {
//     let color = 'pink';
//     console.log(color);
// }

// const logSkyColor = () => {let color = 'blue';
// console.log(color);}


// // GLOBAL SCOPE
// const color = 'blue';

// const returnSkyColor = () => {return color};

// console.log(returnSkyColor());


// // BLOCK SCOPE
// const logSkyColor = () => {
//     let color = 'blue';
//     console.log(color);
// }

// logSkyColor();
// console.log(color);


// // SCOPE POLLUTION
// let num = 50;

// const logNum = () => {
//     num = 100;
//     console.log(num);
// };

// logNum();
// console.log(num);


// // SCOPE BEST PRACTICES
const logSkyColor = () => {
    const dusk = true;
    let color = 'blue';
    if(dusk) {
        color = 'pink';
        console.log(color);
    }
    console.log(color);
}

logSkyColor();
// console.log(color);


// ------------------LOOPS----------------------

let favFoods = ['Soup', 'Salad', 'Pizza'];

// // without loops
// console.log(favFoods[0]);
// console.log(favFoods[1]);
// console.log(favFoods[2]);


// // LOOP THROUGH ARRAY
// for (let i = 0; i < favFoods.length; i++) {
//     console.log(favFoods[i]);
// }
// for (let i = 0; i < favFoods.length; i++) {
//     console.log(favFoods);
// }

// // BACKWARDS
// for (let i = favFoods.length - 1; i >= 0; i--) {
//     console.log(favFoods[i]);
// }


// // NESTED LOOPS
// const myArray = [6, 19, 20, 47];
// const yourArray = [19, 81, 47, 2];

// // find out which numbers both arrays have in common
// for (let i = 0; i < myArray.length; i++) {
//     for (let j = 0; j < yourArray.length; j++) {
//         if (myArray[i] === yourArray[j]) {
//             console.log(`Both arrays have the number: ${yourArray[j]}`);
//         }
//     }
// }


// // WHILE LOOP
// const cards = ['diamond', 'spade', 'heart', 'club'];

// let counter = 1;
// let currentCard = cards[Math.floor(Math.random() * 4)];
// console.log(`Card #${counter} is a ${currentCard}`);

// while (currentCard.valueOf() !='diamond') {
//     counter++;
//     currentCard = cards[Math.floor(Math.random()*4)];
//     console.log(`Card #${counter} is a ${currentCard}`);
// }


// // DO...WHILE
// let countString = '';
// let i = 0;

// do {
//     countString += `${i} `;
//     i++;
// } while (i<5);

// console.log(countString);


// BREAK KEYWORD
for(let i=0; i<99; i++) {
    if (i > 2) {
        break;
    }
    console.log('Banana.');
}

console.log('Orange you glad I broke out of that loop?!');