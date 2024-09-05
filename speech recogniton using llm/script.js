function startRecognition() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US'; // Set the language
    recognition.interimResults = false; // Set to false to only capture final results

    let timeout; // Variable to store the timeout reference

    // Function to reset the timer
    function resetTimer() {
        clearTimeout(timeout); // Clear the previous timeout
        timeout = setTimeout(() => {
            recognition.stop(); // Stop recognition if no input for 6 seconds
            console.log('No input for 6 seconds, stopping recognition...');
        }, 9000); // 6 seconds timeout
    }

    // Event handler for when speech is recognized
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        document.getElementById('result').textContent += transcript + ' ';
        resetTimer(); // Reset the timer each time we get a result
    };

    // Error handling
    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
    };

    // Event handler for when recognition service stops
    recognition.onend = () => {
        console.log('Speech recognition service disconnected');
        document.getElementById('alert').textContent = "";
        clearTimeout(timeout); // Clear timeout when service stops
    };

    recognition.start(); // Start recognition
    resetTimer(); // Start the timer
}

function message(){
    document.getElementById('alert').textContent = "The system is listening";
}

function clear(){
    document.getElementById('result').textContent = "";
}

let speech = document.getElementById("speech");
let text = document.getElementById("clear");
text.addEventListener('click', clear)
speech.addEventListener("click", startRecognition);
speech.addEventListener("click", message);

