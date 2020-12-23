import React from "react";
import "./modal.css";
const Modal = ({ id, img, data, modal }) => {
	return (
		<div className='modal_box'>
			<div className='center_width'>
				<div className='modal_text_top'>
					<span>Image</span>
					<span>Filter</span>
				</div>
				<img className='modal_img' src={img} alt='edit it' />
				<span className='modal_text_bottom'>Change photo</span>
			</div>
		</div>
	);
};

export default Modal;
