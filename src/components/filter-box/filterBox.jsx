import React, { useState } from "react";
import Contrasticon from "../svgs/contrastIcon";
import DropInvertIcon from "../svgs/dropInvert";
import BraitnessIcon from "../svgs/hiBritnessIcon";
import JamBriteness from "../svgs/jamBritness";
import "./filterBox.css";
const FilterBox = () => {
	const [dropInvert, setDropInvert] = useState(0);
	const [contrast, setContrast] = useState(0);
	const [britness, setBritness] = useState(0);
	const [jamBriteness, setJambritness] = useState(0);
	return (
		<React.Fragment>
			<div className='slider-continer'>
				<DropInvertIcon />
				<input
					type='range'
					min='0'
					max='100'
					onChange={(e) => setDropInvert(e.target.value)}
					className='slider'
				/>
				<span>{dropInvert} dmp</span>
			</div>
			<div className='slider-continer'>
				<Contrasticon />
				<input
					min='0'
					max='100'
					type='range'
					onChange={(e) => setContrast(e.target.value)}
					className='slider'
				/>
				<span>{contrast} % </span>
			</div>
			<div className='slider-continer'>
				<BraitnessIcon />
				<input
					min='0'
					max='100'
					type='range'
					onChange={(e) => setBritness(e.target.value)}
					className='slider'
				/>
				<span>{britness} %</span>
			</div>
			<div className='slider-continer'>
				<JamBriteness />
				<input
					min='0'
					max='100'
					type='range'
					onChange={(e) => setJambritness(e.target.value)}
					className='slider'
				/>
				<span>{jamBriteness} % </span>
			</div>
		</React.Fragment>
	);
};

export default FilterBox;
