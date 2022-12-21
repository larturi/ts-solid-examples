import { Vehicle, Tesla, Audi, Toyota, Honda, Volvo } from './03-liskov-b';

(() => {
    
    const printCarSeats = ( cars: Vehicle [] ) => {
        cars.forEach(car => {
            console.log(car.constructor.name, car.getNumberOfSeats());
        })
    }
    
    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
        new Volvo(2),
    ];

    printCarSeats( cars );

})();