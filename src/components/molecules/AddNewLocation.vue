<template>
  <button
    @click.prevent="clickedPrevent"
    class='add-new-location text-primary-light flex flex-row items-center justify-between
    py-1 px-6 bg-accent-blue shadow-xl rounded-md cursor-pointer
    transition ease-in-out duration-300 hover:bg-opacity-80
    focus:outline-none focus:ring-2 focus:ring-primary'>
      <BodyText class="text-primary-light">Add New Location</BodyText>
      <span class='text-primary-light text-4xl'>+</span>
  </button>
</template>

<script>
import BodyText from '../atoms/typography/BodyText.vue';

export default {
  name: 'AddNewLocation',
  components: {
    BodyText,
  },
  methods: {
    clickedPrevent() {
      this.$emit('clickPrevent');
    },
  },
};
</script>

<style>
    .add-new-location {
        width: 317px;
        height: 56px;
    }
</style>
