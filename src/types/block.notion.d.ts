
declare type BlockNotion<T extends BlockTypes> = {
  block_id: string,
  block_type: T,
  content: ContentForBlockType<T>,
  style?: string,
	overrideDefaultStyles: boolean,
	children: ChildrenForBlockType<T>,
  order: number,
}
type BlockTypes = "header" | "paragraph" | "container";

type ContentForBlockType<T extends BlockTypes> = 
  T extends "header" ? Header :
  T extends "paragraph" ? Paragraph :
  T extends "container" ? string :
  never;

type ChildrenForBlockType<T extends BlockTypes> =
	T extends "container" ? MixedBlockNotionArray : never;

type Header = { level: number; text: string; }
type Paragraph = string;
type Image = { path: string; alt: string; }

export type MixedBlockNotionArray = Array<
	BlockNotion<"header">
	| BlockNotion<"paragraph">
	| BlockNotion<"container">
>
