const fruits=['banana','apple','orange','grapes','mango']

const res=fruits.splice(2,1,'kiwi')

const index=fruits.indexOf('hfchgf')
if(index!=-1){
    fruits.splice(index,1)
}
console.log('fruits:',fruits);
console.log('result:',res);