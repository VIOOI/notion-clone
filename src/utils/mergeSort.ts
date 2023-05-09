import { MixedBlockNotionArray } from "@types/block.notion";

export function mergeSort(arr: MixedBlockNotionArray): MixedBlockNotionArray {
	if (arr.length <= 1) {
		return arr;
	}

	const mid = Math.floor(arr.length / 2);
	const left = arr.slice(0, mid);
	const right = arr.slice(mid);

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left: MixedBlockNotionArray, right: MixedBlockNotionArray): MixedBlockNotionArray {
	const result: MixedBlockNotionArray = [];
	let leftIndex = 0;
	let rightIndex = 0;

	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex].order < right[rightIndex].order) {
			result.push(left[leftIndex]);
			leftIndex++;
		} else {
			result.push(right[rightIndex]);
			rightIndex++;
		}
	}

	return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
