export class GnomoFactory {
    constructor(gnomoClass, nome, chapeu) {
        return new gnomoClass(nome, chapeu);
    }
}
