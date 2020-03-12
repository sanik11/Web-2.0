//виробник
var map1 = new Map();
map1.set('Samsung', 'Samsung Galaxy A51 2020');
map1.set('Apple', 'Apple iPhone 11 Pro');
map1.set('Xiaomi', 'Xiaomi Redmi Note 8T');
map1.set('Honor', 'Honor 20');
map1.set('Huawei', 'Huawei P30 2019');
map1.set('Motorola', 'Motorola One Vision 4');

//ціна
var map2 = new Map([
    [9499, 'Samsung'],
    [33999, 'Apple'],
    [5499, 'Xiaomi'],
    [10999, 'Honor'],
    [16999, 'Huawei'],
    [8999, 'Motorola']
]);
//дата доставки
var map3 = new Map();
map3.set(2, 'Samsung');
map3.set(4, 'Apple');
map3.set(8, 'Xiaomi');
map3.set(6, 'Honor');
map3.set(25, 'Huawei');
map3.set(22, 'Motorola');


var ob = {};

var listMaker = []; // виробник
var listProduct = []; // продукт 
var listPrice = [];
var listTime = [];

map1.forEach((value, key) => {
    listMaker.push(key), listProduct.push(value)
});

map2.forEach((key, value) => {
    listPrice.push(value)
});

map3.forEach((key, value) => {
    listTime.push(value)
});

inPrice = minEl(listPrice);
inTime = minEl(listTime);
inMaxPrice = maxEl(listPrice);
inMaxTime = maxEl(listTime);


ob[listProduct[inPrice]] = `Ціна: ${listPrice[inPrice]}, Виробник: ${listMaker[inPrice]}, Час доставки: ${listTime[inPrice]}`;
ob[listProduct[inTime]] = `Ціна: ${listPrice[inTime]}, Виробник: ${listMaker[inTime]}, Час доставки: ${listTime[inTime]}`;
ob[listProduct[inMaxPrice]] = `Ціна: ${listPrice[inMaxPrice]}, Виробник: ${listMaker[inMaxPrice]}, Час доставки: ${listTime[inMaxPrice]}`;
ob[listProduct[inMaxTime]] = `Ціна: ${listPrice[inMaxTime]}, Виробник: ${listMaker[inMaxTime]}, Час доставки: ${listTime[inMaxTime]}`;
console.log(ob)

function minEl(ls) {
    var index = 0;
    var min = ls[index];
    for (let i = 0; i < ls.length; i++) {
        if (ls[i] < min) {
            min = ls[i]
            index = i
        }
    }
    return index;
}

function maxEl(ls) {
    var index = 0;
    var min = ls[index];
    for (let i = 0; i < ls.length; i++) {
        if (ls[i] > min) {
            min = ls[i]
            index = i
        }
    }
    return index;
}