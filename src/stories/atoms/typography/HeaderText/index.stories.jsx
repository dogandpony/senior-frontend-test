import HeaderText from '../../../../components/atoms/typography/HeaderText.vue';

export default {
  title: 'atoms/typography/HeaderText',
  component: HeaderText,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HeaderText },
  template: '<HeaderText>Header Text</HeaderText>',
});

export const Header = Template.bind({});
Header.args = {
};
