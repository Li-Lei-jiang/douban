<!--<template>-->
<!--  <div id="head">-->
<!--    <div ></div>-->
<!--    <div class="warp" v-for="item in port2" :key="item.id">-->
<!--      <div class="jpg"></div>-->
<!--      <div class="particulars">-->
<!--        <div>{{item.title}}/{{item.original_title}}</div>-->
<!--        <div></div>-->
<!--        <div>{{item.year}}/{{item.genres}}</div>-->
<!--        <div>{{item.mainland_pubdate}}</div>-->
<!--        <div>{{item.average}}</div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: "top250",-->
<!--  components: {},-->
<!--  props: {},-->
<!--  data() {-->
<!--    return {-->
<!--      port2: []-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    getPort2() {-->
<!--      this.$axios-->
<!--        .req("api/movie/top250")-->
<!--        .then(res => {-->
<!--          this.port2 = res.subjects;-->
<!--          console.log(res);-->
<!--        })-->
<!--        .catch(err => {-->
<!--          console.log(err);-->
<!--        });-->
<!--    }-->
<!--  },-->
<!--  mounted() {-->
<!--    this.getPort2()-->
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
<!--    height: 300px;-->
<!--  }-->
<!--  .warp{-->
<!--    background:antiquewhite;-->
<!--    display: flex;-->
<!--    width: 600px;-->
<!--    height: 300px;-->
<!--    margin-bottom: 50px;-->
<!--    position: relative;-->
<!--    top: 26px;-->
<!--      margin-left: 30px;-->
<!--  }-->
<!--  .jpg{-->
<!--    width: 135px;-->
<!--    height: 187px;-->
<!--    background: #42b983;-->
<!--    position: relative;-->
<!--    left: 30px;-->
<!--    top:49px;-->
<!--  }-->
<!--  .particulars div{-->
<!--    position: relative;-->
<!--    top: 45px;-->
<!--    left: 55px;-->
<!--  }-->
<!--</style>-->
