Feature: Listagem

    Como usuário, desejo acessar a Listagem
    Para que possa visualizar meus dados de cadastro

Scenario: Listagem sem registros
    Given que o site não possui registro
    When acessar a listagem
    Then devo visuailizar a listagem vazia

Scenario: Listagem com apenas um registro
    Given que o site possui apenas um registro
    When acessar a listagem
    Then devo visualizar apenas um registro