namespace ESCAPE {
    let startButton: HTMLElement = document.getElementById("startButton") as HTMLElement;
    let buttonClickedControl: number = 0; //Um den Countdown zu stoppen damit kein Alert kommt
    let auswahlBereich: HTMLElement = document.getElementById("auswahl") as HTMLElement;

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
        buttonClickedControl ++;
        clearButtons();
        let trackSzeneZweiA: HTMLAudioElement = new Audio("Tracks/Szene2A.mp4");
        trackSzeneZweiA.play();
    }

    function szeneZweiB(): void {
        buttonClickedControl ++;
        clearButtons();
        let trackSzeneZweiA: HTMLAudioElement = new Audio("Tracks/Szene2B.mp4");
        trackSzeneZweiA.play();
    }

    function createButtons1 (): void {
        let opt1: HTMLElement = document.createElement("button");
        opt1.innerHTML = "Auswahl 1";
        opt1.id = "opt1";
        let opt2: HTMLElement = document.createElement("button");
        opt2.innerHTML = "Auswahl 2";
        opt2.id = "opt2";
        auswahlBereich.appendChild(opt1);
        auswahlBereich.appendChild(opt2);

        opt1.addEventListener("click", szeneZweiA);
        opt2.addEventListener("click", szeneZweiB);

    }


    function clearButtons(): void {
        auswahlBereich.innerHTML = "";
    }






}