var readLineSync = require('readline-sync');
var welcomeMessage = `You are awake finally! Before you ask, welcome to Skyrim`;
console.log(welcomeMessage);
var playerName = readLineSync.question("What is your name Player? ");
var gameTutorial = `${playerName} you must learn how to walk. Press 1 to move forward. Unfortunately, that is the only direction you can move.\nHowever, there is a chance you will face enemies and you will have the choice to run or fight.\nAlso you can look at your inventory in the 'print' option.\nOr you can leave the game at any time but no saved progress will be stored, sorry.\nGood luck ${playerName}`;
console.log(gameTutorial);

var enemies = ["Bandit", "Skeever", "Mudcrab", "Dragon"];
var itemsFromEnemies = ["Health Potion", "Mehrunes Dagger", "Dragonborn shout"];
var lifeCounter = 50;
var options = ["Walk", "Exit", "Print"]; 
var itemDrop = [];
var pickUp = itemsFromEnemies[Math.floor(Math.random() * itemsFromEnemies.length)];

function game(){
    var playerAttack = Math.floor(Math.random() * (7 - 4) + 6);
    var enemy = enemies [Math.floor(Math.random() * enemies.length)];
    enemyHealth = 50;
    var enemyAttack = Math.floor(Math.random() * (9 - 5) + 3);

    var index = readLineSync.keyInSelect(options, "What is your next move?");

    if (options[index] == "Exit"){
        return lifeCounter = 0;
    } else if (options[index] == "Print"){
        console.log(playerName + ": " + lifeCounter + " " + "Items: " + itemDrop);
    } else if (options[index] === "Walk"){
        var key = Math.random();
        if (key <= .4) {
            console.log("Walking forward...");
        } else if (key >= .4){
            console.log(enemy + ": Pay with your blood");

            while (enemyHealth > 0 && lifeCounter > 0) {
                
                var user = readLineSync.question("Will you stay and fight? Or run like a coward? ENTER 'r' or 'a': ");
                
                switch (user){
                    case 'r':
                        var run = Math.random();
                        if (run < .5){
                            console.log(enemy + " hits with: " + enemyAttack);
                        } else {
                            console.log(playerName + " escaped the battle!");
                            break;
                        }
                    
                    case 'a':
                        enemyHealth -= playerAttack;
                        console.log("You attacked with " + playerAttack + " points of damage. Enemy health: "+ enemyHealth);

                        lifeCounter -= enemyAttack;
                        console.log("Enemy attacked with " + enemyAttack + " points of damage. Player health: "+ lifeCounter);

                        if (enemyHealth <= 0){
                            console.log(enemy + " has been killed. \n" + enemy + " dropped: " + pickUp);
                            itemDrop.push(pickUp);
                        } else if (lifeCounter <= 0){
                            console.log(enemy + " killed you! GAME OVER");
                       }
                }
            }
        }
    }
}


while (lifeCounter > 0){
    game();
}