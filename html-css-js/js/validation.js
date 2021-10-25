/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    AKAI Frontend Task - Javascript

    W tym zadaniu postaraj się zaimplementować metody, które sprawdzą, czy dane wprowadzone
    do formularza są poprawne. Przykładowo: czy imię i nazwisko zostało wprowadzone.
    Możesz rozwinąć walidację danych tak bardzo, jak tylko zapragniesz.

    Powodzenia!
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

fname = document.querySelector("#task-frontend #first-name");
lname = document.querySelector("#task-frontend #last-name");
email = document.querySelector("#task-frontend #email");
send = document.querySelector(`#task-frontend input[type="submit"]`);


checkName = (text) => {
    if (text.length === 0) return "Nie wprowadzono imienia/nazwiska!";

    for(let i = 0; i < text.length; i++) {
        if (!isNaN(text[i])) return "Wprowadzono liczbę do imienia lub nazwiska!"
    }
    return 0;
}

checkMail = (text) => {
    if (text.length === 0) return "Nie wprowadzono e-maila!!!";

    if (text.indexOf('@') == -1 || text.indexOf('.') == -1 ) return "Niepoprawny format e-mail!"
    return 0;

}

checkChoices = (text) => {
    let choice = 0;

    for(let i = 0; i < text.length; i++){
        // console.log(text[i])
        if(text[i].checked === true) choice++;
    }
    if (choice === 0) return false;
    else return true;

}

sendData = (e) => {
    e.preventDefault();
    const yourName = fname.value;
    const yourLName = lname.value;
    const yourEmail = email.value;

    choices = [...document.querySelectorAll(`#task-frontend input[type="checkbox"]`)];
    
    if (checkName(yourName) != 0) alert(checkName(yourName));
    else if (checkName(yourLName) != 0) alert(checkName(yourLName));
    else if ((checkMail(yourEmail)) != 0) alert(checkMail(yourEmail));
    else if (checkChoices(choices) == false) alert("Nie wybrano sekcji!");
    else alert("Formularz został poprawnie wypełniony :D")
    
}



send.addEventListener('click', sendData);
