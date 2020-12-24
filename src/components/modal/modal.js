import React, { useState } from "react";
import { connect } from "react-redux";

import "./modal.css";

const Modal = ({ img, position, closeModal }) => {
	const [filterSpan, setFilterSpan] = useState(false);
	const opacite = filterSpan ? 0.5 : 1;
	const opacity = !filterSpan ? 0.5 : 1;
	const positions = { left: position.left - 440, top: position.top + 54 };

	return (
		<div style={{ ...positions }} className='modal_box'>
			<div className='center_width'>
				<div className='modal_text_top'>
					<span
						onMouseDown={() => setFilterSpan(!filterSpan)}
						style={{ opacity: opacite }}
					>
						Image
					</span>
					<span
						onMouseDown={() => setFilterSpan(!filterSpan)}
						style={{ opacity }}
					>
						Filter
					</span>
				</div>
				<div className='modal_text_top_border'></div>
				{!filterSpan ? (
					<div className='center_width'>
						<img className='modal_img' src={img} alt='edit it' />
						<span className='modal_text_bottom'>Change photo</span>
					</div>
				) : (
					<div className='modal_img'>
						<div class='slidecontainer'>
							<input
								type='range'
								min='1'
								max='100'
								value='50'
								class='slider'
								id='myRange'
							/>
							<input
								type='range'
								min='1'
								max='100'
								value='50'
								class='slider'
								id='myRange'
							/>
							<input
								type='range'
								min='1'
								max='100'
								value='50'
								class='slider'
								id='myRange'
							/>
							<input
								type='range'
								min='1'
								max='100'
								value='50'
								class='slider'
								id='myRange'
							/>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
const mapStateToProps = (state, ownProps) => {
	return {
		positions: state.modal.position,
	};
};

export default connect(mapStateToProps)(Modal);
