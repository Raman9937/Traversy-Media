// let is a block level keyword which scope is inside a function or loop

//but "var" has a global scope  
for(let i=0;i<10;i++) {
    console.log(i);
}
//console.log(i);//error "i" is undefined

//const
//const is a constant variable meaning that if we try to set it again we are going to face issues   
//we can change the constant variable
const colors = [];
colors.push('red');
colors.push('green');

//colors='green';//Uncaught TypeError: Assignment to constant variable. 

console.log(colors);
