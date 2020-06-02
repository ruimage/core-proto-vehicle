const { Vehicle, Train, Truck } = require('../train-or-truck.js');

//
// Проверка корректности прототипов и наследования
//
describe('Прототип Vehicle', () => {
  it('имеет метод drive', () => {
    expect(Vehicle.prototype.drive).toEqual(jasmine.any(Function));
  });
});

describe('Прототип поезда/Train', () => {
  describe('имеет свой constructor', () => {
    it('is Train', () => {
      expect(Train.prototype.constructor).toEqual(Train);
    });
  });

  describe('метод .drive', () => {
    let train;
    beforeEach(() => {
      train = new Train('test');
    });

    it('наследует функцию прототипа Vehicle', () => {
      expect(train.drive).toBe(Vehicle.prototype.drive);
    });
  });
});

describe('Грузовик/Truck', () => {
  describe('имеет свой constructor', () => {
    it('is Truck', () => {
      expect(Truck.prototype.constructor).toEqual(Truck);
    });
  });

  describe('метод .drive', () => {
    let truck;
    beforeEach(() => {
      truck = new Truck('test');
    });

    it('наследует функцию прототипа Vehicle.prototype.drive', () => {
      expect(truck.drive).toBe(Vehicle.prototype.drive);
    });
  });

  describe('метод .loadCargo', () => {
    let truck;
    beforeEach(() => {
      truck = new Truck('test');
    });

    it('есть в прототипе', () => {
      expect(Truck.prototype.loadCargo).toEqual(jasmine.any(Function));
      expect(truck.loadCargo).toBe(Truck.prototype.loadCargo);
    });
  });

  describe('метод .unloadCargo', () => {
    let truck;
    beforeEach(() => {
      truck = new Truck('test');
    });

    it('есть в прототипе', () => {
      expect(Truck.prototype.unloadCargo).toEqual(jasmine.any(Function));
      expect(truck.unloadCargo).toBe(Truck.prototype.unloadCargo);
    });
  });
});
