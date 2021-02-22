import MetaText from '../../../../components/atoms/typography/MetaText.vue';

export default {
  title: 'atoms/typography/MetaText',
  component: MetaText,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MetaText },
  template: '<MetaText>Meta Text</MetaText>',
});

export const Meta = Template.bind({});
Meta.args = {
};
