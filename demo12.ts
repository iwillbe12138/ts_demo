/*
 * @Description:
 * @Author: iwillbe12138
 * @Date: 2021-01-17 23:43:31
 * @LastEditTime: 2021-01-25 01:06:23
 * @LastEditors:
 */

class Person {
  // public name: string;
  //  构造函数
  // constructor(name: string) {
  //   this.name = name;
  // }
  // constructor(public name: string) {}
  // constructor() {} class 默认有构造函数  没写默认为空
}

class teacher extends Person {
  constructor(public age: number) {
    // super("will"); //构造函数 继承必须写super
    super(); //构造函数 继承必须写super
  }
}
// const person = new Person("will");
const Teacher = new teacher(18);
console.log(Teacher.age);
// console.log(Teacher.name);
