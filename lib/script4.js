"use strict";
// program 1
// class PersonA {
//     name:string
//     constructor(nm:string){
//         this.name = nm
//     }
//     displayName():string{
//         return this.name
//     }
// }
// let amol = new PersonA("nilesh aher")
// let nm = amol.displayName()
// program 2
// class PersonC {
//     public name: string
//     constructor(nm: string) {
//         this.name = nm
//     }
//     displayName(): string {
//         return this.name
//     }
// }
// let chinmay1 = new PersonC('amol')
// console.log(chinmay1.name)
// let q = chinmay1.displayName()
// console.log(q)
// program 3
// class PersonD{
//     private name:string
//     constructor(nm:string){
//         this.name = nm
//     }
//     public displayName(): string {
//         this.greet()
//         return this.name
//     }
//     private greet(){
//         console.log('hello i am learning js')
//     }
// }
// let amolE = new PersonD("amolD")
// //console.log(amolE.name) private
// let q11 = amolE.displayName()
// console.log(q11)
// //amolE.greet() private
// program 4
class PersonE {
    constructor(name, lname) {
        this.name = name;
        this.lname = lname;
    }
}
let poorva = new PersonE("nilesh", "aher");
