import * as Yup from 'yup';

// Esquema de validação para UserCreateDto
export const UserCreateSchema = Yup.object().shape({
  name: Yup.string()
    .required('Nome é obrigatório')
    .min(2, 'O nome deve ter pelo menos 2 caracteres')
    .max(50, 'O nome não pode exceder 50 caracteres'),
  email: Yup.string()
    .required('Email é obrigatório')
    .email('Email deve ser um endereço de email válido'),
});


