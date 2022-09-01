<script>
	import { uuid } from 'vue-uuid';

	const defaultValues = {
		locationName: 'Headquarters',
		address: '3763 W. Dallas St.',
		name: 'Hellena John',
		title: 'Software Tester',
		email: 'georgia.young@example.com',
		phoneNumber: '(808) 555-0111',
	};

	export default {
	  computed: {
		locations () {
		  return [
		  {
				id: uuid.v4(),
				...defaultValues
			},
			{
				id: uuid.v4(),
				...defaultValues
			},
			{
				id: uuid.v4(),
				...defaultValues
			},
			{
				id: uuid.v4(),
				...defaultValues
			},
			{
				id: uuid.v4(),
				...defaultValues
			},
			{
				id: uuid.v4(),
				...defaultValues
			},
		  ]
		}
	  },
	}
	</script>

<template>
	<div>
		<AddLocationHandler />
		<div class="flex flex-col gap-6">
			<OfficeCard v-for="location in locations" :key="location.id" :location="location" />
		</div>
	</div>
</template>
