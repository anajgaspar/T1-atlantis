import { DocumentType } from "../enum/documentType";

export default class Document {
    public numero!: string
    public tipo!: DocumentType
    public dataExpedicao!: Date
}