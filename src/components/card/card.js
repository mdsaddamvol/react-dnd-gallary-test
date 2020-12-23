import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../itemTypes";
import "./card.css";
import GallaryImg from "../image/galaryImg/gallaryImg";

const style = {
	height: 251,
	width: 375,
	borderRadius: 8,
	boxSizing: "border-box",
	marginTop: 50,
	marginLeft: 33,
	backgroundColor: "white",
	cursor: "move",
};
const Card = ({ id, index, img, data, modalOpen, moveCard }) => {
	const ref = useRef(null);
	const [{ isOver }, drop] = useDrop({
		accept: ItemTypes.GallaryImage,
		collect: (monitor) => ({
			isOver: monitor.isOver(),
		}),
		hover(item, monitor) {
			if (!ref.current) {
				return;
			}
			const dragIndex = item.index;
			const hoverIndex = index;
			// Don't replace items with themselves
			if (dragIndex === hoverIndex) {
				return;
			}
			// Determine rectangle on screen
			const hoverBoundingRect = ref.current?.getBoundingClientRect();
			// Get vertical middle
			const hoverMiddleX =
				(hoverBoundingRect.right - hoverBoundingRect.left) / 2;
			// Determine mouse position
			const clientOffset = monitor.getClientOffset();
			// Get pixels to the top
			const hoverClientX = clientOffset.x - hoverBoundingRect.left;

			console.log(hoverMiddleX);
			// Only perform the move when the mouse has crossed half of the items height
			// When dragging downwards, only move when the cursor is below 50%
			// When dragging upwards, only move when the cursor is above 50%
			// Dragging downwards
			if (dragIndex < hoverIndex && hoverClientX > hoverMiddleX) {
				return;
			}
			// Dragging upwards
			if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
				return;
			}
			// Time to actually perform the action
			moveCard(dragIndex, hoverIndex);
			// Note: we're mutating the monitor item here!
			// Generally it's better to avoid mutations,
			// but it's good here for the sake of performance
			// to avoid expensive index searches.
			item.index = hoverIndex;
		},
	});
	const [{ isDragging }, drag] = useDrag({
		item: { type: ItemTypes.GallaryImage, id, index, img, data, modalOpen },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});
	const opacity = isDragging ? 0 : 1;
	drag(drop(ref));

	return (
		<div ref={ref} style={{ ...style, opacity }}>
			<GallaryImg
				id={id}
				index={index}
				img={img}
				data={data}
				modalOpen={modalOpen}
				isOver={isOver}
			/>
		</div>
	);
};

export default Card;
