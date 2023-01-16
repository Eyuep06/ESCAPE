namespace ESCAPE {
    let startButton: HTMLElement = document.getElementById("startButton") as HTMLElement;
    let buttonClickedControl: number = 0; //Um den Countdown zu stoppen damit kein Alert kommt
    let auswahlBereich: HTMLElement = document.getElementById("auswahl") as HTMLElement;
    let countdownBereich: HTMLElement = document.querySelector(".countdown") as HTMLElement;
    let countdownBereich2: HTMLElement = document.querySelector(".countdown2") as HTMLElement;
    let countdownBereich3: HTMLElement = document.querySelector(".countdown3") as HTMLElement;
    let secondsLeft: number = 10;
    let secondsLeft2: number = 10;
    let secondsLeft3: number = 10;

    startButton.addEventListener("click", clickStartButton);

    function clickStartButton(): void {

        let feedbackOnClick: HTMLAudioElement = new Audio("583765__wearefreesfx__cinematic-trailer-whoosh-transition.wav");
        feedbackOnClick.play();
        startButton.remove();
        setTimeout(szeneEins, 2000);
    }


    function szeneEins(): void {
        let trackSzeneEins: HTMLAudioElement = new Audio("Tracks/Szene1.mp4");
        trackSzeneEins.play();
        setTimeout(createButtons1, 38000);
    }

    function szeneZweiA(): void {
        buttonClickedControl++;
        countdownBereich.remove();
        clearButtons();
        let trackSzeneZweiA: HTMLAudioElement = new Audio("Tracks/Szene2A.ogg");
        trackSzeneZweiA.play();
        setTimeout(createButtons2, 35000);
    }

    function szeneZweiB(): void {
        buttonClickedControl++;
        countdownBereich.remove();
        clearButtons();
        let trackSzeneZweiB: HTMLAudioElement = new Audio("Tracks/Szene2B.mp4");
        trackSzeneZweiB.play();
        setTimeout(function (): void {
            alert("Die Flucht endet hier für dich. Du wurdest von der Grenzkontrolle gefangen genommen. Neustart?"); location.reload();
        }, 22000);
    }

    function szeneDreiA(): void {
        buttonClickedControl++;
        countdownBereich2.remove();
        clearButtons();
        let trackSzeneDreiA: HTMLAudioElement = new Audio("Tracks/Szene3A.ogg");
        trackSzeneDreiA.play();
        setTimeout(createButtons3, 38000);
    }

    function szeneDreiB(): void {
        buttonClickedControl++;
        countdownBereich2.remove();
        clearButtons();
        let trackSzeneDreiB: HTMLAudioElement = new Audio("Tracks/Szene3B.mp4");
        trackSzeneDreiB.play();
        setTimeout(function (): void {
            alert("Du wurdest von einem labilen Mann erschossen. Neustart?"); location.reload();
        }, 24000);
    }

    function szeneVierA(): void {
        buttonClickedControl++;
        countdownBereich3.remove();
        clearButtons();
        let trackSzeneVierA: HTMLAudioElement = new Audio("Tracks/Szene4A.ogg");
        trackSzeneVierA.play();
        //setTimeout(createButtons3, 35000);
    }

    function szeneVierB(): void {
        buttonClickedControl++;
        countdownBereich3.remove();
        clearButtons();
        let trackSzeneVierB: HTMLAudioElement = new Audio("Tracks/Szene4B.mp4");
        trackSzeneVierB.play();
        setTimeout(function (): void {
            alert("Die Flucht endet hier für dich. Neustart?"); location.reload();
        }, 25000);
    }


    function createButtons1(): void {
        let opt1: HTMLElement = document.createElement("button");
        opt1.innerHTML = "Einsteigen";
        opt1.id = "opt1";
        let opt2: HTMLElement = document.createElement("button");
        opt2.innerHTML = "Nicht Einsteigen";
        opt2.id = "opt2";
        auswahlBereich.appendChild(opt1);
        auswahlBereich.appendChild(opt2);

        opt1.addEventListener("click", szeneZweiA);
        opt2.addEventListener("click", szeneZweiB);
        setInterval(countdown, 1000);


    }

    function createButtons2(): void {
        let opt1: HTMLElement = document.createElement("button");
        opt1.innerHTML = "Sterben lassen";
        opt1.id = "opt1";
        let opt2: HTMLElement = document.createElement("button");
        opt2.innerHTML = "Für Rückkehr einsetzen";
        opt2.id = "opt2";
        auswahlBereich.appendChild(opt1);
        auswahlBereich.appendChild(opt2);

        opt1.addEventListener("click", szeneDreiA);
        opt2.addEventListener("click", szeneDreiB);
        setInterval(countdown2, 1000);


    }

    function createButtons3(): void {
        let opt1: HTMLElement = document.createElement("button");
        opt1.innerHTML = "Nicht springen";
        opt1.id = "opt1";
        let opt2: HTMLElement = document.createElement("button");
        opt2.innerHTML = "Springen";
        opt2.id = "opt2";
        auswahlBereich.appendChild(opt1);
        auswahlBereich.appendChild(opt2);

        opt1.addEventListener("click", szeneVierA);
        opt2.addEventListener("click", szeneVierB);
        setInterval(countdown3, 1000);


    }


    function clearButtons(): void {
        auswahlBereich.innerHTML = "";
    }


    function countdown(): void {
        if (secondsLeft > 0 && buttonClickedControl == 0) {
            secondsLeft--;
            countdownBereich.innerHTML = "" + secondsLeft;
        }

        if (secondsLeft == 0) {
            // alert("Die Flucht endet hier für dich. Du wurdest von der Grenzkontrolle festgenommen. Neustart?");
            location.reload();

        }
    }

    function countdown2(): void {
        if (secondsLeft2 > 0 && buttonClickedControl == 1) {
            secondsLeft2--;
            countdownBereich2.innerHTML = "" + secondsLeft2;
        }

        if (secondsLeft2 == 0) {
            alert("Im Kampf gegen den Steuermann bist du vom Boot runtergefallen. Neustart?");
            location.reload();

        }
    }

    function countdown3(): void {
        if (secondsLeft3 > 0 && buttonClickedControl == 2) {
            secondsLeft3--;
            countdownBereich3.innerHTML = "" + secondsLeft3;
        }

        if (secondsLeft3 == 0) {
            alert("Ein anderer Mann ist vom Boot gesprungen und hat dich mit in den Tod gezogen. Neustart?");
            location.reload();

        }
    }



}