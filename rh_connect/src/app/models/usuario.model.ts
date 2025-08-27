export class Usuario {
  id?: number;
  nome: string;
  email: string;
  senha: string;
  tipoUsuario: 'comum' | 'admin'; // 👈 agora tipado
  dataCriacao?: Date;

  constructor(
    nome: string,
    email: string,
    senha: string,
    tipoUsuario: 'comum' | 'admin' = 'comum'
  ) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.tipoUsuario = tipoUsuario; // sempre comum ao criar
  }
}
