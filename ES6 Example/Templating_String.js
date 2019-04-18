
let name = "raman";
//inside template string we can use varibales,functions and many more

function toUpperCase(word) {
    return word.toUpperCase();
}

let template  = `<h1>${toUpperCase ('Hello') } ${toUpperCase(name)} </h1> 
 <p> This is a simple template in javascript </p>
`

document.getElementById('template').innerHTML = template;