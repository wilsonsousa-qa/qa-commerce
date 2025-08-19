# language: pt
Funcionalidade: Carrinho de Compras

  Cenário: Adicionar produto ao carrinho
    Dado que o usuário está na página do produto
    Quando o usuário clica no botão "Adicionar ao Carrinho"
    Então o produto deve ser adicionado ao carrinho com sucesso

  Cenário: Verificar itens no carrinho
    Dado que o usuário adicionou produtos ao carrinho
    Quando o usuário acessa diretamente a página do carrinho
    Então o usuário deve ver os produtos adicionados no carrinho



