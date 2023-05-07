
declare type BlockNotion<T extends BlockTypes> = {
  block_id: string,
  block_type: T,
  content: ContentForBlockType<T>,
  style?: string[],
	overrideDefaultStyles: boolean,
  order: number,
}
type BlockTypes = "header" | "paragraph" | "video";

type ContentForBlockType<T extends BlockTypes> = 
  T extends "header" ? Header :
  T extends "paragraph" ? Paragraph :
  T extends "video" ? Image :
  never;


type Header = { level: number; text: string; }
type Paragraph = string;
type Image = { path: string; alt: string; }

export type MixedBlockNotionArray = Array<
	BlockNotion<"header">
	| BlockNotion<"paragraph">
	| BlockNotion<"video">
>
