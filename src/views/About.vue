<template>
  <div class="about">

  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
    list:[]
    };
  },
  //组件使用state 里面的num，所有的值都在里面
  computed: {
   //  num() {
   //    return this.$store.state.num; //固定写法 对应state 里面的num
   // }
  },
  methods: {

    getCity() {
      this.$axios
        .list("api/movie/in_theaters")
        .then(res => {
          // this.$store.state.list = res.list; //给state 的citys 赋值
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getCity()
    console.log(this.$store.state.list)
  }
};
</script>
