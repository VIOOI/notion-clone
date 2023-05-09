import { PageNotion, Tags } from "@types/pages.notion";
import { createEvent, createStore, sample } from "effector";
import { page } from "@types/moka.data";
import { moveElement } from "@utils/moveElement";
import { mergeSort } from "@utils/mergeSort";

export const newTitle = createEvent<string>();

export const newTag = createEvent();
export const deleteTag = createEvent<string>();
export const renameTag = createEvent<{id: string, newName: string}>();
export const updateBlockOrder = createEvent<{ from: number; to: number }>();

export const unocssLoading = createEvent();

export const $isLoadedUnocss = createStore(false);
export const $pageData = createStore<PageNotion>(page);
$pageData.watch(source => console.log(source.blocks
	.map(i => ({ id: i.block_id, order: i.order })),
));


sample({
	clock: updateBlockOrder,
	source: $pageData,
	fn: (source, clock) => {
		const blocks = moveElement(mergeSort(source.blocks), clock);
		return { ...source, blocks };
	},
	target: $pageData,
});

sample({
	clock: unocssLoading,
	fn: () => true,
	target: $isLoadedUnocss,
});

sample({
	clock: newTitle,
	source: $pageData,
	fn: (source, clock) => {
		const newData: PageNotion = { 
			...source,
			title: clock,
			updated_at: Date.now(),
		};
		return newData;
	},
	target: $pageData,
});

sample({
	clock: deleteTag,
	source: $pageData,
	fn: (source, clock) => {
		const clearTags = source.tags.filter(tag => tag.tag_id != clock); 
		const newData: PageNotion = { ...source, tags: clearTags }; 
		return newData;
	},
	target: $pageData,
});

sample({
	clock: renameTag,
	source: $pageData,
	fn: (source, clock) => {
		const newTags = source.tags.map(tag => {
			if (tag.tag_id != clock.id) return tag; 

			return { tag_id: clock.id, name: clock.newName };
		}); 
		const newData: PageNotion = { ...source, tags: newTags }; 
		return newData;
	},
	target: $pageData,
});

sample({
	clock: newTag,
	source: $pageData,
	fn: source => {
		const newTags: Tags = [ ...source.tags, { tag_id: Date.now().toString(), name: "Новый тег" } ]; 
		const newData: PageNotion = { ...source, tags: newTags }; 
		return newData;
	},
	target: $pageData,
});
