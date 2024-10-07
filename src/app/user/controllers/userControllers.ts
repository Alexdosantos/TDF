import { Request, Response } from "express";
import { UserService } from "../service/userService";
import {
  UserCreateDto,
  UserUpdateDto,
} from "../dto/userCreateDto/userCreateDto";
import { UserCreateSchema } from "../userSchema/userSchema";

export class UserController {
  constructor(private readonly userService: UserService) {}

  async create(req: Request, res: Response) {
    try {
      const body = await UserCreateSchema.validate(req.body);
      const createUserDto = body as UserCreateDto;
      const user = await this.userService.create(createUserDto);
      return res.status(201).json(user);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
      }
      return res.status(500).json({ error: "Erro ao criar usuário" });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const users = await this.userService.findAll();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar usuários" });
    }
  }

  async findOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await this.userService.findOne(+id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(404).json({ error: "Erro ao buscar usuário" });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const body = await UserCreateSchema.validate(req.body);
      const updateUserDto = body as UserUpdateDto;
      const user = await this.userService.update(+id, updateUserDto);
      return res.status(200).json(user);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
      }
      return res.status(500).json({ error: "Erro ao atualizar usuário" });
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await this.userService.delete(+id);
      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: "Erro ao deletar usuário" });
    }
  }
}
