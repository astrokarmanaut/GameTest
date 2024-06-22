let inventory = [];
let storyIndex = 1;
let turnCount = 0;

function displayStory(story, option1, option2) {
    document.getElementById("story").innerText = story;
    document.getElementById("option1").innerText = option1;
    document.getElementById("option2").innerText = option2;
}

function makeChoice(choice) {
    turnCount++;
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
                displayStory("You try to force the door open but it's too strong. The noise attracts attention and you hear someone coming. You hide behind the bed and wait. After a while, you decide to explore the room again.", "Search the room for a key.", "Check the window.");
            }
            break;
        case 5:
            if (choice === 1) {
                storyIndex = 8;
                inventory.push('metal rod');
                displayStory("You find a metal rod under the bed. You can use it to pry the bars off the window or keep it as a weapon.", "Pry the bars off the window.", "Keep the rod and search for another way.");
            } else {
                storyIndex = 7;
                displayStory("You shout for help but no one hears you. The noise attracts attention and you hear someone coming. You hide behind the bed and wait. After a while, you decide to explore the room again.", "Search the room for a key.", "Check the door.");
            }
            break;
        case 6:
            if (choice === 1) {
                storyIndex = 9;
                displayStory("You quietly go down the stairs and find an exit door. As you open it, you encounter a room full of rubber ducks. What do you do?", "Walk through the ducks.", "Turn back and try another route.");
            } else {
                storyIndex = 10;
                displayStory("You open the door and find a closet. Inside, you find a funny looking hat. You decide to wear it. You hear footsteps approaching and hide in the closet. After a while, you leave the closet and go back to the hallway.", "Take the stairs.", "Try another door.");
            }
            break;
        case 7:
            if (choice === 1) {
                storyIndex = 6;
                displayStory("You find a key hidden under the bed. You use it to unlock the door and escape the room. You step into a dimly lit hallway. You see stairs leading down and another door.", "Take the stairs.", "Open the door.");
            } else {
                storyIndex = 5;
                displayStory("The window is barred, but you see a street outside.", "Search the room for something to remove the bars.", "Shout for help.");
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
                displayStory("You walk through the rubber ducks and suddenly sink into a pit filled with more ducks. You are stuck. A duck quacks at you accusingly. Eventually, you manage to climb out and find another door.", "Take the door.", "Search for another exit.");
            } else {
                storyIndex = 14;
                displayStory("You turn back and try another route. You find a door that leads to a different hallway.", "Enter the hallway.", "Stay and listen for any sounds.");
            }
            break;
        case 10:
            if (choice === 1) {
                storyIndex = 6;
                displayStory("You find a key hidden under the bed. You use it to unlock the door and escape the room. You step into a dimly lit hallway. You see stairs leading down and another door.", "Take the stairs.", "Open the door.");
            } else {
                storyIndex = 4;
                displayStory("The door is locked. You notice a small keyhole.", "Search the room for a key.", "Try to force the door open.");
            }
            break;
        case 11:
            if (choice === 1) {
                storyIndex = 15;
                displayStory("You quietly slip through the gate and find yourself on a busy street. But wait! You realize you're wearing the funny looking hat. People are staring. Do you go back to change?", "Yes, go back.", "No, keep moving.");
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
        case 13:
            if (choice === 1) {
                storyIndex = 18;
                displayStory("You take the door and find a room filled with cheese. You eat some cheese and feel better. You see another door.", "Take the next door.", "Go back to the hallway.");
            } else {
                storyIndex = 14;
                displayStory("You turn back and try another route. You find a door that leads to a different hallway.", "Enter the hallway.", "Stay and listen for any sounds.");
            }
            break;
        case 14:
            if (choice === 1) {
                storyIndex = 19;
                displayStory("You enter the hallway and find a room with a giant, genetically altered baby. The baby grabs you and uses you as a pacifier. You manage to escape its grip and find another door.", "Take the door.", "Go back to the hallway.");
            } else {
                storyIndex = 20;
                displayStory("You stay and listen for any sounds. You hear water dripping and footsteps approaching.", "Hide.", "Run.");
            }
            break;
        case 15:
            if (choice === 1) {
                storyIndex = 21;
                displayStory("You go back and find yourself in the room with the rubber ducks again. A duck quacks at you accusingly. Do you confront the duck?", "Yes, confront the duck.", "No, keep moving.");
            } else {
                storyIndex = 22;
                displayStory("You keep moving and eventually find yourself at a police station. You are safe! Congratulations!", "", "Restart");
            }
            break;
        case 17:
            if (choice === 1) {
                storyIndex = 23;
                displayStory("You enter the sewer pipe and a sea of rats come rushing out, carrying you away. The rats leave you in a room with a rubber duck. The duck quacks at you accusingly. Do you confront the duck?", "Yes, confront the duck.", "No, find another exit.");
            } else {
                storyIndex = 24;
                displayStory("You climb the staircase and find an exit leading to the roof. You see a helicopter landing pad and a rope ladder.", "Take the helicopter.", "Climb down the rope ladder.");
            }
            break;
        case 18:
            if (choice === 1) {
                storyIndex = 25;
                displayStory("You take the next door and find yourself in a room full of balloons. You pop a balloon and a funny hat falls out. Do you wear the hat?", "Yes, wear the hat.", "No, keep moving.");
            } else {
                storyIndex = 14;
                displayStory("You turn back and try another route. You find a door that leads to a different hallway.", "Enter the hallway.", "Stay and listen for any sounds.");
            }
            break;
        case 19:
            if (choice === 1) {
                storyIndex = 26;
                displayStory("You take the door and find yourself in a room filled with mirrors. You see a funny hat on one of the mirrors. Do you wear the hat?", "Yes, wear the hat.", "No, keep moving.");
            } else {
                storyIndex = 14;
                displayStory("You go back to the hallway.", "Enter the hallway.", "Stay and listen for any sounds.");
            }
            break;
        case 20:
            if (choice === 1) {
                storyIndex = 27;
                displayStory("You hide behind a large cabinet. The footsteps pass by and you see a chance to escape.", "Sneak out.", "Wait longer.");
            } else {
                storyIndex = 28;
                displayStory("You run but the footsteps catch up to you. The person turns out to be a clown who hands you a balloon and leaves. Do you keep the balloon?", "Yes, keep the balloon.", "No, release the balloon.");
            }
            break;
        case 21:
            if (choice === 1) {
                storyIndex = 9;
                displayStory("You confront the duck and it quacks loudly, alerting someone. You decide to hide behind a large rubber duck. After a while, you leave the room.", "Take the stairs.", "Open the door.");
            } else {
                storyIndex = 13;
                displayStory("You find another door and enter a room filled with cheese. You eat some cheese and feel better. You see another door.", "Take the next door.", "Go back to the hallway.");
            }
            break;
        case 23:
            if (choice === 1) {
                storyIndex = 29;
                displayStory("You confront the duck and it quacks loudly, alerting someone. You decide to hide behind a large rubber duck. After a while, you leave the room.", "Take the stairs.", "Open the door.");
            } else {
                storyIndex = 17;
                displayStory("You find another exit and climb up a staircase.", "Enter the basement.", "Climb the staircase.");
            }
            break;
        case 24:
            if (choice === 1) {
                storyIndex = 30;
                displayStory("You take the helicopter and fly to safety. But you realize you're wearing a funny hat. Do you remove the hat?", "Yes, remove the hat.", "No, keep the hat.");
            } else {
                storyIndex = 31;
                displayStory("You climb down the rope ladder and find yourself in a room filled with more rubber ducks. A duck quacks at you accusingly. Do you confront the duck?", "Yes, confront the duck.", "No, find another exit.");
            }
            break;
        case 25:
            if (choice === 1) {
                storyIndex = 32;
                displayStory("You wear the hat and feel a bit silly. You find another door and enter a room filled with mirrors. You see another hat on one of the mirrors. Do you wear the second hat?", "Yes, wear the second hat.", "No, keep moving.");
            } else {
                storyIndex = 26;
                displayStory("You find yourself in a room filled with mirrors. You see a funny hat on one of the mirrors. Do you wear the hat?", "Yes, wear the hat.", "No, keep moving.");
            }
            break;
        case 26:
            if (choice === 1) {
                storyIndex = 33;
                displayStory("You wear the hat and feel a bit silly. You find another door and enter a room filled with more mirrors. Each mirror shows a different hat. Do you try on another hat?", "Yes, try another hat.", "No, keep moving.");
            } else {
                storyIndex = 14;
                displayStory("You keep moving and find a door leading to another hallway.", "Enter the hallway.", "Stay and listen for any sounds.");
            }
            break;
        case 27:
            if (choice === 1) {
                storyIndex = 34;
                displayStory("You sneak out and find an exit door leading to the street. Congratulations, you are free!", "", "Restart");
            } else {
                storyIndex = 35;
                displayStory("You wait longer but the footsteps return. This time, it's a clown who hands you a balloon and leaves. Do you keep the balloon?", "Yes, keep the balloon.", "No, release the balloon.");
            }
            break;
        case 28:
            if (choice === 1) {
                storyIndex = 36;
                displayStory("You keep the balloon and it lifts you up, revealing a hidden passage in the ceiling. You climb up and find another exit.", "Take the exit.", "Explore the hidden passage.");
            } else {
                storyIndex = 37;
                displayStory("You release the balloon and it pops, startling you. You find another door and enter a room filled with cheese. You eat some cheese and feel better. You see another door.", "Take the next door.", "Go back to the hallway.");
            }
            break;
        case 29:
            if (choice === 1) {
                storyIndex = 34;
                displayStory("You sneak out and find an exit door leading to the street. Congratulations, you are free!", "", "Restart");
            } else {
                storyIndex = 35;
                displayStory("You wait longer but the footsteps return. This time, it's a clown who hands you a balloon and leaves. Do you keep the balloon?", "Yes, keep the balloon.", "No, release the balloon.");
            }
            break;
        case 30:
            if (choice === 1) {
                storyIndex = 34;
                displayStory("You remove the hat and feel more confident. Congratulations, you are free!", "", "Restart");
            } else {
                storyIndex = 34;
                displayStory("You keep the hat and feel a bit silly, but you are free! Congratulations!", "", "Restart");
            }
            break;
        case 31:
            if (choice === 1) {
                storyIndex = 29;
                displayStory("You confront the duck and it quacks loudly, alerting someone. You decide to hide behind a large rubber duck. After a while, you leave the room.", "Take the stairs.", "Open the door.");
            } else {
                storyIndex = 14;
                displayStory("You find another exit and climb up a staircase.", "Enter the basement.", "Climb the staircase.");
            }
            break;
        case 32:
            if (choice === 1) {
                storyIndex = 38;
                displayStory("You wear the second hat and feel even sillier. You find another door and enter a room filled with mirrors. Each mirror shows a different hat. Do you try on another hat?", "Yes, try another hat.", "No, keep moving.");
            } else {
                storyIndex = 26;
                displayStory("You find yourself in a room filled with mirrors. You see a funny hat on one of the mirrors. Do you wear the hat?", "Yes, wear the hat.", "No, keep moving.");
            }
            break;
        case 33:
            if (choice === 1) {
                storyIndex = 39;
                displayStory("You try another hat and feel a bit silly. You find another door and enter a room filled with balloons. You pop a balloon and another funny hat falls out. Do you wear the hat?", "Yes, wear the hat.", "No, keep moving.");
            } else {
                storyIndex = 26;
                displayStory("You keep moving and find a door leading to another hallway.", "Enter the hallway.", "Stay and listen for any sounds.");
            }
            break;
        case 34:
            storyIndex = 1;
            displayStory("You wake up in a dark room with no memory of how you got there. You see a door and a small window.", "Explore the room.", "Call for help.");
            break;
        case 35:
            if (choice === 1) {
                storyIndex = 36;
                displayStory("You keep the balloon and it lifts you up, revealing a hidden passage in the ceiling. You climb up and find another exit.", "Take the exit.", "Explore the hidden passage.");
            } else {
                storyIndex = 37;
                displayStory("You release the balloon and it pops, startling you. You find another door and enter a room filled with cheese. You eat some cheese and feel better. You see another door.", "Take the next door.", "Go back to the hallway.");
            }
            break;
        case 36:
            if (choice === 1) {
                storyIndex = 34;
                displayStory("You take the exit and find yourself on a busy street. Congratulations, you are free!", "", "Restart");
            } else {
                storyIndex = 40;
                displayStory("You explore the hidden passage and find a secret room filled with treasures. You are rich!", "", "Restart");
            }
            break;
        case 37:
            if (choice === 1) {
                storyIndex = 18;
                displayStory("You take the next door and find yourself in a room full of balloons. You pop a balloon and a funny hat falls out. Do you wear the hat?", "Yes, wear the hat.", "No, keep moving.");
            } else {
                storyIndex = 14;
                displayStory("You turn back and try another route. You find a door that leads to a different hallway.", "Enter the hallway.", "Stay and listen for any sounds.");
            }
            break;
        case 38:
            if (choice === 1) {
                storyIndex = 39;
                displayStory("You try another hat and feel a bit silly. You find another door and enter a room filled with balloons. You pop a balloon and another funny hat falls out. Do you wear the hat?", "Yes, wear the hat.", "No, keep moving.");
            } else {
                storyIndex = 26;
                displayStory("You keep moving and find a door leading to another hallway.", "Enter the hallway.", "Stay and listen for any sounds.");
            }
            break;
        case 39:
            if (choice === 1) {
                storyIndex = 40;
                displayStory("You wear the hat and feel very silly. You find another door and enter a room filled with more rubber ducks. A duck quacks at you accusingly. Do you confront the duck?", "Yes, confront the duck.", "No, find another exit.");
            } else {
                storyIndex = 26;
                displayStory("You keep moving and find a door leading to another hallway.", "Enter the hallway.", "Stay and listen for any sounds.");
            }
            break;
        case 40:
            storyIndex = 1;
            displayStory("You wake up in a dark room with no memory of how you got there. You see a door and a small window.", "Explore the room.", "Call for help.");
            break;
        default:
            storyIndex = 1;
            displayStory("You wake up in a dark room with no memory of how you got there. You see a door and a small window.", "Explore the room.", "Call for help.");
            break;
    }
}

displayStory("You wake up in a dark room with no memory of how you got there. You see a door and a small window.", "Explore the room.", "Call for help.");
