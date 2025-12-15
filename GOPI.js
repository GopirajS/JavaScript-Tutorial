
// //  This is GlopalScope
// var education = "BSc Math";
// let age = 26;
// const title = "gopi Raj";

// function printDetails() {
//     console.log("Inside Function Scop :" + education);
//     console.log("Inside Function Scop :" + age);
//     console.log("Inside Function Scop :" + title);

//     {
//         console.log("Block Scope :" + education);
//         console.log("Block Scope :" + age);
//         console.log("Block Scope :" + title);
//     }
// }
// console.log("Glopal Scope :" + education);
// console.log("Glopal Scope :" + age);
// console.log("Glopal Scope :" + title);


// printDetails();


// ================================================================================================


// // This is Function Scope
// function printDetails() {
//     var education = "BSc Math";
//     let age = 26;
//     const title = "gopi Raj";

//     console.log("Inside Function Scop :" + education);
//     console.log("Inside Function Scop :" + age);
//     console.log("Inside Function Scop :" + title);

//     {
//         console.log("Block Scope :" + education);
//         console.log("Block Scope :" + age);
//         console.log("Block Scope :" + title);
//     }
// }
// printDetails();

// // console.log("Glopal Scope :" + education); // Error
// // console.log("Glopal Scope :" + age);       // Error
// // console.log("Glopal Scope :" + title);     // Error              



// ================================================================================================

// This is Block Scope
function printDetails() {
    {
        var education = "BSc Math";
        let age = 26;
        const title = "gopi Raj";

        console.log("Inside Block Scope :" + education);
        console.log("Inside Block Scope :" + age);
        console.log("Inside Block Scope :" + title);
    }

    console.log("Inside Function Scope :" + education); // var is function scoped
    // console.log("Inside Function Scope :" + age);     // Error
    // console.log("Inside Function Scope :" + title);   // Error
}
printDetails();

// console.log("Glopal Scope :" + education); // Error
// console.log("Glopal Scope :" + age);       // Error
// console.log("Glopal Scope :" + title);     // Error



// ================================================================================================

// Finale Concution


Decler in Glopal Scope
Var , let , const

Those three can access from Global Scope, Function Scope, Block Scope



Decler the Function Scope
Var , let , const

Those three can access from Function Scope, Block Scope
But can not access from Global Scope


Decler the Block Scope
Var , let , const
    
Var can access from Block Scope, Function Scope
But can not access from Global Scope

    Let , Const can access from Block Scope
But can not access from Function Scope, Global Scope    