<template>
  <div>
    <div class='top'>
          <span>
          <i class="el-icon-menu"></i></span>
          <span class="title">云音乐</span>  
          <span>
            <i class="el-icon-search" @click="goto('search')"></i>
          </span>
    </div>
    <div class='tab'>
        <div   @click="goto('recommend',1)">
          <div>推荐</div>
          <div v-if="selectKey===1" class="bar"></div>
        </div>
        <div   @click="goto('singer',2)">
          <div>歌手</div>
          <div v-if="selectKey===2" class="bar"></div>
        </div>
        <div   @click="goto('rank',3)">
          <div>排行榜</div>
          <div v-if="selectKey===3" class="bar"></div>
        </div>
    </div>
    <!-- <Recommend/> -->
    <router-view></router-view>
   </div>
</template>

<script>
import { defineComponent, ref,   } from 'vue';//getCurrentInstance, computed
import { useRouter } from 'vue-router';


export default defineComponent({
  setup() {
    const selectKey = ref(1);
    // 在js 中获取ref 中定义的值, 需要通过value属性
    const router = useRouter();
    // const { ctx } = getCurrentInstance();
    function goto (aim,key) {
      if(key){
        selectKey.value = key;  
      // }else{
        router.push("/"+aim)
      }
    }
    return {
       selectKey,
       goto
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
.top{
  display:flex;
  justify-content: space-between;
  background-color: @theme-color;
  padding: 5px 10px;
  &>span{
      line-height: 40px;
      height: 40px;
      color:#f1f1f1;
      font-size: 20px;
      
  }
}
.tab{
  display: flex;
  justify-content:space-around;
  background-color: @theme-color;
  height: 44px;
  color:#f1f1f1;
  &>div{
    color:rgb(228, 228, 228);
    font-size: 14px;
    padding: 2px 0;
  }
  .bar{
     margin-top: 3px;
     height: 2px;
     background-color: #e4e4e4;
     border-radius: 2px;
  }
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
