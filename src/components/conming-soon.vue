<!--<template>-->
<!--  <div id="head">-->
<!--    <div class="warp"  v-for="item in port1" :key="item.id">-->
<!--      <div class="jpg">图片</div>-->
<!--      <div class="details">-->
<!--        <ul >-->
<!--          <li ></li>-->
<!--          <li>导演:{{item.director}}</li>-->
<!--          <li>编剧:{{item.name}}</li>-->
<!--          <li>主演:{{item.name_en}}</li>-->
<!--          <li>类型:{{item.genres}}</li>-->
<!--          <li>制片国家/地区:</li>-->
<!--          <li>上映日期:{{item.mainland_pubdate}}</li>-->
<!--          <li>别名:{{ item.title }}</li>-->
<!--        </ul>-->
<!--      </div>-->
<!--      <hr width="2px" style="margin: 0  ;padding:0 ;position: relative ;right: 35px">-->
<!--      <div class="graded">评分-->

<!--        <hr>-->
<!--          <div>豆瓣评分</div>-->
<!--          <div>星</div>-->
<!--          <div>尚未上映</div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: "conming-soon",-->
<!--  components: {},-->
<!--  props: {},-->
<!--  data() {-->
<!--    return {-->
<!--      port1: []-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    getPort1() {-->
<!--      this.$axios-->
<!--        .req("api/movie/coming_soon")-->
<!--        .then(res => {-->
<!--          this.port1 = res.subjects; //给state 的citys 赋值-->
<!--          console.log(res);-->
<!--        })-->
<!--        .catch(err => {-->
<!--          console.log(err);-->
<!--        });-->
<!--    }-->
<!--  },-->
<!--  mounted() {-->
<!--   this.getPort1()-->
<!--  },-->
<!--  created() {},-->
<!--  filters: {},-->
<!--  computed: {},-->
<!--  watch: {},-->
<!--  directives: {}-->
<!--};-->
<!--</script>-->

<!--<style scoped >-->
<!--  #head{-->
<!--    /*background: aquamarine;*/-->
<!--    height: 300px;-->
<!--    position: relative;-->
<!--    top: 25px;-->
<!--  }-->
<!--  .warp{-->
<!--    background: aquamarine;-->
<!--    display: flex;-->
<!--    width: 100%;-->
<!--    height: 300px;-->
<!--    margin-bottom: 50px;-->
<!--    justify-content:space-between;-->

<!--  }-->
<!--  .jpg{-->
<!--    width: 135px;-->
<!--    height: 187px;-->
<!--    background: #42b983;-->
<!--    position: relative;-->
<!--    left: 35px;-->
<!--    top:49px;-->
<!--  }-->
<!--  .details ul{-->
<!--    list-style: none;-->
<!--    height: 250px;-->
<!--    margin: 45px 0  50px 0;-->
<!--    padding: 0;-->
<!--    position: relative;-->
<!--    line-height: 25px;-->
<!--    right: 35px;-->

<!--  }-->
<!--  .details ul li{-->
<!--    line-height: 25px;-->
<!--  }-->
<!--  .graded{-->
<!--    position: relative;-->
<!--    top: 50px;-->
<!--    left:-55px;-->
<!--  }-->

<!--</style>-->
