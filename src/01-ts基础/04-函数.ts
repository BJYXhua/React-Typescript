// ?可传可不传
function test1(a: string, b: number, c?: string): string {
    return a.substring(0, 1) + b.toFixed(1) + c?.toUpperCase()
}
var name: string = test1("aaa", 999)

// interface Ifun {
//     (a: string, b: number, c?: string): string
// }
type Ifun = {
    (a: string, b: number, c?: string): string
}
var myfun2: Ifun = function test2(a: string, b: number, c?: string): string {
    console.log(a.substring(0, 1) + b.toFixed(1) + c?.toUpperCase());
    return a.substring(0, 1) + b.toFixed(1) + c?.toUpperCase()
}

// 第二种方式
// interface Iobj {
//     name: string,
//     age: number,
//     getName: (name: string) => string
// }
type Iobj = {
    name: string,
    age: number,
    getName: (name: string) => string
}
var obj: Iobj = {
    name: 'hhh',
    age: 18,
    getName(name: string) {
        return name
    }
}
console.log(obj.getName('wyb'));

// eslint-disable-next-line import/no-anonymous-default-export
export default { name, myfun2 }