import GenericInput from '../../../../components/molecules/inputs/GenericInput.vue';

export default {
  title: 'molecules/inputs/GenericInput',
  component: GenericInput,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GenericInput },
  template: '<GenericInput :placeholder="placeholder" :required="required" :type="type" :label="label" :error="error"></GenericInput>',
});

export const Name = Template.bind({});
Name.args = {
  placeholder: '',
  required: true,
  type: 'text',
  label: 'Full name',
};

export const Email = Template.bind({});
Email.args = {
  placeholder: 'name@example.com',
  required: true,
  type: 'email',
  label: 'E-mail',
};

export const TitleError = Template.bind({});
TitleError.args = {
  placeholder: '',
  required: true,
  type: 'text',
  label: 'Title',
  error: true,
};
