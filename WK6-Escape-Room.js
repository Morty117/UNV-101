var readLineSync = require('readline-sync');
var playerName = readLineSync.question("What is your name Player? ");
var welcomeMessage = `Welcome ${playerName} to the ESCAPE ROOM!`
console.log(welcomeMessage);

var lifeCounter = true;
var hasKey = false;

while(lifeCounter == true){
    var menuOptions = readLineSync.keyIn("Press 1 to put hand in hole \n Press 2 to Find the key \n Press 3 to Open the door", {limit: '$<1-3>'});
    if (menuOptions == 1){
        // Player has made an error
        // Game is over
        console.log(`${playerName}, unfortunately you put your hand in the hole. You are dead! Start Over newbie.`);
        lifeCounter = false;
    }
    else if(menuOptions == 2 && hasKey == false){
        // Player has found the key
        console.log(`${playerName} you found the key! Now open the door and get on outta here!`);
        hasKey = true;
    }
    else if(menuOptions == 2 && hasKey == true){
        // player has chosen option 2 again
        console.log(`${playerName}...You already have the key and are wasting time. Get out there and continue on your adventure!`);
    }
    else if(menuOptions == 3 && hasKey == false){
        // Player chose option 3 without finding the key
        console.log(`Oops! ${playerName}, you did not find the key yet. You gotta go back to find it.`);
    }
    else if(menuOptions == 3 && hasKey == true){
        //Player found the key and chose option 3
        console.log(`Nice! ${playerName}, you found the key to unlock your destiny! Adventure awaits for you out there! Get moving!`);
        lifeCounter = false;
    }
}
