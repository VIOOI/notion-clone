import { BlockNotion } from "./block.notion";
import { AuthorInfo, CommentsPage, PageNotion } from "./pages.notion";

const author: AuthorInfo = {
	author_id: "132856",
	name: "Vladimir",
};

const comments: CommentsPage = [
	{
		comment_id: "163457",
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
	// cover: "https://kartinkin.net/pics/uploads/posts/2022-08/1660439596_55-kartinkin-net-p-grand-kanon-voronezhskaya-oblast-krasivo-f-64.jpg",
	cover: "",
	created_at: Date.now(),
	updated_at: Date.now(),
	author: author,
	tags: [
		{ tag_id: "142345", name: "TypeScript" },
		{ tag_id: "543678", name: "SolidJS" },
		{ tag_id: "256246", name: "Stitches" },
	],
	comments: comments,
	blocks: [
		{
			block_id: "142534",
			block_type: "header",
			content: { level: 1, text: "Задание" },
			overrideDefaultStyles: false,
			order: 1,
		} as BlockNotion<"header">,
		{
			block_id: "435663",
			block_type: "paragraph",
			content: "Создайте программу, которая принимает на вход строку и возвращает ее в обратном порядке, затем создайте функцию, которая проверяет является ли строка палиндромом. Напоминаю, что палиндром - это слово или фраза, которая читается одинаково в обоих направлениях (например, \"madam\" или \"A man, a plan, a canal, Panama!\").",
			overrideDefaultStyles: false,
			order: 2,
		} as BlockNotion<"paragraph">,
		{
			block_id: "983462",
			block_type: "header",
			content: { level: 2, text: "Заголовок Второго уровня" },
			overrideDefaultStyles: false,
			order: 3,
		} as BlockNotion<"header">,
		{
			block_id: "232563",
			block_type: "paragraph",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			overrideDefaultStyles: false,
			order: 4,
		} as BlockNotion<"paragraph">,
		{
			block_id: "532456",
			block_type: "paragraph",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			overrideDefaultStyles: false,
			order: 5,
		} as BlockNotion<"paragraph">,
	],
};

