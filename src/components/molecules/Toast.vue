<template>
  <div class='h-16 bg-background-card fixed w-screen top-0 left-0
    flex justify-items-center content-center border-t-4 border-accent-blue'>
    <div class="text-center relative inset-0 top-7
      mx-auto flex justify-items-center content-center">
      <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 7L5 11L15 1"
          stroke="#33A6BA"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
      <MetaText class='uppercase text-sm ml-5'>
        The locaton has been {{type === "Edit" ? 'updated' : 'added'}}.
      </MetaText>
    </div>
  </div>
</template>

<script>
import MetaText from '../atoms/typography/MetaText.vue';

export default {
  components: {
    MetaText,
  },
  props: {
    type: {
      type: String,
      default: '',
    },
  },
};
</script>

<style>

</style>
