{
    //Normal Function
function standardGreet() {
 return "Wecome to CGC"; //Returns string
}
console.log(standardGreet());
}


{
//Async Function
async function  cgcGreet() {
    return "Welcome to CGC";
    //Returns Promise { "Welcome to CGC"}
}

cgcGreet().then((message) => {
    console.log("Promise Resolved:", message);
    
});
}


{
    async function cgcGreet() {
    return "Welcome to CGC";
}
console.log(cgcGreet());

cgcGreet().then((message) => {
    console.log("Promise Resolved:", message);
    
});

}


{
    async function cgcGreet() {
        return "Welcome to JS!";
    }
console.log(cgcGreet());

 cgcGreet().then((msg) => {
    console.log("Promise Resolved",msg);  

 });

}


{
    async function greet() {
        return "Hello World!";
    }
    console.log(greet());
    
    greet().then((msg) => {
        console.log(msg);
        
    });
}


// {
//     (async () => {
//         const message = await cgcGreet();
//         console.log(message);
        
//     }) ();
// }
