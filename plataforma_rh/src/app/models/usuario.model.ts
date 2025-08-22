// models/usuario.model.ts
export class Usuario {
  id?: number; // opcional, gerado pelo servidor
  nome: string;
  email: string;
  senha: string;
  dataCriacao?: Date; // adicionado pelo servidor
  tipoUsuario: string; // "comum" ou "admin"

  constructor(nome: string, email: string, senha: string) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.tipoUsuario = 'comum'; // todo novo cadastro entra como comum
  }
}
