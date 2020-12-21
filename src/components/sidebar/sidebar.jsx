import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMedia } from "../../redux/media-side-bar/media-Action";
import Image from "../image/image";
import "./sidebar.css";

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

	return (
		<div className='sidebar'>
			<h2>Media Penel</h2>
			{data.media.map((obj) => (
				<Image key={obj.char_id} src={obj.img} />
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
