// Star Wars RPG jQuery game
// aka System Lord

$(document).ready(function () {

    // START JQUERY JS:


    // INITIALIZE GAME PLAY VARIABLES

    let $enemyName = "Fred";

    let $attackPoints = 8;

    let $counterAttackPoints = 5;


    // INITIALIZE LIST OF MESSAGES THAT FOLLOW GAME PLAY

    let $startMessage = "Choose your world.";

    let $chooseEnemy = "Select your opponent.";

    let $attackInfo = "Click the ATTACK button until one emerges victorious.";

    let $attackResult = "You attacked " + $enemyName + " for " + $attackPoints + " points of damage." + $enemyName + " attacked you for " + $counterAttackPoints + " points of damage.";

    let $defeatMessage = "Your planet has been conquered. Game Over.";

    let $winMessage = "You have conquered " + $enemyName + ". Select another opponent.";

    let $victoryMessage = "You have conquered all other worlds in your system. Game Over.";

    let $noEnemy = "You are attacking empty space. Choose a more substantial opponent.";







    // END EVENT LISTENER TO LISTEN FOR KEY PRESSES AND CALL PLAY() FUNCTION


    // END JQUERY JS
});