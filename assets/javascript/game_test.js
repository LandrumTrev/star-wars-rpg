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

let $hero;

let $enemy;



$(document).ready(function () {

    // display the choose character message on game start
    $("#message_text").text($startMessage);

    // when a queued planets class box is clicked
    $(".char_box").click(function (event) {

        // loop through all objects in planetArray
        for (let i = 0; i < $planetsArray.length; i++) {
            // and when you find an array element whose .name matches the clicked .char_box's ID...
            if ($planetsArray[i].name === this.id) {


                if (!$hero) {

                    // set that object's .status property to "hero"
                    $planetsArray[i].status = "hero";
                    // and make the whole object the value of the $hero variable
                    $hero = $planetsArray[i];
                    // and .hide THIS (the element clicked with class="char_box")
                    $(this).hide().attr('id');
                    // and put .name, .hp, and photo of $hero object into YOUR html divs
                    $("#your_hp").text($hero.hp);
                    $("#your_name").text($hero.name);
                    $("#your_photo").attr('src', $hero.photo);

                    // and console.log to confirm everything is working
                    console.log($hero);


                } else {

                    // if any planetArray[i] DOES === "hero", then all others clicked on are set to "enemy"
                    // set that object's .status property to "enemy"
                    $planetsArray[i].status = "enemy";
                    // and make the whole object the value of the $enemy variable
                    $enemy = $planetsArray[i];
                    // and .hide THIS (the element clicked with class="char_box")
                    $(this).hide().attr('id');
                    // and put .name, .hp, and photo of $hero object into ENEMY html divs
                    $("#enemy_hp").text($enemy.hp);
                    $("#enemy_name").text($enemy.name);
                    $("#enemy_photo").attr('src', $enemy.photo);

                    // and console.log to confirm everything is working
                    console.log($enemy);

                }
            }
        }
    });




























});