import React, { useState, useCallback, useEffect } from "react";
import update from "immutability-helper";
import { connect } from "react-redux";
import "./gallary.css";
import Card from "../card/card";
import { Sudogallary } from "./Sudogalary";
import { sortedGallary } from "../../redux/gallary/gallayActions";
import Folderlogo from "../svgs/imglogo";

const style = {
	width: 400,
};

const Gallary = ({ gallary, sortedGallary }) => {
	const [cards, setCards] = useState([]);
	useEffect(() => {
		setCards(gallary.gallary);
	}, [setCards, gallary.gallary]);

	const moveCard = useCallback(
		(dragIndex, hoverIndex) => {
			const dragCard = cards[dragIndex];
			setCards(
				update(cards, {
					$splice: [
						[dragIndex, 1],
						[hoverIndex, 0, dragCard],
					],
				})
			);
			sortedGallary(cards);
		},
		[cards, sortedGallary]
	);
	let key = "a";
	const renderCard = (obj, index) => {
		return (
			<Card
				style={style}
				key={key + index}
				id={obj.id}
				index={index}
				img={obj.img}
				data={obj.data}
				modalOpen={obj.modalOpen}
				moveCard={moveCard}
			/>
		);
	};

	return (
		<Sudogallary>
			{cards.length === 0 ? (
				<div
					style={{ justifySelf: "center", alignSelf: "center" }}
					className='drop-box'
				>
					<Folderlogo />
					<h3>Drop an image from Media Panel</h3>
				</div>
			) : (
				cards.map((obj, i) => renderCard(obj, i))
			)}
		</Sudogallary>
	);
};

const mapStateToProps = (state) => {
	return {
		gallary: state.gallary,
	};
};
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		sortedGallary: (props) => {
			dispatch(sortedGallary(props));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallary);
