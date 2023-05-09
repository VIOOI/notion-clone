import { generateMiniUUID } from "@utils/generateId";

import { BlockNotion } from "./block.notion";
import { AuthorInfo, CommentsPage, PageNotion } from "./pages.notion";

const author: AuthorInfo = {
	author_id: "132856",
	name: "Vladimir",
};

const comments: CommentsPage = [
	{
		comment_id: generateMiniUUID(),
		author_id: author,
		content: "Это первый комментарий",
		created_at: Date.now(),
		updated_at: Date.now(),
	},
];

export const page: PageNotion = {
	page_id: "29463",
	title: "Стандартная страница",
	icon: 2345,
	cover: "https://sportishka.com/uploads/posts/2022-03/1646721384_28-sportishka-com-p-stolitsa-alyaski-turizm-krasivo-foto-30.jpg",
	// cover: "",
	created_at: Date.now(),
	updated_at: Date.now(),
	author: author,
	tags: [
		{ tag_id: generateMiniUUID(), name: "TypeScript" },
		{ tag_id: generateMiniUUID(), name: "SolidJS" },
		{ tag_id: generateMiniUUID(), name: "Stitches" },
	],
	comments: comments,
	blocks: [
		{
			block_id: "12345",
			block_type: "header",
			content: { level: 1, text: "Заголовок 1" },
			overrideDefaultStyles: false,
			children: [],
			order: 1,
		} as BlockNotion<"header">,
		{
			block_id: "54321",
			block_type: "paragraph",
			content: "2 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
			children: [],
			overrideDefaultStyles: false,
			order: 2,
		} as BlockNotion<"paragraph">,
		{
			block_id: generateMiniUUID(),
			block_type: "header",
			content: { level: 2, text: "Заголовок 3" },
			children: [],
			overrideDefaultStyles: false,
			order: 3,
		} as BlockNotion<"header">,
		{
			block_id: generateMiniUUID(),
			block_type: "paragraph",
			content: "4 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
			children: [],
			overrideDefaultStyles: false,
			order: 4,
		} as BlockNotion<"paragraph">,
		{
			block_id: generateMiniUUID(),
			block_type: "paragraph",
			content: "5 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
			overrideDefaultStyles: false,
			children: [],
			order: 5,
		} as BlockNotion<"paragraph">,
		{
			block_id: generateMiniUUID(),
			block_type: "header",
			content: { level: 4, text: "Заголовок 6" },
			children: [],
			overrideDefaultStyles: false,
			order: 6,
		} as BlockNotion<"header">,
		{
			block_id: generateMiniUUID(),
			block_type: "paragraph",
			content: "7 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
			children: [],
			overrideDefaultStyles: false,
			order: 7,
		} as BlockNotion<"paragraph">,
	],
};

