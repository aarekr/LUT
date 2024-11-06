console.log('Hello World!');

type TVehicle = {
    model: string,
    color: string,
    year: number,
    power: number
};

let vehicle: TVehicle = {
    model: "Boring generic vehicle",
    color: "Red",
    year: 1993,
    power: 60
};

console.log(vehicle);

interface IVehicle {
    model: string,
    color: string,
    year: number,
    power: number
};

interface ICar extends IVehicle {
    bodytype: string,
    wheelCount: number
};

interface IBoat extends IVehicle {
    draft: number
};

interface IPlane extends IVehicle {
    wingSpan: number
};

let car: ICar = {
    model: "Ford focus", 
    color: "Green", 
    year: 2016, 
    power: 150, 
    bodytype: "Hatchback", 
    wheelCount: 4 
};

let plane: IPlane = {
    model: "Boeing 777", 
    color: "White", 
    year: 2020, 
    power: 170000, 
    wingSpan: 65 
};

let boat: IBoat = {
    model: "Bella", 
    color: "Black", 
    year: 2022, 
    power: 100, 
    draft: 0.42 
};

console.log(car);

console.log(plane);

console.log(boat);

function coolFunction<T>(param: T): string {
    return `jono`
};