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
                displayStory("You find yourself in a dimly lit room with strange symbols on the walls. A wooden door stands ajar to your left, and a staircase descends into darkness to your right.", "Go through the door.", "Descend the staircase.");
            } else {
                storyIndex = 3;
                displayStory("You scream for help, but the walls seem to swallow your voice. Suddenly, you hear a faint noise behind you.", "Investigate the noise.", "Stay silent.");
            }
            break;
        case 2:
            if (choice === 1) {
                storyIndex = 4;
                displayStory("You step through the door and find yourself in a dusty library filled with ancient books. A fireplace crackles invitingly, and a shadowy figure lurks in the corner.", "Approach the figure.", "Examine the books.");
            } else {
                storyIndex = 5;
                displayStory("You carefully descend the staircase, feeling each step creak under your weight. At the bottom, you find a rusty door and a tunnel leading further into darkness.", "Open the door.", "Enter the tunnel.");
            }
            break;
        case 3:
            if (choice === 1) {
                storyIndex = 6;
                displayStory("You turn around and see a small, robotic toy moving across the floor. It bumps into the wall and a hidden compartment opens, revealing a key.", "Take the key.", "Ignore the key.");
            } else {
                storyIndex = 7;
                displayStory("You stay silent, hoping not to attract attention. The noise stops, and you notice a faint light coming from a crack in the wall.", "Investigate the light.", "Stay where you are.");
            }
            break;
        case 4:
            if (choice === 1) {
                storyIndex = 8;
                displayStory("You approach the figure, which turns out to be a mannequin dressed in old clothes. As you inspect it, you find a note in its hand.", "Read the note.", "Leave the mannequin.");
            } else {
                storyIndex = 9;
                displayStory("You pull a dusty book from the shelf, and the bookshelf slides open to reveal a secret passage.", "Enter the passage.", "Stay in the library.");
            }
            break;
        case 5:
            if (choice === 1) {
                storyIndex = 10;
                displayStory("You open the door to find a room filled with rubber ducks. One of the ducks quacks at you accusingly.", "Quack back at the duck.", "Close the door and run.");
            } else {
                storyIndex = 11;
                displayStory("You enter the tunnel, feeling the damp air on your skin. You come across a fork in the path.", "Take the left path.", "Take the right path.");
            }
            break;
        case 6:
            if (choice === 1) {
                storyIndex = 12;
                displayStory("You take the key and notice it has strange markings. You hear a click and a hidden door opens.", "Enter the hidden door.", "Stay in the room.");
            } else {
                storyIndex = 13;
                displayStory("You ignore the key and the compartment closes. You notice a draft coming from behind a curtain.", "Move the curtain.", "Ignore the draft.");
            }
            break;
        case 7:
            if (choice === 1) {
                storyIndex = 14;
                displayStory("You approach the crack and peer through it, seeing a bright room filled with strange machinery.", "Enter the crack.", "Stay where you are.");
            } else {
                storyIndex = 15;
                displayStory("You stay where you are and the light fades. You feel a presence behind you.", "Turn around.", "Stay still.");
            }
            break;
        case 8:
            if (choice === 1) {
                storyIndex = 16;
                displayStory("You read the note: 'The way out is hidden where the light never shines.' You feel a chill run down your spine.", "Look for a dark place.", "Ignore the note.");
            } else {
                storyIndex = 17;
                displayStory("You leave the mannequin and suddenly, the room starts spinning. You find yourself back at the start.", "Explore the room.", "Call for help.");
            }
            break;
        case 9:
            if (choice === 1) {
                storyIndex = 18;
                displayStory("You enter the passage and find yourself in a room with a large, glowing crystal in the center.", "Touch the crystal.", "Leave the room.");
            } else {
                storyIndex = 19;
                displayStory("You stay in the library and a secret door suddenly opens, revealing a hidden room.", "Enter the hidden room.", "Stay in the library.");
            }
            break;
        case 10:
            if (choice === 1) {
                storyIndex = 20;
                displayStory("You quack back at the duck, and it leads you to a hidden trapdoor.", "Enter the trapdoor.", "Stay in the room.");
            } else {
                storyIndex = 21;
                displayStory("You close the door and run back up the stairs, only to find another door.", "Open the new door.", "Go back to the room.");
            }
            break;
        case 11:
            if (choice === 1) {
                storyIndex = 22;
                displayStory("You take the left path and find yourself in a room full of giant, genetically altered babies. One of them picks you up.", "Let the baby hold you.", "Try to escape.");
            } else {
                storyIndex = 23;
                displayStory("You take the right path and encounter a sea of rats coming out of a sewer pipe.", "Try to fight the rats.", "Run away.");
            }
            break;
        case 12:
            if (choice === 1) {
                storyIndex = 24;
                displayStory("You enter the hidden door and find yourself in a control room filled with screens showing different parts of the building.", "Study the screens.", "Leave the control room.");
            } else {
                storyIndex = 25;
                displayStory("You stay in the room and the hidden door closes. You hear footsteps approaching.", "Hide.", "Stay where you are.");
            }
            break;
        case 13:
            if (choice === 1) {
                storyIndex = 26;
                displayStory("You move the curtain and find a hidden passage leading to another room.", "Enter the passage.", "Stay in the room.");
            } else {
                storyIndex = 27;
                displayStory("You ignore the draft and suddenly the lights go out. You hear a whisper in your ear.", "Listen to the whisper.", "Scream for help.");
            }
            break;
        case 14:
            if (choice === 1) {
                storyIndex = 28;
                displayStory("You enter the crack and find yourself in a bright room filled with strange machinery. A robot greets you.", "Talk to the robot.", "Ignore the robot.");
            } else {
                storyIndex = 29;
                displayStory("You stay where you are and the light fades. You feel a presence behind you.", "Turn around.", "Stay still.");
            }
            break;
        case 15:
            if (choice === 1) {
                storyIndex = 30;
                displayStory("You turn around and see a shadowy figure approaching. It stops in front of you and whispers, 'Find the key.'", "Ask the figure for help.", "Run away.");
            } else {
                storyIndex = 31;
                displayStory("You stay still and the presence disappears. You hear a door creak open.", "Investigate the door.", "Stay where you are.");
            }
            break;
        // Continue adding more cases to extend the game to at least 20 turns
        case 20:
            if (choice === 1) {
                storyIndex = 32;
                displayStory("You enter the trapdoor and find yourself in a secret tunnel leading to the outside. You see the light of day ahead.", "Run towards the light.", "Crawl slowly.");
            } else {
                storyIndex = 33;
                displayStory("You stay in the room and the ducks start singing. You realize you've been caught in a duck-themed trap.", "Sing along with the ducks.", "Try to escape.");
            }
            break;
        case 32:
            if (choice === 1) {
                storyIndex = 34;
                displayStory("You run towards the light and finally emerge outside. You are free at last!", "Celebrate your freedom.", "Reflect on your journey.");
            } else {
                storyIndex = 35;
                displayStory("You crawl slowly, savoring each moment. You finally emerge outside and feel the warmth of the sun on your face.", "Celebrate your freedom.", "Reflect on your journey.");
            }
            break;
        case 34:
            displayStory("You celebrate your freedom, feeling the weight lift off your shoulders. Congratulations, you have escaped!", "Play again", "Exit");
            break;
        case 35:
            displayStory("You reflect on your journey, thinking about all the strange encounters you had. Congratulations, you have escaped!", "Play again", "Exit");
            break;
        default:
            storyIndex = 1;
            displayStory("You wake up in a dark room with no memory of how you got there. You see a door and a small window.", "Explore the room.", "Call for help.");
            break;
    }
}

displayStory("You wake up in a dark room with no memory of how you got there. You see a door and a small window.", "Explore the room.", "Call for help.");
