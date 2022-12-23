import { Bird, Tucan, Colibri, Avestruz, Pinguino } from './04-segregation-b';

(() => {

    const printBirds = ( birds: Bird [] ) => {
        birds.forEach(bird => {
            console.log(`Soy ${bird.constructor.name}, ${bird.print()}`);
        })
    }
    
    const birds = [
        new Tucan("Tucan"),
        new Colibri("Colibri"),
        new Avestruz("Avestruz"),
        new Pinguino("Pinguino"),
    ];

    printBirds( birds );

})();