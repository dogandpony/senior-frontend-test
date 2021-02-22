import Toast from '../../../components/molecules/Toast.vue';

export default {
  title: 'molecules/Toast',
  component: Toast,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Toast },
  template: '<Toast :type="type"></Toast>',
});

export const Edit = Template.bind({});
Edit.args = {
  type: "Edit",
};

export const New = Template.bind({});
New.args = {
  type: "New",
};
