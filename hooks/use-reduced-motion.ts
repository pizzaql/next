import {useState, useRef, useEffect} from 'react';

export const useReducedMotion = () => {
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

	const {current: mediaQuery} = useRef(
		typeof window === 'undefined' ? null : window.matchMedia('(prefers-reduced-motion: reduce)')
	);

	useEffect(() => {
		const listener = () => {
			setPrefersReducedMotion(Boolean(mediaQuery?.matches));
		};

    mediaQuery?.addEventListener('change', listener);
    return () => {
      mediaQuery?.removeEventListener('change', listener);
    };
	}, [mediaQuery]);

	return prefersReducedMotion;
};
