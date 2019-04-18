//immediatley resolved promised
var myPromise  = Promise.resolve("Foo");

myPromise.then((res) => console.log(res) );


var myPromises = new Promise(function(resolve,reject){
    setTimeout( ()=>resolve(4),2000);
});

myPromises.then((res)=>console.log(res));



// useful promises