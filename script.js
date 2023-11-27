let inputEl = document.getElementById('input');
let answerEl = document.getElementById('answer');
let randomEl = Math.floor(Math.random()*100+1);
let submitEl = document.getElementById('submit');
let attemptsE = 0;
const attempts = document.getElementById("attempts");
let goodEl = 'YIPPIE!!! Ur number was: ' + randomEl;
let wronglow = 'WRONG! higher!!!';
let wronghigh = 'WRONG! lower!!!';
let wtf = "type smth...";
let attemptsCount = 0;
const maxAttempts = 5;
let tryagainEl = document.getElementById('tryagain');


console.log(randomEl);

submitEl.addEventListener("click", chuj); //eventlistener do przycisku o id submit w javie submitEl
tryagainEl.addEventListener("click", tryagain);

function chuj(event){ //dodanie w nawiasach event powoduje ze funkcja jest wywolywana gdy uzyjemy przycisku przypisanego do event listenera
    const userValue = Number(inputEl.value) //w ten sposob inputujemy numer ktory wprowadzil uzytkownik do funkcji
    attemptsE +=1;
    attemptsCount += 1; //dodajemy po 1 probie aby uzytkownik widzial ile prob zajelo mu odgadniecie liczby
    if (attemptsCount > maxAttempts){
    answerEl.textContent = 'przegralse x.x';
    submitEl.disabled = true;
    } else {
        if (userValue === randomEl){ //warunki podobne do pythona 
            answerEl.textContent = goodEl
        }else if (userValue  < randomEl){
            answerEl.textContent = wronglow;
        }else if (userValue  > randomEl){
            answerEl.textContent = wronghigh;
        }
        attempts.textContent = 'Attempts: ' + attemptsE //liczba wyswietlana pod input boxem do pokazywania prob

    }
}

function tryagain(){
    attempts.textContent = 'Attempts: ' + attemptsE;
    attemptsE = 0 ;
    attemptsCount = 0 ;
    attemptsE.textContent = 'Attempts' + attemptsCount;
    randomEl = Math.floor(Math.random()*100+1);
    answerEl.textContent = '';
    inputEl.value = '';
    submitEl.disabled = false; 
    tryagainEl.disabled = true;
    console.log(randomEl)
}


