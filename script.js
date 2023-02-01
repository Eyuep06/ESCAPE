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
    let textArea = document.getElementById("textbereich");
    let trackSzeneEins = new Audio("Tracks/Anfang/Szene1.wav");
    let trackSzeneZweiA = new Audio("Tracks/Entscheidung 1/Entscheidung1_Richtig.wav");
    let trackSzeneDreiA = new Audio("Tracks/Entscheidung 2/Entscheidung2_Richtig.wav");
    startButton.addEventListener("click", clickStartButton);
    function clickStartButton() {
        startButton.remove();
        startDiv.remove();
        szeneEins();
    }
    function szeneEins() {
        trackSzeneEins.play();
        setTimeout(createButtons1, 206000);
    }
    function szeneZweiA() {
        buttonClickedControl++;
        countdownBereich.remove();
        trackSzeneEins.pause();
        clearButtons();
        trackSzeneZweiA.play();
        setTimeout(createButtons2, 138000);
    }
    function szeneZweiB() {
        buttonClickedControl++;
        countdownBereich.remove();
        trackSzeneEins.pause();
        clearButtons();
        let trackSzeneZweiB = new Audio("Tracks/Entscheidung 1/Entscheidung1_falsch.wav");
        trackSzeneZweiB.play();
        setTimeout(function () { textAusgabe(1); }, 29000);
    }
    function szeneDreiA() {
        buttonClickedControl++;
        countdownBereich2.remove();
        trackSzeneZweiA.pause();
        clearButtons();
        trackSzeneDreiA.play();
        setTimeout(createButtons3, 80000);
    }
    function szeneDreiB() {
        buttonClickedControl++;
        countdownBereich2.remove();
        trackSzeneZweiA.pause();
        clearButtons();
        let trackSzeneDreiB = new Audio("Tracks/Entscheidung 2/Entscheidung2_Falsch.wav");
        trackSzeneDreiB.play();
        setTimeout(function () { textAusgabe(2); }, 53000);
    }
    function szeneVierA() {
        buttonClickedControl++;
        countdownBereich3.remove();
        auswahlBereich.remove();
        trackSzeneDreiA.pause();
        clearButtons();
        let trackSzeneVierA = new Audio("Tracks/Entscheidung 3/Entscheidung3_Richtig.wav");
        trackSzeneVierA.play();
        setTimeout(function () { textAusgabe(3); }, 192000);
    }
    function szeneVierB() {
        buttonClickedControl++;
        countdownBereich3.remove();
        auswahlBereich.remove();
        trackSzeneDreiA.pause();
        clearButtons();
        let trackSzeneVierB = new Audio("Tracks/Entscheidung 3/Entscheidung3_Falsch.wav");
        trackSzeneVierB.play();
        setTimeout(function () { textAusgabe(4); }, 18000);
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
        opt1.innerHTML = "Jacke geben";
        opt1.id = "opt1";
        let opt2 = document.createElement("button");
        opt2.innerHTML = "Jacke nicht geben";
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
            textDom.innerHTML = "Auf der Flucht ist es wichtig schnelle Entscheidungen zu treffen. Du wurdest von der Grenzkontrolle eingeholt und festgenommen.";
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
            textDom.innerHTML = "„Das einzig Nötige, damit das Böse Erfolg haben kann, ist, dass die Guten einfach zusehen.“ <br> - Edmund Burke";
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
            textDom.innerHTML = "„Die Menschheit muss dem Krieg ein Ende setzen, oder der Krieg setzt der Menschheit ein Ende.“ <br> - John F. Kennedy";
            textDom.id = "text";
            textArea.appendChild(textDom);
        }
    }
    function textAusgabe(_number) {
        switch (_number) {
            case 1:
                auswahlBereich.remove();
                let textDom = document.createElement("p");
                textDom.innerHTML = "Der Flüchtige hat einen Weg, der Verfolger hundert. <br> - Deutsches Sprichwort";
                textDom.id = "text";
                textArea.appendChild(textDom);
                break;
            case 2:
                auswahlBereich.remove();
                let textDom2 = document.createElement("p");
                textDom2.innerHTML = "Flüchtling sein heißt: die Heimat verlassen müssen ohne eigene Schuld, ohne Sicherheit - nur mit einem Herzen voll Hoffnung. <br> - Heinz Körber";
                textDom2.id = "text";
                textArea.appendChild(textDom2);
                break;
            case 3:
                auswahlBereich.remove();
                let textDom3 = document.createElement("p");
                textDom3.innerHTML = "„Die Menschheit muss dem Krieg ein Ende setzen, oder der Krieg setzt der Menschheit ein Ende.“ <br> - John F. Kennedy";
                textDom3.id = "text";
                textArea.appendChild(textDom3);
                break;
            case 4:
                auswahlBereich.remove();
                let textDom4 = document.createElement("p");
                textDom4.innerHTML = "„Die Menschheit muss dem Krieg ein Ende setzen, oder der Krieg setzt der Menschheit ein Ende.“ <br> - John F. Kennedy";
                textDom4.id = "text";
                textArea.appendChild(textDom4);
                break;
        }
    }
})(ESCAPE || (ESCAPE = {}));
//# sourceMappingURL=script.js.map