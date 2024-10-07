import { api } from "../../api/api";

export interface IUserCreate {
  name: string;
  email: string;
}

export const userCreateApi = async ({ name, email }: IUserCreate) => {
  try {
    const response = await api.post("/users/create", {
      name,
      email,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
