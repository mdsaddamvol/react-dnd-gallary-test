import React from "react";
import { useDrag } from "react-dnd";
import { connect } from "react-redux";
import { MediaDropInGallary } from "../../redux/gallary/gallayActions";
import { changeModalImg } from "../../redux/modal/modal-Action";
import { ItemTypes } from "../itemTypes";

const Image = ({
	id,
	img,
	data,
	gallary,
	modalOpen,
	MediaDropInGallary,
	changeModalImg,
}) => {
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
	const handleimgChange = (img) => {
		if (modalOpen) {
			changeModalImg(img);
		}
	};

	return (
		<img
			onClick={() => handleimgChange(img)}
			ref={drag}
			className='image'
			src={img}
			alt='mideai'
		/>
	);
};
const mapStateToProps = (state) => {
	return {
		gallary: state.gallary,
		modalOpen: state.modal.modalOpen,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		MediaDropInGallary: (item) => {
			dispatch(MediaDropInGallary(item));
		},
		changeModalImg: (img) => {
			dispatch(changeModalImg(img));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Image);
