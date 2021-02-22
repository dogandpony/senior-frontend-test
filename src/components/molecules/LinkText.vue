<template>
    <a :href='href' class='link-text'>
      <MetaText
        style="color: inherit; font-size: inherit"
        class='tracking-wider mt-4'>
        <slot></slot>
      </MetaText>
    </a>
</template>

<script>
import MetaText from '../atoms/typography/MetaText.vue';

export default {
  name: 'LinkText',
  components: { MetaText },
  props: {
    href: {
      type: String,
      default: '#',
    },
  },
};
</script>

<style>
</style>
