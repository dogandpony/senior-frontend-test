<template>
  <transition name="fade">
    <div class='office-card max-w-full relative mb-6'>
      <transition name="fade">
        <OfficeCardData
          v-show="!isEditConfigOpen"
          :data="data"
          @toggleConfig="toggleConfig"
          class='relative my-0 mx-auto' />
      </transition>
      <OfficeCardConfig
        v-show="isEditConfigOpen"
        :data="data"
        type="Edit"
        @toggleConfig="toggleConfig"
        class='relative my-0 mx-auto' />
    </div>
  </transition>
</template>

<script>
import OfficeCardData from './OfficeCardData.vue';
import OfficeCardConfig from './OfficeCardConfig.vue';

export default {
  name: 'OfficeCard',
  components: {
    OfficeCardData,
    OfficeCardConfig,
  },
  props: {
    data: {
      type: Object,
      default: () => ({
        id: {
          type: Number,
          default: null,
        },
        title: {
          type: String,
          default: '',
        },
        address: {
          type: String,
          default: '',
        },
        fullName: {
          type: String,
          default: '',
        },
        jobPosition: {
          type: String,
          default: '',
        },
        email: {
          type: String,
          default: '',
        },
        phone: {
          type: String,
          default: '',
        },
      }),
    },
  },
  data() {
    return {
      isEditConfigOpen: false,
    };
  },
  methods: {
    toggleConfig() {
      this.isEditConfigOpen = !this.isEditConfigOpen;
    },
  },
};
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
