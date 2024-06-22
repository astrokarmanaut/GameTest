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
                displayStory("You turn
