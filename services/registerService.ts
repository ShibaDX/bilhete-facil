import { api } from './api'

type RegistroResposta = {
    id: number;
    name: string;
    email: string;
    token: string;
}

export async function registrar(nome: string, email: string, senha: string) {
    const resposta = await api.post<RegistroResposta>("/auth/customer/register", {
        name: nome,
        email: email,
        password: senha
    });


    return resposta.data.token; 
}