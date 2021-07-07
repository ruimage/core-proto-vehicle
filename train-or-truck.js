// The Train and Truck constructor functions have similar properties and behavior.
// Rewrite them to eliminate duplication of the same properties and methods.
function Vehicle(driver) {
  this.driver = driver;
  this.speed = 0;
}

function Train(driver) {
  this.driver = driver;
  this.type = 'passenger'; // 'passenger', 'freight', 'mail'
  this.speed = 0;
  this.drive = function (kmh) {
    this.speed = kmh;
    return `${this.driver} driving at ${kmh} kilometers per hour`;
  };
  this.stop = function () {
    this.speed = 0;
    return `${this.driver} has stopped`;
  };
}

function Truck(driver) {
  this.driver = driver;
  this.speed = 0;
  this.cargo = [];
  this.drive = function (kmh) {
    this.speed = kmh;
    return `${this.driver} driving at ${kmh} kilometers per hour`;
  };
  this.stop = function () {
    this.speed = 0;
    return `${this.driver} has stopped`;
  };
  this.loadCargo = function (cargo) {
    return this.cargo;
  };
}

Truck.prototype.unloadCargo = function () {
  return this.cargo;
};
// export Vehicle, Train, Truc to the file with tests
module.exports = { Vehicle, Train, Truck };
