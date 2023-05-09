type CharacterSet = "numeric" | "alphabetic" | "alphanumeric";

export function generateId(
	length = 6,
	characterSet: CharacterSet = "numeric",
): string {
	const numericChars = "0123456789";
	const alphabeticChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	const alphanumericChars = numericChars + alphabeticChars;

	const selectedCharacterSet = characterSet === "numeric"
		? numericChars
		: characterSet === "alphabetic"
			? alphabeticChars
			: alphanumericChars;

	return Array.from({ length }, () => selectedCharacterSet.charAt(Math.floor(Math.random() * selectedCharacterSet.length))).join("");
}

export const generateMiniUUID = () => {
	return `${generateId(6, "alphanumeric")}-${generateId(6, "alphanumeric")}`;
};
