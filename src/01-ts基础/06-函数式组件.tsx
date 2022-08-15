import React, { useState } from "react"
// 第一种使用泛型<>,不写，函数组件也会提示
//const [name, setname] = useState<string>('hua')
export default function App() {
	const [name, setname] = useState<string>("hua")
	return (
		<div>
			App--{name}
			<button
				onClick={() => {
					setname("海绵宝宝")
				}}
			>
				click
			</button>
			<Child name="huahua" />
		</div>
	)
}
// 使用接口约束props属性
interface Iprop {
	name: string
}
// function Child(props: Iprop) {
//   return <div>child--{props.name}</div>
// }
//第二种写法,加上React.FC<接口约束>
const Child: React.FC<Iprop> = props => {
	return <div>child--{props.name}</div>
}
