/**
 * @author Dharmil Chhadva
 * @studentID C0884179
 * @date July 15, 2023
 * 
 * @fileOverview This file contains the implementation of a car class.
 * @description This car class store car details and its functionalities.
 * @version 1.0.0
 */

class Car {

  /**
   * Creates a new Car instance.
   * @constructor
   * @param {string} brand - The brand of the car.
   * @param {string} model - The model of the car.
   * @param {number} year - The year the car was made.
   * @param {string} color - The color of the car.
   * @param {number} price - The price of the car.
   * @param {number} gas - The amount of gas in the car.
   */
  constructor(brand, model, year, color, price, gas) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.price = price;
    this.gas = gas;
  }

  /**
   * Makes the car honk.
   */
  honk() {
    console.log("Tuut tuut!");
  }


  /**
   * Displays the car details.
   */
  displays() {
    console.log("\nBrand: " + this.brand +
      "\nModel: " + this.model +
      "\nYear: " + this.year +
      "\nColor: " + this.color +
      "\nPrice: $" + this.price
    );
  }
}

/**
 * The number of races to run.
 * @constant {number} 
 */
const noOfRaces = 7;


/**
 * Displays the details of each car.
 * @param {Car[]} cars - An array of Car instances.
 */
function carDetails(cars) {
  for (i = 0; i < cars.length; i++) {
    console.log("---------------------------------------------------------");
    console.log(`Car ${i + 1} Details: `);
    cars[i].displays();

    console.log("\nHonk: ");
    cars[i].honk();
  }
}

/**
 * Runs the race for the specified cars.
 * @param {Car[]} cars - An array of Car instances.
 */
function race(cars) {
  console.log("\nOn your marks... Get set... Go... 🏎️  🏎️  🏎️  🏎️  🏎️  🏎️  🏎️")
  const currentYear = new Date().getFullYear();
  for (let i = 0; i < noOfRaces; i++) {
    for (let j = 0; j < cars.length; j++) {
      const yearsOld = currentYear - cars[j].year;
      const gasLoss = yearsOld > 0 ? 5 + yearsOld : 5;
      cars[j].gas -= gasLoss;
    }
  }
}

/**
 * Displays the remaining gas for each car.
 * @param {Car[]} cars - An array of Car instances.
 */
function displayCarGas(cars) {
  console.log("---------------------------------------------------------");
  for (i = 0; i < cars.length; i++) {
    console.log(`Gas Remaining for ${cars[i].brand} ${cars[i].model}: ${cars[i].gas}`);
  }
  console.log("---------------------------------------------------------");
}


// Cars list to hold all the car instances
const cars = [
  new Car("Honda", "CR-V", 2023, "Red", 50000, 45),
  new Car("Ford", "F-150", 2020, "Black", 25000, 30),
  new Car("BMW", "X5", 2022, "Green", 60000, 65),
  new Car("Mazda", "CX-5", 2019, "White", 15000, 60),
  new Car("Audi", "Q7", 2018, "Silver", 52000, 47),
  new Car("Kia", "Forte", 2020, "Blue", 21000, 56)
];


// Displaying car details
carDetails(cars);


// Displaying remaining gas in each car before the race
console.log("\n\nGas Remaining Before the Race: ");
displayCarGas(cars);

// Starting the race
race(cars);

// Displaying remaining gas in each car after the race
console.log("\nGas Remaining After the Race: ");
displayCarGas(cars);
