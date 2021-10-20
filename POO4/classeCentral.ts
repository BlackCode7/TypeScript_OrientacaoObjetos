import { Util } from './Util';

export class Central{
    protected _id = 0;
    protected _dataNasci = 0;
    protected _profissao = 0;
    protected _nacionalidade = 0;

    constructor(id: number){
        this.id = Util.randomizar(2, 1000);
        this.dataNasci = Util.randomizar(3, 1000);
        this.profissao = Util.randomizar(21, 1000);
        this.nacionalidade = Util.randomizar(2, 1000);
    }
}