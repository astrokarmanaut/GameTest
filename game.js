let storyIndex = 1;

function displayStory(storyText, choice1Text, choice2Text) {
    document.getElementById('story').innerText = storyText;
    document.getElementById('choice1').innerText = choice1Text;
    document.getElementById('choice2').innerText = choice2Text;
}

function makeChoice(choice) {
    switch (storyIndex) {
        case 1:
            if (choice === 1) {
                storyIndex = 2;
                displayStory("You find yourself in a dimly lit room with strange symbols on the walls. A wooden door stands ajar to your left, and a staircase descends into darkness to your right.", "Try the wooden door with the symbols painted on it.", "Investigate the staircase that seems to creak ominously.");
            } else {
                storyIndex = 3;
                displayStory("You scream for help, but the walls seem to swallow your voice. Suddenly, you hear a faint noise behind you.", "Investigate the noise that sounds suspiciously close.", "Stay silent and hope it goes away.");
            }
            break;
        case 2:
            if (choice === 1) {
                storyIndex = 4;
                displayStory("You step through the door and find yourself in a dusty library filled with ancient books. A fireplace crackles invitingly, and a shadowy figure lurks in the corner.", "Approach the mysterious figure lurking in the shadows.", "Examine the old, dusty books.");
            } else {
                storyIndex = 5;
                displayStory("You carefully descend the staircase, feeling each step creak under your weight. At the bottom, you find a rusty door and a tunnel leading further into darkness.", "Open the rusty door and see what's inside.", "Enter the dark tunnel that seems to have no end.");
            }
            break;
        case 3:
            if (choice === 1) {
                storyIndex = 6;
                displayStory("You turn around and see a small, robotic toy moving across the floor. It bumps into the wall and a hidden compartment opens, revealing a key.", "Take the key with strange markings on it.", "Ignore the key and look around more.");
            } else {
                storyIndex = 7;
                displayStory("You stay silent, hoping not to attract attention. The noise stops, and you notice a faint light coming from a crack in the wall.", "Investigate the light coming through the crack.", "Stay where you are and hope for the best.");
            }
            break;
        case 4:
            if (choice === 1) {
                storyIndex = 8;
                displayStory("You approach the figure, which turns out to be a mannequin dressed in old clothes. As you inspect it, you find a note in its hand.", "Read the note that looks old and worn.", "Leave the mannequin and continue exploring.");
            } else {
                storyIndex = 9;
                displayStory("You pull a dusty book from the shelf, and the bookshelf slides open to reveal a secret passage.", "Enter the secret passage that has been revealed.", "Stay in the library and examine more books.");
            }
            break;
        case 5:
            if (choice === 1) {
                storyIndex = 10;
                displayStory("You open the door to find a room filled with rubber ducks. One of the ducks quacks at you accusingly.", "Quack back at the duck that seems to be staring at you.", "Close the door and run away.");
            } else {
                storyIndex = 11;
                displayStory("You enter the tunnel, feeling the damp air on your skin. You come across a fork in the path.", "Take the left path where you hear faint whispers.", "Take the right path that seems eerily silent.");
            }
            break;
        case 6:
            if (choice === 1) {
                storyIndex = 12;
                displayStory("You take the key and notice it has strange markings. You hear a click and a hidden door opens.", "Enter the hidden door that just opened.", "Stay in the room and look for more clues.");
            } else {
                storyIndex = 13;
                displayStory("You ignore the key and the compartment closes. You notice a draft coming from behind a curtain.", "Move the curtain and see where the draft is coming from.", "Ignore the draft and stay in the room.");
            }
            break;
        case 7:
            if (choice === 1) {
                storyIndex = 14;
                displayStory("You approach the crack and peer through it, seeing a bright room filled with strange machinery.", "Enter the room with the strange machinery.", "Stay where you are and wait for something to happen.");
            } else {
                storyIndex = 15;
                displayStory("You stay where you are and the light fades. You feel a presence behind you.", "Turn around to see what the presence is.", "Stay still and hope it goes away.");
            }
            break;
        case 8:
            if (choice === 1) {
                storyIndex = 16;
                displayStory("You read the note: 'The way out is hidden where the light never shines.' You feel a chill run down your spine.", "Look for a dark place where light never shines.", "Ignore the note and continue exploring.");
            } else {
                storyIndex = 17;
                displayStory("You leave the mannequin and suddenly, the room starts spinning. You find yourself in a different room.", "Explore the new room that you're in.", "Stay where you are and try to get your bearings.");
            }
            break;
        case 9:
            if (choice === 1) {
                storyIndex = 18;
                displayStory("You enter the passage and find yourself in a room with a large, glowing crystal in the center.", "Touch the mesmerizing, glowing crystal.", "Leave the room and go back to the library.");
            } else {
                storyIndex = 19;
                displayStory("You stay in the library and a secret door suddenly opens, revealing a hidden room.", "Enter the hidden room that has just been revealed.", "Stay in the library and examine more books.");
            }
            break;
        case 10:
            if (choice === 1) {
                storyIndex = 20;
                displayStory("You quack back at the duck, and it leads you to a hidden trapdoor.", "Enter the hidden trapdoor and see where it leads.", "Stay in the room and look for more clues.");
            } else {
                storyIndex = 21;
                displayStory("You close the door and run back up the stairs, only to find another door.", "Open the new door that you've just found.", "Go back to the room and reconsider your options.");
            }
            break;
        case 11:
            if (choice === 1) {
                storyIndex = 22;
                displayStory("You take the left path and find yourself in a room full of giant, genetically altered babies. One of them picks you up.", "Let the giant baby hold you and see what happens.", "Try to escape the giant baby's grasp.");
            } else {
                storyIndex = 23;
                displayStory("You take the right path and encounter a sea of rats coming out of a sewer pipe.", "Try to fight the sea of rats.", "Run away from the rats as fast as you can.");
            }
            break;
        case 12:
            if (choice === 1) {
                storyIndex = 24;
                displayStory("You enter the hidden door and find yourself in a control room filled with screens showing different parts of the building.", "Study the screens and see if you can find a way out.", "Leave the control room and continue exploring.");
            } else {
                storyIndex = 25;
                displayStory("You stay in the room and the hidden door closes. You hear footsteps approaching.", "Hide quickly and hope you aren't found.", "Stay where you are and confront whoever is coming.");
            }
            break;
        case 13:
            if (choice === 1) {
                storyIndex = 26;
                displayStory("You move the curtain and find a hidden passage leading to another room.", "Enter the hidden passage and see where it leads.", "Stay in the room and look for other clues.");
            } else {
                storyIndex = 27;
                displayStory("You ignore the draft and suddenly the lights go out. You hear a whisper in your ear.", "Listen closely to the whisper.", "Scream for help, hoping someone hears you.");
            }
            break;
        case 14:
            if (choice === 1) {
                storyIndex = 28;
                displayStory("You enter the room and find yourself in a bright room filled with strange machinery. A robot greets you.", "Talk to the friendly robot.", "Ignore the robot and explore the room.");
            } else {
                storyIndex = 29;
                displayStory("You stay where you are and the light fades. You feel a presence behind you.", "Turn around to see what the presence is.", "Stay still and hope it goes away.");
            }
            break;
        case 15:
            if (choice === 1) {
                storyIndex = 30;
                displayStory("You turn around and see a shadowy figure approaching. It stops in front of you and whispers, 'Find the key.'", "Ask the shadowy figure for help finding the key.", "Run away from the creepy shadowy figure.");
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
                displayStory("You ignore the note and continue exploring the library. Suddenly, you feel dizzy and pass out.", "Wake up in a new, unfamiliar room.", "Try to remember what happened.");
            }
            break;
        case 17:
            if (choice === 1) {
                storyIndex = 34;
                displayStory("You explore the new room and find a trapdoor in the floor.", "Open the trapdoor and go down.", "Ignore the trapdoor and keep exploring.");
            } else {
                storyIndex = 35;
                displayStory("You stay where you are and try to get your bearings. The room is spinning less, but you still feel disoriented.", "Wait for the spinning to stop completely.", "Try to walk even though you're dizzy.");
            }
            break;
        case 18:
            if (choice === 1) {
                storyIndex = 36;
                displayStory("You touch the crystal and feel a surge of energy. Suddenly, you're teleported to another room.", "Explore the new room you're in.", "Sit down and recover from the shock.");
            } else {
                storyIndex = 37;
                displayStory("You leave the room and go back to the library. The library seems different now.", "Examine the new books on the shelves.", "Look for other changes in the library.");
            }
            break;
        case 19:
            if (choice === 1) {
                storyIndex = 38;
                displayStory("You enter the hidden room and find a treasure chest.", "Open the treasure chest.", "Leave the hidden room and go back to the library.");
            } else {
                storyIndex = 39;
                displayStory("You stay in the library and a trapdoor suddenly opens beneath you.", "Fall into the trapdoor.", "Try to grab onto something to avoid falling.");
            }
            break;
        case 20:
            if (choice === 1) {
                storyIndex = 40;
                displayStory("You enter the trapdoor and find yourself in a secret tunnel leading to the outside. You see the light of day ahead.", "Run towards the light and freedom.", "Crawl slowly, savoring each moment.");
            } else {
                storyIndex = 41;
                displayStory("You stay in the room and the ducks start singing. You realize you've been caught in a duck-themed trap.", "Sing along with the ducks.", "Try to escape the singing ducks.");
            }
            break;
        case 21:
            if (choice === 1) {
                storyIndex = 42;
                displayStory("You open the new door and find yourself in a room with walls covered in clocks.", "Examine the clocks more closely.", "Leave the room and go back to the staircase.");
            } else {
                storyIndex = 43;
                displayStory("You go back to the room and find it changed. The walls are now covered in mirrors.", "Examine the mirrors closely.", "Leave the room and go back to the staircase.");
            }
            break;
        case 22:
            if (choice === 1) {
                storyIndex = 44;
                displayStory("You let the giant baby hold you, and it seems to calm down. It gently places you on a soft mat.", "Rest on the mat for a while.", "Get up and look for a way out.");
            } else {
                storyIndex = 45;
                displayStory("You try to escape, but the giant baby holds you tightly. You manage to slip out and run away.", "Run as fast as you can.", "Hide and catch your breath.");
            }
            break;
        case 23:
            if (choice === 1) {
                storyIndex = 46;
                displayStory("You try to fight the rats, but there are too many. They overwhelm you and you pass out.", "Wake up in a new, unfamiliar room.", "Try to remember what happened.");
            } else {
                storyIndex = 47;
                displayStory("You run away from the rats and find a ladder leading up.", "Climb the ladder quickly.", "Stay at the bottom and catch your breath.");
            }
            break;
        case 24:
            if (choice === 1) {
                storyIndex = 48;
                displayStory("You study the screens and see a map of the building. You find a possible exit.", "Head towards the exit shown on the map.", "Ignore the map and keep exploring.");
            } else {
                storyIndex = 49;
                displayStory("You leave the control room and enter a hallway lined with portraits.", "Examine the portraits closely.", "Keep walking down the hallway.");
            }
            break;
        case 25:
            if (choice === 1) {
                storyIndex = 50;
                displayStory("You hide quickly and see a shadowy figure enter the room. It looks around and then leaves.", "Come out of hiding and look around.", "Stay hidden for a while longer.");
            } else {
                storyIndex = 51;
                displayStory("You stay where you are and the footsteps get closer. The shadowy figure finds you.", "Confront the figure.", "Run away from the figure.");
            }
            break;
        // Continue adding more cases to extend the game to at least 20 turns
        case 40:
            if (choice === 1) {
                storyIndex = 52;
                displayStory("You run towards the light and finally emerge outside. You are free at last!", "Celebrate your freedom with a happy dance.", "Reflect on your journey with a deep sigh.");
            } else {
                storyIndex = 53;
                displayStory("You crawl slowly, savoring each moment. You finally emerge outside and feel the warmth of the sun on your face.", "Celebrate your freedom with a happy dance.", "Reflect on your journey with a deep sigh.");
            }
            break;
        case 52:
            displayStory("You celebrate your freedom, feeling the weight lift off your shoulders. Congratulations, you have escaped!", "Play again", "Exit");
            break;
        case 53:
            displayStory("You reflect on your journey, thinking about all the strange encounters you had. Congratulations, you have escaped!", "Play again", "Exit");
            break;
        default:
            displayStory("Something went wrong. Try again.", "Play again", "Exit");
            break;
    }
}

document.getElementById('choice1').addEventListener('click', function() {
    makeChoice(1);
});

document.getElementById('choice2').addEventListener('click', function() {
    makeChoice(2);
});

// Initial story display
displayStory("You wake up in a mysterious room with no memory of how you got there. You see a door slightly open and hear faint noises behind you.", "Approach the door cautiously and peek through the crack.", "Scream for help, hoping someone hears you.");
