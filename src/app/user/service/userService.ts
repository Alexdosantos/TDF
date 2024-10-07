import {
  UserCreateDto,
  UserUpdateDto,
} from "../dto/userCreateDto/userCreateDto";

export class UserService {
  private users: UserCreateDto[] = [];
  private userId = 1;

  async create(createUserDto: UserCreateDto) {
    const user: UserCreateDto = {
      id: this.userId++,
      name: createUserDto.name,
      email: createUserDto.email,
    };

    this.users.push(user);
    return user;
  }
  async findAll() {
    try {
      return this.users;
    } catch (error) {
      return { error: true, message: "Erro ao buscar usuários", status: 400 };
    }
  }
  async findOne(id: number) {
    try {
      const user = this.users.find((user) => user.id === id);
      if (!user)
        return { error: true, message: "Usuário não encontrado", status: 400 };

      return user;
    } catch (error) {
      return { error: true, message: "Erro ao buscar usuário", status: 500 };
    }
  }
  async update(id: number, updateUserDto: UserUpdateDto) {
    try {
      const userIndex = this.users.findIndex((user) => user.id === id);
      if (userIndex === -1) {
        return { error: true, message: "Usuário não encontrado", status: 400 };
      }
      this.users[userIndex] = {
        ...this.users[userIndex],
        ...updateUserDto,
      };

      return this.users[userIndex];
    } catch (error) {
      return { error: true, message: "Erro ao atualizar usuário", status: 500 };
    }
  }
  async delete(id: number) {
    try {
      const userIndex = this.users.findIndex((user) => user.id === id);
      if (userIndex === -1)
        return { error: true, message: "Usuário não encontrado", status: 400 };

      this.users.splice(userIndex, 1);
      return { message: "Usuário deletado com sucesso", status: 200 };
    } catch (error) {
      return { error: true, message: "Erro ao deletar usuário", status: 500 };
    }
  }
}
