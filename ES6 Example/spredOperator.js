//Default parameters
function greeting($greetings = "Hello World") {
    console.log($greetings);
}
greeting(); //if u don't pass any parameter then it will take the default parameter


//spread operator
let args1 = [1,2,3];
let args2 = [4,5,6];

function test() {
    console.log(args1 +',' +args2);
}

//test.apply(null,args1);//es5

//es6
test(...args1,...args2);

