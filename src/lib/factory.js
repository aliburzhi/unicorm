const warehouse = require("./warehouse");

class CarFactory {
    constructor(power = 10)
    {
        this.power = power;
        this.warehouse = warehouse;
    }

    produceCar(color = 'red', wheels = 4, engine = false)
    {
        if (this.power < 2) {
            return null;
        } else {
            this.power -= 2;
        }
        const currentId = warehouse.nextIdentifier;
        this.warehouse.nextIdentifier += 1;

        const newCar = {
            id: currentId,
            color,
            wheels,
            engine
        };
        this.warehouse.createdCars.push(newCar);
    }
    addEnergyPower(value = 0) {
        this.power += value;
    }
    changeCarColor(changeCar, newColor = 'blue') {
        if (this.power < 1) {
            return null;
        } else {
            this.power -=1
        }

        this.warehouse.createdCars.forEach (car => {
            if (car.id === changeCar.id) {
                car.color = newColor
            }
        })
    }
}

module.exports = CarFactory;


