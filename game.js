let inventory = [];
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
                displayStory("You decide to explore the room. You see a door and a window.", "Check the door.", "Check the window.");
            } else {
                storyIndex = 3;
                displayStory("You call for help, but no one answers. You decide to explore the room. You see a door and a window.", "Check the door.", "Check the window.");
            }
            break;
        case 2:
            if (choice === 1) {
                storyIndex = 4;
                displayStory("The door is locked. You notice a small keyhole.", "Search the room for a key.", "Try to force the door open.");
            } else {
                storyIndex = 5;
                displayStory("The window is barred, but you see a street outside.", "Search the room for something to remove the bars.", "Shout for help.");
            }
            break;
        case 3:
            if (choice === 1) {
                storyIndex = 4;
                displayStory("The door is locked. You notice a small keyhole.", "Search the room for a key.", "Try to force the door open.");
            } else {
                storyIndex = 5;
                displayStory("The window is barred, but you see a street outside.", "Search the room for something to remove the bars.", "Shout for help.");
            }
            break;
        case 4:
            if (choice === 1) {
                storyIndex = 6;
                inventory.push('key');
                displayStory("You find a key hidden under the bed. You use it to unlock the door and escape the room. You step into a dimly lit hallway. You see stairs leading down and another door.", "Take the stairs.", "Open the door.");
            } else {
                storyIndex = 7;
                displayStory("You try to force the door open but it's too strong. The noise attracts attention and you hear someone coming. Game over!", "", "Restart");
            }
            break;
        case 5:
            if (choice === 1) {
                storyIndex = 8;
                inventory.push('metal rod');
                displayStory("You find a metal rod under the bed. You can use it to pry the bars off the window or keep it as a weapon.", "Pry the bars off the window.", "Keep the rod and search for another way.");
            } else {
                storyIndex = 7;
                displayStory("You shout for help but no one hears you. The noise attracts attention and you hear someone coming. Game over!", "", "Restart");
            }
            break;
        case 6:
            if (choice === 1) {
                storyIndex = 9;
                displayStory("You quietly go down the stairs and find an exit door. As you open it, you encounter a room full of rubber ducks. What do you do?", "Walk through the ducks.", "Turn back and try another route.");
            } else {
                storyIndex = 10;
                displayStory("You open the door and find a closet. Suddenly, you hear footsteps approaching. Game over!", "", "Restart");
            }
            break;
        case 8:
            if (choice === 1) {
                storyIndex = 11;
                displayStory("Using the rod, you pry the bars off the window and escape. You find yourself in an alley. You see a gate leading to the street and a fire escape ladder.", "Take the gate.", "Climb the fire escape ladder.");
            } else {
                storyIndex = 12;
                displayStory("You keep the rod and search for another way. You find a door leading to the basement.", "Enter the basement.", "Go back to the window.");
            }
            break;
        case 9:
            if (choice === 1) {
                storyIndex = 13;
                displayStory("You walk through the rubber ducks and suddenly sink into a pit filled with more ducks. You are stuck. Game over!", "", "Restart");
            } else {
                storyIndex = 14;
                displayStory("You turn back and try another route. You find a door that leads to a different hallway.", "Enter the hallway.", "Stay and listen for any sounds.");
            }
            break;
        case 11:
            if (choice === 1) {
                storyIndex = 15;
                displayStory("You quietly slip through the gate and find yourself on a busy street. You manage to escape to safety. Congratulations, you are free!", "", "Restart");
            } else {
                storyIndex = 16;
                displayStory("You climb the fire escape ladder but it leads to a dead end. Suddenly, you hear someone shouting from below. Game over!", "", "Restart");
            }
            break;
        case 12:
            if (choice === 1) {
                storyIndex = 17;
                displayStory("You enter the basement and find a maze of pipes and tunnels. You see a large sewer pipe and a staircase leading up.", "Enter the sewer pipe.", "Climb the staircase.");
            } else {
                storyIndex = 11;
                displayStory("You decide to go back to the window.", "Take the gate.", "Climb the fire escape ladder.");
            }
            break;
        case 14:
            if (choice === 1) {
                storyIndex = 18;
                displayStory("You enter the hallway and find a room with a giant, genetically altered baby. The baby grabs you and uses you as a pacifier. Game over!", "", "Restart");
            } else {
                storyIndex = 19;
                displayStory("You stay and listen for any sounds. You hear water dripping and footsteps approaching.", "Hide.", "Run.");
            }
            break;
        case 17:
            if (choice === 1) {
                storyIndex = 20;
                displayStory("You enter the sewer pipe and a sea of rats come rushing out, carrying you away. Game over!", "", "Restart");
            } else {
                storyIndex = 21;
                displayStory("You climb the staircase and find an exit leading to the roof. You see a helicopter landing pad and a rope ladder.", "Take the helicopter.", "Climb down the rope ladder.");
            }
            break;
        case 19:
            if (choice === 1) {
                storyIndex = 22;
                displayStory("You hide behind a large cabinet. The footsteps pass by and you see a chance to escape.", "Sneak out.", "Wait longer.");
            } else {
                storyIndex = 23;
                displayStory("You run but trip over a rubber duck. Game over!", "", "Restart");
            }
            break;
        case 21:
            if (choice === 1) {
                storyIndex = 24;
                displayStory("You take the helicopter and fly to safety. Congratulations, you are free!", "", "Restart");
            } else {
                storyIndex = 25;
                displayStory("You climb down the rope ladder and find yourself in a garden. You see a gate and a tunnel.", "Take the gate.", "Enter the tunnel.");
            }
            break;
        case 22:
            if (choice === 1) {
                storyIndex = 24;
                displayStory("You sneak out and find an exit door. You manage to escape to safety. Congratulations, you are free!", "", "Restart");
            } else {
                storyIndex = 26;
                displayStory("You wait longer and someone finds you. Game over!", "", "Restart");
            }
            break;
        case 1:
        case 7:
        case 10:
        case 13:
        case 16:
        case 18:
        case 20:
        case 23:
        case 26:
            if (choice === 2) {
                location.reload();
            }
            break;
    }
}

displayStory("You wake up in a dark, unfamiliar room. Your head hurts and you realize you've been kidnapped. You look around the room. It's dimly lit and you see a door and a window.", "Explore the room.", "Call for help.");
