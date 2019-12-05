var a = 12;
var d = 15;
var k = 18;
var m = 3;
var f = a + d;
var g = k + m;
var l = f + g;

console.log(k + m);
console.log(l);

function countPersons(persons) {
    for (var i = 1; i < persons.length + 1; i++) {
        console.log(i);
    }
};

countPersons(['Андрей','Данил','Фаин','Котик']);