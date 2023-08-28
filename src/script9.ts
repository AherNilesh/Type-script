// prog-1
let x:unknown="hello"
console.log((x as string))

// prog-2
// let x2:number=3;
// console.log((x2 as string).length)

// prog-3
let x2:unknown = "hello"
console.log((<string>x2).length)

// prog-4
function addition<s1,s2>(x:s1,y:s2):[s1,s2]{
    return [x,y]
}
let r1 = addition<string, number>("nil",7)
let r2 = addition<string, string>("nil","hello")
let r3 = addition<number, number>(7,7)
let r4 = addition<number, string>(7,'7')


// prog-1

interface vehicle {
    wheel: number
    average: number

}

// let audiA:vehicle={
//     wheel:3,
//     average:3
// }

let audiC:Partial<vehicle> = {};
audiC.wheel = 19;

interface CarB {
    make:string;
    model:string;

}