export abstract class Bird {
    abstract eat(): string
    abstract print(): string
}

interface FlyingBird {
    fly(): string
}

interface RunningBird {
    run(): string
}

interface SwimmerBird {
    swim(): string
}

export class Tucan extends Bird implements FlyingBird {
    constructor( private name: string ) {
        super();
    }

    public eat() {
      return "comer"
    }

    public fly() {
        return "volar"
    }

    print() {
        return `puedo ${this.eat()} y ${this.fly()}`
    }
}

export class Colibri extends Bird implements FlyingBird {
    constructor( private name: string ) {
        super();
    }

    public eat() {
      return "comer"
    }

    public fly() {
        return "volar"
    }

    print() {
        return `puedo ${this.eat()} y ${this.fly()}`
    }
}

export class Avestruz extends Bird implements RunningBird {
    constructor( private name: string ) {
        super();
    }

    public eat() {
      return "comer"
    }

    public run() {
        return "volar"
    }

    print() {
        return `puedo ${this.eat()} y ${this.run()}`
    }
}

export class Pinguino extends Bird implements RunningBird, SwimmerBird {
    constructor( private name: string ) {
        super();
    } 
    public eat() {
        return "comer"
    }
    public run() {
        return "correr"
    }
    public swim() {
        return "nadar"
    }
    print() {
        return `puedo ${this.eat()}, ${this.run()} y ${this.swim()}`
    }
}

