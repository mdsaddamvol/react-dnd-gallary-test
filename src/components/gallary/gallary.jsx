import React from "react";
import { useDrop } from "react-dnd";
import { connect } from "react-redux";
import { ItemTypes } from "../itemTypes";
import Image from "../image/image";
import "./gallary.css";

const Gallary = ({ gallary }) => {
	const [{ canDrop, isOver }, drop] = useDrop({
		accept: ItemTypes.Image,
		drop: () => ({ name: "gallary" }),
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	});
	const isActive = canDrop && isOver;
	let backgroundColor = "white";
	if (isActive) {
		backgroundColor = "darkgreen";
	} else if (canDrop) {
		backgroundColor = "darkkhaki";
	}
	return (
		<div ref={drop} style={{ backgroundColor }} className='gallary'>
			{gallary.gallary.length === 0 ? (
				<div className='drop-box'></div>
			) : (
				gallary.gallary.map((item, i) => {
					return <Image key={i} src={item} />;
				})
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		gallary: state.gallary,
	};
};
export default connect(mapStateToProps)(Gallary);
