console.log("Welcome to Spotify");  // console.log("Welcome to Spotify"); : This line logs a welcome message to the browser's console when the web page is loaded. It's a simple way to provide feedback to developers for debugging and informational purposes.

/*
Variable Initialization:
let songIndex = 0;: Initializes a variable called songIndex and sets it to 0. This variable is used to keep track of the currently selected song in your playlist.
let audioElement = new Audio('songs/1.mp3'): Creates an HTML <audio> element and assigns it to the audioElement variable. It loads the first song, '1.mp3', into this audio element.
<audio> refers to an HTML <audio> element. The <audio> element is used to embed audio content, such as music or sound, directly into a web page. It provides a way to play audio files without the need for external plugins or players.
let masterPlay = document.getElementById('masterPlay');: Retrieves an HTML element with the id "masterPlay" and assigns it to the masterPlay variable. This element likely represents a play/pause button for controlling the audio playback.
let myProgressBar = document.getElementById('myProgressBar');: Retrieves an HTML element with the id "myProgressBar" and assigns it to the myProgressBar variable. This element is probably a progress bar used to display the current playback position.
let gif = document.getElementById('gif');: Retrieves an HTML element with the id "gif" and assigns it to the gif variable. This element might be an image or animation related to the music playback.
let masterSongName = document.getElementById('masterSongName');: Retrieves an HTML element with the id "masterSongName" and assigns it to the masterSongName variable. This element likely displays the name of the currently playing song.
let songItems = Array.from(document.getElementsByClassName('songItem'));: Retrieves all HTML elements with the class "songItem," converts them into an array, and assigns the array to the songItems variable. These elements probably represent individual songs in a playlist.
*/
/*
Assigning HTML elements to JavaScript variables is a common practice in web development for several reasons:
Efficient DOM Access
Code Clarity
Reduced Redundancy
Interaction with Events
*/
//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3')
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

/*
Song Data:
An array called songs is defined, containing objects that represent individual songs. Each object has properties like songName, filepath, and coverPath, which store information about the song's name, file path, and cover image path.
*/
let songs = [
    {songName: "Hrudayam Ekkadunnadi", filepath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Pedave Palikina Matallone", filepath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Gummadi Gummadi", filepath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Ranjithame Ranjithame", filepath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Gundelonaa", filepath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Ra Ra Reddy I Am Ready", filepath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Jinthaak", filepath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Thar Maar Thakkar Maar", filepath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Nee Kalle Diwali", filepath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Naatu Naatu", filepath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

/*
Iterating Over Song Items:
A forEach loop iterates through the songItems array (which represents individual songs in the playlist).
Inside the loop, it sets the src attribute of the first <img> element within each song item to the corresponding cover image path from the songs array. It also sets the text of the first element with the class "songName" to the corresponding song name from the songs array.
element.getElementsByTagName("img")[0].src = songs[i].coverPath;: This line finds the first <img> element inside the current element (a <div> with the class songItem) and sets its src attribute to the coverPath of the corresponding song in the songs array. This is used to update the image associated with each song.
element.getElementsByClassName("songName")[0].innerText = songs[i].songName;: This line finds the first element with the class songName inside the current element and sets its innerText (the text content within the element) to the songName of the corresponding song in the songs array. This is used to update the song name displayed in each song item.
The [0] is used to access the first element within the result of a method like getElementsByTagName or getElementsByClassName. These methods return collections of elements that match the specified criteria (e.g., elements with a certain tag name or class name), and these collections are similar to arrays.
*/
// Iterating Over Song Items
songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

/*
Handling Play/Pause Click:
An event listener is added to the masterPlay element (likely a play/pause button).
When clicked, this listener checks if the audio is paused or at the beginning of the track. If so, it plays the audio, changes the button icon from play to pause, and makes the gif element visible. If not, it pauses the audio, changes the button icon from pause to play, and hides the gif.
*/
//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

/*
Listening to Audio Time Updates:
An event listener is added to the audioElement to listen for the "timeupdate" event, which fires as the audio playback time progresses.
In the event handler, it calculates the current playback progress as a percentage and updates the myProgressBar element's value accordingly.
'timeupdate' is an event that is fired by the <audio> element at regular intervals (typically, multiple times per second) as the audio is playing. This event is triggered as the playback position of the audio changes. The event listener is set up to respond to the 'timeupdate' event. "fired" refers to the act of triggering or invoking an event. When an event is fired, it means that a specific condition or action has occurred, and the event handler associated with that event will be executed or called.
myProgressBar.value is used to set the value of the seek bar (progress bar) to the calculated progress value. This updates the visual representation of the seek bar to reflect the current position of the audio playback.

Handling Seekbar Change:
An event listener is added to the myProgressBar element, which represents a seek bar for changing the playback position.
When the seek bar's value changes, the listener updates the audio playback position to match the new value, allowing users to seek within the track.
myProgressBar is a reference to an HTML <input> element with type="range", which is often used as a seek bar or progress bar to control the position of audio or video playback.
The 'change' event listener is added to myProgressBar using addEventListener. It listens for changes to the value of the seek bar.
When the user interacts with the seek bar and changes its value (e.g., by dragging the slider to a new position), the 'change' event is fired.
The event listener's function calculates the new playback position of the audio based on the value of the seek bar and updates the audioElement.currentTime. Here's how it works:
myProgressBar.value represents the current value (position) of the seek bar as a percentage (0 to 100).
audioElement.duration represents the total duration of the audio in seconds.
The formula myProgressBar.value * audioElement.duration / 100 calculates the corresponding time in seconds within the audio track based on the seek bar's position as a percentage.
audioElement.currentTime is set to this calculated time value, effectively seeking the audio playback to the chosen position.
*/
//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

/*
const makeAllPlays = () => {...}: This is a function definition for makeAllPlays. It defines a function that iterates over all elements with the class name 'songItemPlay', and for each element, it removes the 'fa-pause-circle' class and adds the 'fa-play-circle' class. Essentially, it resets all play icons to the "play" state.
*/
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

// Loop through all elements with the class 'songItemPlay'
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    // Add a click event listener to each element
    element.addEventListener('click', () => {
        // Call the 'makeAllPlays' function to reset all play buttons
        makeAllPlays();
        // Get the 'id' attribute of the clicked element and parse it to an integer
        songIndex = parseInt(element.id);
        // Remove the 'fa-play-circle' class (play icon) from the clicked element
        element.classList.remove('fa-play-circle');
        // Add the 'fa-pause-circle' class (pause icon) to the clicked element
        element.classList.add('fa-pause-circle');
        // Set the audio source to the corresponding song based on 'songIndex'
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        // Set the text content of 'masterSongName' to the song name
        masterSongName.innerText = songs[songIndex].songName;
        // Reset the audio element's current time to the beginning of the song
        audioElement.currentTime = 0;
        // Play the audio
        audioElement.play();
        // Show the GIF (setting its opacity to 1)
        gif.style.opacity = 1;
        // Remove the 'fa-play-circle' class from 'masterPlay' (master play button)
        masterPlay.classList.remove('fa-play-circle');
        // Add the 'fa-pause-circle' class to 'masterPlay' (master play button)
        masterPlay.classList.add('fa-pause-circle');
    });
});

document.getElementById('next').addEventListener('click', () => {
    // Check if 'songIndex' is at the last song (index 9)
    if (songIndex >= 9) {
        songIndex = 0; // If at the last song, reset to the first song (looping)
    } else {
        songIndex += 1; // Increment 'songIndex' to play the next song
    }
    // Set the audio source to the next song based on 'songIndex'
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    // Update 'masterSongName' with the name of the next song
    masterSongName.innerText = songs[songIndex].songName;
    // Reset the audio playback to the beginning of the song
    audioElement.currentTime = 0;
    // Start playing the next song
    audioElement.play();
    // Update the masterPlay button's icon to 'pause'
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

document.getElementById('previous').addEventListener('click', () => {
    // Check if 'songIndex' is at the first song (index 0)
    if (songIndex <= 0) {
        songIndex = 0; // If at the first song, stay at the first song
    } else {
        songIndex -= 1; // Decrement 'songIndex' to play the previous song
    }
    // Set the audio source to the previous song based on 'songIndex'
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    // Update 'masterSongName' with the name of the previous song
    masterSongName.innerText = songs[songIndex].songName;
    // Reset the audio playback to the beginning of the song
    audioElement.currentTime = 0;
    // Start playing the previous song
    audioElement.play();
    // Update the masterPlay button's icon to 'pause'
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});