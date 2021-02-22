import DisplayText from '../../../../components/atoms/typography/DisplayText.vue';

export default {
  title: 'atoms/typography/DisplayText',
  component: DisplayText,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DisplayText },
  template: '<DisplayText>Offices</DisplayText>',
});

export const Title = Template.bind({});
Title.args = {
};
