# language: pt
Funcionalidade: Acesso à Minha Conta

  Cenário: Acessar a conta do usuário
    Dado que o usuário acessa a página inicial
    Quando ele clica no link "Minha Conta"
    E preenche o email "pedro.silva@gmail.com" e a senha "Senha123@"
    Então ele deve ver o status do último pedido
