Feature: Cadastro

    Como usuário, desejo realizar um cadastro
    Para que possa acessar o sistema

Scenario: Cadastro de novo usuário
    Given que acesso o site
    When informar meus dados
    And salvar
    Then devo ser cadastrado com sucesso     