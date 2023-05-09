import { BlockNotion, BlockTypes, MixedBlockNotionArray } from "@types/block.notion";

function insertAndShift<T extends BlockTypes> (
	blocks: MixedBlockNotionArray,
	newElement: BlockNotion<T>,
) : MixedBlockNotionArray {
	let inserted = false;
	const newArr: MixedBlockNotionArray = [];

	for (const block of blocks) {
		if (!inserted && block.order >= newElement.order) {
			newArr.push(newElement as BlockNotion<T>);
			inserted = true;
		}

		newArr.push({
			...block,
			order: inserted ? block.order + 1 : block.order,
		});
	}

	if (!inserted) {
		newArr.push(newElement as BlockNotion<T>);
	}

	return newArr;
}
