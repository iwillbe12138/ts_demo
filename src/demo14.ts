// /*
//  * @Description:抽象类和只读属性
//  * @Author: iwillbe12138
//  * @Date: 2021-01-25 01:26:44
//  * @LastEditTime: 2021-01-25 01:27:25
//  * @LastEditors:
//  */

// //只读属性
// // class Person {
// //   public readonly _name: string;
// //   constructor(public name: string) {
// //     this._name = name;
// //   }
// // }

// // const person = new Person("will");
// // person.name = "谢广坤";
// // console.log(person._name);

// //抽象类  ↓↓↓

// abstract class Girl {
//   //抽象类
//   public name: string;

//   constructor(name: string) {
//     this.name = name;
//   }
//   abstract skill();
// }

// class Waiter extends Girl {
//   constructor(name: string) {
//     super(name);
//   }
//   skill() {
//     //业务逻辑不同
//     console.log(this.name + "大爷儿，请喝水");
//   }
// }

// //基础技师
// class BaseTeacher extends Girl {
//   skill() {
//     console.log("大爷儿，来个泰式按摩");
//   }
// }

// //高级技师
// class seniorTeacher extends Girl {
//   skill() {
//     console.log("大爷儿，来个SPA全身按摩吧");
//   }
// }

// const waiter = new Waiter("我是小红,");
// console.log(waiter.skill());

// // class A {
// //   public name: string;
// //   constructor(name: string) {
// //     this.name = name;
// //   }
// // }
// // // const a = new A("sss");
// // class Aed extends A {
// //   constructor(name: string) {
// //     super(name);
// //   }
// // }
// // const a = new A("sss");
// // console.log(a.name);
