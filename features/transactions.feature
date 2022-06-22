Feature: Transacciones sobre cuentas
  
  Scenario: Transferir dinero con CBU valido entre cuentas del mismo banco
    Given La cuenta 0001 con un saldo inicial de 100
    And La cuenta 0002 con CBU valido con un saldo inicial de 200
    And Seteamos el contexto 
    When transferimos 10 desde la cuenta 0001 hacia la cuenta 0002
    Then El saldo de la cuenta 0001 tiene que ser 90
    And El saldo de la cuenta 0002 tiene que ser 210