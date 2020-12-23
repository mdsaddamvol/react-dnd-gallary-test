import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../itemTypes";

export const Sudogallary = ({ children }) => {
	const [, drop] = useDrop({
		accept: ItemTypes.Image,
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			isOverCurrent: monitor.isOver({ shallow: true }),
		}),
	});
	return (
		<div className='gallary' ref={drop}>
			{children}
		</div>
	);
};
