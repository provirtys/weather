import { onMounted, onUnmounted } from "vue";

const useEventListener = (target, event, listener) => {
	onMounted(()=> target.addEventListener(event, listener))

	onUnmounted(()=> target.removeEventListener(event, listener))
}

export default useEventListener