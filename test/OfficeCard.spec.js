import { mount } from '@vue/test-utils'
import OfficeCard from '@/components/OfficeCard.vue'

const defaultPropData = {
  location: {
    locationName: 'locationNameMock',
    address: 'addressMock',
    name: 'nameMock',
    title: 'titleMock',
    email: 'emailMock',
    phoneNumber: 'phoneNumberMock',
  },
}

describe('OfficeCard test suites', () => {
  test('#1 - OfficeCard is present', () => {
    const wrapper = mount(OfficeCard, {
      propsData: defaultPropData,
    })
    expect(wrapper.vm).toBeTruthy()
  })

  test('#2 - OfficeCard Description is hidden', () => {
    const wrapper = mount(OfficeCard, {
      propsData: defaultPropData,
    })
    const descriptionCard = wrapper.find('[data-testid="description"]')
    expect(descriptionCard.classes()).toContain('max-h-0')
    expect(descriptionCard.classes()).toContain('overflow-hidden')
  })

  test('#3 - OfficeCard Description is visible', async () => {
    const wrapper = mount(OfficeCard, {
      propsData: defaultPropData,
    })
    const officeCard = wrapper.find('[data-testid="office-card"]')
    await officeCard.trigger('click')

    const descriptionCard = wrapper.find('[data-testid="description"]')
    expect(descriptionCard.classes()).not.toContain('max-h-0')
  })
})
