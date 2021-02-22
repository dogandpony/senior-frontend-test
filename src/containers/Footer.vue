<template>
  <footer class='footer text-center mb-32'>
    <BodyText>This Project is for test purpose only.</BodyText>
    <LinkText
      class="uppercase text-sm tracking-wide"
      href="https://www.dogandponystudios.com"
      target="_blank">
        www.dogandponystudios.com
    </LinkText>
  </footer>
</template>

<script>
import BodyText from '../components/atoms/typography/BodyText.vue';
import LinkText from '../components/molecules/LinkText.vue';

export default {
  name: 'Footer',
  components: {
    BodyText,
    LinkText,
  },
};
</script>

<style>

</style>
