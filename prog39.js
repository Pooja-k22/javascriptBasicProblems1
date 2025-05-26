accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]

//1. total number of accounts
console.log(accounts.length);
console.log('__________________________________________________________________');



//2. print account number whose ac_type is savings
accounts.filter((a)=>a.ac_type=='savings').forEach((n)=>console.log(n.acno)
)
console.log('______________________________________________________________');

//3.print the balance of accnount number 1000
bal=accounts.find((a)=>a.acno==1000)
console.log(bal.balance);
console.log('______________________________________________________________________');



//4. print all gpay transactions

gpay=accounts.map((d)=>d.transaction).flat().filter((item)=>item.mode=='gpay')
console.log(gpay);
console.log('_____________________________________________________________________');


//5. print all transaction whose amount > 5000
console.log('transaction whose amount > 5000');

ac= accounts.map((d)=>d.transaction).flat().filter((item)=>item.amount>5000).forEach((item=>console.log(item)))
 console.log(ac);
 
 console.log('________________________________________________________________');

//6. print credit transaction of account 1002
credit=accounts.map((d)=>d.transaction).flat().filter((item)=>item.to==1002)
console.log(credit);
console.log('_________________________________________________________________');


//7. print debit transaction of account 1002
debit=accounts.find((d)=>d.acno==1002).transaction
console.log(debit);
console.log('_________________________________________________________________');

//8. print transaction history of 1002
his={
    credit:credit,
    debit:debit
}
console.log(his);
console.log('_________________________________________________________________');

//print transaction history as array
transhis=[...credit, ...debit]
console.log(transhis);
console.log('_______________________________________________________________');


//9. print highest balance account details
highbal=accounts.reduce((d1,d2)=>d1.balance>d2.balance? d1:d2)
console.log(highbal);
console.log('__________________________________________________________________');
