// "Star Wars RPG jQuery game" assignment
// aka SystemLord
// © Richard Trevillian, 2018-08-25
// University of Richmond, Full Stack Web Development Bootcamp


$(document).ready(function () {


    // INITIALIZE ARRAY OF CHARACTER OBJECTS

    let $planetsArray = [

        {
            name: "ARAZIUS",
            hp: 330,
            ap: 5,
            cap: 10,
            status: "",
            game: "",
            photo: 'assets/images/planets/arazius.png'
        },

        {
            name: "IRIDIR",
            hp: 210,
            ap: 6,
            cap: 12,
            status: "",
            game: "",
            photo: 'assets/images/planets/iridir.png'
        },

        {
            name: "KIKINHO",
            hp: 160,
            ap: 7,
            cap: 14,
            status: "",
            game: "",
            photo: 'assets/images/planets/kikinho.png'
        },

        {
            name: "ORLOPIA",
            hp: 180,
            ap: 8,
            cap: 16,
            status: "",
            game: "",
            photo: 'assets/images/planets/orlopia.png'
        },

        {
            name: "RAGEN",
            hp: 210,
            ap: 9,
            cap: 18,
            status: "",
            game: "",
            photo: 'assets/images/planets/ragen.png'
        },

        {
            name: "SIRITH",
            hp: 240,
            ap: 10,
            cap: 20,
            status: "",
            game: "",
            photo: 'assets/images/planets/sirith.png'
        },

        {
            name: "TRILOPE",
            hp: 130,
            ap: 11,
            cap: 22,
            status: "",
            game: "",
            photo: 'assets/images/planets/trilope.png'
        },

    ];


    let boltArray = [

        "L01.png",
        "L02.png",
        "L03.png",
        "L04.png",
        "L05.png",
        "L06.png",
        "L07.png",
        "L08.png",
        "L09.png",
        "L10.png",
        "L11.png",
        "L12.png",
        "L13.png",
        "L14.png",
        "L15.png",
        "L16.png",
        "L17.png",
        "L18.png",
        "L19.png",
        "L20.png",
        "L21.png",
        "L22.png",
        "L23.png",
        "L24.png",
        "L25.png",
        "L26.png",

    ];


    // WRITE THE NAMES AND HP OF QUEUED PLANETS TO THEIR SMALL TAGS
    // REFACTOR: HOW CAN THIS BE DONE MORE COMPACTLY?

    $("#p0_name").text($planetsArray[0].name);
    $("#p0_hp").text($planetsArray[0].hp);

    $("#p1_name").text($planetsArray[1].name);
    $("#p1_hp").text($planetsArray[1].hp);

    $("#p2_name").text($planetsArray[2].name);
    $("#p2_hp").text($planetsArray[2].hp);

    $("#p3_name").text($planetsArray[3].name);
    $("#p3_hp").text($planetsArray[3].hp);

    $("#p4_name").text($planetsArray[4].name);
    $("#p4_hp").text($planetsArray[4].hp);

    $("#p5_name").text($planetsArray[5].name);
    $("#p5_hp").text($planetsArray[5].hp);

    $("#p6_name").text($planetsArray[6].name);
    $("#p6_hp").text($planetsArray[6].hp);



    // INITIALIZE GAME PLAY VARIABLES
    // THESE HAVE TO COME BEFORE THE MESSAGE VARIABLES THAT USE THEM
    // REFACTOR: ADD WINS AND LOSSES GAME COUNTERS (NOT REQUIRED BY SAMPLE GAME)

    // represents the entire array object for the hero planet
    let $hero;

    // represents the entire array object for the enemy planet
    let $enemy;

    // represents the incrementing .ap property of the hero planet
    let $attackPoints = 0;

    // represents the static .cap property of the enemy planet
    let $counterAttackPoints = 0;



    // INITIAL INSTRUCTIONS MESSAGE TO LOAD ON PAGE LOAD/RELOAD
    let $startMessage = "Choose a world to be your capital.";
    $("#message_text").text($startMessage);


    // START HERO AND ENEMY PLANET SELECTIONS FUNCTION

    // WHEN A PLANET IN THE QUEUE IS CLICKED...
    $(".char_box").click(function (event) {

        // loop through all objects in planetArray
        for (let i = 0; i < $planetsArray.length; i++) {

            // and when array element object .name matches clicked .char_box's ID...
            if ($planetsArray[i].name === this.id) {

                // IF THERE IS NO HERO PLANET CHOSEN
                if (!$hero) {

                    // then make the object of the first planet clicked the HERO
                    $hero = $planetsArray[i];
                    // and change that object's .status value to "hero"
                    $hero.status = "hero";
                    // and set that object's .game property to "over"
                    // when all planets' .game property is "over", then game is over
                    $hero.game = "over";
                    // and hide this planet's queue icon
                    $(this).hide().attr('id');
                    // and display this planet in main fight area, above attack button
                    $("#your_hp").text($hero.hp);
                    $("#your_name").text($hero.name);
                    $("#your_photo").attr('src', $hero.photo);

                    // and display the info message to choose an enemy
                    let $chooseEnemy = "Select a world to subdue.";
                    $("#message_text").text($chooseEnemy);


                    // BUT IF THERE IS A $HERO and NO ENEMY, THEN CHOOSE AN ENEMY
                    // THIS CONDITIONAL PREVENTS CLICKING THROUGH THE ENEMY LIST
                    // WITHOUT HAVING TO FIGHT ALL THE ENEMYS
                } else if ($hero && !$enemy) {

                    // when an enemy is defeated below, the #enemy_box is HIDDEN
                    // this shows it again when a fresh enemy is selected
                    $("#enemy_box").show();
                    // make the whole object the value of the $enemy variable
                    $enemy = $planetsArray[i];
                    // set the clicked object's .status property to "enemy"
                    $enemy.status = "enemy";
                    // set that object's .game property to "over"
                    // when all planets' .game property is "over", then game is over
                    $enemy.game = "over";
                    // and hide this planet's queue icon
                    $(this).hide().attr('id');
                    // and display this planet in main fight area, below attack button
                    $("#enemy_hp").text($enemy.hp);
                    $("#enemy_name").text($enemy.name);
                    $("#enemy_photo").attr('src', $enemy.photo);

                    // and display the message to start the battle
                    let $attackInfo = "Click ATTACK until one world emerges victorious.";
                    $("#message_text").text($attackInfo);

                }
            }
        }
    });

    // END HERO AND ENEMY PLANET SELECTIONS FUNCTION


    // START LIGHTSHOW FUNCTION TO PRODUCE RANDOM LIGHTNING STRIKES

    // function defines a brief lightning show for use by ATTACK button
    function lightshow() {

        // this function calls a single random instance of lightning
        // actual array of images is passed in below in lightup() callback
        function lightning(imgAr, path) {
            // directory location of the lightning images
            path = 'assets/images/lightning/';
            // variable to stand for the random number chosen
            let num = Math.floor(Math.random() * imgAr.length);
            // variable to choose the image from array object with random number
            let img = imgAr[num];
            // variable to combine the path name with the random chosen image
            let imgStr = path + img;
            // display the random lightning image in the div overlayed on fight box
            $("#lightning_bolts").attr("src", imgStr);
        }

        // callback function definition 
        let lightup = function () {
            // lightning() function with lightning images array arg
            lightning(boltArray);
        }

        // a variable to stand for AND CALL lightup() callback every .1 seconds
        let intervalId = setInterval(lightup, 100);

        // timeout terminates lightup() (x10 .1sec calls of lightning())
        setTimeout(() => {
            // clearInterval stops the intervalId setInterval of lightup() firing
            clearInterval(intervalId);
            // and reset the <img id="lightning_bolts"> src="" to empty
            // so that the last shown bolt does not stay on screen
            $("#lightning_bolts").attr("src", "");
        }, 1000);
    };

    // END LIGHTSHOW FUNCTION TO PRODUCE RANDOM LIGHTNING STRIKES


    // START ATTACK BUTTON GAMEPLAY FUNCTION

    // when the attack button is clicked
    $("#attack_button").click(function (event) {

        // loop through all objects in planetArray
        for (let i = 0; i < $planetsArray.length; i++) {

            // callback checks to see if all objects .game property is "over",
            // if true for $planetArray.every(), then game over
            function checkStatus(planet) {
                return planet.game === "over";
            };

            // IF every one of the planets' .game values are NOT "over", then...
            if (!$planetsArray.every(checkStatus)) {

                // if NO HERO and NO ENEMY, display the start info message
                if (!$enemy && !$hero) {

                    $("#message_text").text($startMessage);

                    // if there is a HERO, but NO ENEMY, then...
                } else if (!$enemy) {

                    // show Empty Space Attack message
                    let $noEnemy = "You are attacking empty space. Choose a more substantial opponent.";
                    $("#message_text").text($noEnemy);
                    // show lightning strikes
                    lightshow();

                    // or if there is an ENEMY but NO HERO, then...
                } else if (!$hero) {

                    // display the You Have Been Defeated message
                    $noHero = "You have been defeated. Accept your fate. Go home.";
                    $("#message_text").text($noHero);


                    // but if none of those above conditions are true, then GAME ON:
                } else {

                    // increase HERO attack points by original base .ap on each attack
                    $attackPoints = $attackPoints + $hero.ap;
                    // set ENEMY's counterattack points to the enemy's .cap
                    $counterAttackPoints = $enemy.cap;
                    // reduce ENEMY's .hp by amount of HERO's increasing attack points
                    $enemy.hp = $enemy.hp - $attackPoints;
                    // and write ENEMY's updated .hp to their fight area tag
                    $("#enemy_hp").text($enemy.hp);
                    // reduce HERO's .hp by amount of ENEMY'S counter attack points
                    $hero.hp = $hero.hp - $counterAttackPoints;
                    // and write HERO's updated .hp to their fight area tag
                    $("#your_hp").text($hero.hp);

                    // composed the attack result message after every attack
                    let $attackResult = "You attacked " + $enemy.name + " for " + $attackPoints + " points of damage. " + $enemy.name + " attacked you for " + $counterAttackPoints + " points of damage. Attack again.";
                    // and display the attack result message in info message area
                    $("#message_text").text($attackResult);
                    // and run the lightning attack lightshow() function
                    lightshow();

                    // and after each attack and counterattack round...

                    // IF HERO and ENEMY defeat each other in the same round
                    if ($hero.hp <= 0 && $enemy.hp <= 0) {

                        // hide the HERO box
                        $("#your_box").hide();
                        // and hide the ENEMY box
                        $("#enemy_box").hide();
                        // and hide all planets in queue
                        $("#char_bin").hide();
                        // and compose the Mutually Assured Destruction message
                        let $MADMessage = "Congratulations. You and " + $enemy.name + " have destroyed each other. Game Over.";
                        // display the MAD message in the info message area
                        $("#message_text").text($MADMessage);
                        // clear the $hero object
                        $hero = "";
                        // clear the $enemy object
                        $enemy = "";


                        // or, IF ENEMY's .hp are 0 or below...
                    } else if ($enemy.hp <= 0) {

                        // define the victory message    
                        let $winMessage = "You have conquered " + $enemy.name + ". Select another world to subdue.";
                        // and write the victory message to the info message area
                        $("#message_text").text($winMessage);
                        // and clear the $enemy object holding variable's value
                        $enemy = "";
                        // and run the lightning attack lightshow() function
                        lightshow();
                        // and hide all items in the main fight area for the ENEMY
                        // after 1 second, so the lightning can run and finish first
                        setTimeout(() => {
                            $("#enemy_box").hide();
                        }, 1000);

                        // or, IF HERO's .hp are 0 or below...
                    } else if ($hero.hp <= 0) {

                        // hide the HERO's details in the HERO's main fight box
                        $("#your_box").hide();
                        // hide all the planets in the queue
                        $("#char_bin").hide();
                        // compose the You Have Been Defeated message
                        let $defeatMessage = "You have been defeated by " + $enemy.name + ". Game Over.";
                        // display the You Have Been Defeated message in info area
                        $("#message_text").text($defeatMessage);
                        // clear the $hero object
                        $hero = "";
                        // remove the ATTACK button, to reveal the RESET button under it
                        $("#attack_button").remove();

                        // THIS FUNCTION NECESSARY TO STOP RUN-THROUGH ATTACKS
                    } else {
                        return;
                    }
                }

                // BUT, IF every one of the planets' .game values ARE "over", then...
                // THE GAME IS OVER
            } else if ($planetsArray.every(checkStatus)) {

                // remove the ATTACK button to reveal the RESET button underneath
                $("#attack_button").remove();
                // compose the Conquering Victorious message
                let $victoryMessage = "You are the lord of your star system. Game Over.";
                // display the Conquering Victorious message in info message area
                $("#message_text").text($victoryMessage);
                // and run the lightning attack lightshow() function
                lightshow();
                // and hide all items in the main fight area for the ENEMY
                // after 1 second, so the lightning can run and finish first
                setTimeout(() => {
                    $("#enemy_box").hide();
                }, 1000);

            }
        }

    });

    // END ATTACK BUTTON GAMEPLAY FUNCTION


    // WHEN THE GAME ENDS, THE ATTACK BUTTON TURNS INTO A RESTART BUTTON
    // REFACTOR: WILL NEED TO ADJUST WHEN ADDING WINS and LOSSES counters
    $('#reset_button').click(function () {
        location.reload();
    });


    // END jQUERY FUNCTION FOR SYSTEMLORD (aka Star Wars RPG)

});