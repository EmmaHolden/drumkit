// This listens out for any of the following keys being pressed, then calls the relevant function. 

document.addEventListener("keydown", (event) => {
    let key = event.key;
    if (key == "a"){play("boom")} 
    else if (key == "s"){play("clap")} 
    else if (key == "d") {play("hiHat")} 
    else if (key == "f") {play("openHat")}
    else if (key == "g") {play("kick")}
    else if (key == "h") {play("ride")} 
    else if (key == "j") {play("snare")} 
    else if (key == "k") {play("tink")} 
    else if (key == "l") {play("tom")}
})

// This listens out for the drums being clicked and then calls the relevant function just as above. 

document.getElementById("boom").addEventListener("mousedown", () => {play("boom")});
document.getElementById("clap").addEventListener("mousedown", () => {play("clap")});
document.getElementById("hiHat").addEventListener("mousedown", () => {play("hiHat")});
document.getElementById("openHat").addEventListener("mousedown", () => {play("openHat")});
document.getElementById("kick").addEventListener("mousedown", () => {play("kick")});
document.getElementById("ride").addEventListener("mousedown", () => {play("ride")});
document.getElementById("snare").addEventListener("mousedown", () => {play("snare")});
document.getElementById("tink").addEventListener("mousedown", () => {play("tink")});
document.getElementById("tom").addEventListener("mousedown", () => {play("tom")});

// This function makes the sound play and changes the colour.

const play = (soundType) => {
    let sound = new Audio(`sounds/${soundType}.wav`)
    sound.play()
    document.getElementById(soundType).style.backgroundColor = "yellow"
}

// To ensure the colour only flashes and doesn't change, this function returns the colour of the drum to normal when the key or mouse is released. 

const released = () => {
    let drums = document.getElementsByTagName("button")
    for (let i = 0; i < drums.length; i++) {
        drums[i].style.backgroundColor = ""
    }
}

document.addEventListener("keyup", (event) => {released()})
document.addEventListener("mouseup", (event) => {released()})