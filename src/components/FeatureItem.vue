<template>
  <div class="w-full">
    <div class="flex items-top justify-between text-slate-500 text-sm">
      <!-- Type -->
      <div class="flex-1 inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mx-1" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
        {{ mode }}
      </div>
      <!-- Stop -->
      <div class="flex-1 inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mx-1" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
        </svg>
        {{ stops }} stop(s)
      </div>
      <!-- Time -->
      <div class="flex-1 inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mx-1" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {{ duration }} minutes
      </div>
      <!-- Language -->
      <div class="flex-1 inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mx-1" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
        </svg>
        ES | EN
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeactureItem",
  props: ["mode", "stops", "duration"]
};
</script>