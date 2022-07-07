// BOM - Browser Object Model
// window
// DOM - Document Object Model Tree
// document
// document.querySelector('selector css') // one element
// document.querySelectorAll('selector css') // array of elements

// IIFE 

(function() {
    const clock = document.querySelector('.clock');
    function updateClock() {
        clock.innerHTML = new Date().toLocaleTimeString();
    }
    setInterval(updateClock, 1000);
})();

