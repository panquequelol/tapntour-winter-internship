<script>

export default {
  props: ['duration', 'stop', 'resume', 'image', 'name', 'lat', 'log']
}
</script>

<template>
  <div class="text-xl text-white px-5 grid gap-2 place-content-center">
    <h2 class="text-2xl font-semibold">Stop #{{ parseInt(stop) }}, {{ name }}</h2>
    <img class="h-96 py-4" :src="image" :alt="name" />
    <div class="text-base text-gray-400 flex gap-2">
      <div class="flex gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {{ duration }}
      </div>
      <div class="flex gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
        {{ lat }}, {{ log }} 
      </div>
    </div>
    <p class="text-base text-white">{{ resume }}</p>
  </div>
</template>