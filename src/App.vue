<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <GlobalStyle></GlobalStyle>
  <router-view></router-view>
   <el-button
    type="primary"
    style="display:none"
    element-loading-text="拼命加载中"
    v-loading.fullscreen.lock="store.state.fullscreenLoading">
    全局遮罩
  </el-button>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
import { GlobalStyle } from  './style'
import { useStore } from 'vuex';

export default {
  name: 'App',
  components: {
    GlobalStyle
  },
  setup() {
    const store = useStore();
    return {
      store
    }
  }
}
</script>

<style>
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	html, body{
		background: #f2f3f4;;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	a{
		text-decoration: none;
		color: #fff;
	}
</style>
