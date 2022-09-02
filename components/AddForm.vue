<script>
	export default {
	  props: {
		location: Object,
	  },
	  data() {
		return {
			  title: '',
        titleError: false,
        address: '',
        addressError: false,
        isFormFilled: false,
		  }
	  },
    methods: {
      checkIfFilled () {
        this.isFormFilled = this.title.length > 0 && this.address.length > 0;
      },
      validate () {
        this.titleError = this.title.length < 1;
        this.addressError = this.address.length < 1;
      },
      createLocation () {
        this.validate();
        if (!this.titleError && !this.addressError) {
          this.$store.commit({
            type: 'createLocation',
            newLocation: {
              locationName: this.title,
              address: this.address,
            }
          });
          this.$parent.toggleEditing();
        }
    }
  },
	}
	</script>

<template>
  <form class="bg-white px-6 py-4 flex grow w-full shadow-lg rounded-lg flex-col gap-6">
    <div class="flex justify-between">
      <h4 class="font-bold">New Location</h4>
      <button @click="this.$parent.toggleEditing">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 13L13 1L1 13ZM1 1L13 13L1 1Z" fill="#989EA7"/>
          <path d="M1 1L13 13M1 13L13 1L1 13Z" stroke="#989EA7" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
    <AddFormInput v-model="title" name="title" label="Title *" :error="titleError" />
    <AddFormInput v-model="address" name="address" label="Enter the address *" :error="addressError" />
    <button type="button" class="px-6 py-2 text-white rounded-sm items-center self-start" :class="{'bg-accent-blue': isFormFilled, 'bg-gray-400': !isFormFilled}" @click="createLocation">Save</button>
  </form>
</template>
