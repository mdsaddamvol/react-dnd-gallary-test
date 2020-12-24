import React from "react";
import { connect } from "react-redux";
import { deletePic } from "../../redux/gallary/gallayActions";
import { openModal } from "../../redux/modal/modal-Action";
import Mousehover from "../svgs/mousehoversvg";
const SettingAndDeleteIcons = ({ img, openModal, deletePic }) => {
	const handleModal = (e) => {
		const BoundingRect = e.target.getBoundingClientRect();
		const position = { top: BoundingRect.top, left: BoundingRect.left };
		console.log(BoundingRect);
		openModal(position, img);
	};
	return (
		<div className='mousehover'>
			<div className='pushdown'>
				<div className='settingiconClick' onClick={(e) => handleModal(e)}></div>
				<div className='deleteIconClick' onClick={() => deletePic(img)}></div>
				<Mousehover />
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		modalOpen: state.modal.modalOpen,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		openModal: (position, img) => {
			dispatch(openModal(position, img));
		},
		deletePic: (index) => {
			dispatch(deletePic(index));
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SettingAndDeleteIcons);
