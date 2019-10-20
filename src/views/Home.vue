<template>
  <div id="home">
    <div id="frame">
      <!--      <div class="top"><span>豆瓣网</span></div>-->
      <div class="head">
        <div class="gps">正在上映</div>
        <div class="gps">即将上映</div>
        <div class="gps">top250</div>
      </div>
      <div class="warp">
        <div class="warpss">
          <on-now class="detail"></on-now>
        </div>
        <div class="warpss">
          <conmingSoon class="detail"></conmingSoon>
        </div>
        <div class="warpss">
          <top250 class="detail"></top250>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import onNow from "../components/on-now";
import conmingSoon from "../components/conming-soon";
import top250 from "../components/top250";
export default {
  name: "home",
  components: {
    onNow,
    conmingSoon,
    top250
  },
  methods: {
    // set() {
    //   // commit提交mutation
    //   this.$store.commit("set_num", 200); //操作state 若有2个参数 第一个是 mutation 的名字 后面的事data的值
    // },
    // add() {
    //   this.$store.commit("add_num");
    // },
    // del() {
    //   this.$store.commit("del_num");
    // }
  },
  mounted() {
    // 发送actioon
  },
  computed: {
    //计算属性
    num() {
      return this.$store.state.num;
    },
    addNum() {
      //这里使用的事getters 里面的 add 方法
      return this.$store.getters.addNum;
    },
    citys() {
      //应为有赋值 这里可以直接使用state里的值
      return this.$store.state.citys;
    }
  }
};
</script>

<style scoped>
#home {
  max-width: 1300px;
  width: 100%;
  /*background: red;*/
  padding: 0;
  margin: 0 auto;
}
#frame {
  padding: 0;
  margin: 0;
  background: whitesmoke;
}
/*.top {*/
/*  height: 35px;*/
/*  background:wheat  ;*/
/*  line-height: 35px;*/
/*}*/
/*.top span {*/
/*  font-size: 30px;*/
/*  padding-left: 25px;*/
/*  color: green;*/
/*}*/
.head {
  max-width: 1300px;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
  height: 70px;
  background: #0a0a11;
}
.head div {
  color: white;
}
.head .gps {
  width: 400px;
  line-height: 70px;
  text-align: center;
  /*background: #42b983;*/
}
.gps:hover {
  background: #42b983;
}
.warp {
  max-width: 1300px;
  width: 90%;
  margin: 0 auto;
  padding: 0;
  /*display: flex;*/
  /*justify-content: space-around;*/
  /*background: cornflowerblue;*/
}
.warpss {
  width: 100%;
  height: 300px;
  /*background: #42b983;*/
  margin: 0 auto;
}

.warpss .detail {
  width: 100%;
  margin-bottom: 35px;
  /*background: #a7ffa6;*/
}
</style>
