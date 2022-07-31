var account = {
    owner:"이선생",
    code:"2132",
    balance:100000000,
    deposit:function(money){this.balance += money;},
    withdraw:function(money){this.balance -= money;},
    show_balance:function(){return this.balance;}
}

with(console){
    log(account);
    log(account.owner); 
    log(account['owner']);

    account.deposit(50000); // console에 상관없더라도 실행(with)
    log(account.show_balance());
}