import { createRouter, createWebHashHistory } from 'vue-router';
import Capture from '@views/Capture.vue';
import Landing from '@views/Landing.vue';
import Intro from '@views/Intro.vue';
import Loading from '@views/Loading.vue';
import Stage from '@views/Stage.vue';
import NormalStorage from '@views/NormalStorage.vue';
import PrimiumStorage from '@views/PrimiumStorage.vue';

export const routes = [
  { path: '/', component: Landing, name: 'Landing' },
  { path: '/capture', component: Capture, name: 'Capture' },
  { path: '/intro', component: Intro, name: 'Intro' },
  { path: '/loading', component: Loading, name: 'Loading' },
  { path: '/stage', component: Stage, name: 'Stage' },
  { path: '/normal-storage', component: NormalStorage, name: 'NomalStorage' },
  { path: '/primium-storage', component: PrimiumStorage, name: 'PrimiumStorage' },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
