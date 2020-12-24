import React, { useState } from "react";
import { connect } from "react-redux";
import FilterBox from "../filter-box/filterBox";
import ModalImage from "../image/modalmage/modalImage";

import "./modal.css";

const Modal = ({ img, position, closeModal }) => {
	const [filterSpan, setFilterSpan] = useState(false);
	const opacite = filterSpan ? 0.5 : 1;
	const opacity = !filterSpan ? 0.5 : 1;
	const positions = { left: position.left - 440, top: position.top + 54 };

	return (
		<React.Fragment>
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
							<ModalImage img={img} />
							<span className='modal_text_bottom'>
								Click In Midia Penel
								<br /> To Replace Image
							</span>
						</div>
					) : (
						<div className='center_width_filter'>
							<FilterBox />
						</div>
					)}
				</div>
			</div>
		</React.Fragment>
	);
};
const mapStateToProps = (state, ownProps) => {
	return {
		positions: state.modal.position,
	};
};

export default connect(mapStateToProps)(Modal);
