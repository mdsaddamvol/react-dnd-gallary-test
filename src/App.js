import React, { Suspense } from "react";
import "./App.css";
import { connect } from "react-redux";
import Sidebar from "./components/sidebar/sidebar";
import Gallary from "./components/gallary/gallary";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { closeModal } from "./redux/modal/modal-Action";
import { changeModalImg } from "./redux/modal/modal-Action";
import Modal from "./components/modal/modal";

const App = ({ modalOpen, position, modalimg, closeModal }) => {
	return (
		<div className='container'>
			<DndProvider backend={HTML5Backend}>
				<div className='sidebar-container'>
					<Suspense fallback={<h1>...Loading</h1>}>
						<Sidebar />
					</Suspense>
				</div>

				<div className='gallary-container'>
					<Gallary />
					{modalOpen ? (
						<div className='modal'>
							<div onClick={() => closeModal()} className='close'></div>
							<Modal img={modalimg} position={position} />
						</div>
					) : null}
				</div>
			</DndProvider>
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		modalOpen: state.modal.modalOpen,
		position: state.modal.position,
		modalimg: state.modal.modalimg,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		closeModal: (img) => {
			dispatch(closeModal(img));
		},
		changeModalImg: (img) => dispatch(changeModalImg(img)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
