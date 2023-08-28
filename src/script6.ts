// inheritance
// // progr-1
// class Father{
//     firstName:string;
//     lastName:string;

//     constructor(fn:string,ln:string){
//         this.firstName=fn
//         this.lastName=ln
//     }
//     displayName():void{
//         console.log(this.firstName+this.lastName)
//     }
// }

// class Son extends Father{
//     sname:string="nilesh";
// }

// // let nilesh= new Son("rahul","deshpande");
// // console.log(nilesh.firstName)
// // console.log(nilesh.lastName)

// let sham=new Father("rahul","deshpande")
// sham.displayName()

// progr-2
// // inheritance
// class Father {
//         firstName: string;
//         lastName: string;
    
//         constructor(fn: string, ln: string) {
//             this.firstName = fn
//             this.lastName = ln
//         }
//         displayName(): void {
//             console.log(this.firstName + this.lastName)
//         }
    
//     }
//     class Son extends Father {
//         sname: string
//         constructor(fn: string, ln: string, sn: string) {
//             super(fn, ln)
//             this.sname = sn
//         }
    
//         displaySName(): void {
//             console.log(this.sname + this.lastName)
//         }
//     }
//     let nilesh= new Son("rahul","deshpande","ram");
//  console.log(nilesh.firstName)
// console.log(nilesh.lastName)
// nilesh.displayName()
// nilesh.displaySName()


// program-3
// class GrandFather {
//         firstName:string 
//         lastName:string 
    
//         constructor(fn:string , ln:string){
//             this.firstName = fn
//             this.lastName =ln
//         }
//         displayGName():void{
//             console.log(this.firstName+ this.lastName)
//         }
    
//     }
//      class Father extends GrandFather {
//         fname:string
//         constructor(fn:string , ln:string ,ffn:string){
//             super(fn,ln)
//             this.fname = ffn
//         }
    
//         displayFName():void{
//             console.log(this.fname+ this.lastName)
//         }
//     }
//     class Son extends Father {
//         sname:string 
//         constructor(fn:string , ln:string ,ffn:string,sname:string){
//             super(fn , ln ,ffn)
//             this.sname = sname
//         }
    
//         displaySName():void{
//             console.log(this.sname+ this.lastName)
//         }
//     }

//     let nilesh= new Son("rahul","deshpande","ram","rushi");
//      console.log(nilesh.firstName)
//     console.log(nilesh.lastName)
//     console.log(nilesh.sname)

//     nilesh.displayGName()
//     nilesh.displaySName()


// program-4.

class Father {
    fname:string
    lname:string

    constructor(fn:string , ln:string){
        this.fname = fn
        this.lname = ln
    }

    displayF(){
        console.log(this.fname + this.lname)
    }
}

class Sister extends Father {
    sname:string

    constructor(fn:string , ln:string, sname:string){
        super(fn,ln)
        this.sname = sname       
    }
 displayS(){
        console.log(this.sname + this.lname)
    }
}

class Brother extends Father {
    bname:string

    constructor(fn:string , ln:string, bname:string){
        super(fn,ln)
        this.bname = bname       
    }
    displayB(){
        console.log(this.bname + this.lname)
    }
}
   