'use strict';

// The Car and the Truck class have similar behavior and properties.
// Rewrite them in a way such that they share those properties.
var Vehicle = function (driver) {
  this.driver = driver;
  this.speed = 0;
};

    Vehicle.prototype.drive = function (mph) {
      this.speed = mph;
      return this.driver + ' driving at ' + mph + ' miles per hour';
    };

var Car = function (driver) {

  Vehicle.apply(this, arguments);

  // this.__proto__ = new Vehicle(driver);
  // this.driver = driver;
  // this.speed = 0;
  // this.drive = function(mph) {
  //   this.speed = mph;
  //   return this.driver + ' driving at ' + mph + ' miles per hour';
  // };
};

var Truck = function (driver) {
  Vehicle.apply(this, arguments);


  // this.__proto__ = new Vehicle(driver);

  // this.driver = driver;
  // this.speed = 0;
  this.cargo = [];
  // this.drive = function(mph) {
  //   this.speed = mph;
  //   return this.driver + ' driving at ' + mph + ' miles per hour';
  // };

};

Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;


Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;


Truck.prototype.loadCargo = function (cargo) {
  this.cargo.push(cargo);
  return this;
};

Truck.prototype.unloadCargo = function () {
  return this.cargo.pop();
};

  // Car.prototype = Vehicle;
  // Truck.prototype = Vehicle;