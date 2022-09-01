export const state = () => ({
	locations: ["loc 01", "loc 02", "loc 03", "loc 04", "loc 05", "loc 06"],
});

export const mutations = {
	add(state, text) {
		state.list.push({
			text,
			done: false,
		});
	},
	remove(state, { todo }) {
		state.list.splice(state.list.indexOf(todo), 1);
	},
};
