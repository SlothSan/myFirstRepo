let students = [
    {
        name: 'Harry',
        favColor: 'Orange',
        favFood: 'Ginger Nut',
        image: './img/harryTheClimber.jpeg',
    },

    {
        name: 'Josh',
        favColor: 'Red',
        favFood: 'Ramen',
        image: './img/harryTheClimber.jpeg',

    },
    {
        name: 'Nico',
        favColor: 'Blue',
        favFood: 'Cheese',
        image: './img/nicoImage.jpeg'
    },
    {
        name: 'Tom',
        favColor: 'Pink',
        favFood: 'Ham',
        image:  './img/CodyMaverick.jpeg'
    }

]


let photoTag = document.querySelector('.profile-image');
let nameTag = document.querySelector('.name');
let colorTag = document.querySelector('.favColor');
let foodTag = document.querySelector('.favFood');

let buttonContainer = document.querySelector('.button-container');



photoTag.src = students[0].image;
nameTag.textContent = students[0].name;
colorTag.textContent = students[0].favColor;
foodTag.textContent = students[0].favFood;


students.forEach(student => {
    buttonContainer.innerHTML += "<a class=" + student.name + " href='#'>" + student.name + "</a>"
});

students.forEach((student) => {
    document.querySelector('.' + student.name).addEventListener('click', () => {
        photoTag.src = student.image;
        nameTag.textContent = student.name;
        colorTag.textContent = student.favColor;
        foodTag.textContent = student.favFood;

    })
});



// let harryButton = document.querySelector('.Harry');
// let joshButton = document.querySelector('.Josh')
// let tomButton = document.querySelector('.Tom')
// let nicoButton = document.querySelector('.Nico')
//
//
// harryButton.addEventListener('click', () => {
//     photoTag.src = students[0].image;
//     nameTag.textContent = students[0].name;
//     colorTag.textContent = students[0].favColor;
//     foodTag.textContent = students[0].favFood;
// })
//
// joshButton.addEventListener('click', () => {
//     photoTag.src = students[1].image;
//     nameTag.textContent = students[1].name;
//     colorTag.textContent = students[1].favColor;
//     foodTag.textContent = students[1].favFood;
// })
// nicoButton.addEventListener('click', () => {
//     photoTag.src = students[2].image;
//     nameTag.textContent = students[2].name;
//     colorTag.textContent = students[2].favColor;
//     foodTag.textContent = students[2].favFood;
// })
// tomButton.addEventListener('click', () => {
//     photoTag.src = students[3].image;
//     nameTag.textContent = students[3].name;
//     colorTag.textContent = students[3].favColor;
//     foodTag.textContent = students[3].favFood;
// })




// let me = {
//     name: 'Mike',
//     nationality: 'British (sadly)',
//     age: 29,
//     favFoods: ['Pizza', 'More Pizza', 'Even More Pizza!', 'Probably some more Pizza'],
//     displayFavFoods: function() {
//         this.favFoods.forEach((favFood) => {
//             console.log(favFood);
//         })
//     }
// }
//
// let bestElement = document.querySelector('#best-element');
//
// bestElement.textContent = 'Strawberry'; //Replacing the text content.
//
// bestElement.textContent += ' Shortcake'; //Appending to the text content.
//
// bestElement.innerHTML = '<h2>Hola</h2>';
//
// bestElement.innerHTML += '<marquee>Papaya</marquee>';
//
// bestElement.classList.add('card'); //Adding a CSS class to the element.
//
// bestElement.classList.remove('hidden'); //Removing a CSS from the element.
//
// bestElement.style.border = '2px solid #000000'; //CSS inline styling.
//
// let newThingFormSubmit = document.querySelector('#new-thing-form-submit');
// newThingFormSubmit.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log('haha i prevented the form from submitting');
// })
//
// console.log('Hello World!');
// console.log(me.name);
// console.log(me.nationality);
// console.log(me.age);
// me.displayFavFoods();