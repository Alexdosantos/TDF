export interface UserCreateDto {
  id: number;
  name: string;
  email: string;
}

export interface UserUpdateDto  {
  
  name?: string;
  email?: string;
}


