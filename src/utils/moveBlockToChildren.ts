import { MixedBlockNotionArray } from "@types/block.notion";

export function moveBlockToChildren(
	blocks: MixedBlockNotionArray,
	{ parent, children }: { parent: string; children: string },
): MixedBlockNotionArray {
	const newBlocks = JSON.parse(JSON.stringify(blocks));
	const childIndex = newBlocks.findIndex(block => block.block_id === children);
	const childBlock = newBlocks[childIndex];

	const parentIndex = newBlocks.findIndex(block => block.block_id === parent);
	if (parentIndex !== -1) {
		if (!newBlocks[parentIndex].children) {
			newBlocks[parentIndex].children = [];
		}
		newBlocks[parentIndex].children.push(childBlock);
		newBlocks.splice(childIndex, 1);
	}

	return newBlocks;
}
