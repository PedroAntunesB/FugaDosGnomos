export class Gnomo {
    #nome;
    #velocidadeBase = 10;
    chapeu;
    constructor() {
        if (this.constructor === Gnomo) {
            throw Error('Esta é uma classe abstrata');
        }
    }

    getVelocidade() {
        return this.#velocidadeBase;
    }
}