import { Router } from "express";
import { UserModule } from "../../app/user/module/userModue";

const userRouters = Router();
const { userController } = UserModule.instance();

userRouters.post("/create", async (req, res) => {
  try {
    await userController.create(req, res);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
});

userRouters.get("/findAll", async (req, res) => {
  try {
    await userController.findAll(req, res);
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
});

userRouters.get("/findOne/:id", async (req, res) => {
  try {
    await userController.findOne(req, res);
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    res.status(500).json({ error: "Erro ao buscar usuário" });
  }
});

userRouters.patch("/update/:id", async (req, res) => {
  try {
    await userController.update(req, res);
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    res.status(500).json({ error: "Erro ao atualizar usuário" });
  }
});

userRouters.delete("/delete/:id", async (req, res) => {
  try {
    await userController.delete(req, res);
  } catch (error) {
    console.error("Erro ao deletar usuário:", error);
    res.status(500).json({ error: "Erro ao deletar usuário" });
  }
});

export { userRouters };
