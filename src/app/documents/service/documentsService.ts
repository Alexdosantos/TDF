import { UserService } from "../../user/service/userService";
import { DocumentsCreateDto } from "../createDocumentsDto/createDocumentsDto";

export class DocumentsService {
  constructor(
    private documents: DocumentsCreateDto[] = [],
    private userService: UserService,
    private documentsId = 1
  ) {}
  async create(userId: number, documents: DocumentsCreateDto) {
    try {
      const user = await this.userService.findOne(userId);
      if (!user)
        return { error: true, message: "Usuário ja existente", status: 400 };

      const newDocuments = {
        id: this.documentsId++,
        name: documents.name,
        status: documents.status,
      };
      this.documents.push(newDocuments);
      return newDocuments;
    } catch (error) {
      return { error: true, message: "Erro ao criar documento", status: 400 };
    }
  }
  async findAll() {
    try {
      return this.documents;
    } catch (error) {
      return { error: true, message: "Erro ao buscar documentos", status: 400 };
    }
  }
  async findOne(id: number) {
    try {
      const document = this.documents.find((document) => document.id === id);
      return document;
    } catch (error) {
      return { error: true, message: "Erro ao buscar documento", status: 400 };
    }
  }
  async update(id: number, userId: number, documents: DocumentsCreateDto) {
    try {
      const user = await this.userService.findOne(userId);
      if (!user) {
        return { error: true, message: "Usuário não encontrado", status: 400 };
      }

      const document = this.documents.find((document) => document.id === id);
      if (!document)
        return {
          error: true,
          message: "Documento não encontrado",
          status: 400,
        };

      this.documents[id] = {
        ...this.documents[id],
        ...documents,
      };
      return document;
    } catch (error) {
      return {
        error: true,
        message: "Erro ao atualizar documento",
        status: 400,
      };
    }
  }
  async delete(id: number, userId: number) {
    try {
      const user = await this.userService.findOne(userId);
      if (!user) {
        return { error: true, message: "Usuário não encontrado", status: 400 };
      }

      const document = this.documents.find((document) => document.id === id);
      return document;
    } catch (error) {
      return { error: true, message: "Erro ao deletar documento", status: 400 };
    }
  }
}
