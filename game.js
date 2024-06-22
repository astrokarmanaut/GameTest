let storyIndex = 1;

function displayStory(storyText, choice1Text, choice2Text) {
    document.getElementById('story').innerText = storyText;
    document.getElementById('choice1').innerText = choice1Text;
    document.getElementById('choice2').innerText = choice2Text;
}

function makeChoice(choice) {
    switch(storyIndex) {
        case 1:
            if (choice === 1) {
                storyIndex = 2;
                displayStory("You find yourself in a dimly lit room with strange symbols on the walls. A wooden door with symbols painted on it stands ajar to your left, and a staircase descends into darkness to your right.", "Try the wooden door with the symbols.", "Descend the staircase into darkness.");
            } else {
                storyIndex = 3;
                displayStory("You scream for help, but the walls seem to swallow your voice. Suddenly, you hear a faint noise behind you.", "Investigate the noise behind you.", "Stay silent and hope it goes away.");
            }
            break;
        case 2:
            if (choice === 1) {
                storyIndex = 4;
                displayStory("You step through the door and find yourself in a dusty library filled with ancient books. A fireplace crackles invitingly, and a shadowy figure lurks in the corner.", "Approach the shadowy figure.", "Examine the ancient books.");
            } else {
                storyIndex = 5;
                displayStory("You carefully descend the staircase, feeling each step creak under your weight. At the bottom, you find a rusty door and a tunnel leading further into darkness.", "Open the rusty door.", "Enter the tunnel that leads further into darkness.");
            }
            break;
        case 3:
            if (choice === 1) {
                storyIndex = 6;
                displayStory("You turn around and see a small, robotic toy moving across the floor. It bumps into the wall and a hidden compartment opens, revealing a key.", "Take the key from the compartment.", "Ignore the key and move away.");
            } else {
                storyIndex = 7;
                displayStory("You stay silent, hoping not to attract attention. The noise stops, and you notice a faint light coming from a crack in the wall.", "Investigate the faint light.", "Stay where you are and hope for the best.");
            }
            break;
        case 4:
            if (choice === 1) {
                storyIndex = 8;
                displayStory("You approach the figure, which turns out to be a mannequin dressed in old clothes. As you inspect it, you find a note in its hand.", "Read the note in the mannequin's hand.", "Leave the mannequin and explore further.");
            } else {
                storyIndex = 9;
                displayStory("You pull a dusty book from the shelf, and the bookshelf slides open to reveal a secret passage.", "Enter the secret passage.", "Stay in the library and explore.");
            }
            break;
        case 5:
            if (choice === 1) {
                storyIndex = 10;
                displayStory("You open the door to find a room filled with rubber ducks. One of the ducks quacks at you accusingly.", "Quack back at the rubber duck.", "Close the door and run away.");
            } else {
                storyIndex = 11;
                displayStory("You enter the tunnel, feeling the damp air on your skin. You come across a fork in the path.", "Take the left path through the tunnel.", "Take the right path through the tunnel.");
            }
            break;
        case 6:
            if (choice === 1) {
                storyIndex = 12;
                displayStory("You take the key and notice it has strange markings. You hear a click and a hidden door opens.", "Enter the hidden door that just opened.", "Stay in the room with the key.");
            } else {
                storyIndex = 13;
                displayStory("You ignore the key and the compartment closes. You notice a draft coming from behind a curtain.", "Move the curtain to see what's behind.", "Ignore the draft and stay put.");
            }
            break;
        case 7:
            if (choice === 1) {
                storyIndex = 14;
                displayStory("You approach the crack and peer through it, seeing a bright room filled with strange machinery.", "Enter the bright room through the crack.", "Stay where you are and observe.");
            } else {
                storyIndex = 15;
                displayStory("You stay where you are and the light fades. You feel a presence behind you.", "Turn around to face the presence.", "Stay still and hope it goes away.");
            }
            break;
        case 8:
            if (choice === 1) {
                storyIndex = 16;
                displayStory("You read the note: 'The way out is hidden where the light never shines.' You feel a chill run down your spine.", "Look for a dark place as the note suggests.", "Ignore the note and continue exploring.");
            } else {
                storyIndex = 17;
                displayStory("You leave the mannequin and continue exploring the library.", "Explore the fireplace area.", "Inspect more books on the shelves.");
            }
            break;
        case 9:
            if (choice === 1) {
                storyIndex = 18;
                displayStory("You enter the passage and find yourself in a room with a large, glowing crystal in the center.", "Touch the glowing crystal.", "Leave the room with the crystal.");
            } else {
                storyIndex = 19;
                displayStory("You stay in the library and a secret door suddenly opens, revealing a hidden room.", "Enter the hidden room that just opened.", "Stay in the library and continue exploring.");
            }
            break;
        case 10:
            if (choice === 1) {
                storyIndex = 20;
                displayStory("You quack back at the duck, and it leads you to a hidden trapdoor.", "Enter the trapdoor revealed by the duck.", "Stay in the room with the ducks.");
            } else {
                storyIndex = 21;
                displayStory("You close the door and run back up the stairs, only to find another door.", "Open the new door you found.", "Go back to the room with the rusty door.");
            }
            break;
        case 11:
            if (choice === 1) {
                storyIndex = 22;
                displayStory("You take the left path and find yourself in a room full of giant, genetically altered babies. One of them picks you up.", "Let the giant baby hold you.", "Try to escape from the baby's grip.");
            } else {
                storyIndex = 23;
                displayStory("You take the right path and encounter a sea of rats coming out of a sewer pipe.", "Try to fight the rats.", "Run away from the rats.");
            }
            break;
        case 12:
            if (choice === 1) {
                storyIndex = 24;
                displayStory("You enter the hidden door and find yourself in a control room filled with screens showing different parts of the building.", "Study the screens to find a way out.", "Leave the control room and explore further.");
            } else {
                storyIndex = 25;
                displayStory("You stay in the room and the hidden door closes. You hear footsteps approaching.", "Hide quickly.", "Stay where you are and hope they don't find you.");
            }
            break;
        case 13:
            if (choice === 1) {
                storyIndex = 26;
                displayStory("You move the curtain and find a hidden passage leading to another room.", "Enter the hidden passage.", "Stay in the room with the curtain.");
            } else {
                storyIndex = 27;
                displayStory("You ignore the draft and suddenly the lights go out. You hear a whisper in your ear.", "Listen carefully to the whisper.", "Scream for help.");
            }
            break;
        case 14:
            if (choice === 1) {
                storyIndex = 28;
                displayStory("You enter the crack and find yourself in a bright room filled with strange machinery. A robot greets you.", "Talk to the robot in the room.", "Ignore the robot and explore the machinery.");
            } else {
                storyIndex = 29;
                displayStory("You stay where you are and the light fades. You feel a presence behind you.", "Turn around to face the presence.", "Stay still and hope it goes away.");
            }
            break;
        case 15:
            if (choice === 1) {
                storyIndex = 30;
                displayStory("You turn around and see a shadowy figure approaching. It stops in front of you and whispers, 'Find the key.'", "Ask the shadowy figure for help.", "Run away from the shadowy figure.");
            } else {
                storyIndex = 31;
                displayStory("You stay still and the presence disappears. You hear a door creak open.", "Investigate the door that just opened.", "Stay where you are and hope for the best.");
            }
            break;
        case 16:
            if (choice === 1) {
                storyIndex = 32;
                displayStory("You look for a dark place and find a hidden door behind a tapestry.", "Open the hidden door and see what's inside.", "Ignore the hidden door and keep looking.");
            } else {
                storyIndex = 33;
                displayStory("You ignore the note and continue exploring. You find a strange contraption in the corner.", "Examine the strange contraption.", "Ignore it and keep looking around.");
            }
            break;
        case 17:
            if (choice === 1) {
                storyIndex = 34;
                displayStory("You explore the fireplace area and find a lever hidden behind the logs.", "Pull the lever.", "Leave it and continue exploring.");
            } else {
                storyIndex = 35;
                displayStory("You inspect more books and find one that looks newer than the others.", "Open the newer book.", "Ignore it and keep looking.");
            }
            break;
        case 18:
            if (choice === 1) {
                storyIndex = 36;
                displayStory("You touch the crystal and it starts to glow brighter. You feel a strange sensation and suddenly find yourself in another room.", "Explore the new room.", "Stay where you are and take in your surroundings.");
            } else {
                storyIndex = 37;
                displayStory("You leave the room with the crystal and find yourself in a hallway with paintings lining the walls.", "Examine the paintings.", "Continue down the hallway.");
            }
            break;
        case 19:
            if (choice === 1) {
                storyIndex = 38;
                displayStory("You enter the hidden room and find it filled with treasure chests.", "Open a treasure chest.", "Ignore the treasure and look for another way out.");
            } else {
                storyIndex = 39;
                displayStory("You stay in the library and a secret door suddenly opens, revealing another hidden room.", "Enter the second hidden room.", "Stay in the library.");
            }
            break;
        case 20:
            if (choice === 1) {
                storyIndex = 40;
                displayStory("You enter the trapdoor and find yourself in a secret tunnel leading to the outside. You see the light of day ahead.", "Run towards the light and freedom.", "Crawl slowly and carefully.");
            } else {
                storyIndex = 41;
                displayStory("You stay in the room and the ducks start singing. You realize you've been caught in a duck-themed trap.", "Sing along with the ducks.", "Try to escape the duck trap.");
            }
            break;
        case 21:
            if (choice === 1) {
                storyIndex = 42;
                displayStory("You open the new door and find yourself in a room with a single candle flickering on a table.", "Investigate the candle.", "Ignore the candle and explore the room.");
            } else {
                storyIndex = 43;
                displayStory("You go back to the room with the rusty door and find it now open.", "Enter the rusty door.", "Stay in the room and think.");
            }
            break;
        case 22:
            if (choice === 1) {
                storyIndex = 44;
                displayStory("You let the giant baby hold you. It seems friendly and starts to play with you.", "Play along with the giant baby.", "Try to escape its grip when it's distracted.");
            } else {
                storyIndex = 45;
                displayStory("You try to escape from the baby's grip, but it tightens its hold. The baby seems upset.", "Try to calm the baby down.", "Keep trying to escape.");
            }
            break;
        case 23:
            if (choice === 1) {
                storyIndex = 46;
                displayStory("You try to fight the rats, but there are too many of them. You feel overwhelmed and start to lose consciousness.", "Succumb to the rats.", "Fight with all your might.");
            } else {
                storyIndex = 47;
                displayStory("You run away from the rats and find a ladder leading up.", "Climb the ladder quickly.", "Stay and catch your breath.");
            }
            break;
        // More cases can be added to extend the story further
        case 24:
            if (choice === 1) {
                storyIndex = 48;
                displayStory("You study the screens and notice a pattern in the movements of the guards.", "Use the pattern to plan your escape.", "Ignore the screens and leave the control room.");
            } else {
                storyIndex = 49;
                displayStory("You leave the control room and find a hallway with several doors.", "Open the nearest door.", "Explore further down the hallway.");
            }
            break;
        case 25:
            if (choice === 1) {
                storyIndex = 50;
                displayStory("You hide quickly and watch as a group of guards enter the room.", "Wait for them to leave.", "Try to sneak past them.");
            } else {
                storyIndex = 51;
                displayStory("You stay where you are and the guards find you. They take you to a holding cell.", "Wait for an opportunity to escape.", "Try to overpower the guards.");
            }
            break;
        case 26:
            if (choice === 1) {
                storyIndex = 52;
                displayStory("You enter the hidden passage and find yourself in a dimly lit room with strange symbols on the walls.", "Explore the room.", "Look for another way out.");
            } else {
                storyIndex = 53;
                displayStory("You stay in the room with the curtain and hear footsteps approaching.", "Hide behind the curtain.", "Stay where you are and prepare to defend yourself.");
            }
            break;
        case 27:
            if (choice === 1) {
                storyIndex = 54;
                displayStory("You listen carefully to the whisper and hear it say, 'The key is in the library.'", "Go to the library to find the key.", "Ignore the whisper and stay put.");
            } else {
                storyIndex = 55;
                displayStory("You scream for help and suddenly the lights come back on. You see a figure in the doorway.", "Approach the figure cautiously.", "Stay where you are and observe.");
            }
            break;
        case 28:
            if (choice === 1) {
                storyIndex = 56;
                displayStory("You talk to the robot and it tells you it can help you escape.", "Ask the robot for help.", "Ignore the robot and look for another way out.");
            } else {
                storyIndex = 57;
                displayStory("You ignore the robot and start exploring the machinery. You accidentally activate a trap and feel a sharp pain.", "Try to deactivate the trap.", "Accept your fate.");
            }
            break;
        case 29:
            if (choice === 1) {
                storyIndex = 58;
                displayStory("You turn around and see a shadowy figure approaching. It stops in front of you and whispers, 'Find the key.'", "Ask the shadowy figure for help.", "Run away from the shadowy figure.");
            } else {
                storyIndex = 59;
                displayStory("You stay still and the presence disappears. You hear a door creak open.", "Investigate the door that just opened.", "Stay where you are and hope for the best.");
            }
            break;
        case 30:
            if (choice === 1) {
                storyIndex = 60;
                displayStory("You ask the shadowy figure for help and it points to a hidden door.", "Open the hidden door.", "Ignore the figure and find your own way.");
            } else {
                storyIndex = 61;
                displayStory("You run away from the shadowy figure and find yourself in a room filled with mirrors.", "Examine the mirrors closely.", "Ignore the mirrors and find a way out.");
            }
            break;
        case 31:
            if (choice === 1) {
                storyIndex = 62;
                displayStory("You investigate the door and find a hallway filled with light.", "Walk down the hallway.", "Stay by the door and observe.");
            } else {
                storyIndex = 63;
                displayStory("You stay where you are and hear footsteps approaching.", "Hide quickly.", "Stay and confront whatever is coming.");
            }
            break;
        case 32:
            if (choice === 1) {
                storyIndex = 64;
                displayStory("You open the hidden door and find a spiral staircase leading up.", "Climb the spiral staircase.", "Ignore the staircase and keep exploring.");
            } else {
                storyIndex = 65;
                displayStory("You ignore the hidden door and keep looking. You find a small box under a floorboard.", "Open the box.", "Leave the box and keep looking.");
            }
            break;
        case 33:
            if (choice === 1) {
                storyIndex = 66;
                displayStory("You examine the strange contraption and accidentally activate a trap. You feel a sharp pain and everything goes black.", "Accept your fate.", "Try to deactivate the trap.");
            } else {
                storyIndex = 67;
                displayStory("You ignore the contraption and continue exploring. You find a door with strange symbols on it.", "Open the door with symbols.", "Ignore the door and keep looking.");
            }
            break;
        case 34:
            if (choice === 1) {
                storyIndex = 68;
                displayStory("You pull the lever and the fireplace slides open, revealing a hidden passage.", "Enter the hidden passage.", "Ignore the passage and keep exploring.");
            } else {
                storyIndex = 69;
                displayStory("You leave the lever and continue exploring. You find a strange device on a table.", "Examine the strange device.", "Ignore the device and keep looking.");
            }
            break;
        case 35:
            if (choice === 1) {
                storyIndex = 70;
                displayStory("You open the newer book and find a hidden key inside.", "Take the key and find where it fits.", "Leave the key and keep looking.");
            } else {
                storyIndex = 71;
                displayStory("You ignore the newer book and keep looking. You find a trapdoor under a rug.", "Open the trapdoor.", "Ignore the trapdoor and keep looking.");
            }
            break;
        // Cases 36 to 71 can be expanded further with additional scenarios and endings
        default:
            // If no matching story index, reset the game (this should not happen with proper story continuity)
            storyIndex = 1;
            displayStory("Something went wrong. You find yourself in a dark room with no memory of how you got there.", "Look around for clues.", "Scream for help.");
            break;
    }
}

// Initial story setup
displayStory("You find yourself in a dark room with no memory of how you got there.", "Look around for clues.", "Scream for help.");
document.getElementById('choice1').addEventListener('click', function() { makeChoice(1); });
document.getElementById('choice2').addEventListener('click', function() { makeChoice(2); });
