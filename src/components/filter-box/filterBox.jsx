import React from "react";
import Contrasticon from "../svgs/contrastIcon";
import DropInvertIcon from "../svgs/dropInvert";
import BraitnessIcon from "../svgs/hiBritnessIcon";
import JamBriteness from "../svgs/jamBritness";
import "./filterBox.css";
const FilterBox = () => {
	return (
		<>
			<div className='slider-continer'>
				<DropInvertIcon />
				<input
					type='range'
					min='1'
					max='100'
					value='50'
					class='slider'
					id='myRange'
				/>
				<span>70 dmp</span>
			</div>
			<div className='slider-continer'>
				<Contrasticon />
				<input
					type='range'
					min='1'
					max='100'
					value='50'
					class='slider'
					id='myRange'
				/>
				<span>70% </span>
			</div>
			<div className='slider-continer'>
				<BraitnessIcon />
				<input
					onInput={(e) => console.log(e.target.value)}
					type='range'
					min='1'
					max='100'
					value='50'
					class='slider'
					id='myRange'
				/>
				<span>50% </span>
			</div>
			<div className='slider-continer'>
				<JamBriteness />
				<input
					type='range'
					min='1'
					max='100'
					value='50'
					class='slider'
					id='myRange'
				/>
				<span>70% </span>
			</div>
		</>
	);
};

export default FilterBox;
