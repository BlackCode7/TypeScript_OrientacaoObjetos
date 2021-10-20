import { Util } from './Util';
import { Central } from './classeCentral'

export class Estudante extends Central{    
    private definicao_3 = 0;
    private definicao_4 = 0;
    constructor(id){   
        super(id); // O super faz a chamada do  costrutor da super classe (Central)    
        this._definicao_3 = Util.randomizar(3, 1000);
        this._definicao_4 = Util.randomizar(33, 1000);
        this.dataNasci = Util.randomizar(13, 1000);
        this.profissao = Util.randomizar(333, 1000);
        this.nacionalidade = Util.randomizar(31, 1000);
    }
}