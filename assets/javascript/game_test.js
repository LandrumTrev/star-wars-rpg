// Star Wars RPG jQuery game
// aka System Lord


// TEMPORARILY PLACE VARIABLE INITIALIZATIONS OUTSIDE jQUERY

// INITIALIZE ARRAY OF CHARACTER OBJECTS

let $planetsArray = [

    {
        name: "ARAZIUS",
        hp: 63,
        ap: 15,
        cap: 15,
        status: "",
        photo: 'assets/images/arazius.png'
    },

    {
        name: "IRIDIR",
        hp: 30,
        ap: 25,
        cap: 25,
        status: "",
        photo: 'assets/images/iridir.png'
    },

    {
        name: "KIKINHO",
        hp: 85,
        ap: 12,
        cap: 12,
        status: "",
        photo: 'assets/images/kikinho.png'
    },

    {
        name: "ORLOPIA",
        hp: 60,
        ap: 20,
        cap: 20,
        status: "",
        photo: 'assets/images/orlopia.png'
    },

    {
        name: "RAGEN",
        hp: 150,
        ap: 10,
        cap: 10,
        status: "",
        photo: 'assets/images/ragen.png'
    },

    {
        name: "SIRITH",
        hp: 90,
        ap: 15,
        cap: 15,
        status: "",
        photo: 'assets/images/sirith.png'
    },

    {
        name: "TRILOPE",
        hp: 110,
        ap: 20,
        cap: 20,
        status: "",
        photo: 'assets/images/trilope.png'
    },

];


// INITIALIZE GAME PLAY VARIABLES
// THESE HAVE TO COME BEFORE THE MESSAGE VARIABLES THAT USE THEM

// represents the entire array object for the hero planet
let $hero;

// represents the entire array object for the enemy planet
let $enemy;

// represents the .name property of the enemy planet
let $enemyName = "";

// represents the .name property of the hero planet
let $heroName = "";

// represents the incrementing .ap property of the hero planet
let $attackPoints = 0;

// represents the static .cap property of the enemy planet
let $counterAttackPoints = 0;



// INITIALIZE LIST OF MESSAGES THAT FOLLOW GAME PLAY
// THESE HAVE TO COME AFTER THE BASIC GAME PLAY VARIABLES

let $startMessage = "Choose a world to be your capital.";

let $chooseEnemy = "Select a world to subdue.";

let $attackInfo = "Click ATTACK until one world emerges victorious.";

// let $attackResult = "You attacked " + $enemyName + " for " + $attackPoints + " points of damage. " + $enemyName + " attacked you for " + $counterAttackPoints + " points of damage. Attack again.";

let $attackResult;

let $defeatMessage = "You have been defeated. Game Over.";

let $winMessage = "You have conquered " + $enemyName + ". Select another world.";

let $victoryMessage = "You are the lord of your star system. Game Over.";

let $noEnemy = "You are attacking empty space. Choose a more substantial opponent.";






$(document).ready(function () {

    // display the choose character message on game start
    $("#message_text").text($startMessage);


    // START SELF AND ENEMY PLANET SELECTIONS FUNCTION

    // when a queued planets class box is clicked
    $(".char_box").click(function (event) {

        // loop through all objects in planetArray
        for (let i = 0; i < $planetsArray.length; i++) {

            // and when array element object .name matches clicked .char_box's ID...
            if ($planetsArray[i].name === this.id) {

                // if $hero does not have a value (but IS initialized!)
                if (!$hero) {

                    // set that object's .status property to "hero"
                    $planetsArray[i].status = "hero";
                    // set the $heroName variable to that objects .name value
                    $heroName = $planetsArray[i].name;
                    // and make the whole object the value of $hero
                    $hero = $planetsArray[i];
                    // and .hide THIS element (the clicked list planet)
                    $(this).hide().attr('id');
                    // and put .name, .hp, and photo of $hero object into YOUR html divs
                    $("#your_hp").text($hero.hp);
                    $("#your_name").text($hero.name);
                    $("#your_photo").attr('src', $hero.photo);

                    // and display the message to choose an enemy
                    $("#message_text").text($chooseEnemy);

                    // and console.log the value of $hero
                    console.log($hero);

                    // but if $hero DOES have a value already,
                    // then all subsequent planets clicked will have .status "enemy"
                } else {

                    // set the clicked object's .status property to "enemy"
                    $planetsArray[i].status = "enemy";
                    // set the $enemyName variable to that objects .name value
                    $enemyName = $planetsArray[i].name;
                    // and make the whole object the value of the $enemy variable
                    $enemy = $planetsArray[i];
                    // and .hide THIS (the element clicked with class="char_box")
                    $(this).hide().attr('id');
                    // and put .name, .hp, and photo of $hero object into ENEMY html divs
                    $("#enemy_hp").text($enemy.hp);
                    $("#enemy_name").text($enemy.name);
                    $("#enemy_photo").attr('src', $enemy.photo);

                    // and display the message to start the battle
                    $("#message_text").text($attackInfo);

                    // and console.log the value of $enemy
                    console.log($enemy);

                }
            }
        }
    });

    // END SELF AND ENEMY PLANET SELECTIONS FUNCTION

    // START ATTACK BUTTON GAMEPLAY FUNCTION

    // when the attack button is clicked
    $("#attack_button").click(function (event) {

        $attackResult = "You attacked " + $enemyName + " for " + $attackPoints + " points of damage. " + $enemyName + " attacked you for " + $counterAttackPoints + " points of damage. Attack again.";

        // display the result of the attack
        $("#message_text").text($attackResult);


    });
























    // END ATTACK BUTTON GAMEPLAY FUNCTION


});