import MicroText from '../../../../components/atoms/typography/MicroText.vue';

export default {
  title: 'atoms/typography/MicroText',
  component: MicroText,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MicroText },
  template: '<MicroText>Mirco Text</MicroText>',
});

export const Micro = Template.bind({});
Micro.args = {
};
