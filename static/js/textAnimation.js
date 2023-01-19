// text animation

// Select the element with the class 'ml6' and the child element with the class 'letters'
var textWrapper = document.querySelector('.ml6 .letters');
// Replace the textContent of the element with spans containing each letter
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class = 'letter'>$&</span>");

// Create an anime.js timeline for the animation
anime.timeline({ loop: false })
    // Add an animation that targets the elements with the class 'letter' and translates them vertically from '4em' to 0 over the duration of 1000ms
    .add({
        targets: '.ml6 .letter',
        translateY: ["4em", 0],
        translateZ: 0,
        duration: 1000,
        // Set the delay for each element based on its index in the array
        delay: (el, i) => 125 * i
    })
