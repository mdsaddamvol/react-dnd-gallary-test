import React, { useState, useCallback, useEffect } from "react";
import update from "immutability-helper";
import { connect } from "react-redux";
import "./gallary.css";
import Card from "../card/card";
import { Sudogallary } from "./Sudogalary";

const style = {
	width: 400,
};

const Gallary = ({ gallary }) => {
	const [cards, setCards] = useState([]);
	useEffect(() => {
		setCards(gallary.gallary);
	}, [gallary.gallary]);

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
		},
		[cards]
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

	return <Sudogallary>{cards.map((obj, i) => renderCard(obj, i))}</Sudogallary>;
};

const mapStateToProps = (state) => {
	return {
		gallary: state.gallary,
	};
};

export default connect(mapStateToProps)(Gallary);
