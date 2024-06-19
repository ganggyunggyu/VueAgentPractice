import { createRouter, createWebHashHistory } from 'vue-router';
import Capture from '@views/Capture.vue';
import Landing from '@views/Landing.vue';
import Intro from '@views/Intro.vue';
import Loading from '@views/Loading.vue';

export const routes = [
  { path: '/', component: Landing, name: 'Landing' },
  { path: '/capture', component: Capture, name: 'Capture' },
  { path: '/intro', component: Intro, name: 'Intro' },
  { path: '/loading', component: Loading, name: 'Loading' },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
