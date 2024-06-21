import { createRouter, createWebHashHistory } from 'vue-router';
import Landing from '@views/Landing.vue';
import Intro from '@views/Intro.vue';
import Loading from '@views/Loading.vue';
import Stage from '@views/Stage.vue';
import NormalStorage from '@views/NormalStorage.vue';
import PrimiumStorage from '@views/PrimiumStorage.vue';
import Coex from '@views/Coex.vue'
import Busan from '@/views/Busan.vue';

export const routes = [
  { path: '/', component: Landing, name: 'Landing' },
  { path: '/intro', component: Intro, name: 'Intro' },
  { path: '/loading', component: Loading, name: 'Loading' },
  { path: '/stage', component: Stage, name: 'Stage' },
  { path: '/normal-storage', component: NormalStorage, name: 'NomalStorage' },
  { path: '/primium-storage', component: PrimiumStorage, name: 'PrimiumStorage' },
  { path: '/coex', component: Coex, name: 'Coex' },
  { path: '/busan', component: Busan, name: 'Busan' },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
