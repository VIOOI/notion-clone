type CalcValue = number | string;
type CssVariable = string;
type CssValue = CalcValue | CssVariable;

// Операции для cssCalc
export const add = (a: CssValue, b: CssValue) => `${a} + ${b}`;
export const subtract = (a: CssValue, b: CssValue) => `${a} - ${b}`;
export const multiply = (a: CssValue, b: CssValue) => `${a} * ${b}`;
export const divide = (a: CssValue, b: CssValue) => `${a} / ${b}`;

// Преобразование значения в пиксели
export function toPx(value: CssValue): string {
	return typeof value === "number" ? `${value}px` : value;
}

// Функция cssCalc
export function cssCalc(operation: string): string {
	return `calc(${operation})`;
}

// Функция cssVar
export function cssVar(name: CssVariable): (fallbackValue?: CalcValue) => string {
	return (fallbackValue?: CalcValue) => {
		const value = fallbackValue ? `, ${typeof fallbackValue === "number" ? `${fallbackValue}px` : fallbackValue}` : "";
		return `var(--${name}${value})`;
	};
}

