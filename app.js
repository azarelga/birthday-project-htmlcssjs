const merits = [
    'hey babeeessss,,,',
    "i'm about to do a little monologue,",
    "do you have time?",
    'im going to assume that u said yes lol',
    "okay okay,,, remember when u told me that u were born at 22 february 2003?",
    "well, my mind just stuck on what will happen for ur birthday this year",
    "so,,, I created this website just for you",
    "it's not much but i'll hope you enjoy :D",
    "today, 22 february 2022,",
    "where all wonders suddenly envy your presence,",
    "making history as the palindrome of all time,",
    'the day where hospitals having a demographic blast,',
    'babies getting baptized,',
    'and doctor strange 2 is ahead of schedule and releasing tomorrow',
    '(fingers crossed)',
    "to be honest, there's so much reason that this day is a historical event",
    'but all in all,',
    'this is a day, an event -',    
    'an event where a person is older',
    'an event where a person is wiser',
    'an event where a person is stronger',
    'an event where a person is smarter',
    'an event where a person is sweeter',
    'an event where a person is better at poker',
    'an event where a person is better at spellcast',
    'an event where a person is seggsier',
    'an event where a person is hotter',
    'an event where a person is the best itzy member',
    'an event where a person is the best 19 yo girlfriend ive everr had!!!',
    'now, please press this button below']
let count = 0;
let index = 0;
let currentText= '';
let letter = '';
(function type(){

    currentText = merits[count];
    if (count < 17) {
        letter = currentText.slice(0,++index);
        if(letter.length === currentText.length){
            count++;
            index = 0;
            setTimeout(type,900);
        } 
        else {
        setTimeout(type,100);}
    }
    else if (count >= 17){
        letter = currentText.slice(0,++index);
        if(letter.length === currentText.length){
            count++;
            index = 26;
            setTimeout(type,900);
        } 
        else {
        setTimeout(type,100);
        }
    }
    document.querySelector('.typing').textContent = letter;
    if(count === merits.length-1){
        document.getElementById('button').style.opacity = 1;
    }
}());
