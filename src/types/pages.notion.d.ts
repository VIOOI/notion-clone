import { MixedBlockNotionArray } from "./block.notion";

export type PageNotion = {
  page_id: string,
  title: string,
	icon: number,
	cover: string,
  created_at: number,
  updated_at: number,
  author: AuthorInfo,
  tags: Tags,
  comments: CommentsPage,
  blocks: MixedBlockNotionArray,
}

export type AuthorInfo = {
  author_id: string,
  name: string,
}

export type CommentsPage = Array<{
  comment_id: string,
  author_id: AuthorInfo,
  content: string,
  created_at: number,
  updated_at: number,
}>

export type TagsPage = Array<{
	tag_id: string,
	name: string,
}>
