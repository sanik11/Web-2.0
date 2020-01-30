function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

var arr = [];
for (let i = 0; i < randomInteger(5, 10); i++) {
    arr[i] = randomInteger(1, 20);
}

arr.forEach(el => console.log(el));