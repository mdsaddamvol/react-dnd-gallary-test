import React from "react";
import { useDrag } from "react-dnd";
import { connect } from "react-redux";
import { MediaDropInGallary } from "../../redux/gallary/gallayActions";
import { ItemTypes } from "../itemTypes";
const Image = ({ id, img, data, modalOpen, gallary, MediaDropInGallary }) => {
	const [, drag] = useDrag({
		item: { type: ItemTypes.Image, id, img, data, modalOpen },
		end: (item, monitor) => {
			const dropResult = monitor.getDropResult();
			const alredyDroped = gallary.gallary.find((obj) => obj.id === item.id);
			if (alredyDroped) {
				return;
			}
			if (item && dropResult) {
				MediaDropInGallary(item);
			}
		},
	});

	return <img ref={drag} className='image' src={img} alt='mideai' />;
};
const mapStateToProps = (state) => {
	return {
		gallary: state.gallary,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		MediaDropInGallary: (item) => {
			dispatch(MediaDropInGallary(item));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Image);
