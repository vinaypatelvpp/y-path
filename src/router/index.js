import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/services',
        name: 'Services',
        component: () => import('../views/Services.vue')
    },
    {
        path: '/services/pr-visa',
        name: 'PRVisa',
        component: () => import('../views/services/PRVisa.vue')
    },
    {
        path: '/services/work-visa',
        name: 'WorkVisa',
        component: () => import('../views/services/WorkVisa.vue')
    },
    {
        path: '/services/study-visa',
        name: 'StudyVisa',
        component: () => import('../views/services/StudyVisa.vue')
    },
    {
        path: '/services/investor-visa',
        name: 'InvestorVisa',
        component: () => import('../views/services/InvestorVisa.vue')
    },
    {
        path: '/services/visitor-visa',
        name: 'VisitorVisa',
        component: () => import('../views/services/VisitorVisa.vue')
    },
    {
        path: '/services/job-seeker-visa',
        name: 'JobSeekerVisa',
        component: () => import('../views/services/JobSeekerVisa.vue')
    },
    {
        path: '/services/air-ticket',
        name: 'AirTicket',
        component: () => import('../views/services/AirTicket.vue')
    },
    {
        path: '/services/tour-package',
        name: 'TourPackage',
        component: () => import('../views/services/TourPackage.vue')
    },
    {
        path: '/calculator',
        name: 'Calculator',
        component: () => import('../views/Calculator.vue')
    },
    {
        path: '/calculator/canada',
        name: 'CanadaCalculator',
        component: () => import('../views/calculators/CanadaCalculator.vue')
    },
    {
        path: '/calculator/australia',
        name: 'AustraliaCalculator',
        component: () => import('../views/calculators/AustraliaCalculator.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/Contact.vue')
    },
    {
        path: '/privacy',
        name: 'Privacy',
        component: () => import('../views/Privacy.vue')
    },
    {
        path: '/terms',
        name: 'Terms',
        component: () => import('../views/Terms.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

export default router

