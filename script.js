"use strict";
var ESCAPE;
(function (ESCAPE) {
    let startButton = document.getElementById("startButton");
    let startDiv = document.getElementById("containerStart");
    let buttonClickedControl = 0; //Um den Countdown zu stoppen damit kein Alert kommt
    let auswahlBereich = document.getElementById("auswahl");
    let countdownBereich = document.querySelector(".countdown");
    let countdownBereich2 = document.querySelector(".countdown2");
    let countdownBereich3 = document.querySelector(".countdown3");
    let secondsLeft = 10;
    let secondsLeft2 = 10;
    let secondsLeft3 = 10;
    let textArea = document.getElementById("text");
    startButton.addEventListener("click", clickStartButton);
    function clickStartButton() {
        startButton.remove();
        startDiv.remove();
        szeneEins();
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
        setTimeout(function () { textAusgabe(1); }, 22000);
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
        setTimeout(function () { textAusgabe(2); }, 24000);
    }
    function szeneVierA() {
        buttonClickedControl++;
        countdownBereich3.remove();
        clearButtons();
        let trackSzeneVierA = new Audio("Tracks/Szene4A.ogg");
        trackSzeneVierA.play();
        setTimeout(function () { textAusgabe(3); }, 42000);
    }
    function szeneVierB() {
        buttonClickedControl++;
        countdownBereich3.remove();
        clearButtons();
        let trackSzeneVierB = new Audio("Tracks/Szene4B.mp4");
        trackSzeneVierB.play();
        setTimeout(function () { textAusgabe(4); }, 25000);
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
        if (secondsLeft > 0 && buttonClickedControl == 0 && secondsLeft != 11) {
            secondsLeft--;
            countdownBereich.innerHTML = "" + secondsLeft;
        }
        if (secondsLeft <= 0) {
            countdownBereich.remove();
            secondsLeft = 11;
            auswahlBereich.remove();
            let textDom = document.createElement("p");
            textDom.innerHTML = "Countdown 1 abgelaufen";
            textDom.id = "text";
            textArea.appendChild(textDom);
        }
    }
    function countdown2() {
        if (secondsLeft2 > 0 && buttonClickedControl == 1 && secondsLeft2 != 11) {
            secondsLeft2--;
            countdownBereich2.innerHTML = "" + secondsLeft2;
        }
        if (secondsLeft2 <= 0) {
            countdownBereich2.remove();
            secondsLeft2 = 11;
            auswahlBereich.remove();
            let textDom = document.createElement("p");
            textDom.innerHTML = "Countdown 2 abgelaufen";
            textDom.id = "text";
            textArea.appendChild(textDom);
        }
    }
    function countdown3() {
        if (secondsLeft3 > 0 && buttonClickedControl == 2 && secondsLeft3 != 11) {
            secondsLeft3--;
            countdownBereich3.innerHTML = "" + secondsLeft3;
        }
        if (secondsLeft3 <= 0) {
            countdownBereich3.remove();
            secondsLeft3 = 11;
            auswahlBereich.remove();
            let textDom = document.createElement("p");
            textDom.innerHTML = "Countdown 3 abgelaufen";
            textDom.id = "text";
            textArea.appendChild(textDom);
        }
    }
    function textAusgabe(_number) {
        switch (_number) {
            case 1:
                auswahlBereich.remove();
                let textDom = document.createElement("p");
                textDom.innerHTML = "Text Falsche Endscheidung 1";
                textDom.id = "text";
                textArea.appendChild(textDom);
                break;
            case 2:
                auswahlBereich.remove();
                let textDom2 = document.createElement("p");
                textDom2.innerHTML = "Text Falsche Endscheidung 2";
                textDom2.id = "text";
                textArea.appendChild(textDom2);
                break;
            case 3:
                auswahlBereich.remove();
                let textDom3 = document.createElement("p");
                textDom3.innerHTML = "Text erfolgreiches Ende";
                textDom3.id = "text";
                textArea.appendChild(textDom3);
                break;
            case 4:
                auswahlBereich.remove();
                let textDom4 = document.createElement("p");
                textDom4.innerHTML = "Text Falsche Endscheidung 3";
                textDom4.id = "text";
                textArea.appendChild(textDom4);
                break;
        }
    }
})(ESCAPE || (ESCAPE = {}));
//# sourceMappingURL=script.js.map