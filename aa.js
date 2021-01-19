/*
 * @Description: 
 * @Author: iwillbe12138
 * @Date: 2020-12-22 17:42:39
 * @LastEditTime: 2021-01-17 23:32:54
 * @LastEditors:  
 */

// function obj(name){
//   if(name){
//     // console.log('this.name:',this.name)
//     this.name=name
//     // console.log('this.name11:',this.name)
//   }
//   // console.log(this)
//   return this
// }
// obj.prototype.name= "name2";
// var a = obj("name1");
// var b = new obj;
// console.log(a.name)
// console.log(b.name)
// console.log(obj.prototype)
// const task = new Promise((resolve, reject) => {
//   resolve(1)
// })

// // setTimeout(() => {
// //   console.log(3)
// // })


// task.then((result) => {
//   console.log(result)
// })

function makeAdd(num) {
  function makeAdds(numed){
  return this.num+numed
  }
}
const add1 = makeAdd(1)
add1(2)

  