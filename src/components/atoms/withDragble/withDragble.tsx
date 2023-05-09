// withDragAndDrop.tsx
import { $pageData, updateBlockOrder } from "@pages/app/app.store";
import { BlockNotion, BlockTypes } from "@types/block.notion";
import { useStoreMap } from "effector-solid";
import { Accessor, Component } from "solid-js";

type DraggableComponentProps = {
  id: string,
};

export const withDragAndDrop = (
	WrappedComponent: Component<DraggableComponentProps>,
): Component<DraggableComponentProps> => {
	return ({ id }: DraggableComponentProps) => {
		const store = useStoreMap( 
			$pageData,
			store => store.blocks.filter(item => item.block_id == id)[0],
		) as Accessor<BlockNotion<BlockTypes>>;
		const allBlocks = useStoreMap( 
			$pageData,
			store => store.blocks.map(item => ({ id: item.block_id, order: item.order })),
		) as Accessor<Array<{ id: string, order: number }>>;

		const handleDragStart = (event: DragEvent) => {
			event.dataTransfer.setData("text/plain", store().order.toString());
			event.dataTransfer.effectAllowed = "move";
		};

		const handleDragOver = (event: DragEvent) => {
			event.preventDefault();
			event.dataTransfer.dropEffect = "move";
		};

		const handleDrop = (event: DragEvent) => {
			event.preventDefault();
			const draggedOrder = parseInt(event.dataTransfer.getData("text/plain"), 10);
			const target = event.currentTarget as HTMLDivElement; 
			if (draggedOrder !== store().order) {
				updateBlockOrder({ from: draggedOrder, to: store().order });
			}
		};

		return (
			<div
				draggable="true"
				ondragstart={handleDragStart}
				ondragover={handleDragOver}
				ondrop={handleDrop}
			>
				<WrappedComponent id={id} />
			</div>
		);
	};
};
