import useEventListener from "./useEventListener"

const useClickOutside = (el, handler) => {
	const listener = e => {
		if(!el.value || el.value.contains(e.target)) return
		handler(e)
	}

	useEventListener(document, 'mousedown', listener)
	useEventListener(document, 'touchstart', listener)
}

export default useClickOutside