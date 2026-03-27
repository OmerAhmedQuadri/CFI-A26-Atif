const user={
    name:'omer',
    age:21,
    balance:101,
    getDetails: function(){
        return (`Name:${this.name}
Age:${this.age}
Balance:${this.balance}`);
    },
    updateBalance:function(b){
        if(isNaN(b)||(b<0)||typeof(b)!='number') return null
        this.balance=b
        return (this.balance);
        
    },
    isAdult:function(age){
        if(isNaN(age)||(age<0)||typeof(age)!='number') return null
        else return false
    },
    updateAge: function(age){
        this.age =age
        return this.age
    },
    getBalance:function(){
        return this.balance
    }

}

// console.log(user);
// console.log(user.getDetails);
console.log(user.getDetails())
console.log(user.updateBalance(20))
console.log(user.isAdult())
console.log(user.updateAge(35))
console.log(user.getBalance())