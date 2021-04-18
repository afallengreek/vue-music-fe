<template>
  <div>
    <div class="carousel">
      <div class="before"></div>
      <el-carousel  height="150px" indicator-position='none'>
        <el-carousel-item v-for="item in storeState.banner"  :key="item.imageUrl">
          <!-- <h3 class="small">{{ item }}</h3> -->
        <el-image :src="item.imageUrl"></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <h1 class='title'>推荐歌单</h1>
    <div class='songs'>
         <di class="song" v-for="item in storeState.recommendSongs" :key='item.id'>
             <div class='decorate'></div>
             <el-image :src="item.picUrl" lazy>
                <template #placeholder>
                  <div class="image-slot">
                    加载中<span class="dot">...</span>
                  </div>
                </template>
             </el-image>
             <div class='desc'>{{item.name}}</div>
             <div class='count'>
               <i class="el-icon-headset"></i>
               <span>{{item.playCount}}</span>
             </div>
         </di>
    </div>
   </div>
</template>

<script>
import { defineComponent, ref,   } from 'vue';//getCurrentInstance, computed
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Recommend',
  setup() {
    const count = ref(10);
    // 在js 中获取ref 中定义的值, 需要通过value属性
    const store = useStore();
    // const { ctx } = getCurrentInstance();
    //初始化
    store.dispatch('getBanner');
    store.dispatch('getRecommendList');
    const storeState = store.state;
    return {
       count,
       storeState
    }
   }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.songs{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .song{
    position:relative;
    width:32%;
    .image-slot{
      height: 160px;
      width:100%;
    }
    .decorate{
          position: absolute;
          top: 0;
          width: 100%;
          height: 35px;
          background: rgba(0, 0, 0, 0) linear-gradient(rgba(110, 110, 110, 0.4), rgba(255, 255, 255, 0)) repeat scroll 0% 0%;
          border-radius: 4px;
          z-index: 1;
    }
    .count{
        position: absolute;
        right: 2px;
        top: 2px;
        font-size: 12px;
        line-height: 15px;
        color: #f2f2f2;
    }
    .desc{
      font-size: 12px;
      padding: 0 2px;
      overflow: hidden;
      text-align: left;
      height: 50px;
      line-height: 1.4;
      color: #575757;
      margin-top: 2px;
    }
    .el-image{
      border-radius: 4px;
    }
  }
}
.title{
  font-size: 14px;
  line-height: 60px;
  padding-left: 6px;
  font-weight: 600;
}
.carousel{
  height: 150px;
  position: relative;
  .el-image{
      height:100%;
    }
  .el-carousel{
      width: 98%;
      margin: auto;
      border-radius: 4px;
      
  }
  .el-carousel__indicators--horizontal{
    display:none !important;
  }
  .before{
      position: absolute;
      height: 60%;
      width: 100%;
      top:0;
      left:0;
      background-color: @theme-color;
    }
}
 
</style>
