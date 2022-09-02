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
    <AddButton v-show="!editing" />
    <AddForm v-show="editing" />
  </div>
</template>
