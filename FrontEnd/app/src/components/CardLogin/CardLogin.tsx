import { yupResolver } from "@hookform/resolvers/yup";
import { userCreateSchema } from "../../schema/userCreateSchema/userCreateSchema";
import * as S from "./CardLogin.Styled";
import { useForm } from "react-hook-form";
import { IUserCreate, userCreateApi } from "../../Service/user/userCreate";
import { useMutation } from "@tanstack/react-query";

const CardLogin = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userCreateSchema) });

  const mutation = useMutation({
    mutationFn: (data: IUserCreate) => userCreateApi(data),
    onSuccess: () => {
      alert("✅ Usuário criado com sucesso");
      reset();
    },
    onError: () => {
      alert("❌ Erro ao criar usuário");
    },
  });

  const onSubmit = (data: IUserCreate) => {
    mutation.mutate(data);
  };
  return (
    <S.Container>
      <S.Card>
        <S.Title>Criar Usuário</S.Title>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.TextErro>{errors.name?.message}</S.TextErro>
          <S.Input type="text" placeholder="Nome" {...register("name")} />
          <S.TextErro>{errors.email?.message}</S.TextErro>
          <S.Input type="email" placeholder="Email" {...register("email")} />
          <S.Button>Criar</S.Button>
        </S.Form>
      </S.Card>
    </S.Container>
  );
};

export default CardLogin;
