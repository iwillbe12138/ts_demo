/*
 * @Description:
 * @Author: iwillbe12138
 * @Date: 2021-02-19 03:42:31
 * @LastEditTime: 2021-02-19 04:11:12
 * @LastEditors: iwillbe12138
 */

export class Header {
  constructor() {
    const elem = document.createElement("div");
    elem.innerHTML = "This is Header";
    document.body.appendChild(elem);
  }
}

export class Content {
  constructor() {
    const elem = document.createElement("div");
    elem.innerHTML = "This is Content";
    document.body.appendChild(elem);
  }
}

export class Footer {
  constructor() {
    const elem = document.createElement("div");
    elem.innerHTML = "This is Footer";
    document.body.appendChild(elem);
  }
}
