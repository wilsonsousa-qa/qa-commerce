Feature: Acesso à página inicial

  Scenario: Visitar o site e verificar o título
    Given que eu acesso a página inicial
    When a página carrega
    Then eu devo ver o título "Home"
