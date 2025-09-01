import Client from "./models/client.js";
import Address from "./models/address.js";
import Telephone from "./models/telephone.js";

let cliente = new Client()
cliente.nome = `Teresa Cristina Maria de Bourbon`
cliente.nomeSocial = `Imperatriz Teresa Cristina`
cliente.dataCadastro = new Date(1843, 9, 4)
cliente.dataNascimento = new Date(1822, 3, 14)

let endereco = new Address()
endereco.rua = `R. do Catete`
endereco.bairro = `Copacabana`
endereco.cidade = `Rio de Janeiro`
endereco.estado = `Rio de Janeiro`
endereco.pais = `Brasil`
endereco.codigoPostal = `22220-000`
cliente.endereco = endereco

let telefone = new Telephone()
telefone.ddd = `21`
telefone.numero = `99999-9999`

let dependente = new Client()
dependente.nome = `Pedro de Alcântara Luiz Filipe Maria Gastão`
dependente.nomeSocial = `Príncipe do Grão-Pará`
dependente.dataCadastro = new Date(1921, 10, 14)
dependente.dataNascimento = new Date(1875, 10, 15)
dependente.endereco = cliente.endereco.clone() as Address
dependente.telefones = cliente.telefones.map(tel => tel.clone() as Telephone)
dependente.titular = cliente
cliente.dependentes.push(dependente)

console.log(cliente)
console.log(dependente)
