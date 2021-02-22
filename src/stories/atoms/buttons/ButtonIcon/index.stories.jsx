import ButtonIcon from '../../../../components/atoms/buttons/ButtonIcon.vue';

export default {
  title: 'atoms/buttons/ButtonIcon',
  component: ButtonIcon,
  argTypes: {
    text: { control: 'Button' },

  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ButtonIcon },
  template: '<ButtonIcon :text="text"><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.232 3.23199L16.768 6.76799M14.732 1.73199C15.2009 1.26309 15.8369 0.999664 16.5 0.999664C17.1631 0.999664 17.7991 1.26309 18.268 1.73199C18.7369 2.2009 19.0003 2.83687 19.0003 3.49999C19.0003 4.16312 18.7369 4.79909 18.268 5.26799L4.5 19.036H1V15.464L14.732 1.73199Z" stroke="#989EA7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></ButtonIcon>',
});

export const Edit = Template.bind({});
Edit.args = {
  text: 'Edit',
};
