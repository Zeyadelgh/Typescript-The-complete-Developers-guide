class Vehicle {
  public drive(): void {
    console.log('chugga chugga');
  }

  public honk(): void {
    console.log('beep...');
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log('vroom');
  }

  public startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car();
car.startDrivingProcess();
car.honk();
