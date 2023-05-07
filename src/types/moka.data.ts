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
	cover: "https://4lapki.com/wp-content/uploads/2020/10/Screenshot_7-1.jpg",
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
			content: { level: 1, text: "Заголовок первого уровня" },
			overrideDefaultStyles: false,
			order: 1,
		},
		{
			block_id: "142734",
			block_type: "paragraph",
			content: "Это мой первый параграф",
			overrideDefaultStyles: false,
			order: 2,
		},
	],
};

