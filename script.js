"use strict";
var ESCAPE;
(function (ESCAPE) {
    let startButton = document.getElementById("startButton");
    let buttonClickedControl = 0; //Um den Countdown zu stoppen damit kein Alert kommt
    let auswahlBereich = document.getElementById("auswahl");
    startButton.addEventListener("click", clickStartButton);
    function clickStartButton() {
        let feedbackOnClick = new Audio("583765__wearefreesfx__cinematic-trailer-whoosh-transition.wav");
        feedbackOnClick.play();
        startButton.remove();
        setTimeout(szeneEins, 2000);
    }
    function szeneEins() {
        let trackSzeneEins = new Audio("Tracks/Szene1.mp4");
        trackSzeneEins.play();
        setTimeout(createButtons1, 38000);
    }
    function szeneZweiA() {
        buttonClickedControl++;
        clearButtons();
        let trackSzeneZweiA = new Audio("Tracks/Szene2A.mp4");
        trackSzeneZweiA.play();
    }
    function szeneZweiB() {
        buttonClickedControl++;
        clearButtons();
        let trackSzeneZweiA = new Audio("Tracks/Szene2B.mp4");
        trackSzeneZweiA.play();
    }
    function createButtons1() {
        let opt1 = document.createElement("button");
        opt1.innerHTML = "Auswahl 1";
        opt1.id = "opt1";
        let opt2 = document.createElement("button");
        opt2.innerHTML = "Auswahl 2";
        opt2.id = "opt2";
        auswahlBereich.appendChild(opt1);
        auswahlBereich.appendChild(opt2);
        opt1.addEventListener("click", szeneZweiA);
        opt2.addEventListener("click", szeneZweiB);
    }
    function clearButtons() {
        auswahlBereich.innerHTML = "";
    }
})(ESCAPE || (ESCAPE = {}));
//# sourceMappingURL=script.js.map