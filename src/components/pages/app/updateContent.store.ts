import { BlockNotion } from "@types/block.notion";
import { PageNotion } from "@types/pages.notion";
import { createEvent, sample } from "effector";

import { $pageData } from "./app.store";

export const updateHeader = createEvent<{ id: string, text: string }>();
export const updateParagraph = createEvent<{ id: string, text: string }>();

sample({
	clock: updateHeader,
	source: $pageData,
	fn: (source, clock) => {
		const newBlocks = source.blocks.map((block: BlockNotion<"header">) => {
			if (block.block_id != clock.id) return block; 

			return { 
				...block,
				content: {
					level: block.content.level,
					text: clock.text,
				} } as BlockNotion<"header">;
		});

		return {
			...source,
			blocks: newBlocks,
		} as PageNotion;
	},
	target: $pageData,
});

sample({
	clock: updateParagraph,
	source: $pageData,
	fn: (source, clock) => {
		const newBlocks = source.blocks.map((block: BlockNotion<"paragraph">) => {
			if (block.block_id != clock.id) return block; 

			return { 
				...block,
				content: clock.text,
			} as BlockNotion<"paragraph">;
		});

		return {
			...source,
			blocks: newBlocks,
		} as PageNotion;
	},
	target: $pageData,
});

