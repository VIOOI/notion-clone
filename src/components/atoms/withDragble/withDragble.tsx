// withDragAndDrop.tsx
import { $pageData, updateBlockOrder } from "@pages/app/app.store";
import { addChildren } from "@pages/app/updateContent.store";
import { BlockNotion, BlockTypes } from "@types/block.notion";
import { useStoreMap } from "effector-solid";
import { Accessor, Component, createSignal } from "solid-js";

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

		const [ isChildren, setIsChildren ] = createSignal(false);

		const handleDragStart = (event: DragEvent) => {
			event.dataTransfer.setData("text/plain", store().order.toString());
			event.dataTransfer.effectAllowed = "move";
		};

		const handleDragOver = (event: DragEvent) => {
			event.preventDefault();
			const positionMouse = {
				x: event.clientX,
				y: event.clientY,
			};
			const elementFromCursor: Element = document
				.elementsFromPoint(positionMouse.x, positionMouse.y)
				.filter(item => item.classList.contains("to__children"))[0] != undefined;

			if (elementFromCursor && !isChildren()) setIsChildren(true);

			// console.log(elementFromCursor);
			event.dataTransfer.dropEffect = "move";
		};

		const handleDrop = (event: DragEvent) => {
			event.preventDefault();
			const draggedOrder = parseInt(event.dataTransfer.getData("text/plain"), 10);
			const target = event.currentTarget as HTMLDivElement; 
			// console.log(draggedOrder);
			if (draggedOrder !== store().order) {
				if (isChildren()) {
					addChildren({
						parent: allBlocks().filter(i => i.order == draggedOrder ? true : false)[0].id,
						children: store().block_id,
					});
				} else {
					updateBlockOrder({ 
						from: draggedOrder,
						to: store().order,
					});
				}
			}
			setIsChildren(false);
		};

		return (
			<div
				draggable="true"
				ondragstart={handleDragStart}
				ondragover={handleDragOver}
				ondrop={handleDrop}
				classList={{
					"drop-children": isChildren(),
				}}
			>
				<WrappedComponent id={id} />
			</div>
		);
	};
};
