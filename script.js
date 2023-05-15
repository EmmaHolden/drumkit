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

document.addEventListener("keyup", (event) => {
    let drums = document.getElementsByTagName("button")
    for (let i = 0; i < drums.length; i++) {
        drums[i].style.backgroundColor = ""
    }
})

document.getElementById("boom").addEventListener("mousedown", () => {boomFunc()});
document.getElementById("clap").addEventListener("mousedown", () => {clapFunc()});
document.getElementById("hiHat").addEventListener("mousedown", () => {hiHatFunc()});
document.getElementById("openHat").addEventListener("mousedown", () => {openHatFunc()});
document.getElementById("kick").addEventListener("mousedown", () => {kickFunc()});
document.getElementById("ride").addEventListener("mousedown", () => {rideFunc()});
document.getElementById("snare").addEventListener("mousedown", () => {snareFunc()});
document.getElementById("tink").addEventListener("mousedown", () => {tinkFunc()});
document.getElementById("tom").addEventListener("mousedown", () => {tomFunc()});

document.addEventListener("mouseup", (event) => {
    let drums = document.getElementsByTagName("button")
    for (let i = 0; i < drums.length; i++) {
        drums[i].style.backgroundColor = ""
    }
})

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
