import Vuex from 'vuex'
import {get} from 'lodash';
import {getBannerRequest, getRecommendListRequest} from '../api/request';
export default Vuex.createStore({
  state: {
    //走马灯图片
    banner:[],
    //推荐歌曲
    recommendSongs:[],
    fullscreenLoading:false,
  },
  mutations: {
    setState(state, obj) {
      const {key, value} = obj;
      state[key] = value
    },
    setLoading(state, isLoad){
      state['fullscreenLoading'] = isLoad;
    },
  },
  actions: {
    getBanner:async function(context){
        context.commit('setLoading',true);
        const result = await getBannerRequest();
        context.commit('setLoading',false);
        context.commit('setState',{key:'banner',value:get(result,'banners',[])});
    },
    getRecommendList:async function(context){
      context.commit('setLoading',true);
      const result = await getRecommendListRequest();
      context.commit('setLoading',false);
      context.commit('setState',{key:'recommendSongs',value:get(result,'result',[])});
    }
  },
  modules: {
  }
})

