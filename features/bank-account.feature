Feature: Operaciones sobre cuentas

  Scenario: Depositar dinero
    Given La cuenta 0001 con un saldo inicial de 100
    When depositamos 100
    Then El saldo de la cuenta tiene que ser 200

  Scenario: Depositar dinero en una cuenta con saldo negativo
    Given La cuenta 0001 con un saldo inicial de -100
    When depositamos 150
    Then El saldo de la cuenta tiene que ser 50

  Scenario: Extraer dinero cuando tengo saldo superior al monto a extraer
    Given La cuenta 0001 con un saldo inicial de 200
    When extraemos 100
    Then El saldo de la cuenta tiene que ser 100

  Scenario: Extraer dinero cuando no tengo saldo suficiente
    Given La cuenta 0001 con un saldo inicial de 50
    When extraemos 100
    Then El saldo de la cuenta tiene que ser 50
    And Se muestra el mensaje de saldo insuficiente


  Scenario: Tengo saldo, extraer dinero sin usar el acuerdo
    Given La cuenta 0001 con un saldo inicial de 100
    And tiene un acuerdo de 100
    When extraemos 90
    Then El saldo de la cuenta tiene que ser 10


  Scenario: No tengo saldo suficiente extraigo usando el acuerdo imputando intereses
    Given La cuenta 0001 con un saldo inicial de 100
    And tiene un acuerdo de 100
    When extraemos 150
    Then El saldo de la cuenta tiene que ser -59


  Scenario: Estoy usando el acuerdo y vuelvo a extraer - Calcular interés sobre el saldo extraído
    Given La cuenta 0001 con un saldo inicial de -100
    And tiene un acuerdo de 200
    When extraemos 50
    Then El saldo de la cuenta tiene que ser -153


  Scenario: Tengo saldo negativo y quiero seguir extrayendo dinero, ya use el acuerdo
    Given La cuenta 0001 con un saldo inicial de -100
    And tiene un acuerdo de 200
    When extraemos 110
    Then El saldo de la cuenta tiene que ser -100
    And Se muestra el mensaje de saldo insuficiente

  Scenario: Extraigo el saldo total del acuerdo, me cobra el interés y quedo con saldo deudor pasando el límite del acuerdo.
    Given La cuenta 0001 con un saldo inicial de -100
    And tiene un acuerdo de 200
    When extraemos 100
    Then El saldo de la cuenta tiene que ser -206