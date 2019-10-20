import { GET_CITY } from "./mutation-types";
import axios from "../http";

export default {
  // 把commit从store解构出来
  async getCity({ commit }) {
    let res = await axios.req("api/movie/in_theaters");
    console.log(res);
    commit(GET_CITY, res); //提交mutations
  }
};

/*
 * 作用异步的去操作数据 操作mutations 里面的方法
 * */
