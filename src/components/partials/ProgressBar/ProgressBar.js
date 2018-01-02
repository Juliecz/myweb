import React, { PureComponent } from 'react';
import ProgressBarJS from 'progressbar.js';

import './style.css';

class ProgressBar extends PureComponent {
	constructor() {
		super();
		
	}
	
	componentDidMount() {
		const progressbar = window.document.getElementById('progressbar-img');
		const progress = new ProgressBarJS.SemiCircle(progressbar, {
			strokeWidth: 10,
			color: '#2c2b43',
			trailColor: '#eee',
			trailWidth: 10,
			easing: 'easeInOut',
			duration: 2000,
			svgStyle: null,
			text: {
				value: 'Text test',
				// alignToBottom: false
			},
			from: {color: '#f2b632'},
			to: {color: '#f2b632'},
			// Set default step function for all animate calls
			step: (state, progress) => {
				progress.path.setAttribute('stroke', state.color);
				progress.setText(`<div><b>CZECH</b></div> intermediate (reading tech documentation)`);
			}
		});
		progress.animate(0.7)
	}
	
	render() {
		return (<div className="progressbar">
			<div id="progressbar-img" />
		</div>);
	};
}

export default ProgressBar;