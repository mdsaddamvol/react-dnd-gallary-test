import React from "react";
import { useDrag } from "react-dnd";
import { connect } from "react-redux";
import { MediaDropInGallary } from "../../redux/gallary/gallayActions";
import { ItemTypes } from "../itemTypes";
const Image = ({ src, MediaDropInGallary }) => {
	const [{ isDragging }, drag] = useDrag({
		item: { src, type: ItemTypes.Image },
		end: (item, monitor) => {
			const dropResult = monitor.getDropResult();
			if (item && dropResult) {
				MediaDropInGallary(item.src);
			}
		},
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});
	const opacity = isDragging ? 0.4 : 1;
	return (
		<img
			ref={drag}
			className='image'
			style={{ opacity }}
			src={src}
			alt='mideai'
		/>
	);
};
const mapDispatchToProps = (dispatch) => {
	return {
		MediaDropInGallary: (src) => {
			dispatch(MediaDropInGallary(src));
		},
	};
};

export default connect(null, mapDispatchToProps)(Image);
