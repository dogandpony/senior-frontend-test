import LinkText from '../../../components/molecules/LinkText.vue';

export default {
  title: 'molecules/LinkText',
  component: LinkText,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LinkText },
  template: '<LinkText :href="href">www.google.com</LinkText>',
});

export const Google = Template.bind({});
Google.args = {
  href: "https://www.google.com",
};
