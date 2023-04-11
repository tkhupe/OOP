// factory function
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}

const circle = createCircle(1);
// circle.draw();
// console.log(circle);

// constructor function

function Circle(radius) {
    // console.log('this is a', this);
    let color ='red';
    let defaultLocation = {x: 0, y: 0};
    this.color = color;
    this.radius = radius;
    let computeOptimumLocation = function (factor) {

    }
    this.getDefaultLocation = function () {
        console.log('getDefaultLocation');
        return defaultLocation;
    };
    this.draw = function () {
        computeOptimumLocation(0.1); 
        console.log('draw');
    }
}
const aCircle = new Circle(10);
aCircle.location = {x: 1};
const propertyName = 'local';
aCircle[propertyName] = {y: 2};
delete aCircle.local;
for (let key in aCircle) {
    if (typeof aCircle[key] !== 'function')
    console.log(key, aCircle[key]);
}
const keys = Object.keys(aCircle);
console.log(keys);
if ('radius' in aCircle)
console.log('Circle has a radius');

Circle.call({}, 1);
Circle.apply({}, [1, 2]);

const anotherCircle = new Circle(1);
// Circle.call({}, 1) // equals the const anotherCircle
// const anotherCircle = new Circle(1);
// const Circle1 = new Function('radius', `
// this.radius = radius;
// this.draw = function() {
//     console.log('draw');
// }
// `);
// const theCircle = new Circle1(1);

// object literal

// const circle = {
//     radius: 1, // property
//     locations: {
//         x: 1,
//         y: 2
//     },
//     draw: function() { // method
//         console.log('draw');
//     }
// };

// console.log('hello world');


// let baseSalary = 30_000;
// let overtime = 10;
// let rate =20;

// function getWage(baseSalary, overtime, rate) {
//     return baseSalary + (overTime * rate);
// }

// let employee = {
//     baseSalary: 30_000,
//     overtime: 10,
//     rate: 20,
//     getWage: function () {
//         return this.baseSalary + (this.overtime * this.rate);
//     }
// };

// employee.getWage();
