const sayHello=()=>{
    console.log('Hello world');
    console.log('This is inside 2nd function');
}


function pleaseCallThis(func){
    console.log('This is inside pleasecallthis functon');
    func('hello')
}

pleaseCallThis((ele)=>{
    console.log('Hello world '+ele);
    
})
pleaseCallThis(sayHello)