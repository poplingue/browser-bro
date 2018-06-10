// ------------------------------ Parent class ------------------------------

abstract class Car {
  public description: string;

  public getDescription(): string {
    return this.description
  }

  public abstract cost(): number;
}

// ------------------------------ Child classes ------------------------------

class ModelS extends Car {
  // override method
  public cost(): number {
    return 30000;
  }
}

class ModelX extends Car {
  // override method
  public cost(): number {
    return 50000;
  }
}

// ------------------------------ Parent decorator class ------------------------------

abstract class CarOptions extends Car {
  decoratedCar: Car;

  public abstract getDescription(): string;

  public abstract cost(): number;

}

// ------------------------------ Child decorator classes ------------------------------

class EnhancedAutoPilot extends CarOptions{

  constructor(car: Car){
    super();
    this.decoratedCar = car;
  }
  public getDescription(): string{
    return this.decoratedCar.getDescription() + 'Enhanced Autopilot';
  }
  public cost(): number{
    return this.decoratedCar.cost() + 5000;
  }
}

class RearFacingSeat extends CarOptions{
  decoratedCar: Car;

  constructor(car: Car){
    super();
    this.decoratedCar = car;
  }
  public getDescription(): string{
    return this.decoratedCar.getDescription() + 'Rear facing seats';
  }
  public cost(): number{
    return this.decoratedCar.cost() + 4000;
  }
}

// ------------------------------ Execution ------------------------------

// let myTesla = new ModelS();
// myTesla = new EnhancedAutoPilot(myTesla);
// myTesla = new RearFacingSeat(myTesla);
// console.log(myTesla.cost());
