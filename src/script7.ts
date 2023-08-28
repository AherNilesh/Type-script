// interface wordBank {
//     save():number
//     loan():number
// }

// class SBI implements wordBank {
//     save():number {
//         console.log('I am save method from SBI')
//         return 10
//     }
//     loan():number {
//         console.log('I am loan method from SBI')
//         return 10

//     }
//     branchName(){
//         console.log('Amanora Branch')
//     }
// }

// class PNB implements wordBank {
//         save(): number {
//             console.log('I am save method from PNB')
//             return 34
//         }
//         loan():number {
//             console.log('I am  loan method from PNB')
//             return 43
//         }
//     }
//     class BOI implements wordBank {
//             save(): number {
//                 console.log('I am save method from BOI')
//                 return 34
//             }
//             loan():number {
//                 console.log('I am  loan method from BOI')
//                 return 43
//             }
        
//         }
        
//         let SBIa = new SBI()
//         let PNBa = new PNB()
//         let BOIa = new BOI()

// progra-2
// interface Student {
//         displayFullName: () => string
//         displayAge: () => number
//     }
    
//     interface Teacher {
//         salary(): number
    
//     }
    
//     class PersonZ implements Student, Teacher {
//         displayFullName(): string {
//             return `nilesh aher`
//         }
//         displayAge(): number {
//             return 34
//         }
//         salary(): number {
//             return 10000
//         }
//     }
    
//     let aviZ = new PersonZ()
//     aviZ.displayAge()
//     aviZ.displayFullName()
//     aviZ.salary()


// progr-3

interface Address {
    displayAddress():string
}

class GrandFather{
    firstName:string 
    lastName:string
    constructor(fn:string,ln:string){
        this.firstName = fn
        this.lastName = ln
    }

    displayGF(){
        console.log(this.firstName + this.lastName)
    }

}

class FatherN extends GrandFather implements Address {

    fname:string

    constructor(fn:string,ln:string,fname:string){
        super(fn,ln)
        this.fname = fname
    }

    displayFN(){
        console.log(this.fname + this.lastName)
    }

    displayAddress():string{
        return "A -302 Gardenia Society pune"
    }

}
let nil = new FatherN("nil","aher","rahul")