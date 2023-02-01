

const other_cars = document.querySelector(".other_cars");
const my_car = document.querySelector(".my_car");
const game_area = document.querySelector(".game_area");
const parent_lines = document.querySelector(".parent_lines");
const result = document.getElementById("result");
const score = document.getElementById("score");
const lines = document.querySelectorAll(".lines");
const carMoveSound = document.querySelector("#carMoveSound");
const crash = document.querySelector("#crash");
var counter = 0;

// --arrows 
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const upArrow = document.querySelector(".top");
const downArrow = document.querySelector(".bottom");
// --end 

// road lines 
// for(let x=0 ; x < 12 ; x++){
//     const lines = document.createElement("div");
//     lines.setAttribute("class" , "lines");
//     parent_lines.appendChild(lines);
//     lines.style.top = (x*140    ) + "px";
// }


// othercars move 
other_cars.addEventListener("animationiteration", function () {
    let random = Math.floor(Math.random() * 4) * 68;
    // console.log(random);
    other_cars.style.left = random + "px";
    counter++;
})


// my car move 
let road = game_area.getBoundingClientRect();
// console.log(road);


window.addEventListener("keydown", function (e) {
    console.log(e.keyCode)

    if (e.keyCode == 39) {
        const myCarInfoLeft = parseInt(window.getComputedStyle(my_car).getPropertyValue("left"));
        if (myCarInfoLeft < road.width - 150) {
            my_car.style.left = (myCarInfoLeft + 68) + "px";
        }
        carMoveSound.play();
    }

    if (e.keyCode == 37) {
        const myCarInfoLeft = parseInt(window.getComputedStyle(my_car).getPropertyValue("left"));
        // if(myCarInfoLeft )
        if (myCarInfoLeft > 40) {
            my_car.style.left = (myCarInfoLeft - 68) + "px";
        }
        carMoveSound.play();
    }

    if (e.keyCode == 40) {
        const myCarTop = parseInt(window.getComputedStyle(my_car).getPropertyValue("top"));
        if (myCarTop < 465) {
            my_car.style.top = (myCarTop + 68) + "px";
        }
        carMoveSound.play();
    } 
  
    if (e.keyCode == 38) {
        const myCarTop = parseInt(window.getComputedStyle(my_car).getPropertyValue("top"));
        if (myCarTop > 280) {
            my_car.style.top = (myCarTop - 68) + "px";
        }
        carMoveSound.play();
    }
    
});


// -----------------box-arrows 

let leftvalue = 0;
let TopValue = 460;
rightArrow.addEventListener("click", function () {
    // my_car.style.left = leftvalue +=30 + "px";
    const myCarInfoLeft = parseInt(window.getComputedStyle(my_car).getPropertyValue("left"));
    if (myCarInfoLeft < road.width - 150) {
        my_car.style.left = `${leftvalue += 68}px`;
    }
            carMoveSound.play();
})

leftArrow.addEventListener("click", function () {
    const myCarInfoLeft = parseInt(window.getComputedStyle(my_car).getPropertyValue("left"));
    console.log(myCarInfoLeft)
    if (myCarInfoLeft > 0) {
        my_car.style.left = `${leftvalue -= 68}px`;
    }
            carMoveSound.play();
})

upArrow.addEventListener("click", function () {
    const myCarTop = parseInt(window.getComputedStyle(my_car).getPropertyValue("top"));
    if (myCarTop > 260) {
        my_car.style.top = `${TopValue -= 68}px`;
    }
            carMoveSound.play();
})

downArrow.addEventListener("click", function () {
    const myCarTop = parseInt(window.getComputedStyle(my_car).getPropertyValue("top"));
    if (myCarTop < 465) {
        my_car.style.top = `${TopValue += 68}px`;
    }
            carMoveSound.play();
})

// --game Over  

setInterval(
    function gameOver() {

        const otherCarTop = parseInt(window.getComputedStyle(other_cars).getPropertyValue("top"));
        const myCarTop = parseInt(window.getComputedStyle(my_car).getPropertyValue("top"));
        const otherCarLeft = parseInt(window.getComputedStyle(other_cars).getPropertyValue("left"));
        const myCarLeft = parseInt(window.getComputedStyle(my_car).getPropertyValue("left"));
        console.log(otherCarTop);
        console.log(myCarTop);
        // if((otherCarLeft===myCarLeft) && (otherCarTop > 250) && (otherCarTop < 450 )){
        if ((otherCarTop > myCarTop) && (otherCarLeft === myCarLeft) ) {
            result.style.display = "block";
            // game_area.style.display = "none";
            score.innerHTML = `score: ${counter} `

            counter = 0;
            crash.play();
        }

    }


    , 10)



// ---simple-way



// rightArrow.addEventListener("click", function () {

//     my_car.style.left = "85%";
// })

// leftArrow.addEventListener("click", function () {
//     my_car.style.left = "2%";
// })

