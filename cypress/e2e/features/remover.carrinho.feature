# language: pt
Funcionalidade: Remover do Carrinho
  Como usuário da aplicação
  Quero remover produtos do carrinho
  Para verificar o carrinho vazio após a remoção

  Cenário: Remover produto do carrinho
    Dado que o usuário está na página do carrinho
    Quando o usuário clica no botão "Remover" ao lado do produto
    Então o produto deve ser removido do carrinho com sucesso

  Cenário: Verificar carrinho vazio após remoção
    Dado que o usuário verifique pagina
    Quando ao acessar a pagina do carrinho pelo menu Carrinho
    Então o usuário deve ver a mensagem de carrinho vazio