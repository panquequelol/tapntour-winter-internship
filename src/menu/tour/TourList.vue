<script>
import { defineComponent, computed } from "vue";
import { storeToRefs } from 'pinia'
import { useTourStore } from '@/stores/tour'
import { useRoute } from "vue-router"

import TourItem from '@/menu/tour/TourItem.vue'
import ListView from '@/components/ListView.vue'
import NavView from '@/components/NavView.vue'
import NavItem from '@/components/NavItem.vue'


function getToursData(country) {
  let tours = []
  const tourStore = useTourStore()
  tourStore.fetchTours() // update store

  const { tours: allTours, loading, error } = storeToRefs(tourStore)
  
  if (country) {
    tours = computed(() => tourStore.getTourbyCountry(country))
    return { tours, loading, error }
  }

  return {tours: allTours, loading, error}

}

export default defineComponent({
  components: {
    NavView,
    NavItem,
    TourItem,
    ListView
  },
  setup() {
    const country = useRoute().params.country_name

    const { tours, loading, error } = getToursData(country)
    return { toursInCountry: tours, loading, error, country }

  },
  beforeUpdate() {
    // update state when changing routes
    const country = useRoute().params.country_name

    const { tours, loading, error } = getToursData(country)

    this.toursInCountry = tours
    this.loading = loading
    this.error = error
    this.country = country
  }
});
</script>

<template>
  <div class="divide-y divide-slate-100 pt-5 cursor-pointer">
    <NavView>
      <NavItem href="" :isActive=true>New Release</NavItem>
      <NavItem href="" :isActive="active">Top Rated</NavItem>
      <NavItem href="/tours/country/england">England</NavItem>
      <NavItem href="/tours/country/chile">Chile</NavItem>
    </NavView>
    <ListView>
      <h2 v-if="country" class="pl-6 font-semibold italic text-2xl py-2 bg-stone-100 capitalize font-serif">{{ country }}</h2>
      <p class="pl-6" v-if="loading">Loading tours...</p>
      <p class="pl-6" v-if="error">{{ error.message }}</p>
      <TourItem v-if="toursInCountry" v-for="(item, index) in toursInCountry" :key="index" :item="item" />
      <p class="pl-6 my-2" v-if="!toursInCountry.length && !loading">No tours were found for this location</p>
    </ListView>
  </div>
</template>

