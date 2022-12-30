<template>
  <div id="app" class="w-full absolute inset-0 bg-white " >
    <LoadingLayout :isLoading="isLoading" />
    <main v-if="!isLoading">
 
    <!-- Header start  -->
    <div class="fixed h-0 top-0 inset-x-0 w-full z-10 bg-white" >
       <HeaderLayout searchmessage="tours and activity" />
    </div>
    <!-- Header end -->
    
    <!-- Content start -->     
         <router-view v-slot="{ Component }">
          <transition>
           <keep-alive>
            <component :is="Component" />
           </keep-alive>
          </transition>
        </router-view>
    <!-- Content end -->

    <!-- NavBar start -->
    <div class="fixed bottom-0 w-full z-10 bg-white" >         
       <FooterLayout/>
    </div>
    <!-- NavBar end -->

    </main>
  </div>

</template>

<script>

import LoadingLayout from '@/layouts/LoadingLayout.vue'
import HeaderLayout from '@/layouts/HeaderLayout.vue'
import FooterLayout from '@/layouts/FooterLayout.vue'

export default {
  name: 'App',
  components: {
    LoadingLayout,
    HeaderLayout,
    FooterLayout
  },
  data() {
    return {
      isLoading:false
    }
  }, 
  methods: {
  }

}
</script>