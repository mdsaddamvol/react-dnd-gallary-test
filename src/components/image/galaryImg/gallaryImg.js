import React from "react";
import { connect } from "react-redux";

import SettingAndDeleteIcons from "../../settenganddelete/settingAndDeleteIcons";

import "./gallaryImg.css";

const GallaryImg = ({ id, index, img, data, isOver }) => {
	return (
		<React.Fragment>
			{isOver ? (
				<div className='dropHere'></div>
			) : (
				<div className='gallaryImg'>
					<SettingAndDeleteIcons img={img} />
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

export default connect(mapStateToProps)(GallaryImg);
