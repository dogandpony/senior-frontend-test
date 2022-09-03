<script>
	export default {
	  data() {
		return {
        editing: false
		  }
	  },
    methods: {
      toggleEditing () {
        this.editing = !this.editing;
    }
  },
	}
	</script>

<template>
  <div>
    <FormAddButton v-show="!editing" />
    <FormAddForm v-show="editing" />
  </div>
</template>
