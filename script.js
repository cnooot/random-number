let inputEl = document.getElementById('input');
let answerEl = document.getElementById('answer');
let randomEl = Math.floor(Math.random()*100+1);
let submitEl = document.getElementById('submit');
let attemptsE = 0;
const attempts = document.getElementById("attempts");
let goodEl = 'GOOD! Ur number was: ' + randomEl;
let wronglow = 'WRONG! higher!!!';
let wronghigh = 'WRONG! lower!!!';
let wtf = "type smth...";

console.log(randomEl);

submitEl.addEventListener("click", chuj); //eventlistener do przycisku o id submit w javie submitEl

function chuj(event){ //dodanie w nawiasach event powoduje ze funkcja jest wywolywana gdy uzyjemy przycisku przypisanego do event listenera
    
    const userValue = Number(inputEl.value) //w ten sposob inputujemy numer ktory wprowadzil uzytkownik do funkcji
    attemptsE += 1; //dodajemy po 1 probie aby uzytkownik widzial ile prob zajelo mu odgadniecie liczby
    if (userValue === randomEl){ //warunki podobne do pythona 
        answerEl.textContent = goodEl
    }else if (userValue  < randomEl){
        answerEl.textContent = wronglow;
    }else if (userValue  > randomEl){
        answerEl.textContent = wronghigh;
    }
    attempts.textContent = 'Attempts: ' + attemptsE //liczba wyswietlana pod input boxem do pokazywania prob

}

/* function tryagain(){ */
/*  */
/* } */
/*  */




