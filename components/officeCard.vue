<script>
	export default {
	  props: {
		location: Object,
	  },
	  data() {
		return {
			closed: true
		}
	  }
	}
	</script>

<template>
	<div class="shadow-xl bg-white rounded-lg overflow-hidden">
	<div class="flex p-6 justify-between transition ease-out delay-300 shadow-lg" :class="{'bg-gray-500': !closed}">
		<div >
			<h4 class="text-dark-blue font-bold text-2xl leading-8 transition ease-out delay-300" :class="{'text-white': !closed}">{{location.locationName}}</h4>
			<p class="font-normal text-base leading-6 transition ease-out delay-300" :class="{'text-white': !closed, 'text-gray-500': closed}">{{location.address}}</p>
		</div>
		<div class="flex items-center">
			<button @click="closed = !closed" class="transition ease-out delay-300" :class="{'-rotate-180': !closed}">
				<svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1 1L9 9L17 1" class="transition ease-out delay-300" :class="{'stroke-accent-blue': closed,  'stroke-white': !closed}" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</button>
		</div>
	</div>
	<div class="overflow-hidden transition ease-out delay-300 max-h-full" :class="{'max-h-0' : closed}">
		<ul class="p-6">
			<li>{{location.name}}</li>
			<li>{{location.title}}</li>
			<li>{{location.email}}</li>
			<li>{{location.phoneNumber}}</li>
		</ul>
		<div class="flex justify-between p-6 gap-6">
			<button class="bg-accent-blue hover:bg-dark-blue text-white grow p-3">EDIT</button>
			<button class="bg-red-500 hover:bg-red-700 text-white grow p-3">DELETE</button>
		</div>
	</div>
</div>
</template>
