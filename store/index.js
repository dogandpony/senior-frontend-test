import { uuid } from 'vue-uuid'

const defaultValues = {
  locationName: 'Headquarters',
  address: '3763 W. Dallas St.',
  name: 'Hellena John',
  title: 'Software Tester',
  email: 'georgia.young@example.com',
  phoneNumber: '(808) 555-0111',
}

export const state = () => ({
  locations: [
    {
      ...defaultValues,
      id: uuid.v4(),
      locationName: 'Headquarters 1',
    },
    {
      ...defaultValues,
      id: uuid.v4(),
      locationName: 'Headquarters 2',
    },
    {
      ...defaultValues,
      id: uuid.v4(),
      locationName: 'Headquarters 3',
    },
  ],
})

export const getters = {
  getLocations(state) {
    return state.locations
  },
  getLocation(state, locationId) {
    return state.locations.find((e) => e.id === locationId)
  },
}

export const mutations = {
  deleteLocation(state, values) {
    const { locationId } = values
    state.locations = state.locations.filter((e) => e.id !== locationId)
  },
  createLocation(state, values) {
    const newLocation = {
      ...defaultValues,
      ...values.newLocation,
      id: uuid.v4(),
    }
    state.locations.unshift(newLocation)
  },
  updateLocation(state, values) {
    // TODO: Implement this method
  },
}

export const actions = {}
