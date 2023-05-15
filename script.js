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

document.getElementById("boom").addEventListener("click", () => {
    let sound = new Audio("sounds/boom.wav")
    sound.play()
});

document.getElementById("clap").addEventListener("click", () => {
    let sound = new Audio("sounds/clap.wav")
    sound.play()
});

document.getElementById("hiHat").addEventListener("click", () => {
    let sound = new Audio("sounds/hihat.wav")
    sound.play()
});

document.getElementById("openHat").addEventListener("click", () => {
    let sound = new Audio("sounds/openhat.wav")
    sound.play()
});

document.getElementById("kick").addEventListener("click", () => {
    let sound = new Audio("sounds/kick.wav")
    sound.play()
});

document.getElementById("ride").addEventListener("click", () => {
    let sound = new Audio("sounds/ride.wav")
    sound.play()
});

document.getElementById("snare").addEventListener("click", () => {
    let sound = new Audio("sounds/snare.wav")
    sound.play()
});

document.getElementById("tink").addEventListener("click", () => {
    let sound = new Audio("sounds/tink.wav")
    sound.play()
});

document.getElementById("tom").addEventListener("click", () => {
    let sound = new Audio("sounds/tom.wav")
    sound.play()
});

const clicked = (x) => {
    if (x.style.backgroundColor == "yellow") {
        x.style.backgroundColor = ""
    } else {x.style.backgroundColor = "yellow"}
    
}