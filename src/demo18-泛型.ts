/*
 * @Description:泛型  类中使用泛型
 * @Author: iwillbe12138
 * @Date: 2021-02-19 02:51:30
 * @LastEditTime: 2021-02-19 03:05:55
 * @LastEditors: iwillbe12138
 */

//普通写法
class SelectGirl {
  constructor(private girls: string[] | number[]) {}
  getGirl(index: number): string | number {
    return this.girls[index];
  }
}

const selectGirl = new SelectGirl(["大脚", "刘英", "小红"]);
// console.log(selectGirl.getGirl(1));

//泛型写法（类）
class SelectGirl2<T> {
  constructor(private girls: T[]) {}
  getGirl(index: number): T {
    return this.girls[index];
  }
}

const selectGirl2 = new SelectGirl2<string>(["大脚", "刘英", "小红"]);
// console.log(selectGirl2.getGirl(1));

//泛型  继承
interface Girl {
  name: string;
}

class SelectGirl3<T extends Girl> {
  constructor(private girls: T[]) {}
  getGirl(index: number): string {
    return this.girls[index].name;
  }
}

const selectGirl3 = new SelectGirl3([
  { name: "大脚" },
  { name: "刘英" },
  { name: "小红" },
]);
// console.log(selectGirl3.getGirl(1));

//泛型的约束 ↓↓↓↓

class SelectGirl4<T extends number | string> {
  constructor(private girls: T[]) {}
  getGirl(index: number): T {
    return this.girls[index];
  }
}

const selectGirl4 = new SelectGirl4<string>(["大脚", "刘英", "小红"]);
console.log(selectGirl4.getGirl(1));
