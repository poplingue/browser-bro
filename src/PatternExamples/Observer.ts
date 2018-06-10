interface Subject {
  registerObserver(o: Observer);

  removeObserver(o: Observer);

  notifyObservers();
}

interface Observer {
  update(temperature: number);
}

export class WeatherStation implements Subject {

  private temperature: number;
  private observers: Observer[] = [];

  notifyObservers() {
    for (let observer of this.observers) {
      observer.update(this.temperature);
    }
  }

  removeObserver(o: Observer) {
    let index = this.observers.indexOf(o);
    this.observers.splice(index, 1);
  }

  registerObserver(o: Observer) {
    this.observers.push(o);
  }

  setTemperature(temp: number) {
    console.log('temperature', temp);
    this.temperature = temp;
    this.notifyObservers();
  }

}

class TemperatureDisplay implements Observer {
  private subject: Subject;

  constructor(weatherStation: Subject) {
    this.subject = weatherStation;
    weatherStation.registerObserver(this);
  }

  update(temperature: number) {
    // logic here...
    console.log('TemperatureDisplay');
  }

}

export class Fan implements Observer {
  private subject: Subject;

  constructor(weatherStation: Subject) {
    this.subject = weatherStation;
    weatherStation.registerObserver(this);
  }

  update(temperature: number) {
    if (temperature > 25) {
      // logic here...
      console.log('It\'s hot');
    }
  }
}
