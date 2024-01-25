import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from './store/auth.store';

const NotFound = () => import("./component/pages/NotFound.vue")
const Login = () => import("./component/auth/Login.vue")
const Home = () => import("./component/pages/Home.vue")
const Profile = () => import("./component/profile/Profile.vue")
const ShippingInstruction = () => import("./component/shippinginstruction/ShippingInstruction.vue")
const CreateShippingInstruction = () => import("./component/shippinginstruction/Create.vue")
const MyBooking = () => import("./component/mybooking/MyBooking.vue")

export const router = createRouter({
    base: '/frontend',
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'active',
    routes: [
        { path: '/:pathMatch(.*)*', component: NotFound },  
        // { path: '*', redirect: '/404' },  
        { path: '/', component: Home },
        { path: '/login', component: Login },
        { path: '/home', component: Home },
        { path: '/profile', component: Profile },
        { path: '/shippinginstruction', component: ShippingInstruction },
        { path: '/shippinginstruction/create', component: CreateShippingInstruction },
        { path: '/mybooking', component: MyBooking },
    ]
});

router.beforeEach(async (to) => {
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    const auth = useAuthStore();

    if (authRequired && !auth.user) {
        auth.returnUrl = to.fullPath;
        return '/login';
    }
});
