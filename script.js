document.addEventListener("keydown", (event) => {
    let key = event.key;
    if (key == "a"){
        let sound = new Audio("sounds/boom.wav")
        sound.play()
        clicked(document.getElementById("boom"))
    } else if (key == "s"){
        let sound = new Audio("sounds/clap.wav")
        sound.play()
        clicked(document.getElementById("clap"))
    } else if (key == "d") {
        let sound = new Audio("sounds/hihat.wav")
        sound.play()
        clicked(document.getElementById("hiHat"))
    } else if (key == "f") {
        let sound = new Audio("sounds/openhat.wav")
        sound.play()
        clicked(document.getElementById("openHat"))
    } else if (key == "g") {
        let sound = new Audio("sounds/kick.wav")
        sound.play()
        clicked(document.getElementById("kick"))
    } else if (key == "h") {
        let sound = new Audio("sounds/ride.wav")
        sound.play()
        clicked(document.getElementById("ride"))
    } else if (key == "j") {
        let sound = new Audio("sounds/snare.wav")
        sound.play()
        clicked(document.getElementById("snare"))
    } else if (key == "k") {
        let sound = new Audio("sounds/tink.wav")
        sound.play()
        clicked(document.getElementById("tink"))
    } else if (key == "l") {
        let sound = new Audio("sounds/tom.wav")
        sound.play()
        clicked(document.getElementById("tom"))
    }
})

document.addEventListener("keyup", (event) => {
    let drums = document.getElementsByTagName("button")
    for (let i = 0; i < drums.length; i++) {
        drums[i].style.backgroundColor = ""
    }
})

document.getElementById("boom").addEventListener("mousedown", () => {
    let sound = new Audio("sounds/boom.wav")
    sound.play()
});

document.getElementById("clap").addEventListener("mousedown", () => {
    let sound = new Audio("sounds/clap.wav")
    sound.play()
});

document.getElementById("hiHat").addEventListener("mousedown", () => {
    let sound = new Audio("sounds/hihat.wav")
    sound.play()
});

document.getElementById("openHat").addEventListener("mousedown", () => {
    let sound = new Audio("sounds/openhat.wav")
    sound.play()
});

document.getElementById("kick").addEventListener("mousedown", () => {
    let sound = new Audio("sounds/kick.wav")
    sound.play()
});

document.getElementById("ride").addEventListener("mousedown", () => {
    let sound = new Audio("sounds/ride.wav")
    sound.play()
});

document.getElementById("snare").addEventListener("mousedown", () => {
    let sound = new Audio("sounds/snare.wav")
    sound.play()
});

document.getElementById("tink").addEventListener("mousedown", () => {
    let sound = new Audio("sounds/tink.wav")
    sound.play()
});

document.getElementById("tom").addEventListener("mousedown", () => {
    let sound = new Audio("sounds/tom.wav")
    sound.play()
});

const clicked = (x) => {
    x.style.backgroundColor = "yellow"   
}

document.addEventListener("mouseup", (event) => {
    let drums = document.getElementsByTagName("button")
    for (let i = 0; i < drums.length; i++) {
        drums[i].style.backgroundColor = ""
    }
})