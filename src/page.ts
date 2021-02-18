/*
 * @Description: namespace
 * @Author: iwillbe12138
 * @Date: 2021-02-19 03:15:42
 * @LastEditTime: 2021-02-19 05:42:03
 * @LastEditors: iwillbe12138
 */

import { Header, Content, Footer } from "./components";

//命名空间 里面的 都是局部变量
// namespace Home {
//   export class Page {
//     constructor() {
//       new Header();
//       new Content();
//       new Footer();
//     }
//   }
// }
declare var $: any; //声明  简单粗暴
export default class Page {
  constructor() {
    new Header();
    new Content();
    new Footer();
  }
}
console.log("1231233");

$(function () {
  alert("will");
});
