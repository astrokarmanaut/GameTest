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
                displayStory("You find yourself in a dimly lit room with strange symbols on the walls. A wooden door with peculiar symbols stands ajar to your left, and a staircase descends into darkness to your right.", "Try the wooden door adorned with strange, glowing symbols.", "Descend the creaky staircase into the foreboding darkness.");
            } else {
                storyIndex = 3;
                displayStory("You scream for help, but the walls seem to swallow your voice. Suddenly, you hear a faint noise behind you.", "Turn around and investigate the source of the faint, mysterious noise.", "Stay silent and listen carefully for any further sounds.");
            }
            break;
        case 2:
            if (choice === 1) {
                storyIndex = 4;
                displayStory("You step through the door and find yourself in a dusty library filled with ancient books. A fireplace crackles invitingly, and a shadowy figure lurks in the corner.", "Cautiously approach the shadowy figure lurking in the corner.", "Examine the dusty, ancient books lining the shelves.");
            } else {
                storyIndex = 5;
                displayStory("You carefully descend the staircase, feeling each step creak under your weight. At the bottom, you find a rusty door and a tunnel leading further into darkness.", "Gingerly open the rusty, creaking door.", "Bravely enter the tunnel that leads into the unknown darkness.");
            }
            break;
        case 3:
            if (choice === 1) {
                storyIndex = 6;
                displayStory("You turn around and see a small, robotic toy moving across the floor. It bumps into the wall and a hidden compartment opens, revealing a key.", "Pick up the key with strange, intricate markings.", "Ignore the robotic toy and its mysterious key.");
            } else {
                storyIndex = 7;
                displayStory("You stay silent, hoping not to attract attention. The noise stops, and you notice a faint light coming from a crack in the wall.", "Investigate the faint, flickering light seeping through the crack.", "Stay perfectly still, hoping to remain unnoticed.");
            }
            break;
        case 4:
            if (choice === 1) {
                storyIndex = 8;
                displayStory("You approach the figure, which turns out to be a mannequin dressed in old clothes. As you inspect it, you find a note in its hand.", "Read the curious note clutched in the mannequin's hand.", "Leave the eerie mannequin alone and step back.");
            } else {
                storyIndex = 9;
                displayStory("You pull a dusty book from the shelf, and the bookshelf slides open to reveal a secret passage.", "Enter the hidden passage behind the sliding bookshelf.", "Stay in the library and continue examining the books.");
            }
            break;
        case 5:
            if (choice === 1) {
                storyIndex = 10;
                displayStory("You open the door to find a room filled with rubber ducks. One of the ducks quacks at you accusingly.", "Quack back at the accusatory rubber duck.", "Close the door quickly and retreat.");
            } else {
                storyIndex = 11;
                displayStory("You enter the tunnel, feeling the damp air on your skin. You come across a fork in the path.", "Take the left path with the eerie whispers echoing through it.", "Take the right path with the faint glimmer of light in the distance.");
            }
            break;
        case 6:
            if (choice === 1) {
                storyIndex = 12;
                displayStory("You take the key and notice it has strange markings. You hear a click and a hidden door opens.", "Enter the hidden door that just unlocked.", "Stay in the room and look around for more clues.");
            } else {
                storyIndex = 13;
                displayStory("You ignore the key and the compartment closes. You notice a draft coming from behind a curtain.", "Move the mysterious, heavy curtain aside.", "Ignore the draft and stay where you are.");
            }
            break;
        case 7:
            if (choice === 1) {
                storyIndex = 14;
                displayStory("You approach the crack and peer through it, seeing a bright room filled with strange machinery.", "Squeeze through the crack into the bright, peculiar room.", "Stay in your current position, keeping a low profile.");
            } else {
                storyIndex = 15;
                displayStory("You stay where you are and the light fades. You feel a presence behind you.", "Turn around slowly to face the presence behind you.", "Stay perfectly still, hoping it goes away.");
            }
            break;
        case 8:
            if (choice === 1) {
                storyIndex = 16;
                displayStory("You read the note: 'The way out is hidden where the light never shines.' You feel a chill run down your spine.", "Search for a place where light never reaches.", "Ignore the eerie note and look for another clue.");
            } else {
                storyIndex = 17;
                displayStory("You leave the mannequin and suddenly, the room starts spinning. You find yourself in a different room filled with mirrors.", "Explore the room full of confusing, reflective mirrors.", "Close your eyes and wait for the dizziness to pass.");
            }
            break;
        case 9:
            if (choice === 1) {
                storyIndex = 18;
                displayStory("You enter the passage and find yourself in a room with a large, glowing crystal in the center.", "Touch the mesmerizing, glowing crystal.", "Leave the room quickly before something strange happens.");
            } else {
                storyIndex = 19;
                displayStory("You stay in the library and a secret door suddenly opens, revealing a hidden room.", "Enter the newly revealed hidden room.", "Stay in the library and continue exploring.");
            }
            break;
        case 10:
            if (choice === 1) {
                storyIndex = 20;
                displayStory("You quack back at the duck, and it leads you to a hidden trapdoor.", "Enter the hidden trapdoor and see where it leads.", "Stay in the room of rubber ducks, feeling silly.");
            } else {
                storyIndex = 21;
                displayStory("You close the door and run back up the stairs, only to find another door.", "Open the mysterious new door at the top of the stairs.", "Go back to the room of rubber ducks and reconsider.");
            }
            break;
        case 11:
            if (choice === 1) {
                storyIndex = 22;
                displayStory("You take the left path and find yourself in a room full of giant, genetically altered babies. One of them picks you up.", "Let the giant baby hold you and see what happens.", "Try to escape the grasp of the giant baby.");
            } else {
                storyIndex = 23;
                displayStory("You take the right path and encounter a sea of rats coming out of a sewer pipe.", "Attempt to fight off the swarm of rats.", "Run away from the terrifying sea of rats.");
            }
            break;
        case 12:
            if (choice === 1) {
                storyIndex = 24;
                displayStory("You enter the hidden door and find yourself in a control room filled with screens showing different parts of the building.", "Study the surveillance screens carefully.", "Leave the control room and continue exploring.");
            } else {
                storyIndex = 25;
                displayStory("You stay in the room and the hidden door closes. You hear footsteps approaching.", "Hide quickly before you are discovered.", "Stay where you are and hope for the best.");
            }
            break;
        case 13:
            if (choice === 1) {
                storyIndex = 26;
                displayStory("You move the curtain and find a hidden passage leading to another room.", "Enter the hidden passage behind the curtain.", "Stay in the room and look for other clues.");
            } else {
                storyIndex = 27;
                displayStory("You ignore the draft and suddenly the lights go out. You hear a whisper in your ear.", "Listen closely to the eerie whisper.", "Scream for help, hoping someone hears you.");
            }
            break;
        case 14:
            if (choice === 1) {
                storyIndex = 28;
                displayStory("You enter the crack and find yourself in a bright room filled with strange machinery. A robot greets you.", "Talk to the friendly robot and see what it wants.", "Ignore the robot and explore the room.");
            } else {
                storyIndex = 15;
                displayStory("You stay in your current position, keeping a low profile. The light fades, and you feel a presence behind you.", "Turn around slowly to face the presence behind you.", "Stay perfectly still, hoping it goes away.");
            }
            break;
        case 15:
            if (choice === 1) {
                storyIndex = 30;
                displayStory("You turn around and see a shadowy figure approaching. It stops in front of you and whispers, 'Find the key.'", "Ask the shadowy figure for help finding the key.", "Run away from the creepy shadowy figure.");
            } else {
                storyIndex = 31;
                displayStory("You stay still and the presence disappears. You hear a door creak open.", "Investigate the mysterious door that just opened.", "Stay where you are and wait for something else to happen.");
            }
            break;
        case 16:
            if (choice === 1) {
                storyIndex = 32;
                displayStory("You search for a place where light never reaches and find a hidden trapdoor.", "Enter the hidden trapdoor and see where it leads.", "Look around for any other dark places.");
            } else {
                storyIndex = 33;
                displayStory("You ignore the note and suddenly, the room starts spinning. You find yourself back at the start.", "Explore the mysterious room again.", "Call for help and hope someone hears you.");
            }
            break;
        case 17:
            if (choice === 1) {
                storyIndex = 34;
                displayStory("You explore the room full of confusing, reflective mirrors and find a hidden passage behind one of them.", "Enter the hidden passage behind the mirror.", "Stay in the mirror room and look for other clues.");
            } else {
                storyIndex = 35;
                displayStory("You close your eyes and wait for the dizziness to pass. When you open them, you find yourself in a different room.", "Explore the new room you find yourself in.", "Stay still and try to understand what just happened.");
            }
            break;
        case 18:
            if (choice === 1) {
                storyIndex = 36;
                displayStory("You touch the mesmerizing, glowing crystal and feel a strange energy coursing through you.", "Embrace the strange energy and see where it takes you.", "Pull your hand away and leave the room quickly.");
            } else {
                storyIndex = 37;
                displayStory("You leave the room quickly and find yourself in a dark hallway.", "Walk down the dark hallway and see where it leads.", "Stay in the hallway and look for clues.");
            }
            break;
        case 19:
            if (choice === 1) {
                storyIndex = 38;
                displayStory("You enter the newly revealed hidden room and find a treasure chest.", "Open the treasure chest and see what's inside.", "Leave the hidden room and continue exploring.");
            } else {
                storyIndex = 39;
                displayStory("You stay in the library and continue exploring the dusty, ancient books.", "Read one of the dusty, ancient books.", "Look for other hidden passages in the library.");
            }
            break;
        case 20:
            if (choice === 1) {
                storyIndex = 40;
                displayStory("You enter the hidden trapdoor and find yourself in a secret tunnel leading to the outside. You see the light of day ahead.", "Run towards the light and freedom.", "Crawl slowly and cautiously towards the light.");
            } else {
                storyIndex = 41;
                displayStory("You stay in the room of rubber ducks, feeling silly. Suddenly, the ducks start singing.", "Sing along with the quirky rubber ducks.", "Try to escape the room of singing rubber ducks.");
            }
            break;
        case 21:
            if (choice === 1) {
                storyIndex = 42;
                displayStory("You open the mysterious new door at the top of the stairs and find a room filled with magical artifacts.", "Examine the magical artifacts closely.", "Close the door and look for another way.");
            } else {
                storyIndex = 43;
                displayStory("You go back to the room of rubber ducks and reconsider your options.", "Quack back at the ducks again.", "Sit quietly and think about your next move.");
            }
            break;
        case 22:
            if (choice === 1) {
                storyIndex = 44;
                displayStory("You let the giant baby hold you and it starts singing a lullaby.", "Listen to the lullaby and see what happens.", "Try to escape the giant baby's grasp.");
            } else {
                storyIndex = 45;
                displayStory("You try to escape the grasp of the giant baby, but it holds on tight.", "Keep struggling to escape.", "Stay still and see if it lets you go.");
            }
            break;
        case 23:
            if (choice === 1) {
                storyIndex = 46;
                displayStory("You attempt to fight off the swarm of rats, but there are too many.", "Keep fighting the rats.", "Run away as fast as you can.");
            } else {
                storyIndex = 47;
                displayStory("You run away from the terrifying sea of rats and find a hidden door.", "Open the hidden door and see where it leads.", "Keep running and look for another way out.");
            }
            break;
        case 24:
            if (choice === 1) {
                storyIndex = 48;
                displayStory("You study the surveillance screens carefully and notice a pattern.", "Follow the pattern to find a way out.", "Ignore the pattern and continue exploring.");
            } else {
                storyIndex = 49;
                displayStory("You leave the control room and find yourself in a maze of hallways.", "Navigate the maze of hallways.", "Stay in the hallway and look for clues.");
            }
            break;
        case 25:
            if (choice === 1) {
                storyIndex = 50;
                displayStory("You hide quickly and the footsteps pass by. You find a hidden passage.", "Enter the hidden passage and see where it leads.", "Stay hidden and wait for the footsteps to fade.");
            } else {
                storyIndex = 51;
                displayStory("You stay where you are and the footsteps get closer.", "Prepare to confront whoever is coming.", "Hide quickly before you are discovered.");
            }
            break;
        case 26:
            if (choice === 1) {
                storyIndex = 52;
                displayStory("You enter the hidden passage behind the curtain and find a hidden room.", "Explore the hidden room and look for clues.", "Stay in the passage and listen for any sounds.");
            } else {
                storyIndex = 53;
                displayStory("You stay in the room and look for other clues. Suddenly, the room starts spinning.", "Close your eyes and wait for the dizziness to pass.", "Try to keep your balance and look for a way out.");
            }
            break;
        case 27:
            if (choice === 1) {
                storyIndex = 54;
                displayStory("You listen closely to the eerie whisper and it guides you to a hidden door.", "Open the hidden door and see where it leads.", "Ignore the whisper and look for another way out.");
            } else {
                storyIndex = 55;
                displayStory("You scream for help, hoping someone hears you. The whisper gets louder.", "Listen to the louder whisper.", "Keep screaming for help.");
            }
            break;
        case 28:
            if (choice === 1) {
                storyIndex = 56;
                displayStory("You talk to the friendly robot and it gives you a clue about how to escape.", "Follow the robot's clue.", "Ignore the clue and explore the room.");
            } else {
                storyIndex = 57;
                displayStory("You ignore the robot and explore the room, finding a hidden passage.", "Enter the hidden passage and see where it leads.", "Stay in the room and continue exploring.");
            }
            break;
        case 30:
            if (choice === 1) {
                storyIndex = 58;
                displayStory("You ask the shadowy figure for help finding the key, and it gives you a mysterious riddle.", "Solve the mysterious riddle.", "Ignore the riddle and look for the key yourself.");
            } else {
                storyIndex = 59;
                displayStory("You run away from the creepy shadowy figure and find a hidden door.", "Open the hidden door and see where it leads.", "Keep running and look for another way out.");
            }
            break;
        case 32:
            if (choice === 1) {
                storyIndex = 60;
                displayStory("You enter the hidden trapdoor and find yourself in a secret tunnel leading to the outside. You see the light of day ahead.", "Run towards the light and freedom.", "Crawl slowly and cautiously towards the light.");
            } else {
                storyIndex = 61;
                displayStory("You look around for any other dark places and find another hidden passage.", "Enter the hidden passage and see where it leads.", "Stay in the room and look for other clues.");
            }
            break;
        case 60:
            if (choice === 1) {
                storyIndex = 62;
                displayStory("You run towards the light and finally emerge outside. You are free at last!", "Celebrate your freedom!", "Reflect on your bizarre journey.");
            } else {
                storyIndex = 63;
                displayStory("You crawl slowly, savoring each moment. You finally emerge outside and feel the warmth of the sun on your face.", "Celebrate your freedom!", "Reflect on your bizarre journey.");
            }
            break;
        case 62:
            displayStory("You celebrate your freedom, feeling the weight lift off your shoulders. Congratulations, you have escaped!", "Play again", "Exit");
            break;
        case 63:
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
displayStory("You wake up in a mysterious room with no memory of how you got there. You see a door slightly open and hear faint noises behind you.", "Approach the door cautiously.", "Scream for help, hoping someone hears you.");
