export class Util{
    /** static randomizar inicio: 0 */
    public static randomizar(inicio: number, fim: number): number{
        return inicio + Math.random() * (fim - inicio)
    }
}