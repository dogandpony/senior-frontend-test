import BodyText from '../../../../components/atoms/typography/BodyText.vue';

export default {
  title: 'atoms/typography/BodyText',
  component: BodyText,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BodyText },
  template: '<BodyText>Body Text</BodyText>',
});

export const Body = Template.bind({});
Body.args = {
};
