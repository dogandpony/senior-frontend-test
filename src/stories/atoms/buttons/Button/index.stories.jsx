import Button from '../../../../components/atoms/buttons/Button.vue';

export default {
  title: 'atoms/buttons/Button',
  component: Button,
  argTypes: {
  //   type: { control: 'Primary' },
    // disabled: { control: false },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<Button :disabled="disabled" :type="type"> Primary </Button>',
});

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  disabled: false,
  type: 'secondary',
};
