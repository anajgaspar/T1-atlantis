import Prototype from "../interfaces/prototype"

export default class Address implements Prototype {
    public rua!: string
    public bairro!: string
    public cidade!: string
    public estado!: string
    public pais!: string
    public codigoPostal!: string

    public clone(): Prototype {
        let endereco = new Address()
        endereco.rua = this.rua
        endereco.bairro = this.bairro
        endereco.cidade = this.cidade
        endereco.estado = this.estado
        endereco.pais = this.pais
        endereco.codigoPostal = this.codigoPostal
        return endereco
    }
}