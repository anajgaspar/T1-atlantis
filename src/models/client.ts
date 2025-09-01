import Document from "./document";
import Address from "./address";
import Telephone from "./telephone";

export default class Client {
    public nome!: string
    public nomeSocial!: string
    public dataNascimento!: Date
    public dataCadastro!: Date
    public telefones: Telephone[] = []
    public endereco!: Address
    public documentos: Document[] = []
    public dependentes: Client[] = []
    public titular!: Client
    
    public addDependents(dependente: Client){
        dependente.titular = this
        dependente.endereco = this.endereco.clone() as Address
        dependente.telefones = this.telefones.map(tel => tel.clone() as Telephone)
        this.dependentes.push(dependente)
    }
}