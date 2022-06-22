import { binding, given, then, when } from "cucumber-tsflow";
import { assert } from "chai";
import { Account } from "../src/domain/Account";
import { Context } from "../src/domain/Context";

@binding()
export class BankAccountSteps {
  private account: Account;
  private resultadoExtraccion: String | undefined;
  private mContext: Context;

  constructor() {
    this.account = new Account();
    this.resultadoExtraccion = "";
    this.mContext = Context.getInstance();
  }

  @given(/La cuenta 0001 con un saldo inicial de (-?\d+)/)
  public givenAnAccountWithStartingBalance(amount: number) {
    this.account.deposit(amount);
  }

  @given(/tiene un acuerdo de (-?\d+)/)
  public givenAnAccountWithAnAgreement(agreement: number) {
    this.account.setAgreement(agreement);
  }

  @given(/Seteamos el contexto/)
  public setearContexto() {    
    this.mContext.setAccount1(this.account);
  }

  @when(/depositamos (-?\d+)/)
  public deposit(amount: number) {
    this.account.deposit(amount);
  }

  @when(/extraemos (-?\d+)/)
  public withdraw(amount: number) {
    this.resultadoExtraccion = this.account.withdraw(amount);
  }

  @then(/El saldo de la cuenta tiene que ser (-?\d+)/)
  public accountBalanceShouldEqual(expectedAmount: number) {
    assert.equal(this.account.balance, expectedAmount);
  }

  @then(/Se muestra el mensaje de saldo insuficiente/)
  public ShowMessage() {
    assert.equal(
      "No tiene suficiente dinero en la cuenta.",
      this.resultadoExtraccion
    );
  }
}
