import AddNewLocation from '../../../components/molecules/AddNewLocation.vue';

export default {
  title: 'molecules/AddNewLocation',
  component: AddNewLocation,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AddNewLocation },
  template: '<AddNewLocation></AddNewLocation>',
});

export const AddNew = Template.bind({});
AddNew.args = {
};
