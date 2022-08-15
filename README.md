# Typescript

## Typescript简介

1. TypeScript 的定位是静态类型语言，在写代码阶段就能检查错误，而非运行阶段
2. 类型系统是最好的文档，增加了代码的可读性和可维护性。
3. 有一定的学习成本，需要理解接口（Interfaces）、泛型（Generics）、类（Classes）等
4. ts最后被编译成js

## JavaScript 与 TypeScript 的区别

TypeScript 是 JavaScript 的超集，扩展了 JavaScript 的语法，因此现有的 JavaScript 代码可与 TypeScript 一起工作无需任何修改，TypeScript 通过类型注解提供编译时的静态类型检查。

## 安装

通过react脚手架

```jsx
create-react-app my-app --template typescript

安装 typescript：
npm install -g typescript
```

通常我们使用 **.ts** 作为 TypeScript 代码文件的扩展名

## type类型别名

type 可以定义变量类型，可以定义联合类型或者其他类型...

```typescript
type point={
    x:number
}
function printCoord(pt:point){...}

type ID =number | string
function printID(id:ID){...}

type userString=string
function printString(user:sting):userString{...}      
```

## interface接口

```typescript
interface Ipoint{
    x:number
}
function printCoord(pt:Ipoint){...} 
```



## TypeScript type 和 interface区别

**1.interface只能定义对象数据结构类型**。

**2.type侧重于直接定义类型**

​	type 还可以给一个或多个类型起一个新名称(当变量用)

​	type当然也能定义对象类型

### type 和 interface 相同点

1.相同点：type和interface都支持扩展

```typescript
// type 扩展
type myObj = {
    name: string;
}
// &符号
type myObjPlus = myObj & { age: number };

const newObj: myObjPlus = {
    name: '',
    age: 233
};

// interface 扩展
interface myObj {
    name: string;
};

// extends继承扩展
interface myObjPlus extends myObj {
    age: number;
};

const newObj: myObjPlus = {
    name: '',
    age: 233
};
```

### type 和 interface 不同点

区别1: type 可以为基本类型，联合类型 或 元组 甚至any等等 赋值定义别名,interface 明显办不到

```typescript
type A = string;
type B = string | unknown;
type C = B | [ 1, 2 ,3 ,4]; // 赋值当变量用
let test: C = '';
```

区别2: interface 定义重名了会合并属性，type 办不到(会报错提醒 重复定义)

```typescript
// interface 定义重名了会合并属性,很多库ts源码里面都用到过类似方法作为扩展
interface A {
    name: string;
}

interface A {
    age: number;
}

const aObj: A = {
    name: '', // 必须
    age: 233 // 必须
};
```

### 总结 使用场景

(其实自己确实可以想怎么定义就怎么定义，但为了标准化 最好还是得规范点)

#### type 的一般使用场景

- 一般定义基本或联合类型
- 一般定义元组类型
- 一般定义函数类型
- 定义映射类型

#### interface 的使用场景

- 需要interface 重名会自动合并属性扩展的
- 定义对象数据结构(不使用type时)

————————————————
版权声明：本文为CSDN博主「天渺工作室」的原创文章
原文链接：https://blog.csdn.net/sinat_37255207/article/details/124906155



## TypeScript 基础类型与使用

TypeScript 包含的数据类型如下表:

| 数据类型   | 关键字    | 描述                                                         |
| :--------- | :-------- | :----------------------------------------------------------- |
| 任意类型   | any       | 声明为 any 的变量可以赋予任意类型的值。                      |
| 数字类型   | number    | 双精度 64 位浮点值。它可以用来表示整数和分数。`let binaryLiteral: number = 0b1010; // 二进制 let octalLiteral: number = 0o744;    // 八进制 let decLiteral: number = 6;    // 十进制 let hexLiteral: number = 0xf00d;    // 十六进制` |
| 字符串类型 | string    | 一个字符系列，使用单引号（**'**）或双引号（**"**）来表示字符串类型。反引号（**`**）来定义多行文本和内嵌表达式。`let name: string = "Runoob"; let years: number = 5; let words: string = `您好，今年是 ${ name } 发布 ${ years + 1} 周年`;` |
| 布尔类型   | boolean   | 表示逻辑值：true 和 false。`let flag: boolean = true;`       |
| 数组类型   | 无        | 声明变量为数组。`// 在元素类型后面加上[] let arr: number[] = [1, 2]; // 或者使用数组泛型 let arr: Array<number> = [1, 2];` |
| 元组       | 无        | 元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同。`let x: [string, number]; x = ['Runoob', 1];    // 运行正常 x = [1, 'Runoob'];    // 报错 console.log(x[0]);    // 输出 Runoob` |
| 枚举       | enum      | 枚举类型用于定义数值集合。`enum Color {Red, Green, Blue}; let c: Color = Color.Blue; console.log(c);    // 输出 2` |
| void       | void      | 用于标识方法返回值的类型，表示该方法没有返回值。`function hello(): void {    alert("Hello Runoob"); }` |
| null       | null      | 表示对象值缺失。                                             |
| undefined  | undefined | 用于初始化变量为一个未定义的值                               |
| never      | never     | never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。这意味着声明为 never 类型的变量只能被 never 类型所赋值，在函数中它通常表现为抛出异常或无法执行到终止点（例如无限循环） |

```jsx
// 返回值为 never 的函数可以是抛出异常的情况
function error(message: string): never {
    throw new Error(message);
}
```

**注意：**TypeScript 和 JavaScript 没有整数类型。

### 1.变量声明

显式类型,通过冒号：type(类型)

```jsx
// String(原生的构造函数) vs string (ts中的类型) 

var myname:string = "字符" 

var mybool:boolean = false 

var mynumber:number = 100 
//数组：type[] ，Array<type>
var mylist:Array<string> = ["111","222","3333"] 

// 联合类型：既可能是数字或字符串
var myname2:string | number | boolean = 100 
var myname3:string | number = "kerwin" 
//联合类型：既能数字和字符串
var mylist2:Array<string| number> = [1,2,"kerwin"] 
var mylist3:(string| number)[] = [1,2,"kerwin"] 
```

特殊类型 any，接受任何的检查

```typescript
let obj:any={x:8}
x='hua'
```

枚举enum

枚举就是用指定根据变量获取固定的值，通常用在定义上

```typescript
enum Disable {
  NO = 0,
  YES = 1,
}
```



### 2.对象 使用接口

属性后冒号前加 ?：是 可选的属性，表示属性可以不写

！是非空断言

```typescript
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
```



### 3.定义普通函数和传参：

使用接口描述形状

```typescript
interface 接口名 { 属性规范 }
```

```typescript
//函数
//function test1(a: string（参数类型）, b: number, c?: string): string(返回值类型) {}
// ?可传可不传，a为字符串类型b是数值类型，c？可传可不传值为字符串，函数: string返回值为字符串类型
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
```

### 4.断言as

```typescript
function Test( mytext:string|number ){ 
    console.log((mytext as string).length) //对 
    console.log((mytext as any).length) //对
    console.log((mytext as string[]).length) //错，原声明没有这个类型，无法断言 
}
```

### 5.泛型函数

泛型：是指在定义函数，接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性

```typescript
// function test<Type>(arr:Type[]):Type |undefined{...}
function map<Input,Output>(arr:Input,func:()=>Output):Output[]{
    ...
}
```

限制条件:extends

`<Type extends xxx>`



### 6.定义普通类

```typescript
interface MyInter { 
    name:String, //必选属性 
    readonly country:String,//只读属性 
    getName():void //定义方法 
}
class MyObj implements MyInter{ 
    name="kerwin" 
    country="China" 
    private age = 100 //私有属性， 不能在接口定义 
    getName(){ 
        //... 
    }
   private getAge(){ 
       //... 
   } //私有方法， 不能在接口定义
}
```

### 7.定义类组件

```typescript
interface PropInter { 
    name: string | number; 
    firstName?: string;//可选属性 
    lastName?: string;//可选属性 
    // [propName: string]: any 任意属性 
}
interface StateInter { 
    count: number 
}
//根组件 ，第一个参数可以传any 
// 使用泛型< >,第一个参数是约束属性，第二参数是约束状态<约束属性，约束状态>
class HelloClass extends React.Component<PropInter, StateInter> {
    state: State = { count: 0, }; //setState时候也才会检查 
    static defaultProps = { 
        // 属性默认值 
        name: "default name" 
        firstName: "", lastName: "",
    };
}
```



### 8.定义函数组件

#### （1）基本语法

```typescript
//根组件 
// 第一种使用泛型< >,第二种是不写，函数组件也会提示
//const [name, setname] = useState<string>('hua')
const App:React.FC = (props)=>{ 
    console.log(props) 
    const [name, setname] = useState<string>("kerwin") 
    return <div> app </div> 
}
//子组件接受属性 ，使用接口约束props属性
interface iprops { 
    count:number 
}
//第一种写法,加上React.FC<接口约束>
const Child:React.FC<iprops> = (props)=>{ 
    return 
    <div> 
        child-{props.count} 
    </div> 
}
//第二种写法，子组件接受属性 (props:接口约束)
const Child = (props:iprops)=>{
    return <div> child-{props.count} </div> 
}

```

#### **（2）useRef**

```typescript
const mytext = useRef<HTMLInputElement>(null) 
<input type="text" ref={mytext}/>
    
    useEffect(() => { 
    console.log(mytext.current && mytext.current.value) 
}, [])
```

#### （3）**useContext**

```typescript
interface IContext{ call:string }
const GlobalContext = React.createContext<IContext>({ 
    call:"" //定义初始值,按照接口规则 
})
<GlobalContext.Provider value={{ call:"电话" }}> 
    .... 
</GlobalContext.Provider> 

const {call} = useContext(GlobalContext)
```

#### (4)**useReducer**

```typescript
interface IPrevState{ count:number }
interface IAction{ 
    type:string, payload:any 
}
function reducer (prevState:IPrevState,action:IAction){ 
    ..... 
    return prevState 
}
const [state,dispatch]= useReducer(reducer,{
    count:1 
})
dispatch({ 
    type:"Action1", 
    payload:[] 
})
```

### 9.**父子通信**

```typescript
//父组件调用 
<Child key={index} item={item} index={index} cb={(index)=>{ 
    var newlist= [...list] newlist.splice(index,1) setList(newlist) 
}}/> 
//子组件 
interface ItemType{ 
    item:string, 
    index:number, //定义接口 
    cb:(param:number)=>void //定义接口
}
const Child = (props:ItemType)=>{
    let {index,item,cb} = props
    return 
    <div >
        {item} 
    	<button onClick={()=>cb(index)}>del-{index}</button> 
	</div> 
}
```

### 10.路由

#### **编程式导航**

```typescript
// 使用编程式导航，需要引入接口配置 
import { RouteComponentProps } from "react-router-dom"; 
interface IProps {自己定义的接口} 
type HomeProps = IProps & RouteComponentProps; //两个接口属性都支持 
interface IState {} 
class Home extends React.Component<HomeProps, IState> {
    private handleSubmit = async () => { 
        //code for API calls 
        this.props.history.push("/home"); 
    };
    public render(): any { 
        return <div>Hello</div>;
    }
}
```

#### 动态路由

```typescript
// 使用编程式导航，需要引入接口配置 
import { RouteComponentProps } from "react-router-dom";
interface IParams{ id:string }
// RouteComponentProps是一个泛型接口 
class Detail extends Component< RouteComponentProps<IParams> >{
    componentDidMount() { 
        console.log(this.props.match.params.id) 
    }
    render(){ 
        return <div> detail </div> 
    } 
}
```

### 11.**redux**

```typescript
import {createStore} from 'redux' 
interface ActionInter{ 
    type:String,
    payload:any 
}
const reducer = (prevState={},action:ActionInter)=>{
    return action.payload 
}
const store = createStore(reducer,//enhancer) 
export default store
```



## TypeScript综合补充

### 1.模块化开发

模块化：每个文件可以是一个独立的模块，支持ES Module，也支持CommonJS；

通过ESModule的模式导出函数（按需导出）

`export function xxx(){ ... }`

`import {xxx} form './xxx'`

### 2.命名空间

命名空间：通过namespace来声明一个命名空间

早期称为内部模块，主要目的是将一个模块内部再进行作用域的划分，防止一些命名冲突的问题

```typescript
export namespace timeUitls{
    export function format(time:string){
        ...
    }
}
 //调用
    import {timeUitls} from './xxx'
    console.log(timeUitls.format(...))
```

### 3.declare声明其他

declare 用来声明一个全局的变量，一般用来放置最上面。

当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。这是因为前端第三方库大多都是非 TypeScript 库，基本上都是使用 JS 编写的，在 TS 中使用非 TS 编写的第三方库，需要有个 xx.d.ts 声明文件

#### (1).声明变量、函数、类

```typescript
// 声明变量/函数/类
declare let whyName: string
declare let whyAge: number
declare let whyHeight: number

declare function whyFoo(): void

declare class Person {
  name: string
  age: number
  constructor(name: string, age: number)
}
```

#### **(2). 声明模块**

 我们也可以声明模块，比如lodash模块默认不能使用的情况，可以自己来声明这个模块：

声明：

声明模块的语法: declare module ‘模块名’ {},可以通过 export 导出对应库的类、函数等

```typescript
// 先    【npm install lodash -D】
// 还需要【npm install @types/lodash -D】
declare module 'lodash' {
    export function join(arr: any[]): string
}
```

调用：

```typescript
// 模块
import lodash from 'lodash'
console.log(lodash.join(['msg1','msg2']));
```

可用declare或export关键字；区别declare全局，export需import导出

#### **(3). 声明文件 **  .d.ts

　在某些情况下，我们也可以声明文件：

　比如在开发vue的过程中，默认是不识别我们的.vue文件的，那么我们就需要对其进行文件的声明；

　比如在开发中我们使用了 jpg 这类图片文件，默认typescript也是不支持的，也需要对其进行声明；

```typescript
// 声明文件
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.png'
declare module '*.svg'
declare module '*.gif'
```

#### **(4). 声明命名空间**

```typescript
// 声明命名空间
declare namespace $ {
  export function ajax(settings: any): any
}
```

### 4.类型缩小

类型缩小：宽类型转化为窄类型的过程，常用于处理联合类型的场景。

#### typeof类型守卫

```typescript
typeof strs==='object'
typeof strs==='function'
typeof strs==='number'
typeof strs==='undefined'
typeof strs==='string'
typeof strs==='boolean'
    ...
```

真值缩小

使用 条件，&&，||，if语句，布尔否定！

等值缩小

===,!==,==,!=

in操作符缩小

```typescript
"value" in x
//x具有可选或必需属性的类型的值
```

### 5.never类型与穷尽性检查

never:不应该存在的状态

### 6.扩展类型

interface使用**extends**扩展，type 使用&组合多个

### 7.交叉类型

type 使用**&**组合多个

```typescript
interface test1{
	name:string
}
interface test2{
	age:number
}
type testFull=test1&test2
```

