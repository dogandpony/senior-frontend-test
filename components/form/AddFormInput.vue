<script>
	export default {
	  props: {
      label: {
        type: String,
        default: 'label'
      },
      name: {
        type: String,
        default: 'name'
      },
      value: {
        type: String,
        default: ''
      },
      error: {
        type: Boolean,
      }
	  },
    computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  }
	}
	</script>

<template>
  <div class="flex flex-col gap-1">
    <label>{{label}}</label>
    <input v-model="inputVal" :name="name" class="border-2 px-3 py-1  focus:outline-none rounded" :class="{'focus:border-accent-blue': !error,'border-red-500': error,}" @change="$parent.checkIfFilled" />
    <p class="text-red-500 text-sm" :class="{'hidden': !error}">This field cannot be empty</p>
  </div>
</template>
