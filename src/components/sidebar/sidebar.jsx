import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMedia } from "../../redux/media-side-bar/media-Action";
import "./sidebar.css";
import Image from "../image/image";
const Sidebar = ({ data, fetchMedia }) => {
	useEffect(() => {
		const getdata = async () => {
			const res = await fetch(
				"https://www.breakingbadapi.com/api/characters?limit=20",
				{
					method: "GET",
					headers: {},
				}
			);
			const d = await res.json();

			fetchMedia(d);
		};
		getdata();
	}, [fetchMedia]);
	let key = "b";
	return (
		<div className='sidebar'>
			<h2>Media Penel</h2>
			{data.media.map((obj, index) => (
				<Image
					key={key + index}
					id={obj.id}
					img={obj.img}
					index={index}
					data={obj.data}
					modal={obj.modal}
				/>
			))}
		</div>
	);
};

const mapStateToProps = (state) => {
	const { media } = state;
	return {
		data: media,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		fetchMedia: (d) => {
			dispatch(fetchMedia(d));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
