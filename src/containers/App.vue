<template>
  <div
    id="app"
    class='place-items-center relative bg-background-body w-full h-full overflow-y-auto'>
    <Header />
    <transition name="fade">
      <router-view v-if="!(isOfficesLoading)" :offices="allOffices" />
    </transition>
    <Footer
    :class="isOfficesLoading ?
    'absolute bottom-0 r-0 l-0 align-middle mx-auto w-full' : ''"/>
    <div v-if="isOfficesLoading" class="w-full h-full fixed block top-0 left-0 z-50">
      <span class="opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0">
        <svg class="animate-spin -ml-1 mr-3 h-10 w-10 text-accent-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4" />
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2
            5.291A7.962 7.962 0 014 12H0c0 3.042 1.135
            5.824 3 7.938l3-2.647z" />
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  computed: mapGetters(['isOfficesLoading', 'allOffices']),
  methods: mapActions(['fetchOffices']),
  created() {
    this.fetchOffices();
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
