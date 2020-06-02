const { Vehicle, Train, Truck } = require('../train-or-truck.js');

//
// Проверка корректности работы конструкторов и методов
//
describe('Транспорт/Vehicle', () => {
  describe('чек constructor`а', () => {
    it('constructor Vehicle является функцией?', () => {
      expect(Vehicle).toEqual(jasmine.any(Function));
    });

    describe('при вызове конструктора', () => {
      let vehicle;
      beforeEach(() => {
        vehicle = new Vehicle('Polly');
      });

      it('устанавливается ли driver', () => {
        expect(vehicle.driver).toEqual('Polly');
      });

      it('устанавливается ли speed', () => {
        expect(vehicle.speed).toEqual(0);
      });
    });
  });

  describe('проверка метода .drive()', () => {
    let vehicle;

    beforeEach(() => {
      vehicle = new Vehicle('Polly');
    });

    it('являеется функцией', () => {
      expect(vehicle.drive).toEqual(jasmine.any(Function));
    });

    it('drive возвращает корректный текст с какой скоростью движется водитель', () => {
      expect(vehicle.drive(20)).toEqual('Polly driving at 20 kilometers per hour');
    });

    it('можно ли установить скорость с которой едете транспорт', () => {
      vehicle.drive(45);
      expect(vehicle.speed).toEqual(45);
    });
  });

  describe('проверка метода .stop()', () => {
    let vehicle;

    beforeEach(() => {
      vehicle = new Vehicle('Polly');
      vehicle.drive(100);
    });

    it('являеется функцией', () => {
      expect(vehicle.stop).toEqual(jasmine.any(Function));
    });

    it('выдает корректный текст и сбрасвает скорость', () => {
      expect(vehicle.stop()).toEqual('Polly has stopped');
      expect(vehicle.speed).toEqual(0);
    });
  });
});

describe('Поезд/Train', () => {
  describe('конструктор', () => {
    it('существует и являяется функцией', () => {
      expect(Train).toEqual(jasmine.any(Function));
    });

    describe('создание нового экземпляра', () => {
      let train;
      beforeEach(() => {
        train = new Train('Polly');
      });

      it('устанавливает водителя', () => {
        expect(train.driver).toEqual('Polly');
      });

      it('устанавливает начальную скорость', () => {
        expect(train.speed).toEqual(0);
      });
    });
  });

  describe('метод .drive()', () => {
    let train;
    beforeEach(() => {
      train = new Train('Polly');
    });

    it('метода/функция существует', () => {
      expect(train.drive).toEqual(jasmine.any(Function));
    });

    it('drive возвращает корректный текст', () => {
      expect(train.drive(20)).toEqual('Polly driving at 20 kilometers per hour');
    });

    it('скорость корректно устанавливается', () => {
      train.drive(45);
      expect(train.speed).toEqual(45);
    });
  });

  describe('метод .stop()', () => {
    let train;

    beforeEach(() => {
      train = new Train('Polly');
      train.drive(100);
    });

    it('метод существует', () => {
      expect(train.stop).toEqual(jasmine.any(Function));
    });

    it('сбрасывает скорость и возвращет текст', () => {
      expect(train.stop()).toEqual('Polly has stopped');
      expect(train.speed).toEqual(0);
    });
  });
});


describe('Грузовки/Truck', () => {
  describe('constructor', () => {
    it('является функцией', () => {
      expect(Truck).toEqual(jasmine.any(Function));
    });

    describe('при вызове', () => {
      let truck;
      beforeEach(() => {
        truck = new Truck('Polly');
      });

      it('устанавливает водителя', () => {
        expect(truck.driver).toEqual('Polly');
      });

      it('устанавливает начальную скорость', () => {
        expect(truck.speed).toEqual(0);
      });

      it('устанавливает значение по-умолчанию для груза/cargo ', () => {
        expect(truck.cargo).toEqual([]);
      });
    });
  });

  describe('метод .drive()', () => {
    let truck;

    beforeEach(() => {
      truck = new Truck('Polly');
    });

    it('метод существует', () => {
      expect(truck.drive).toEqual(jasmine.any(Function));
    });

    it('выдает корректный текст', () => {
      expect(truck.drive(20)).toEqual('Polly driving at 20 kilometers per hour');
    });

    it('устанавливает скорость', () => {
      truck.drive(45);
      expect(truck.speed).toEqual(45);
    });
  });

  describe('метод .stop()', () => {
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

  describe('метод погрузки груза', () => {
    let truck;

    beforeEach(() => {
      truck = new Truck('Polly');
      truck.loadCargo('test cargo');
    });

    it('проверка что груз соответствует загруженному', () => {
      expect(truck.cargo).toEqual(['test cargo']);
    });

    it('метод погрузки должен возвращать экземпляр прототипа грузовика/truck', () => {
      expect(truck.loadCargo('test')).toEqual(truck);
    });
  });

  describe('метод разгрузки груза', () => {
    let truck;
    let unloadedCargo;
    beforeEach(() => {
      truck = new Truck('Polly');
      truck.cargo = ['cargo 1', 'cargo 2'];
      unloadedCargo = truck.unloadCargo();
    });

    it('возвращает извлеченный груз', () => {
      expect(unloadedCargo).toEqual('cargo 2');
    });

    it('выдает корректное количество загруженных единиц ', () => {
      expect(truck.cargo.length).toEqual(1);
    });
  });
});
