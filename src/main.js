/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-08-22 15:06:47
 **/
import t1 from './t1'
// import * as t2 from './t2'
import queryString from 'querystring'
console.log('queryString is ', queryString)

// 测试chunk
import('./t2').then(data => {
  console.log('data is ', data)
})

// import 'sdk-base-ytest'

// 全部打包出来
if (Math.ceil(Math.random()%2 == 0)) {
  t1()
} else {
  console.log(t2.t2)
}
// console.log('this is main')
