"use strict";
var ESCAPE;
(function (ESCAPE) {
    let startButton = document.getElementById("startButton");
    let buttonClickedControl = 0; //Um den Countdown zu stoppen damit kein Alert kommt
    let auswahlBereich = document.getElementById("auswahl");
    let countdownBereich = document.querySelector(".countdown");
    let countdownBereich2 = document.querySelector(".countdown2");
    let countdownBereich3 = document.querySelector(".countdown3");
    let secondsLeft = 10;
    let secondsLeft2 = 10;
    let secondsLeft3 = 10;
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
        countdownBereich.remove();
        clearButtons();
        let trackSzeneZweiA = new Audio("Tracks/Szene2A.ogg");
        trackSzeneZweiA.play();
        setTimeout(createButtons2, 35000);
    }
    function szeneZweiB() {
        buttonClickedControl++;
        countdownBereich.remove();
        clearButtons();
        let trackSzeneZweiB = new Audio("Tracks/Szene2B.mp4");
        trackSzeneZweiB.play();
        setTimeout(function () {
            alert("Die Flucht endet hier für dich. Du wurdest von der Grenzkontrolle gefangen genommen. Neustart?");
            location.reload();
        }, 22000);
    }
    function szeneDreiA() {
        buttonClickedControl++;
        countdownBereich2.remove();
        clearButtons();
        let trackSzeneDreiA = new Audio("Tracks/Szene3A.ogg");
        trackSzeneDreiA.play();
        setTimeout(createButtons3, 38000);
    }
    function szeneDreiB() {
        buttonClickedControl++;
        countdownBereich2.remove();
        clearButtons();
        let trackSzeneDreiB = new Audio("Tracks/Szene3B.mp4");
        trackSzeneDreiB.play();
        setTimeout(function () {
            alert("Du wurdest von einem labilen Mann erschossen. Neustart?");
            location.reload();
        }, 24000);
    }
    function szeneVierA() {
        buttonClickedControl++;
        countdownBereich3.remove();
        clearButtons();
        let trackSzeneVierA = new Audio("Tracks/Szene4A.ogg");
        trackSzeneVierA.play();
        //setTimeout(createButtons3, 35000);
    }
    function szeneVierB() {
        buttonClickedControl++;
        countdownBereich3.remove();
        clearButtons();
        let trackSzeneVierB = new Audio("Tracks/Szene4B.mp4");
        trackSzeneVierB.play();
        setTimeout(function () {
            alert("Die Flucht endet hier für dich. Neustart?");
            location.reload();
        }, 25000);
    }
    function createButtons1() {
        let opt1 = document.createElement("button");
        opt1.innerHTML = "Einsteigen";
        opt1.id = "opt1";
        let opt2 = document.createElement("button");
        opt2.innerHTML = "Nicht Einsteigen";
        opt2.id = "opt2";
        auswahlBereich.appendChild(opt1);
        auswahlBereich.appendChild(opt2);
        opt1.addEventListener("click", szeneZweiA);
        opt2.addEventListener("click", szeneZweiB);
        setInterval(countdown, 1000);
    }
    function createButtons2() {
        let opt1 = document.createElement("button");
        opt1.innerHTML = "Sterben lassen";
        opt1.id = "opt1";
        let opt2 = document.createElement("button");
        opt2.innerHTML = "Für Rückkehr einsetzen";
        opt2.id = "opt2";
        auswahlBereich.appendChild(opt1);
        auswahlBereich.appendChild(opt2);
        opt1.addEventListener("click", szeneDreiA);
        opt2.addEventListener("click", szeneDreiB);
        setInterval(countdown2, 1000);
    }
    function createButtons3() {
        let opt1 = document.createElement("button");
        opt1.innerHTML = "Nicht springen";
        opt1.id = "opt1";
        let opt2 = document.createElement("button");
        opt2.innerHTML = "Springen";
        opt2.id = "opt2";
        auswahlBereich.appendChild(opt1);
        auswahlBereich.appendChild(opt2);
        opt1.addEventListener("click", szeneVierA);
        opt2.addEventListener("click", szeneVierB);
        setInterval(countdown3, 1000);
    }
    function clearButtons() {
        auswahlBereich.innerHTML = "";
    }
    function countdown() {
        if (secondsLeft > 0 && buttonClickedControl == 0) {
            secondsLeft--;
            countdownBereich.innerHTML = "" + secondsLeft;
        }
        if (secondsLeft == 0) {
            // alert("Die Flucht endet hier für dich. Du wurdest von der Grenzkontrolle festgenommen. Neustart?");
            location.reload();
        }
    }
    function countdown2() {
        if (secondsLeft2 > 0 && buttonClickedControl == 1) {
            secondsLeft2--;
            countdownBereich2.innerHTML = "" + secondsLeft2;
        }
        if (secondsLeft2 == 0) {
            alert("Im Kampf gegen den Steuermann bist du vom Boot runtergefallen. Neustart?");
            location.reload();
        }
    }
    function countdown3() {
        if (secondsLeft3 > 0 && buttonClickedControl == 2) {
            secondsLeft3--;
            countdownBereich3.innerHTML = "" + secondsLeft3;
        }
        if (secondsLeft3 == 0) {
            alert("Ein anderer Mann ist vom Boot gesprungen und hat dich mit in den Tod gezogen. Neustart?");
            location.reload();
        }
    }
})(ESCAPE || (ESCAPE = {}));
//# sourceMappingURL=script.js.map