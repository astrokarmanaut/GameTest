let storyIndex = 1;
let steps = 0;

function displayStory(storyText, choice1Text, choice2Text) {
    document.getElementById('story').innerText = storyText;
    document.getElementById('choice1').innerText = choice1Text;
    document.getElementById('choice2').innerText = choice2Text;
}

function makeChoice(choice) {
    steps++;
    if (steps >= 20 && storyIndex === 32) {
        if (choice === 1) {
            storyIndex = 34;
            displayStory("You run towards the light and finally emerge outside. You are free at last!", "Celebrate your freedom!", "Reflect on your bizarre journey.");
        } else {
            storyIndex = 35;
            displayStory("You crawl slowly, savoring each moment. You finally emerge outside and feel the warmth of the sun on your face.", "Celebrate your freedom!", "Reflect on your bizarre journey.");
        }
        return;
    }

    switch(storyIndex) {
        case 1:
            if (choice === 1) {
                storyIndex = 2;
                displayStory("You find yourself in a dimly lit room with strange symbols on the walls. A wooden door with peculiar symbols stands ajar to your left, and a staircase descends into darkness to your right.", "Try the wooden door with peculiar symbols painted on it.", "Descend the creaky staircase into the ominous darkness.");
            } else {
                storyIndex = 3;
                displayStory("You scream for help, but the walls seem to swallow your voice. Suddenly, you hear a faint noise behind you.", "Investigate the faint, mysterious noise behind you.", "Stay silent and listen intently.");
            }
            break;
        case 2:
            if (choice === 1) {
                storyIndex = 4;
                displayStory("You step through the door and find yourself in a dusty library filled with ancient books. A fireplace crackles invitingly, and a shadowy figure lurks in the corner.", "Approach the shadowy figure in the corner cautiously.", "Examine the dusty, ancient books on the shelves.");
            } else {
                storyIndex = 5;
                displayStory("You carefully descend the staircase, feeling each step creak under your weight. At the bottom, you find a rusty door and a tunnel leading further into darkness.", "Open the rusty door and peek inside.", "Enter the dark, foreboding tunnel.");
            }
            break;
        case 3:
            if (choice === 1) {
                storyIndex = 6;
                displayStory("You turn around and see a small, robotic toy moving across the floor. It bumps into the wall and a hidden compartment opens, revealing a key.", "Take the mysterious key from the hidden compartment.", "Ignore the robotic toy and its hidden key.");
            } else {
                storyIndex = 7;
                displayStory("You stay silent, hoping not to attract attention. The noise stops, and you notice a faint light coming from a crack in the wall.", "Investigate the faint light coming from the crack.", "Stay perfectly still and observe.");
            }
            break;
        case 4:
            if (choice === 1) {
                storyIndex = 8;
                displayStory("You approach the figure, which turns out to be a mannequin dressed in old clothes. As you inspect it, you find a note in its hand.", "Read the curious note in the mannequin's hand.", "Leave the creepy mannequin and its note alone.");
            } else {
                storyIndex = 9;
                displayStory("You pull a dusty book from the shelf, and the bookshelf slides open to reveal a secret passage.", "Enter the secret passage revealed by the bookshelf.", "Stay in the library and explore further.");
            }
            break;
        case 5:
            if (choice === 1) {
                storyIndex = 10;
                displayStory("You open the door to find a room filled with rubber ducks. One of the ducks quacks at you accusingly.", "Quack back at the accusatory rubber duck.", "Close the door and run away from the quacking chaos.");
            } else {
                storyIndex = 11;
                displayStory("You enter the tunnel, feeling the damp air on your skin. You come across a fork in the path.", "Take the left path with eerie whispers echoing from it.", "Take the right path where faint flickering lights can be seen.");
            }
            break;
        case 6:
            if (choice === 1) {
                storyIndex = 12;
                displayStory("You take the key and notice it has strange markings. You hear a click and a hidden door opens.", "Enter the hidden door that just opened.", "Stay in the room and examine the key closely.");
            } else {
                storyIndex = 13;
                displayStory("You ignore the key and the compartment closes. You notice a draft coming from behind a curtain.", "Move the curtain to discover the source of the draft.", "Ignore the draft and stay put.");
            }
            break;
        case 7:
            if (choice === 1) {
                storyIndex = 14;
                displayStory("You approach the crack and peer through it, seeing a bright room filled with strange machinery.", "Enter the bright room filled with strange machinery.", "Stay where you are and keep observing.");
            } else {
                storyIndex = 15;
                displayStory("You stay where you are and the light fades. You feel a presence behind you.", "Turn around slowly to face the presence.", "Stay perfectly still and hope it goes away.");
            }
            break;
        case 8:
            if (choice === 1) {
                storyIndex = 16;
                displayStory("You read the note: 'The way out is hidden where the light never shines.' You feel a chill run down your spine.", "Look for a dark place as hinted by the note.", "Ignore the eerie note and move on.");
            } else {
                storyIndex = 9;
                displayStory("You leave the mannequin and suddenly, the room starts spinning. You find yourself in a different room filled with mirrors.", "Explore the new room filled with mirrors.", "Close your eyes and wait for the spinning to stop.");
            }
            break;
        case 9:
            if (choice === 1) {
                storyIndex = 18;
                displayStory("You enter the passage and find yourself in a room with a large, glowing crystal in the center.", "Touch the large, glowing crystal.", "Leave the mysterious room immediately.");
            } else {
                storyIndex = 19;
                displayStory("You stay in the library and a secret door suddenly opens, revealing a hidden room.", "Enter the hidden room revealed by the secret door.", "Stay in the library and examine the other books.");
            }
            break;
        case 10:
            if (choice === 1) {
                storyIndex = 20;
                displayStory("You quack back at the duck, and it leads you to a hidden trapdoor.", "Follow the duck and enter the hidden trapdoor.", "Stay in the room of ducks and explore further.");
            } else {
                storyIndex = 21;
                displayStory("You close the door and run back up the stairs, only to find another door.", "Open the new door cautiously.", "Go back to the room of ducks hesitantly.");
            }
            break;
        case 11:
            if (choice === 1) {
                storyIndex = 22;
                displayStory("You take the left path and find yourself in a room full of giant, genetically altered babies. One of them picks you up.", "Let the giant baby hold you gently.", "Try to escape the giant baby's grasp.");
            } else {
                storyIndex = 23;
                displayStory("You take the right path and encounter a sea of rats coming out of a sewer pipe.", "Try to fight the sea of rats bravely.", "Run away from the swarm of rats quickly.");
            }
            break;
        case 12:
            if (choice === 1) {
                storyIndex = 24;
                displayStory("You enter the hidden door and find yourself in a control room filled with screens showing different parts of the building.", "Study the surveillance screens closely.", "Leave the control room and explore further.");
            } else {
                storyIndex = 25;
                displayStory("You stay in the room and the hidden door closes. You hear footsteps approaching
