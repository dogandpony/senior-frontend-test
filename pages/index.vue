<script>
	export default {
	  computed: {
		locations () {
			return this.$store.getters.getLocations;
		}
	  },
	}
</script>

<template>
	<div class="flex flex-col gap-6">
		<AddLocationHandler />
		<div class="flex flex-col gap-6">
			<OfficeCard v-for="location in locations" :key="location.id" :location="location" />
		</div>
	</div>
</template>
