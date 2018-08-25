// Star Wars RPG jQuery game
// aka System Lord
// by Richard Trevillian, 2018-08-23


$(document).ready(function () {


    // INITIALIZE ARRAY OF CHARACTER OBJECTS

    let $planetsArray = [

        {
            name: "ARAZIUS",
            hp: 600,
            ap: 15,
            cap: 50,
            status: "",
            game: "",
            photo: 'assets/images/arazius.png'
        },

        {
            name: "IRIDIR",
            hp: 800,
            ap: 25,
            cap: 80,
            status: "",
            game: "",
            photo: 'assets/images/iridir.png'
        },

        {
            name: "KIKINHO",
            hp: 1100,
            ap: 12,
            cap: 60,
            status: "",
            game: "",
            photo: 'assets/images/kikinho.png'
        },

        {
            name: "ORLOPIA",
            hp: 900,
            ap: 20,
            cap: 70,
            status: "",
            game: "",
            photo: 'assets/images/orlopia.png'
        },

        {
            name: "RAGEN",
            hp: 900,
            ap: 10,
            cap: 90,
            status: "",
            game: "",
            photo: 'assets/images/ragen.png'
        },

        {
            name: "SIRITH",
            hp: 300,
            ap: 15,
            cap: 50,
            status: "",
            game: "",
            photo: 'assets/images/sirith.png'
        },

        {
            name: "TRILOPE",
            hp: 550,
            ap: 20,
            cap: 30,
            status: "",
            game: "",
            photo: 'assets/images/trilope.png'
        },

    ];

    let boltArray = [
        "L0.gif",
        "L1.gif",
        "L2.gif",
        "L3.gif",
        "L4.gif",
        "L5.gif",
        "L6.gif",
        "L7.gif",
        "L8.gif",
        "L9.gif",
        "L10.gif",
    ];


    // let bolts = [
    //     "L0.gif",
    //     "L1.gif",
    //     "L2.gif",
    //     "L3.gif",
    //     "L4.gif",
    //     "L5.gif",
    //     "L6.gif",
    //     "L7.gif",
    //     "L8.gif",
    //     "L9.gif",
    //     "L10.gif",
    // ];


    // WRITE THE NAMES AND HP OF QUEUED PLANETS TO THEIR SMALL TAGS
    // CAN THIS BE DONE MORE COMPACTLY?

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

    // represents the entire array object for the hero planet
    let $hero;

    // represents the entire array object for the enemy planet
    let $enemy;

    // represents the incrementing .ap property of the hero planet
    let $attackPoints = 0;

    // represents the static .cap property of the enemy planet
    let $counterAttackPoints = 0;




    let $startMessage = "Choose a world to be your capital.";
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

                    // and make the whole object the value of $hero
                    $hero = $planetsArray[i];
                    // set that object's .status property to "hero"
                    $hero.status = "hero";
                    // set that object's .game property to "over"
                    $hero.game = "over";
                    // and .hide THIS element (the clicked list planet)
                    $(this).hide().attr('id');
                    // and put .name, .hp, and photo of $hero object into YOUR html divs
                    $("#your_hp").text($hero.hp);
                    $("#your_name").text($hero.name);
                    $("#your_photo").attr('src', $hero.photo);

                    let $chooseEnemy = "Select a world to subdue.";
                    // and display the message to choose an enemy
                    $("#message_text").text($chooseEnemy);

                    // and console.log the value of $hero
                    console.log($hero);

                    // but if $hero DOES have a value already,
                    // then all subsequent planets clicked will have .status "enemy"
                } else {

                    $("#enemy_box").show();
                    // and make the whole object the value of the $enemy variable
                    $enemy = $planetsArray[i];
                    // set the clicked object's .status property to "enemy"
                    $enemy.status = "enemy";
                    // set that object's .game property to "over"
                    $enemy.game = "over";
                    // and .hide THIS (the element clicked with class="char_box")
                    $(this).hide().attr('id');
                    // and put .name, .hp, and photo of $hero object into ENEMY html divs
                    $("#enemy_hp").text($enemy.hp);
                    $("#enemy_name").text($enemy.name);
                    $("#enemy_photo").attr('src', $enemy.photo);

                    let $attackInfo = "Click ATTACK until one world emerges victorious.";
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


        // lightning effects go here, before logical decision tree

        function lightning(imgAr, path) {
            path = 'assets/images/'; // default path here
            var num = Math.floor(Math.random() * imgAr.length);
            var img = imgAr[num];
            var imgStr = path + img;
            $("#lightning_bolts").attr("src", imgStr);
        }


        // lightning(boltArray);

        // loop through all objects in planetArray
        for (let i = 0; i < $planetsArray.length; i++) {


            // FUNCTION FOR CHECKING IF ALL ENEMIES DEFEATED (GAME OVER)
            // checks if the .game property of all array objects is "over"
            // called by final ELSE IF statement

            let checkStatus = function (g) {
                if ($planetsArray.game === "over") {
                    return g;
                }
            };


            if ($planetsArray[i].game !== "") {

                if (!$enemy) {

                    let $noEnemy = "You are attacking empty space. Choose a more substantial opponent.";
                    // display the result of the attack
                    $("#message_text").text($noEnemy);
                    lightning(boltArray);


                } else if (!$hero) {

                    $("#char_bin").hide();
                    $noHero = "You have been defeated. Accept your fate. Go home.";
                    // display the result of the attack
                    $("#message_text").text($noHero);

                } else {

                    lightning(boltArray);
                    $attackPoints += $hero.ap;
                    $counterAttackPoints = $enemy.cap;
                    $enemy.hp = $enemy.hp - $attackPoints;
                    $("#enemy_hp").text($enemy.hp);
                    $hero.hp = $hero.hp - $counterAttackPoints;
                    $("#your_hp").text($hero.hp);

                    let $attackResult = "You attacked " + $enemy.name + " for " + $attackPoints + " points of damage. " + $enemy.name + " attacked you for " + $counterAttackPoints + " points of damage. Attack again.";

                    // display the result of the attack
                    $("#message_text").text($attackResult);

                    if ($enemy.hp < 0) {

                        lightning(boltArray);
                        setTimeout(() => {
                            $("#enemy_box").hide();
                        }, 1000);
                        
                        let $winMessage = "You have conquered " + $enemy.name + ". Select another world to subdue.";
                        // display the result of the attack
                        $("#message_text").text($winMessage);
                        $enemy = "";
                        return;

                    } else if ($hero.hp < 0) {

                        $("#your_box").hide();
                        $("#char_bin").hide();
                        let $defeatMessage = "You have been defeated by " + $enemy.name + ". Game Over.";
                        // display the result of the attack
                        $("#message_text").text($defeatMessage);
                        $hero = "";
                        return;

                    }
                }

            } else if ($planetsArray.every(checkStatus)) {

                $("#char_bin").hide();
                let $victoryMessage = "You are the lord of your star system. Game Over.";
                // display the result of the attack
                $("#message_text").text($victoryMessage);
                return;

            }
        }

    });

    // END ATTACK BUTTON GAMEPLAY FUNCTION

    // END jQUERY FUNCTION FOR SYSTEMLORD (aka Star Wars RPG)

});