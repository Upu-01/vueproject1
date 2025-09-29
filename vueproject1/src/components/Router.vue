<script setup lang="ts">
  import WelcomeItemWithProps from './WelcomeItemWithProps.vue'
  import HelloWorld from './components/HelloWorld.vue'

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: WelcomeItem
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: WelcomeItem
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
