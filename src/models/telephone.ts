import Prototype from "../interfaces/prototype"

export default class Telephone implements Prototype {
    public ddd!: string
    public numero!: string

    public clone(): Prototype {
        let telefone = new Telephone()
        telefone.ddd = this.ddd
        telefone.numero = this.numero
        return telefone
    }
}