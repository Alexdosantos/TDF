import { Router } from "express";
import { DocumentsModule } from "../../app/documents/module/documentsModule";

const documentRouters = Router();
const { documentsController } = DocumentsModule.instance();

documentRouters.post("/create/:id", async (req, res) => {
  try {
    await documentsController.create(req, res);
  } catch (error) {
    console.error("Erro ao criar documento:", error);
    res.status(500).json({ error: "Erro interno ao criar documento" });
  }
});

documentRouters.get("/findAll", async (req, res) => {
  try {
    await documentsController.findAll(req, res);
  } catch (error) {
    console.error("Erro ao buscar documentos:", error);
    res.status(500).json({ error: "Erro interno ao buscar documentos" });
  }
});

documentRouters.get("/findOne/:id", async (req, res) => {
  try {
    await documentsController.findOne(req, res);
  } catch (error) {
    console.error("Erro ao buscar documento:", error);
    res.status(500).json({ error: "Erro ao buscar documento" });
  }
});

documentRouters.patch("/update/:id", async (req, res) => {
  try {
    await documentsController.update(req, res);
  } catch (error) {
    console.error("Erro ao atualizar documento:", error);
    res.status(500).json({ error: "Erro ao atualizar documento" });
  }
});

documentRouters.delete("/delete/:id", async (req, res) => {
  try {
    await documentsController.delete(req, res);
  } catch (error) {
    console.error("Erro ao deletar documento:", error);
    res.status(500).json({ error: "Erro ao deletar documento" });
  }
});

export { documentRouters };
