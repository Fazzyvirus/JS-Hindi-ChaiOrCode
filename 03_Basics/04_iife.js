// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // Named IIFE
    console.log(`DB Connected`);
})(); // using this ";" to end this function for running the below arrow function.


( () => {
    //Un named IIFE
    console.log(`DB Connected2`);
} )();

( (name) => {
    console.log(`DB Connected Two ${name}`);
} )('Faisal')