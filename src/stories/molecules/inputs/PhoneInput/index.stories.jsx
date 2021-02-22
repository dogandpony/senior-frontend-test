import PhoneInput from '../../../../components/molecules/inputs/PhoneInput.vue';

export default {
  title: 'molecules/inputs/PhoneInput',
  component: PhoneInput,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PhoneInput },
  template: '<PhoneInput :required="required" :error="false" :errorMessage="errorMessage" :value="value"></PhoneInput>',
});

export const Phone = Template.bind({});
Phone.args = {
  required: true,
  error: false,
  errorMessage: 'phoneErrMsg',
  value: 'phone',
};
