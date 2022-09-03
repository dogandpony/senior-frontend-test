<script>
	export default {
    props: {
        location: Object,
    },
    data() {
        return {
            closed: true
        };
    },
    methods: {
        deleteLocation() {
            this.$store.commit({
                type: "deleteLocation",
                locationId: this.location.id
            });
        },
        updateLocation() {
            this.$store.commit({
                type: "updateLocation",
                locationId: this.location.id
            });
        }
    },
}
	</script>

<template>
	<div class="shadow-xl bg-white rounded-lg overflow-hidden">
	<div role="button" class="flex p-6 justify-between transition ease-out delay-300 shadow-lg" :class="{'bg-gray-500': !closed}" @click="closed = !closed">
		<div >
			<h4 class="font-bold text-2xl leading-8 transition ease-out delay-300" :class="{'text-white': !closed, 'text-dark-blue': closed}">{{location.locationName}}</h4>
			<p class="font-normal text-base leading-6 transition ease-out delay-300" :class="{'text-white': !closed, 'text-gray-500': closed}">{{location.address}}</p>
		</div>
		<div class="flex items-center">
			<div class="transition ease-out delay-300" :class="{'-rotate-180': !closed , 'text-accent-blue': closed,  'text-white': !closed}" >
				<IconsChevronIcon />
			</div>
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
			<button class="bg-accent-blue hover:bg-dark-blue text-white grow p-3" @click="updateLocation">UPDATE</button>
			<button class="bg-red-500 hover:bg-red-700 text-white grow p-3" @click="deleteLocation" >DELETE</button>
		</div>
	</div>
</div>
</template>
