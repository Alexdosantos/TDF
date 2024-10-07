import { Request, Response } from "express";
import { DocumentsCreateDto } from "../createDocumentsDto/createDocumentsDto";
import { DocumentsService } from "../service/documentsService";
import { DocumentsCreateSchema } from "../documentSchema/documentSchema";

export class DocumentsControllers {
  constructor(private readonly documentsService: DocumentsService) {}
  async create(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const userId = id;
      if (!id) {
        return res.status(400).json({ error: "Id não encontrado" });
      }
      if (!userId) {
        return res.status(400).json({ error: "Usuário não encontrado" });
      }
      const body = await DocumentsCreateSchema.validate(req.body);
      const createDocumentsDto = body as DocumentsCreateDto;
      const documents = await this.documentsService.create(
        +userId,
        createDocumentsDto
      );

      return res.status(201).json(documents);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
      }
      return res.status(500).json({ error: "Erro ao criar documento" });
    }
  }
  async findAll(req: Request, res: Response) {
    try {
      const documents = await this.documentsService.findAll();
      return res.status(200).json(documents);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar documentos" });
    }
  }
  async findOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const document = await this.documentsService.findOne(+id);
      if (!document) {
        return res.status(404).json({ error: "Documento não encontrado" });
      }
      return res.status(200).json(document);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar documento" });
    }
  }
  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { userId } = req.params;
      if (!id) {
        return res.status(400).json({ error: "Documento não encontrado" });
      }
      if (!userId) {
        return res.status(500).json({ error: "Usuário não encontrado" });
      }
      const documents = req.body as DocumentsCreateDto;
      const document = await this.documentsService.update(
        +id,
        +userId,
        documents
      );
      return res.status(200).json(document);
    } catch (error) {
      return res.status(400).json({ error: "Erro ao atualizar documento" });
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { userId } = req.params;
      if (!id) {
        return res.status(400).json({ error: "Documento não encontrado" });
      }
      if (!userId) {
        return res.status(400).json({ error: "Usuário não encontrado" });
      }
      const document = await this.documentsService.delete(+id, +userId);
      return res.status(200).json(document);
    } catch (error) {
      return res.status(400).json({ error: "Erro ao deletar documento" });
    }
  }
}
