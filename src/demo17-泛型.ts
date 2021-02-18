/*
 * @Description: 难点  泛型 -->方法中使用泛型
 * @Author: iwillbe12138
 * @Date: 2021-02-19 02:37:53
 * @LastEditTime: 2021-02-19 02:51:08
 * @LastEditors: iwillbe12138
 */

//泛型-->函数（方法）中使用  泛指的类型

//原方法
// function join(first: string | number, second: string | number) {
//   return `${first}${second}`;
// }
// join("will",".com")

//使用泛型  支持类型推断
function join<T, P>(first: T, second: P) {
  return `${first}${second}`;
}
join<string, number>("will", 222); //需求  第一个传什么类型 第二个只能传string 使用泛型 调用的时候 指定泛型
//类型推断 ↓↓  不建议
join("will", 222);

//泛型名自定义   大部分 喜欢用T
//泛型中数组的使用
function myfun<ANYaa>(params: ANYaa[]) {
  return params;
}
function myfuned<T>(params: Array<T>) {
  return params;
}
myfun<string>(["11", "22"]);
