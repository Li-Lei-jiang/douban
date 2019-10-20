import {ADD_NUM, DEL_NUM, SET_NUM, GET_CITY} from './mutation-types'//这是引进的文件  用结构赋值的方式

export default {//同步操作state  data给 state赋的值
  [SET_NUM] (state, data) {
    state.num = data
  },
  //下面的事吧 num+ 或者- 1
  [ADD_NUM] (state) {
    state.num += 1
  },
  [DEL_NUM] (state) {
    state.num -= 2
  },
  [GET_CITY] (state, data) {
    state.citys = data
  }
}

/*
* 要使用先建一个mutations-types 的文件
* 这个文件是同步操作state  要和 mutations-types 一起使用
* */