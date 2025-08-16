import { Gnomo } from "./AbstractGnomo";
export class GnomoVeloz extends Gnomo {
    constructor(nome, chapeu) {
        super(nome, chapeu);
        this.velocidade = (this.getVelocidade() + 50);
    }

}
