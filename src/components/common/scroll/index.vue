<template>
  <div>
    歌手
   </div>
</template>

<script>
import { defineComponent, ref,   } from 'vue';//getCurrentInstance, computed
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Scroll',
  props: {
    direction: {// 滚动的方向
      type:String,
      default: 'vertical',
      },
    click: {// 是否支持点击
      type:Boolean,
      default:true
      },
    refresh: {// 是否刷新
      type:Boolean,
      default:true
      },
    onScroll: {// 滑动触发的回调函数
      type:Function,
      default:null
      },
    pullUp: {// 上拉加载逻辑
      type:Function,
      default:null
      },
    pullDown: {// 下拉加载逻辑
      type:Function,
      default:null
      },
    pullUpLoading: {// 是否显示下拉 loading 动画
      type:Boolean,
      default:false
      },
    pullDownLoading: {// 是否显示下拉 loading 动画
      type:Boolean,
      default:false
      },
    bounceTop: {// 是否支持向上吸顶
      type:Boolean,
      default:true
      },
    bounceBottom: {// 是否支持向下吸底
      type:Boolean,
      default:true
      },
  },
  setup(props) {
    const { direction, click, refresh, pullUpLoading, pullDownLoading, bounceTop, bounceBottom } = props;
    const { pullUp, pullDown, onScroll } = props;
    return {

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
