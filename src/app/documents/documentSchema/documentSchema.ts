import * as Yup from 'yup';

export const DocumentsCreateSchema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  status: Yup.string().required('Status é obrigatório'),
});

