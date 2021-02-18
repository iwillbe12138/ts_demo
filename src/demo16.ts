/*
 * @Description:枚举类型 enum
 * @Author: iwillbe12138
 * @Date: 2021-02-19 02:19:20
 * @LastEditTime: 2021-02-19 02:37:15
 * @LastEditors: iwillbe12138
 */

//一般程序员写法
function getServe(status: number) {
  if (status === 0) {
    return "massage";
  } else if (status === 1) {
    return "SPA";
  } else if (status === 2) {
    return "大保健";
  }
}

const result = getServe(0);
// console.log("我要去" + result);
// console.log(`我要去${result}`);

//中级程序员写法
const Status = {
  MASSAGE: 0,
  SPA: 1,
  DABAOJIAN: 2,
};

function getServe2(status: any) {
  if (status === Status.MASSAGE) {
    return "massage";
  } else if (status === Status.SPA) {
    return "SPA";
  } else if (status === Status.DABAOJIAN) {
    return "大保健";
  }
}
const result2 = getServe2(0);
// console.log(`我要去${result2}`);

//高级程序员  枚举类型 enum

enum Status1 {
  MASSAGE = 1,
  SPA,
  DABAOJIAN,
}
function getServe3(status: any) {
  if (status === Status1.MASSAGE) {
    return "massage";
  } else if (status === Status1.SPA) {
    return "SPA";
  } else if (status === Status1.DABAOJIAN) {
    return "大保健";
  }
}
const result3 = getServe3(Status1.SPA);
const result4 = getServe3(2);
console.log(Status1);
console.log(Status1.MASSAGE);
console.log(Status1.SPA);
console.log(Status1.DABAOJIAN);

//反查
console.log(Status1.MASSAGE, Status1[2]); //根据值反查
console.log(`我要去${result3}`);
console.log(`我要去${result4}`);
