import { Account } from "./Account";

export class Context {
    private static instance: Context;
    
    private account1: Account;

    public getAccount1(): Account {
        return this.account1;
    }

    public setAccount1(account1: Account): void {
        this.account1 = account1;
    }
   
    private constructor() {
        this.account1 = new Account();
     }

    
    public static getInstance(): Context {
        if (!Context.instance) {
            Context.instance = new Context();
        }

        return Context.instance;
    }

}