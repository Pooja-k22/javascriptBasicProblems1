class Bank{
    // property
    accountdetails ={
        1000 :{acno:1000, username:"user1",pass:"user1",balance:5000},
        1001 :{acno:1001, username:"user2",pass:"user2",balance:10000},
        1002 :{acno:1002, username:"user3",pass:"user3",balance:1000},
        1003 :{acno:1003, username:"user4",pass:"user4",balance:2000},

    }


// w.a.p to validate a given acc no
validate(acno){
    return acno in this.accountdetails? true:false
}
// w.a.p to authenticate a given acc
authenticate(acno,pswd){
    if(this.validate(acno)){
        if(this.accountdetails[acno].pass==pswd){
            console.log('valid account details');
            
        }
        else{
            console.log('invalid account or password');
            
        }
    }
    else{
        console.log();
        
    }
}

// w.a.p to check the bal of 'invalid account or password'given acc no
balance(acno,pswd){
    if(this.validate(acno)){
        
        if(this.accountdetails[acno].pass==pswd){
            console.log(this.accountdetails[acno].balance);
        }
        else{
        console.log('invalid account or password');

        }

    }
    else{
        console.log('invalid account or password');
        
    }
}

// w.a.p to transfer money between 2 acc
transfer(fromac,frompsd,toac,amt){
    if(this.validate(fromac) && this.validate(toac)){

        if(this.accountdetails[fromac].pass==frompsd){

            if(this.accountdetails[fromac].balance>amt){

                console.log(`current balance of ${fromac} is ${this.accountdetails[fromac].balance } and ${toac} is ${this.accountdetails[toac].balance}`);
                 
                this.accountdetails[fromac].balance-=amt
                this.accountdetails[toac].balance+=amt

                console.log(`balance of ${fromac} is ${this.accountdetails[fromac].balance } and ${toac} is ${this.accountdetails[toac].balance}`);
                
            }
            else{
                console.log('insufficent balance');
                
            }
        }
        else{
            console.log('invalid password');
            
        }
    }

    else{
        console.log('invalid account number');
        
    }

}

}

const ob1 = new Bank()
ob1.validate(1000)
console.log(ob1.validate(1000)? 'account exist':'not exist');
ob1.authenticate(1000,'user1')
ob1.balance(1001,'user2')

ob1.transfer(1000,'user1',1003,200)
