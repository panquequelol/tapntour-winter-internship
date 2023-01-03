<template>
  <div class="bg-black top-10 text-lg pt-10 w-full min-h-screen">
    <div class="flex mb-2">
      <button @click="$router.go(-1)" type="submit" class="ml-2">
        <span class="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </span>
      </button>
      <span class="text-xl font-semibold ml-2 text-white">Back</span>
    </div>
    <div class="text-xl text-white px-5 grid gap-2 place-content-center">
      <img class="h-96 py-4" :src="tour?.image" alt="" />
      <div class="flex gap-1 items-end justify-between">
        <h2 class="text-2xl font-semibold">{{ tour?.name }}</h2>
        <div class="flex items-center gap-1 text-gray-400 text-base"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          {{ tour?.city }}, {{ tour?.country }}</div>
      </div>
      <div class="text-base text-gray-400 flex gap-2">
        <div class="flex gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {{ tour?.duration }}
        </div>
        <div class="flex gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
          </svg>
          {{ parseInt(tour?.stop) }} {{ tour.stop == 1 ? "stop" : "stops" }}
        </div>
        <div class="flex gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
          </svg>
          {{ tour?.mode }}
        </div>
      </div>
      <p class="text-base text-white">{{ tour?.resume }}</p>

    </div>

    <!-- Payment  -->
    <div class="grid place-content-center">
      <div class="text-sm text-gray-400 font-light p-5">What action would you like to perform? </div>
      <button type="button"
        class="border border-gray-200 text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2">
        CheckOut with Apple Pay
        <svg class="ml-2 -mr-1 w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple"
          role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path fill="currentColor"
            d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z">
          </path>
        </svg>
      </button>
    </div>
    <div class="h-20"></div>
  </div>
</template>
<script>
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia'
import { useTourStore } from '@/stores/tour'

export default {
  name: 'TourDetail',
  setup() {
    const tourStore = useTourStore()

    const id = useRoute().params.id

    tourStore.fetchTourbyId(id)

    const { tour, loading, error } = storeToRefs(tourStore)

    return {
      tour, loading, error
    }
  }
}

</script>
  