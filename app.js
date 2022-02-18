const merits = [
    'hey babe,,',
    '22 February 2003, is the day you were born.',
    "(it'll be cooler if its 2002 lmao)",
    "today, 22 February 2022",
    "in other words (or numbers), it is 22/02/2022",
    "the coolest birthday i've ever seen in my life",
    "to be honest i'm actually witnessing a true historical event",
    'an event where a person is older',
    'an event where a person is wiser',
    'an event where a person is stronger',
    'an event where a person is smarter',
    'an event where a person is sweeter',
    'an event where a person is better at poker',
    'an event where a person is better at spellcast',
    'an event where a person is seggsier',
    'an event where a person is hotter',
    'an event where a person is the best 19 yo girlfriend ive everr had!!!']
let count = 0;
let index = 0;
let currentText= '';
let letter = '';

(function type(){

    currentText = merits[count];
    if (count < 7) {
        letter = currentText.slice(0,++index);
        if(letter.length === currentText.length){
            count++;
            index = 0;
            setTimeout(type,700);
        } 
        else {
        setTimeout(type,150);}
    }
    else if (count >= 7){
        letter = currentText.slice(0,++index);
        if(letter.length === currentText.length){
            count++;
            index = 26;
            setTimeout(type,400);
        } 
        else {
        setTimeout(type,150);}
    } 
    document.querySelector('.typing').textContent = letter;
}());