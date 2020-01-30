var str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, iste.';
var letter = prompt("Enter a letter:");


function count(str, letter) {
    letter = letter.toLowerCase();
    var counter = 0;
    for (let char of str.toLowerCase()) {
        if (char == letter) {
            counter += 1;
        }
    }
    return counter;
}


console.log(count(str, letter));