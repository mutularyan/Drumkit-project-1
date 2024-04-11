// Array Declaration
// This creates an array of the four different drum sounds we are going to explore
const kits = ["crash", "kick", "snare", "tom"];

// DOM Selection
// This is to find an HTML element with the class name container.(where we will put our buttons)
const containerEl = document.querySelector(".container");

// This starts a loop, which iterates over each drum sound type, through each element of the 'kits' array.
kits.forEach((kit) => {

//With each iteration of this loop, a new button element is created and its text is set to the current kit
  const btnEl = document.createElement("button");
  btnEl.classList.add("btn");
  btnEl.innerText = kit;

//Sets background of the button depending on the button sound type
  btnEl.style.backgroundImage = "url(images/" + kit + ".png)";

// This line puts the button inside our container element
  containerEl.appendChild(btnEl);

// With each iteration of this loop, anew audio element is created and the src attribute is set to the relative sound file
  const audioEl = document.createElement("audio");
  audioEl.src = "sounds/" + kit + ".mp3";

// This line puts the audio element inside our container element
  containerEl.appendChild(audioEl);

// This is to add a click event listener to each button so that it plays the corresponding audio 
  btnEl.addEventListener("click", () => {
    audioEl.play();
  });

//   Adding a keyboard event listener
// When a key is pressed, it checks to see if the key corresponds to the first letter of any of the four drum sound types
//When the key is clicked, a scaling effect is observed throughout the whole button
  window.addEventListener("keydown", (event) => {
    if (event.key === kit.slice(0, 1)) {
      audioEl.play();
      btnEl.style.transform = "scale(.9)";
      setTimeout(() => {
        btnEl.style.transform = "scale(1)";
      }, 100);
    }
  });
});