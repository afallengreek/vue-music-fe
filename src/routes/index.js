import { createWebHistory, createRouter } from 'vue-router';
const history = createWebHistory()
const router = createRouter({
    history, // 路由模式
    routes: [
      {
        // 页面逻辑
        path: '/',
        name: '/',
        component: () => import('@/components/page/home'),
        children: [{
          path: 'recommend', //推荐歌单
          component: () => import('@/components/page/recommend'),
        },{
          path: 'singer', //歌手
          component: () => import('@/components/page/singer'),
        },{
          path: 'rank', //排行榜
          component: () => import('@/components/page/rank'),
        },
      ]
      },

    ]
  })

export default router;
