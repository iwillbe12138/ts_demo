// //接口  与类型别名区别 type class      interface 必须是对象

// type Girled = string;

// interface Girl {
//   name: string;
//   age: number;
//   bust: number;
//   waistline?: number; //腰围  ?:  非必填项
//   [propname: string]: any;
//   say(): string;
// }
// const girl = {
//   name: "大脚",
//   age: 18,
//   bust: 96,
//   waistline: 21,
//   sex: "女",
//   sexd: "sd",
//   say() {
//     return "欢迎光临";
//   },
//   teach() {
//     return "我来教你怎么做";
//   },
// };

// class xiaoJieJie implements Girl {
//   name = "刘莹";
//   age = 18;
//   bust = 90;
//   say() {
//     return "hello";
//   }
// }
// interface Teacher extends Girl {
//   teach(): string;
// }

// const screenResume = (girl: Girl) => {
//   // const screenResume = (name: string, age: number, bust: number) => {
//   girl.age < 24 && girl.bust >= 90 && console.log(girl.name + "进入面试");
//   girl.age >= 24 || (girl.bust < 90 && console.log(girl.name + "被淘汰了"));
// };

// const getResume = (girl: Teacher) => {
//   // const getResume = (name: string, age: number, bust: number) => {
//   console.log(girl.name + "年龄是" + girl.age);
//   console.log(girl.name + "胸围是" + girl.bust);
//   console.log(girl.name + "腰围是" + girl.waistline);
//   girl.sex && console.log(girl.name + "性别是" + girl.sex);
//   girl.sexd && console.log(girl.name + "sdasd是" + girl.sexd);
//   console.log(girl.say());
//   console.log(girl.teach());
// };

// // screenResume("大脚", 18, 94);
// // screenResume(girl);
// // getResume("大脚", 18, 94);
// getResume(girl);
