<h1 align="center"> ## DOCUMENTAÇÃO   </h1>
<h1 align="center"> Aplicativo da RH Connect </h1>

### ⭐Participante:  
<h6>DERICK GOMES CORREIA </h6>
<h6>ENZO DONIZETTI BONATTI RODRIGUES </h6>
<h6>GUILHERME CAVALHIERI XAVIER </h6>
<h6>JULYA ESTRELA SILVA </h6>

<p align="center">
<img width="500" height="500" alt="Image" src="https://github.com/user-attachments/assets/814b894a-d9b2-46cb-be80-b03cc9b63840" />
</p>
<p align="center">
> Status do Projeto: Em desenvolvimento :warning:
</p>


## 1.Introdução  
### 1.1 Descrição  
- O projeto envolve o desenvolvimento de um site de departamento de RH, que permite os usuários comuns se cadastrarem, visualizarem vagas e enviarem seus currículos além de permitir que exista um administrador que pode criar, editar e excluir vagas.  
### 1.2 Objetivo  
<p align="center">
<img width="572" height="313" alt="Image" src="https://github.com/user-attachments/assets/61aab7c9-66a5-49ac-a3c4-4fbedea6a1f2" />
</p>
### 1.3 Escopo  
- O sistema RH Connect será uma aplicação SPA (Single Page Application) desenvolvida em Angular para gestão de recrutamento. Ele permitirá que candidatos se cadastrem, enviem seus currículos e visualizem vagas, enquanto administradores poderão gerenciar vagas e visualizar currículos recebidos. 

## 2. Descrição Geral  
### 2.2 Usuários  
Usuário Comum (Candidato) 
- Cadastro e login. 
- Cadastro e edição de currículo. 
- Visualização de vagas públicas. 

Administrador 
- Login. 
- Cadastro, edição e exclusão de vagas. 
- Visualização de currículos recebidos. 

### 2.3 Premissas  
- É necessário que o cliente disponibilize um computador ou celular pessoal.  

## 3.Requisitos Funcionais 
### 3.1 Usuário Comum 
- RF01: Cadastro de conta com nome, e-mail e senha. 
- RF02: Login com autenticação. 
- RF03: Cadastro e edição de currículo. 
- RF04: Visualização de vagas disponíveis. 

### 3.2 Usuário Administrador 
- RF05: Login administrativo. 
- RF06: Cadastro de novas vagas. 
- RF07: Edição de vagas existentes. 
- RF08: Exclusão de vagas. 
- RF09: Visualização de currículos recebidos. 

### 3.3 Regras Gerais 
- Restrições de acesso baseadas no tipo de usuário. 
- Controle de permissões baseado no tipo de usuário (user ou admin). 
- Rotas protegidas por Guards. 

## 4.Requisitos Não Funcionais  
- RNF01: Aplicação desenvolvida em Angular. 
- RNF02: Utilização de Angular Material para interface. 
- RNF03: Backend simulado durante o protótipo. 
- RNF04: Armazenamento do token de autenticação no localStorage. 

### 4.1 Recursos humanos 
- Desenvolvedor Frontend (Angular). 
- UX/UI Designer (para protótipo). 
- Product Owner (para validar requisitos). 

### 4.2 Ferramentas de Desenvolvimento 
- Frontend: Angular 16+, Angular Material. 
- Backend Simulado: Angular In-memory Web API. 
- Controle de Versão: Git + GitHub. 
- Gerenciamento de Tarefas: Trello. 
- Editor: VS Code. 
- Comunicação: Teams. 

## 5. Regras de Negócio  
### 5.1 Restrições de Hardware  
- Dispositivo com no mínimo de 512MB de memória RAM.  
- O dispositivo de conter a função Wi-Fi ou Plano de Dados pelo Chip SIM para acesso à internet.  

## 6. Identificação de Casos de Uso  
### 6.1 Usuário Comum 
- Cadastrar Conta: Permite que o candidato crie uma conta fornecendo nome, email e senha. 
- Login no Sistema: Permite que o usuário acesse o sistema com credenciais válidas. 
- Cadastrar Currículo: Permite que o candidato preencha e envie seu currículo. 
- Editar Currículo: Permite que o candidato atualize seu currículo já cadastrado. 
- Visualizar Vagas: Permite ao candidato visualizar a lista de vagas disponíveis. 

### 6.2 Usuário Administrador 
- Cadastrar Vaga: Permite que o administrador crie vagas no sistema. 
- Editar Vaga: Permite que o administrador altere informações de uma vaga existente. 
- Excluir Vaga: Permite que o administrador remova vagas cadastradas. 
- Visualizar Currículos: Permite que o administrador consulte os currículos enviados pelos candidatos. 
- Login no Sistema: Permite que o usuário acesse o sistema com credenciais válidas. 

### 6.3 Diagrama de Fluxo 
<p align="center">
<img width="1213" height="649" alt="Image" src="https://github.com/user-attachments/assets/9d276a0e-9d3d-4d63-b1e7-378bd3a1a3e6" />
</p>
### 6.4 Diagrama de Uso 
<p align="center">
<img width="881" height="620" alt="Image" src="https://github.com/user-attachments/assets/9283e3af-665c-4c99-af7f-731dd7067cb1" />
</p>
## 7. Protótipos de Interface 

## 8. Modelagem de Banco de Dados 
### 8.1 Banco de Dados Relacional 
<p align="center">
<img width="868" height="787" alt="Image" src="https://github.com/user-attachments/assets/9079f31e-0ac6-47d2-9a9b-465f7499d26f" />
</p>
## 9. Cronograma 
<p align="center">
<img width="767" height="277" alt="Image" src="https://github.com/user-attachments/assets/ce40b29d-dcaa-4464-bdd4-3c953aac25b1" />
</p>

## 10. Conclusão 
O desenvolvimento do protótipo do sistema RH Connect permitiu validar a viabilidade técnica e funcional de uma solução interna de gestão de recrutamento. 
 Ao longo do projeto, foram implementadas as funcionalidades essenciais para atender dois perfis de usuários — candidatos e administradores — com base em regras claras de acesso. 
A abordagem utilizando SPA em Angular e backend simulado com In-memory Web API proporcionou agilidade no desenvolvimento, possibilitando a entrega de um produto funcional em curto prazo. 
 O sistema demonstrou ser capaz de oferecer cadastro e autenticação de usuários, gerenciamento de currículos e controle total sobre vagas, garantindo usabilidade e organização. 
Com este protótipo, a empresa RH Connect dispõe agora de uma base sólida para evoluir o sistema para produção, integrando-o a um backend real, aprimorando a interface e expandindo recursos conforme as necessidades do negócio. 

