import { binding, given, then, when } from "cucumber-tsflow";
import { assert } from "chai";
import { Account } from "../src/domain/Account";
import { Context } from "../src/domain/Context";

@binding()
export class TransactionsSteps {
  private account: Account;
  private accountDestination: Account;
  private mContext: Context;

  constructor() {
    this.account = new Account();
    this.accountDestination = new Account();
    this.mContext = Context.getInstance();
  }


  @given(/La cuenta 0002 con CBU valido con un saldo inicial de (-?\d+)/)
  public givenAnAccountWithStartingBalanceAndValidCBU(amount: number) {
    this.accountDestination.deposit(amount);
  }  

  @when(/transferimos (-?\d+) desde la cuenta 0001 hacia la cuenta 0002/)
  public transfer(amount: number) {
    this.account.transfer(amount, this.mContext.getAccount1(), this.accountDestination);
  }

  @then(/El saldo de la cuenta 0001 tiene que ser (-?\d+)/)
  public account0001BalanceShouldEqual(expectedAmount: number) {
    assert.equal(this.mContext.getAccount1().balance, expectedAmount);
  }

  @then(/El saldo de la cuenta 0002 tiene que ser (-?\d+)/)
  public account0002BalanceShouldEqual(expectedAmount: number) {
    assert.equal(this.accountDestination.balance, expectedAmount);
  }

}