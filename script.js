class Bank { 
    constructor (action, amount, account, savingsAccount, checkingAccount) {
          
        this.action = action; // 'deposit'  or 'withdraw'  
        this.amount = amount; // how much you are going to withdrawl or deposit
        this.account = account; // 'checking' or 'savings'
        this.savingsAccount = savingsAccount; // how much is already in the savings account
        this.checkingAccount = checkingAccount; // how much is already in the checking account
    }
      
    depositOrWithdrawl () {
          
        if (this.action === 'deposit') {
            if (this.account === 'checking') {
                this.checkingAccount = this.checkingAccount + this.amount
            }else if (this.account=== 'savings') {
                 this.savingsAccount = this.savingsAccount + this.amount
            }
        }else if (this.action === 'withdrawl') {
            if (this.account === 'checking') {
                this.checkingAccount = this.checkingAccount - this.amount
            }else if (this.account === 'savings') {
                this.savingsAccount = this.savingsAccount - this.amount
            }
        }
            console.log(`Checking account: ${this.checkingAccount} Savings account: ${this.savingsAccount}`)
        }
    }
      
const firstDeposit = new Bank('deposit', 20.00, 'checking', 200.00, 100.00 );
firstDeposit.depositOrWithdrawl();