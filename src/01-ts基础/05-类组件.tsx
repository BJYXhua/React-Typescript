import React, { Component } from 'react'
interface Iclass {
  name: string
}
// 使用泛型,第一个参数是约束属性，第二参数是约束状态<约束属性，约束状态>
export default class App extends Component<any, Iclass> {
  state = {
    name: '海绵宝宝',
  }
  render() {
    return <div>App</div>
  }
}
