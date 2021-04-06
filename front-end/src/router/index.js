import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Book from '../views/Book.vue'
import PersonReviews from '../views/PersonReviews.vue'
import SubmitBook from '../views/SubmitBook.vue'
import SubmitPerson from '../views/SubmitPerson.vue'
import SubmitReview from '../views/SubmitReview.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Book',
    name: 'Book',
    component: Book
  },
  {
    path: '/PersonReviews',
    name: 'PersonReviews',
    component: PersonReviews
  },
  {
    path: '/SubmitBook',
    name: 'SubmitBook',
    component: SubmitBook
  },
  {
    path: '/SubmitPerson',
    name: 'SubmitPerson',
    component: SubmitPerson
  },
  {
    path: '/SubmitReview',
    name: 'SubmitReview',
    component: SubmitReview
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router