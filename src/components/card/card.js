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
	const opacity = isDragging ? 1 : 1;
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
