/*
 * @Description:
 * @Author: iwillbe12138
 * @Date: 2020-11-27 23:55:39
 * @LastEditTime: 2020-11-28 00:26:12
 * @LastEditors:
 */

//接口  与类型别名区别 type class      interface 必须是对象

type Girled = string;

interface Girl {
  name: string;
  age: number;
  bust: number;
  waistline?: number; //腰围  ?:  非必填项
}
const girl = {
  name: "大脚",
  age: 18,
  bust: 96,
  waistline: 21,
};

const screenResume = (girl: Girl) => {
  // const screenResume = (name: string, age: number, bust: number) => {
  girl.age < 24 && girl.bust >= 90 && console.log(girl.name + "进入面试");
  girl.age >= 24 || (girl.bust < 90 && console.log(girl.name + "被淘汰了"));
};

const getResume = (girl: Girl) => {
  // const getResume = (name: string, age: number, bust: number) => {
  console.log(girl.name + "年龄是" + girl.age);
  console.log(girl.name + "胸围是" + girl.bust);
  console.log(girl.name + "腰围是" + girl.waistline);
};

// screenResume("大脚", 18, 94);
screenResume(girl);
// getResume("大脚", 18, 94);
getResume(girl);
