// Behavioral specs.
describe('Vehicle', () => {
  describe('the constructor', () => {
    it('is a function', () => {
      expect(Vehicle).toEqual(jasmine.any(Function));
    });

    describe('when called', () => {
      let vehicle;
      beforeEach(() => {
        vehicle = new Vehicle('Polly');
      });

      it('sets the driver', () => {
        expect(vehicle.driver).toEqual('Polly');
      });

      it('sets the initial speed', () => {
        expect(vehicle.speed).toEqual(0);
      });
    });
  });

  describe('.drive()', () => {
    let vehicle;

    beforeEach(() => {
      vehicle = new Vehicle('Polly');
    });

    it('exists', () => {
      expect(vehicle.drive).toEqual(jasmine.any(Function));
    });

    it('drives', () => {
      expect(vehicle.drive(20)).toEqual('Polly driving at 20 kilometers per hour');
    });

    it('sets the speed', () => {
      vehicle.drive(45);
      expect(vehicle.speed).toEqual(45);
    });
  });

  describe('.stop()', () => {
    let vehicle;

    beforeEach(() => {
      vehicle = new Vehicle('Polly');
      vehicle.drive(100);
    });

    it('exists', () => {
      expect(vehicle.stop).toEqual(jasmine.any(Function));
    });

    it('stops', () => {
      expect(vehicle.stop()).toEqual('Polly has stopped');
      expect(vehicle.speed).toEqual(0);
    });
  });
});

describe('Train', () => {
  describe('the constructor', () => {
    it('is a function', () => {
      expect(Train).toEqual(jasmine.any(Function));
    });

    describe('when called', () => {
      let train;
      beforeEach(() => {
        train = new Train('Polly');
      });

      it('sets the driver', () => {
        expect(train.driver).toEqual('Polly');
      });

      it('sets the initial speed', () => {
        expect(train.speed).toEqual(0);
      });
    });
  });

  describe('.drive()', () => {
    let train;
    beforeEach(() => {
      train = new Train('Polly');
    });

    it('exists', () => {
      expect(train.drive).toEqual(jasmine.any(Function));
    });

    it('drives', () => {
      expect(train.drive(20)).toEqual('Polly driving at 20 kilometers per hour');
    });

    it('sets the speed', () => {
      train.drive(45);
      expect(train.speed).toEqual(45);
    });
  });

  describe('.stop()', () => {
    let train;

    beforeEach(() => {
      train = new Train('Polly');
      train.drive(100);
    });

    it('exists', () => {
      expect(train.stop).toEqual(jasmine.any(Function));
    });

    it('stops', () => {
      expect(train.stop()).toEqual('Polly has stopped');
      expect(train.speed).toEqual(0);
    });
  });
});


describe('Truck', () => {
  describe('the constructor', () => {
    it('is a function', () => {
      expect(Truck).toEqual(jasmine.any(Function));
    });

    describe('when called', () => {
      let truck;
      beforeEach(() => {
        truck = new Truck('Polly');
      });

      it('sets the driver', () => {
        expect(truck.driver).toEqual('Polly');
      });

      it('sets the initial speed', () => {
        expect(truck.speed).toEqual(0);
      });

      it('sets the initial cargo load', () => {
        expect(truck.cargo).toEqual([]);
      });
    });
  });

  describe('.drive()', () => {
    let truck;

    beforeEach(() => {
      truck = new Truck('Polly');
    });

    it('exists', () => {
      expect(truck.drive).toEqual(jasmine.any(Function));
    });

    it('drives', () => {
      expect(truck.drive(20)).toEqual('Polly driving at 20 kilometers per hour');
    });

    it('sets the speed', () => {
      truck.drive(45);
      expect(truck.speed).toEqual(45);
    });
  });

  describe('.stop()', () => {
    let truck;

    beforeEach(() => {
      truck = new Truck('Polly');
      truck.drive(100);
    });

    it('exists', () => {
      expect(truck.stop).toEqual(jasmine.any(Function));
    });

    it('stops', () => {
      expect(truck.stop()).toEqual('Polly has stopped');
      expect(truck.speed).toEqual(0);
    });
  });

  describe('.loadCargo()', () => {
    let truck;

    beforeEach(() => {
      truck = new Truck('Polly');
      truck.loadCargo('test cargo');
    });

    it('adds the cargo on the truck', () => {
      
      expect(truck.cargo).toEqual(['test cargo']);
    });

    it('returns itself', () => {
      expect(truck.loadCargo('test')).toEqual(truck);
    });
  });

  describe('.unloadCargo()', () => {
    let truck;
    let unloadedCargo;
    beforeEach(() => {
      truck = new Truck('Polly');
      truck.cargo = ['cargo 1', 'cargo 2'];
      unloadedCargo = truck.unloadCargo();
    });

    it('returns the latest cargo', () => {
      expect(unloadedCargo).toEqual('cargo 2');
    });

    it('reduces the cargo load by 1', () => {
      expect(truck.cargo.length).toEqual(1);
    });
  });
});
