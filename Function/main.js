function Declaration(salutation, name, now = new Date()) {
    console.log("Declaration: " + salutation + " " + name + ". Now " + now);

}

var Expression = function(salutation, name, now = new Date()) {

    for (let i = 0; i < arguments.length; i++) {
        console.log("-> " + arguments[i]);
    }

    salutation = "Bye";


    if (name == "Boris") {
        name = "Vasya";
    } else {
        name = "Boris";
    }

    console.log("Expression: " + salutation + " " + name + ". Now " + now);
}


Declaration("Hello", "Vasya")
Expression("Hello", "Boris")