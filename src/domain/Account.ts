export class Account {
  balance: number = 0;
  agreement: number = 0;
  interest: number = 0.06;

  constructor(intialBalance: number = 0, agreement: number = 0) {
    this.balance = Number(intialBalance);
    this.agreement = Number(agreement);
  }

  getBalance(): number {
    return this.balance;
  }

  getAgreement(): number {
    return this.agreement;
  }

  setAgreement(value: number) {
    this.agreement = value;
  }

  deposit(amount: number) {
    this.balance += Number(amount);
  }

  withdraw(amount: number) {    
    if (amount <= this.balance) {
      this.balance -= Number(amount);
      return;
    }
    if (this.agreement > 0 && this.balance + this.agreement >= amount) {
      this.balance = this.balance - amount;
      this.balance = this.balance - amount * this.interest;
      return;
    }
    return "No tiene suficiente dinero en la cuenta.";
  }

  transfer(amount: number, accountOrigin: Account, accountDestination: Account) {    

    if(typeof(accountOrigin.withdraw(amount))!='string'){
      accountDestination.deposit(amount);      
    }
   
  }
}
