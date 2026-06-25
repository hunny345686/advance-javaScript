// // Rule 1: Default Binding

// function show() {
//     console.log(this) // window object in browser and globle in node js if strict mode then undefiend
// }
// show()

// // Rule 2: Implicit Binding

// const user = {
//     name: "prem",
//     show() {
//         console.log(this.name)
//     }
// }

// user.show() // Works fine  Output Prem same call site

// const fn = user.show;

// fn();  // this will be undefiend due to  Call Site changed



// // Rule 3: Explicit Binding

// // call()
// // apply()
// // bind()

// function greet(fromcall) {
//     console.log(this.name + fromcall)
// }

// const user1 = {
//     name: "Singh"
// }

// greet.call(user1, "Calling from Call method")
// // console.log(greetFn())


// // Rule 4: Arrow Functions

// const user2 = {
//     name: "Prem",

//     show() {
//         const inner = () => {
//             console.log(this.name);
//         };

//         inner();
//     }
// };

// user2.show();


// function show1() {
//     console.log(this);
// }

// const obj = {
//     show1
// };

// show1();
// obj.show1();


const person = {
    name: "Prem",

    greet() {
        console.log(this.name);
    }
};

person.greet()
setTimeout(person.greet.bind(person), 1000);