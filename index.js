// Promises - Promises allow us to identify when a function was not executed correctly, they are error handlers.
// use case: Verify that the information is obtained correctly.

var myPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('La informacion se ha obtenido correctamete');
    }, 3000);
});

myPromise.then(function(value) {
    console.log(value);
});

console.log(myPromise);