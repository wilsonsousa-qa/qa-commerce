# language: pt
Funcionalidade: Remover do Carrinho

  Cenário: Remover produto do carrinho
    Dado que o usuário está na página do carrinho
    Quando o usuário clica no botão "Remover" ao lado do produto
    Então o produto deve ser removido do carrinho com sucesso

  Cenário: Verificar carrinho vazio após remoção
    Dado que o usuário removeu todos os produtos do carrinho
    Quando o usuário acessa a página do carrinho
    Então o carrinho deve estar vazio e exibir a mensagem "Seu carrinho está vazio"