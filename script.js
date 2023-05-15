// This listens out for any of the following keys being pressed, then calls the relevant function. 

document.addEventListener("keydown", (event) => {
    let key = event.key;
    if (key == "a"){boomFunc()} 
    else if (key == "s"){clapFunc()} 
    else if (key == "d") {hiHatFunc()} 
    else if (key == "f") {openHatFunc()}
    else if (key == "g") {kickFunc()}
    else if (key == "h") {rideFunc()} 
    else if (key == "j") {snareFunc()} 
    else if (key == "k") {tinkFunc()} 
    else if (key == "l") {tomFunc()}
})

// This listens out for the drums being clicked and then calls the relevant function just as above. 

document.getElementById("boom").addEventListener("mousedown", () => {boomFunc()});
document.getElementById("clap").addEventListener("mousedown", () => {clapFunc()});
document.getElementById("hiHat").addEventListener("mousedown", () => {hiHatFunc()});
document.getElementById("openHat").addEventListener("mousedown", () => {openHatFunc()});
document.getElementById("kick").addEventListener("mousedown", () => {kickFunc()});
document.getElementById("ride").addEventListener("mousedown", () => {rideFunc()});
document.getElementById("snare").addEventListener("mousedown", () => {snareFunc()});
document.getElementById("tink").addEventListener("mousedown", () => {tinkFunc()});
document.getElementById("tom").addEventListener("mousedown", () => {tomFunc()});

// These are the functions for each drum that makes the sound play and changes the colour.

const boomFunc = () => {
    let sound = new Audio("sounds/boom.wav")
    sound.play()
    document.getElementById("boom").style.backgroundColor = "yellow"
}

const clapFunc = () => {
    let sound = new Audio("sounds/clap.wav")
    sound.play()
    document.getElementById("clap").style.backgroundColor = "yellow"
}

const hiHatFunc = () => {
    let sound = new Audio("sounds/hihat.wav")
    sound.play()
    document.getElementById("hiHat").style.backgroundColor = "yellow"
}

const openHatFunc = () => {
    let sound = new Audio("sounds/openhat.wav")
    sound.play()
    document.getElementById("openHat").style.backgroundColor = "yellow"
}

const kickFunc = () => {
    let sound = new Audio("sounds/kick.wav")
    sound.play()
    document.getElementById("kick").style.backgroundColor = "yellow"
}

const rideFunc = () => {
    let sound = new Audio("sounds/ride.wav")
    sound.play()
    document.getElementById("ride").style.backgroundColor = "yellow"
}

const snareFunc = () => {
    let sound = new Audio("sounds/snare.wav")
    sound.play()
    document.getElementById("snare").style.backgroundColor = "yellow"
}

const tinkFunc = () => {
    let sound = new Audio("sounds/tink.wav")
    sound.play()
    document.getElementById("tink").style.backgroundColor = "yellow"
}

const tomFunc = () => {
    let sound = new Audio("sounds/tom.wav")
    sound.play()
    document.getElementById("tom").style.backgroundColor = "yellow"
}

const released = () => {
    let drums = document.getElementsByTagName("button")
    for (let i = 0; i < drums.length; i++) {
        drums[i].style.backgroundColor = ""
    }
}

// To ensure the colour only flashes and doesn't change, this calls a function that returns the colour of the drum to normal when the key or mouse is released. 

document.addEventListener("keyup", (event) => {released()})
document.addEventListener("mouseup", (event) => {released()})