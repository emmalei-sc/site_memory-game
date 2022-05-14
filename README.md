# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Emma Leihe

Time spent: 6 hours spent in total

Link to project: https://site-memory-game.glitch.me/

https://glitch.com/edit/#!/site-memory-game (code)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] A bonus button that plays a song with the given notes

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](http://g.recordit.co/2WGYs7nsNZ.gif)
![](http://g.recordit.co/jAcXHtJUs3.gif)
![](http://g.recordit.co/m9u4da0RUM.gif)
![](http://g.recordit.co/UW2bF3hPUk.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

cssreference.io/
www.w3schools.com/css//css_font_websafe.asp
coolors.co  
www.the-art-of-web.com/javascript/creating-sounds/  
www.w3schools.com/tags/tag_img.asp  
www.w3schools.com/jsref/jsref_return.asp  
developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random  

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)  
In my code, I made a bonus button that automatically plays a short melody. Once I got it to work, I wanted to take it further and add chords (i.e. make multiple tones play at once) to give it more depth. 
But this was where things got tricky. 
First, I tried turning the pattern array into a multidimensional array, so that each spot held multiple notes at once, and ran every pattern[i][j] through a nested for loop version of the playClueSequence function. 
However, I realized that this approach still played single tones one after another, not at the same time.
Next, I tried creating extra pattern arrays for the other notes in the chords, and made functions attempting to play all 3 patterns at the same time to get a "chord".
Unfortunately, this did not work either. From my understanding, 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)  
[YOUR ANSWER HERE]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)  
If I had a bit more time with this project, I'd want to make a small piano keyboard out of the buttons. 
Currently, my program functions somewhat like an 8-button miniature piano, so the next logical step would be to add more buttons to create a full keyboard, maybe with the note names as button text. 
In this way, it could double as both a memory game and a fun way for people to learn how to play a keyboard. 
Rather than having a random pattern of notes, I would create patterns that correspond to actual songs, which would let people learn . 
If possible, I would try to streamline this process by looking up modules/packages that can transcribe a song and turn them into frequencies, since doing all of that manually would be quite tedious.


## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright Emma Leihe

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
