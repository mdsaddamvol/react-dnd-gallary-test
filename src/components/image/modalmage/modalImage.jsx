import React from "react";
import "./Modalimage.css";

const ModalImage = ({ img }) => {
	return (
		<div>
			{img ? (
				<div>
					<img className='modal_img' src={img} alt='edit it' />
				</div>
			) : (
				<div className='drop-box-small'>
					+<h3 className='modal_text_bottom'> Drop to add</h3>
				</div>
			)}
		</div>
	);
};
export default ModalImage;
