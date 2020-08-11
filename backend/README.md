## Recuperação de senha

**RF (Requisitos Funcionais)**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF (Requisitos Não Funcionais)**

- Utilizar Mailtrap para testar envios em ambiente de desenvolvimento;
- Utilizar Amazon SES para envios em ambiente de produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN (Regras de Negócios)**

- O link enviado por e-mail para resetar a senha, deve expirar em 2h;
- U usuário precisa confirmar a nova senha ao resetar a senha;

## Atualização do perfil

**RF (Requisitos Funcionais)**

- O usuário deve poder atualizar se nome, email e senha;

**RNF (Requisitos Não Funcionais)**

**RN (Regras de Negócio)**

- O usuário não pode alterar seu email para um email já existente;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar sua senha

## Painel do prestador

**RF (Requisitos Funcionais)**

- O prestador deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF (Requisitos Não Funcionais)**

- Os agendamentos do dia do prestador deve ser armazenadas em cache;
- As notificações do proestador devem ser armazenadas no MongoDb;
- As notificações do prestador devem ser enviados em tempo-real utilizando Socket-io;

**RN (Regras de Negócio)**

- A notificação deve trer um status de lina ou não-lida para que o prestador possa controlar;

## Agendamento de Serviços

**RF (Requisitos Funcionais)**

- O usuário deve poder listar todos os prestadoes de serviço cadastrados;
- O usuário deve porder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF (Requisitos Não Funcionais)**

- A listagem de prestadores deve ser armazenada em cache;

**RN (Regras de Negócio)**

- Cada agendmaneto deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h, último às 17h);
- O usuário não pode agendar em um horário já ocpuado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar um serviço consigo mesmo;
