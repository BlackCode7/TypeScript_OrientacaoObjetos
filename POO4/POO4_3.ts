import { Util } from './Util';
import { Central } from './classeCentral'

export class Profissinal extends Central{
    private definicao_5 = 0;
    private definicao_6 = 0;
    constructor(id){
        super(id); // O super faz a chamada do  costrutor da super classe (Central)
        this._definicao_5 = Util.randomizar(21,1000);
        this._definicao_6 = Util.randomizar(11,1000);
        this.dataNasci = Util.randomizar(10, 1000);
        this.profissao = Util.randomizar(2, 1000);
        this.nacionalidade = Util.randomizar(3, 1000);
    }
}