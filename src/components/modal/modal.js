import React, { useState } from "react";
import "./modal.css";
const Modal = ({ id, img, data, modalOpen }) => {
	const [filter, setFilter] = useState(false);
	const opacite = filter ? 0.5 : 1;
	const opacity = !filter ? 0.5 : 1;
	return (
		<div className='modal_box'>
			<div className='center_width'>
				<div className='modal_text_top'>
					<span onClick={() => setFilter(!filter)} style={{ opacity: opacite }}>
						Image
					</span>
					<span onClick={() => setFilter(!filter)} style={{ opacity }}>
						Filter
					</span>
				</div>
				<div className='modal_text_top_border'></div>
				{!filter ? (
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

export default Modal;
