Feature: Acesso Functionality

    Feature testar a funcionalidade de acesso da aplicação
    Scenario: Acessar a aplicação com sucesso
        Given que o usuário ao pesquisar pela URL da aplicação  
        When o usuário coloca URL no navegador
        Then o usuário deve ser redirecionado para a página inicial