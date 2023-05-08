
export function cubicBezier(t: number, p0: number, p1: number, p2: number, p3: number): number {
	return (
		Math.pow(1 - t, 3) * p0 +
			3 * Math.pow(1 - t, 2) * t * p1 +
			3 * (1 - t) * Math.pow(t, 2) * p2 +
			Math.pow(t, 3) * p3
	);
}

export function smoothFunction(x: number): number {
	const t = (x - 1) / 5;
	return cubicBezier(t, 6, 4.5, 4, 2.5);
}
