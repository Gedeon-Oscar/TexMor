
// To convert a text entery to Morse code I need to have an alphbet of the text entery characters(which are found in the english alphbet)
// and relate that to the  alpha-numeric charaters in Morse code respectivitly.

const englishAlph = {
    "A" : ".-",
    "B" : "-...",
    "C" : "-.-.",
    "D" : "-..",
    "E" : ".",
    "F" : "..-.",
    "G" : "--.",
    "H" : "....",
    "I" : "..",
    "J" : ".---",

    "K" : "-.-",
    "L" : ".-..",
    "M" : "--",
    "N" : "-.",
    "O" : "---",
    "P" : ".--.",
    "Q" : "--.-",
    "R" : ".-.",
    "S" : "...",
    "T" : "-",

    "U" : "..-",
    "V" : "...-",
    "W" : ".--",
    "X" : "-..-",
    "Y" : "-.--",
    "Z" : "--..",

    /*Numbers
    --------------
    */
    "0" : "-----",
    "1" : ".----",
    "2" : "..---",
    "3" : "...--",
    "4" : "....-",
    "5" : ".....",
    "6" : "-....",
    "7" : "--...",
    "8" : "---..",
    "9" : "----.",
};

function translateTwoMorse(){

    let textInput = document.getElementById("normalText").value;
    textInput = textInput.toUpperCase();

    let list1 = textInput.split("");
    let list2 = list1.map( x => {
        if(englishAlph[x]){
            return englishAlph[x];
        }
        else{
            return x;
        }

    });

    let translation = list2.join("");
    document.getElementById("morseText").value = translation;

}



