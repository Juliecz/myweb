import React, { PureComponent } from 'react';
import { ProgressBar as ProgressBarBS } from 'react-bootstrap';

import './style.css';

class ProgressBar extends PureComponent {
	render() {
		const { name, percent, texts } = this.props;
		
		return (<div className="progressbar">
			<div>
				<b>{name.toUpperCase()}</b>
			</div>
			<p>{texts}</p>
			<ProgressBarBS now={percent} />
			{/*<div id="progressbar-img" />*/}
		</div>);
	};
}

export default ProgressBar;