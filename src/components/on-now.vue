<template>
  <div id="web">
    <div class="warp">
      <div class="content" v-for="item in port" :key="item.id">
        <div class="title">
          <h1>
            {{ item.title }} &nbsp; {{ item.original_title }}&nbsp;
            <span>({{ item.year }})</span>
          </h1>
        </div>
        <div class="warps">
          <div class="jpg"><img :src="item.images.medium" /></div>
          <div class="details">
            <ul>
              <li>
                <span class="hue">电影名：</span> <span>{{ item.title }}</span>
              </li>
              <li>
                <span class="hue">导演：</span
                ><span class="tinct"
                  >{{ item.directors[0].name }}/{{
                    item.directors[0].name_en
                  }}</span
                >
              </li>
              <li>
                <span class="hue">编剧:</span
                ><span class="tinct">不出名搜不到</span>
              </li>
              <li>
                <span class="hue"> 主演：</span>
                <span class="tinct"
                  >{{ item.casts[0].name }}/{{ item.casts[1].name }}/{{
                    item.casts[2].name
                  }}</span
                >/ <span class="hue">更多</span>
              </li>
              <li>
                <span class="hue">类型：</span>{{ item.genres[0] }} /
                {{ item.genres[1] }} / {{ item.genres[2] }}
              </li>
              <li>
                <span class="hue">制片国家/地区：</span>{{ item.pubdates[0] }} /
                {{ item.pubdates[1] }}
              </li>
              <li><span class="hue">语言：</span>英语</li>
              <li>
                <span class="hue">上映时间:</span>{{ item.pubdates[0] }} /
                {{ item.pubdates[1] }}
              </li>
              <li><span class="hue">片长：</span>{{ item.durations[0] }}</li>
              <li>
                <span class="hue">又名：</span>{{ item.durations.subtype }}/{{
                  item.has_video
                }}
              </li>
              <li>
                <span class="hue">IMDb链接：</span
                ><span class="tinct">{{ item.directors[0].id }}</span>
              </li>
            </ul>
          </div>
          <hr
            width="1px"
            style="margin: 3% 0 0 0   ;padding:0 ;position: relative ;right:-8% ;height: 272px "
          />
          <div class="graded">
            <div>
              <div class="pinfen-top">
                <div><span class="hue">豆瓣评分</span></div>
                <div class="pinfen-text">
                  <h1>{{ item.rating.average }}</h1>
                  <div class="pinfen-center">
                    <div>*****</div>
                    <div class="hue"><span>人评价</span></div>
                  </div>
                </div>
                <div class="star">
                  <ul>
                    <li><span class="hue">5星</span></li>
                    <li><span class="hue">4星</span></li>
                    <li><span class="hue">3星</span></li>
                    <li><span class="hue">2星</span></li>
                    <li><span class="hue">1星</span></li>
                  </ul>
                </div>
              </div>
              <hr style=" margin: 0 10px;padding: 0;width: 154px" />
            </div>
            <div class="baifen">
              <div>
                <span class="hue">好于</span>
                <span class="tinct"> 65% 科幻片</span>
              </div>
              <div>
                <span class="hue">好于</span>
                <span class="tinct"> 64% 动作片</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "on-now",
  components: {},
  props: {},
  data() {
    return {
      src: "",
      port: []
    };
  },
  methods: {
    getPort() {
      this.$axios
        .req("api/movie/in_theaters")
        .then(res => {
          this.port = res.subjects;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getPort();
    // console.log(this.$store.state.port)
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped>
#web {
  /*background: black;*/
  max-width: 1300px;
  width: 95%;
  /*height: 200px;*/
}
.warp {
  width: 82%;
  height: 400px;
  margin: 0 auto;
  padding: 0;
  /*background: green;*/
}

.content {
  /*display: flex;*/
  height: 400px;
  background: white;
  /*justify-content: space-around;*/
  margin-bottom: 25px;
  /*justify-content: space-between;*/
}
.title {
  line-height: 60px;
  /*margin-left: 10%;*/

  /*background: #42b983;*/
}
.title h1 {
  font-size: 35px;
  font-weight: bolder;
}
.title span {
  color: #7a7a7a;
  font-family: 楷体;
}
.warps {
  display: flex;
}
.details {
  /*max-width: 500px;*/
  width: 44%;
  height: 51%;
  font-size: 15px;

  margin-left: 4%;
}
.details .hue {
  color: #7a7a7a;
}
.details .tinct {
  color: #1d60bf;
}
.details ul {
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  line-height: 26px;
  font-family: 楷体;
}
.jpg {
  height: 53%;
  width: 20%;
  /*background: #42b983;*/
  position: relative;

  top: 7%;
}
.graded {
  width: 17%;
  height: 41%;
  position: relative;
  left: 10%;
  margin-top: 3%;
  display: flex;
  flex-direction: column;
}
.jpg img {
  width: 100%;
  height: 100%;
}
.graded .pinfen-top {
  list-style: none;
  margin: 10px 10px;
  height: 170px;
  font-family: 楷体;
}
.graded .pinfen-top .hue {
  color: #7a7a7a;
}
.pinfen-text {
  height: 57px;
  font-size: 30px;
  display: flex;
}
.pinfen-text div {
  margin-left: 5px;
}
.pinfen-text h1 {
  line-height: 21px;
  margin-top: 15px;
  font-size: 44px;
}
.pinfen-center {
  width: 100%;
  font-size: 15px;
}
.pinfen-center div {
  line-height: 5px;
  margin-top: 15px;
}
.star {
  line-height: 19px;
}
.baifen {
  font-family: 楷体;
  line-height: 19px;
  margin-top: 15px;
}
.baifen .hue {
  color: #7a7a7a;
}
.tinct {
  color: #1d60bf;
}
</style>
