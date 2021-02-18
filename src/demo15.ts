/*
 * @Description:联合类型与类型保护
 * @Author: iwillbe12138
 * @Date: 2021-02-19 01:54:04
 * @LastEditTime: 2021-02-19 02:17:57
 * @LastEditors: iwillbe12138
 */

//联合类型↓↓↓↓

interface Waiter {
  anjiao: boolean; //false
  say: () => {};
}
interface Teacher {
  anjiao: boolean; //true
  skill: () => {};
}

//参数有或者 一种及以上  方法为联合类型
// function judgeWho(animal: Waiter | Teacher) {
// animal.say()// 报错 所以使用类型保护  几个常用的类型保护方式  1.类型断言
//1。类型断言↓↓↓ as
// if(animal.anjiao ){
//   (animal as Teacher).skill()
// }
// else{
//   (animal as Waiter).say()
// }
// }

//2.in  方式
// function judgeWho(animal: Waiter | Teacher) {
//   if('skill' in animal){
//     animal.skill();
//   }
//   else{
//     animal.say();
//   }
// }

// 3.typeof 判断
// function add(first :string|number,second:string|number){
//   if(typeof first==="string"|| typeof second==="string"){
//     return `${first}${second}`
//   }
//   return first+second
// }

class NumberObj {
  count: number;
}

//4.instanceof判断 只能用在类 上

function addObj(first: object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count;
  }
  return 0;
}
