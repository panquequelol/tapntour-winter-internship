<template>
  <li>
    <router-link :to="href"
      :class="['block px-3 py-2 rounded-md', isActive ? 'bg-sky-500 text-white' : 'bg-slate-50  text-slate-400']">
      <slot></slot>
    </router-link>
  </li>
</template>
  
<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
    isActive: Boolean,
  },
}
</script>
  