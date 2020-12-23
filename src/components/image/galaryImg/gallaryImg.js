import React from "react";
import Modal from "../../modal/modal";
import Mousehover from "../../svgs/mousehoversvg";
import "./gallaryImg.css";

const GallaryImg = ({ id, img, data, isOver, modalOpen }) => {
	return (
		<React.Fragment>
			{isOver ? (
				<div className='dropHere'></div>
			) : (
				<div className='gallaryImg'>
					<div className='mousehover'>
						<div className='pushdown'>
							<div
								className='settingiconClick'
								onClick={() => console.log("setting")}
							></div>
							<div
								className='deleteIconClick'
								onClick={() => console.log("delete")}
							></div>
							<Mousehover />
							{modalOpen ? (
								<Modal id={id} img={img} data={data} modalOpen={modalOpen} />
							) : null}
						</div>
					</div>

					<img src={img} alt='gallary img' />
				</div>
			)}
		</React.Fragment>
	);
};

export default GallaryImg;
