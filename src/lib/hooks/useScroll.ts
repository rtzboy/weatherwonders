import { useEffect, useRef } from 'react';

const useScroll = <T extends HTMLElement>() => {
	const elRef = useRef<T | null>(null);

	useEffect(() => {
		const el = elRef.current;
		if (el) {
			const onWheel = (e: WheelEvent) => {
				if (e.deltaY === 0) return;
				e.preventDefault();
				el.scrollTo({
					left: el.scrollLeft + e.deltaY
				});
			};
			el.addEventListener('wheel', onWheel);
			return () => el.removeEventListener('wheel', onWheel);
		}
	}, []);

	return elRef;
};

export default useScroll;
