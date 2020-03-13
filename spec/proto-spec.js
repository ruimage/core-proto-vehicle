describe('Vehicle prototype', () => {
  it('has a drive method', () => {
    expect(Vehicle.prototype.drive).toEqual(jasmine.any(Function));
  });
});

describe('Train', () => {
  describe('prototype constructor', () => {
    it('is Train', () => {
      expect(Train.prototype.constructor).toEqual(Train);
    });
  });

  describe('.drive()', () => {
    let train;
    beforeEach(() => {
      train = new Train('test');
    });

    it('is the same function as Vehicle.prototype.drive', () => {
      expect(train.drive).toBe(Vehicle.prototype.drive);
    });
  });
});

describe('Truck', () => {
  describe('prototype constructor', () => {
    it('is Truck', () => {
      expect(Truck.prototype.constructor).toEqual(Truck);
    });
  });

  describe('.drive()', () => {
    let truck;
    beforeEach(() => {
      truck = new Truck('test');
    });

    it('is the same function as Vehicle.prototype.drive', () => {
      expect(truck.drive).toBe(Vehicle.prototype.drive);
    });
  });

  describe('.loadCargo()', () => {
    let truck;
    beforeEach(() => {
      truck = new Truck('test');
    });

    it('is on the prototype', () => {
      expect(Truck.prototype.loadCargo).toEqual(jasmine.any(Function));
      expect(truck.loadCargo).toBe(Truck.prototype.loadCargo);
    });
  });

  describe('.unloadCargo()', () => {
    let truck;
    beforeEach(() => {
      truck = new Truck('test');
    });

    it('is on the prototype', () => {
      expect(Truck.prototype.unloadCargo).toEqual(jasmine.any(Function));
      expect(truck.unloadCargo).toBe(Truck.prototype.unloadCargo);
    });
  });
});
