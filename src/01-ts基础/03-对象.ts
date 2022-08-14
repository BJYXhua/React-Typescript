// 使用接口
interface IObj {
    name: string,
    age: number,
    address: string
    // ? 可选的属性，可以没有
    location?: string,
    // propName是关键字；不关心的值，或者那些属性值不想写一遍,表示接收这个属性名字是字符串类型，值是any
    [propName: string]: any
}
var obj: IObj = {
    name: 'hhh',
    age: 19,
    address: "gds"
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { obj }