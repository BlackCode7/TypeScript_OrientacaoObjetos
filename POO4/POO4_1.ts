import { Util } from './Util';
import { Central } from './classeCentral'

export class Pessoa extends Central{    
    private _definicao_1 = 0;
    private _definicao_2 = 0;
    constructor(id){    
        super( id ); // O super faz a chamada do costrutor da super classe (Central)     
        this._definicao_1 = Util.randomizar(11, 1000);
        this._definicao_2 = Util.randomizar(12, 1000);
        this.dataNasci = Util.randomizar(11, 1000);
        this.profissao = Util.randomizar(10, 1000);
        this.nacionalidade = Util.randomizar(1, 1000);
    }
}