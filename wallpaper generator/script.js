let imagesArray = [];
let backgroundChangeInterval;

// Create an array of image elements
let newImages = [
    { src: 'curry.jpg' },
    { src: 'img (1).png' },
    { src: 'img (2).jpg' },
    { src: 'img (3).jpg' },
    { src: 'img (4).jpg' },
    { src: 'img (5).jpg' }
];

// Use concat() to merge arrays
imagesArray = imagesArray.concat(newImages);
console.log(imagesArray); // Output: should be an array of image objects

function getRandomBackground() {
    // Select a random image object from the array
    return imagesArray[Math.floor(Math.random() * imagesArray.length)].src;
}

function changeBackground() {
    // Get the image element by its ID
    const body = document.getElementById('body');
    
    // Generate a random image src
    const randomBackgroundSrc = getRandomBackground();
    
    // Apply the random image src to the img element
    body.src = randomBackgroundSrc;
}

function startBackground() {
    // A slideshow that changes every 10s
    backgroundChangeInterval = setInterval(changeBackground, 10000);
}

function stopColorChange() {
    // Stop slideshow
    clearInterval(backgroundChangeInterval);
}

// Ensure the DOM is fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', function () {
    let element = document.getElementById("wallpaper");
    let slideshow = document.getElementById("slideshow");
    
    if (element) {
        element.addEventListener('click', changeBackground);
    }

    if (slideshow) {
        slideshow.addEventListener('click', startBackground);
    }
    // Uncomment this if you want to stop the background change on a specific event
    // slideshow.addEventListener('click', stopColorChange); 
});
