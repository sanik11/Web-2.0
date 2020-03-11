var city1 = {};

city1.name = "city N";
city1.population = 10 ** 7;
city1.getName = function() {
    return this.name;
}
city1.exportStr = function() {
    return "name = " + this.name + "\npopulation = " + this.population + "\n";
}


var city2 = {
    "name": "city M",
    "population": 10 ** 7,
    getName() {
        return this.name;
    },
    exportStr() {
        return "name = " + this.name + "\npopulation = " + this.population + "\n";
    }
};

console.log(city1.exportStr())
console.log(city2.exportStr())