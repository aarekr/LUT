"use strict";
console.log('Hello World!');
let vehicle = {
    model: "Boring generic vehicle",
    color: "Red",
    year: 1993,
    power: 60
};
console.log(vehicle);
;
;
;
;
let car = {
    model: "Ford focus",
    color: "Green",
    year: 2016,
    power: 150,
    bodytype: "Hatchback",
    wheelCount: 4
};
let plane = {
    model: "Boeing 777",
    color: "White",
    year: 2020,
    power: 170000,
    wingSpan: 65
};
let boat = {
    model: "Bella",
    color: "Black",
    year: 2022,
    power: 100,
    draft: 0.42
};
console.log(car);
console.log(plane);
console.log(boat);
function coolFunction(param) {
    return `jono`;
}
;
let items;
function genericVehicleService(param) {
    return `genericVehicle parametri: ${param}`;
}
;
function add(item) {
    items.push(item);
}
;
function list() {
    for (let i = 0; i < items.length; i++) {
        console.log(items[i]);
    }
}
;
console.log(genericVehicleService('moi'));
let cars;
let boats;
add(car);
add(boat);
list();
