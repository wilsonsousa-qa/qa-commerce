# language: pt
Funcionalidade: Checkout de Compra
  Como usuário da aplicação
  Quero preencher os dados e finalizar a compra
  Para gerar o pedido com sucesso

  Cenário: Preencher dados e finalizar compra
    Dado que o usuário adicionou produtos ao carrinho
    Quando o usuário acessa a página de checkout
    E preenche os dados pessoais e de pagamento
    Então o usuário deve ver a confirmação do pedido
