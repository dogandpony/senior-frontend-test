<template>
    <button
      :disabled='disabled'
      :type='type'
      class="btn"
      :class="`btn-${type}`"
      @click.prevent="clickedPrevent" >
      <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'primary',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    clickedPrevent() {
      this.$emit('clickPrevent');
    },
  },
};
</script>
