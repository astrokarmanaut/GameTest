let storyPart1 = "You wake up in a dark, unfamiliar room. Your head hurts and you realize you've been kidnapped. You look around the room. It's dimly lit and you see a door and a window.";
let option1a = "Check the door.";
let option1b = "Check the window.";
let storyIndex = 1;

function displayStory(story, option1, option2) {
    document.getElementById("story").innerText = story;
    document.getElementById("option1").innerText = option1;
    document.getElementById("option2").innerText = option2;
}

function makeChoice(choice) {
    switch (storyIndex) {
        case 1:
            if (choice === 1) {
                storyIndex = 2;
                displayStory("The door is locked. You notice a small keyhole.", "Search the room for a key.", "Try to force the door open.");
            } else {
                storyIndex = 3;
                displayStory("The window is barred, but you can see the street outside.", "Search the room for something to remove the bars.", "Shout for help.");
            }
            break;
        case 2:
            if (choice === 1) {
                storyIndex = 4;
                displayStory("You find a key hidden under the bed. You use it to unlock the door and escape the room. You step into a dimly lit hallway. You see stairs leading down and another door.", "Take the stairs.", "Open the door.");
            } else {
                storyIndex = 5;
                displayStory("You try to force the door open but it's too strong. The noise attracts attention and you hear someone coming. Game over!", "", "Restart");
            }
            break;
        case 3:
            if (choice === 1) {
                storyIndex = 6;
                displayStory("You find a metal rod under the bed. Using it, you manage to pry the bars off the window and escape. You climb out the window and find yourself in an alley. You see a gate leading to the street and a fire escape ladder.", "Take the gate.", "Climb the fire escape ladder.");
            } else {
                storyIndex = 7;
                displayStory("You shout for help but no one hears you. The noise attracts attention and you hear someone coming. Game over!", "", "Restart");
            }
            break;
        case 4:
            if (choice === 1) {
                storyIndex = 8;
                displayStory("You quietly go down the stairs and find an exit door. You manage to escape the building and run to freedom. Congratulations, you are free!", "", "Restart");
            } else {
                storyIndex = 9;
                displayStory("You open the door and find a closet. Suddenly, you hear footsteps approaching. Game over!", "", "Restart");
            }
            break;
        case 6:
            if (choice === 1) {
                storyIndex = 10;
                displayStory("You quietly slip through the gate and find yourself on a busy street. You manage to escape to safety. Congratulations, you are free!", "", "Restart");
            } else {
                storyIndex = 11;
                displayStory("You climb the fire escape ladder but it leads to a dead end. Suddenly, you hear someone shouting from below. Game over!", "", "Restart");
            }
            break;
        case 5:
        case 7:
        case 9:
        case 11:
        case 10:
        case 8:
            if (choice === 2) {
                location.reload();
            }
            break;
    }
}

displayStory(storyPart1, option1a, option1b);
