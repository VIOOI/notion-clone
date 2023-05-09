import { BlockNotion, BlockTypes, MixedBlockNotionArray } from "@types/block.notion";

import { mergeSort } from "./mergeSort";


export function moveElement(
	arr: MixedBlockNotionArray,
	positions: { from: number; to: number },
	insetAfter = true,
): MixedBlockNotionArray {

	const { from, to } = positions;
	if (from === to) return arr;
	const elementToMove = arr.find((item) => item.order === from);
	const indexTo = arr.findIndex((item) => item.order === to);
	const adjustedIndexTo = indexTo + (insetAfter ? 1 : 0);

	return mergeSort(arr)
		.filter((item) => item.order !== from)
		.reduce<MixedBlockNotionArray>((accumulator, item, index) => {
			if (index === adjustedIndexTo) {
				accumulator.push(elementToMove);
			}
			accumulator.push(item);
			return accumulator;
		}, [])
		.map((item, index) => ({ ...item, order: index + 1 }));

}
