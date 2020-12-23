import React, { useState } from "react";
import { connect } from "react-redux";
import { deletePic } from "../../../redux/gallary/gallayActions";
import { toggleModal } from "../../../redux/modal/modal-Action";
import Modal from "../../modal/modal";
import Mousehover from "../../svgs/mousehoversvg";
import "./gallaryImg.css";

const GallaryImg = ({ id, index, img, data, isOver, deletePic }) => {
	const [modalOpen, setModalOpen] = useState(false);
	const display = modalOpen ? "block" : "none";
	return (
		<React.Fragment>
			{isOver ? (
				<div className='dropHere'></div>
			) : (
				<div className='gallaryImg'>
					<div style={{ display }} className='mousehover'>
						<div className='pushdown'>
							<div
								className='settingiconClick'
								onClick={() => setModalOpen(!modalOpen)}
							></div>
							<div
								className='deleteIconClick'
								onClick={() => deletePic(img)}
							></div>
							<Mousehover />

							{modalOpen ? (
								<div className='modal'>
									<Modal id={id} img={img} data={data} modalOpen={modalOpen} />
								</div>
							) : null}
						</div>
					</div>

					<img src={img} alt='gallary img' />
				</div>
			)}
		</React.Fragment>
	);
};
const mapStateToProps = (state) => {
	return {
		modalOpen: state.modal.modalOpen,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		toggleModal: () => {
			dispatch(toggleModal());
		},
		deletePic: (index) => {
			dispatch(deletePic(index));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(GallaryImg);
