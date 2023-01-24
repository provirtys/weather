<template>
	<div :class="['select', { 'select--active': isOpen }]"
		ref="select">
		<div class="select-wrapper">
			<div :class="['select__placeholder', { 'select__placeholder--disabled': !list.length }]"
				@click="isOpen = !isOpen">{{ placeholder }}</div>
			<transition name="dropdown">
				<div class="select__dropdown"
					v-if="isOpen">
					<v-input class="select__search"
						v-model="search" />
					<ul class="select__list">
						<TransitionGroup name="list">
							<li
								:class="['select__item', { 'select__item--selected': item.name === modelValue.name }]"
								v-for="item in listFiltered"
								:key=item.name
								@click="onSelect(item)">{{ item.title }}
							</li>
						</TransitionGroup>
					</ul>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>

import { ref, watch, nextTick, computed, TransitionGroup } from 'vue';
import useClickOutside from '../../../hooks/useClickOutside'
import VInput from '../v-input/v-input.vue';

export default {
	name: 'v-select',
	emits: ['update:modelValue'],
	components: { VInput, TransitionGroup },
	props: {
		list: {
			type: Array,
			required: true,
			default: () => []
		},
		modelValue: {
			type: Object,
			requred: true,
			default: () => { }
		}
	},
	setup(props, { emit }) {
		const select = ref(null)
		const isOpen = ref(false)
		const search = ref('')

		const placeholder = computed(() => {
			return props.list.length ? props.modelValue.title : 'Список пуст :('
		})
		const listFiltered = computed(() => {
			return props.list.filter(item => item.title.toLowerCase().includes(search.value.toLowerCase()))
		})

		const onSelect = item => {
			emit('update:modelValue', item)
			isOpen.value = false
		}

		watch(isOpen, async (newVal, oldVal) => {
			if (!oldVal && newVal) {
				nextTick().then(() => {
					const selectedItem = document.querySelector('.select__item--selected')
					selectedItem?.scrollIntoView()
				})
			}
		})

		useClickOutside(select, () => isOpen.value = false)

		return {
			onSelect,
			isOpen,
			select,
			placeholder,
			search,
			listFiltered
		}
	}
}
</script>

















<style lang='scss' src='./style.scss' scoped/>