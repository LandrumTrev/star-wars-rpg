// Star Wars RPG jQuery game
// aka System Lord


// TEMPORARILY PLACE VARIABLE INITIALIZATIONS OUTSIDE jQUERY

// INITIALIZE ARRAY OF CHARACTER OBJECTS

let planetsArray = [

    {
        name: "ARAZIUS",
        hp: 63,
        ap: 15,
        cap: 15,
        status: "",
        photo: "<img src='assets/images/arazius.png'>"
    },

    {
        name: "IRIDIR",
        hp: 30,
        ap: 25,
        cap: 25,
        status: "",
        photo: "<img src='assets/images/iridir.png'>"
    },

    {
        name: "KIKINHO",
        hp: 85,
        ap: 12,
        cap: 12,
        status: "",
        photo: "<img src='assets/images/kikinho.png'>"
    },

    {
        name: "ORLOPIA",
        hp: 60,
        ap: 20,
        cap: 20,
        status: "",
        photo: "<img src='assets/images/orlopia.png'>"
    },

    {
        name: "RAGEN",
        hp: 150,
        ap: 10,
        cap: 10,
        status: "",
        photo: "<img src='assets/images/ragen.png'>"
    },

    {
        name: "SIRITH",
        hp: 90,
        ap: 15,
        cap: 15,
        status: "",
        photo: "<img src='assets/images/sirith.png'>"
    },

    {
        name: "TRILOPE",
        hp: 110,
        ap: 20,
        cap: 20,
        status: "",
        photo: "<img src='assets/images/trilope.png'>"
    },

];


// INITIALIZE GAME PLAY VARIABLES

let $enemyName = "ARAZIUS";

let $attackPoints = 8;

let $counterAttackPoints = 5;


// INITIALIZE LIST OF MESSAGES THAT FOLLOW GAME PLAY

let $startMessage = "Choose a world to be your capital.";

let $chooseEnemy = "Select a world to subdue.";

let $attackInfo = "Click ATTACK until one world emerges victorious.";

let $attackResult = "You attacked " + $enemyName + " for " + $attackPoints + " points of damage. " + $enemyName + " attacked you for " + $counterAttackPoints + " points of damage. Attack again.";

let $defeatMessage = "You have been defeated. Game Over.";

let $winMessage = "You have conquered " + $enemyName + ". Select another world.";

let $victoryMessage = "You are the lord of your star system. Game Over.";

let $noEnemy = "You are attacking empty space. Choose a more substantial opponent.";

// variable to represent your chosen planet object
let $hero;





$(document).ready(function () {

    // START JQUERY JS:

    // display the choose character message on game start
    $("#message_text").text($startMessage);


    // HOW DO I WRITE A LOOP TO SELECT THE ID OF ANY ELEMENT OF A CERTAIN CLASS CLICKED ON?

    // when this planets container is clicked on
    $("#ARAZIUS").click(function (event) {
        // then make that planet the $hero
        $hero = planetsArray[0];
    });

    // when a queued planets class is clicked
    $('.char_box').click(function() {
        
        // write it's ID to the console to test
        // console.log( this.id );

        for (let i = 0; i < planetsArray.length; i++) {

            const element = planetsArray[i].name;

            if (element === this.id) {

                planetsArray[i].status = "hero";
                $hero = planetsArray[i];
                console.log( $hero );

            }
        }










        



        

    });











// END EVENT LISTENER TO LISTEN FOR KEY PRESSES AND CALL PLAY() FUNCTION


// END JQUERY JS
});