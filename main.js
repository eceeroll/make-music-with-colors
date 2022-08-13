window.addEventListener("load", () => {
    
    // selecting required elements
    const sounds = document.getElementsByTagName("audio");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#33a8c7",
        "#fdf148",
        "#d883ff",
        "#a0e426",
        "#ff1d15",
        "#f050ae"
    ]

    // adding click event to the each pads
    pads.forEach((pad,index) => {
        pad.addEventListener("click", () => {
            // when we click the pad sound must play from start
            console.log("you clicked the", pads[index])
            sounds[index].currentTime = 0;
            sounds[index].play();
            // sounds[index].loop = false;

            creeateBubbles(index);
    
        })
    })
    
    const creeateBubbles = (index) => {
        let bubble = document.createElement("div");
        visual.appendChild(bubble);

        bubble.style.backgroundColor = colors[index]

        // creating the animation:
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener("animationend", function() {
            visual.removeChild(this);
        })
    }
})