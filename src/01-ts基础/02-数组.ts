var mylist: Array<number> = [1, 3, 4]
// 既能数字和字符串
var list: Array<number | string> = ["1", 2, "3"]
var list1: number[] = [1, 2, 3, 4, 5]
var list2: (number | string)[] = ["1", 2, "3"]

for (let i = 0; i < list.length; i++) {
    const item = list[i];
    console.log(item);

}
// eslint-disable-next-line import/no-anonymous-default-export
export default { mylist, list, list1, list2 }
