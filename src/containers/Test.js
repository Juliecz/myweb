import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Test extends PureComponent {
	state = {
		result: 0
	};
	
	operation(oper) {
		switch (oper) {
			case 'AC': {
				
			}
		}
	}
	
	render() {
		return (<div>
			<h1>Test</h1>
			
			<div style={{
				width: '202px'
			}}>
				<div style={{
					width: '100%',
					height: '50px',
					border: '1px solid black'
				}}>
					{this.state.result}
				</div>
				<div style={{
					display: 'flex',
					width: '100%',
					height: '100px',
					border: '1px solid darkgray',
					flexWrap: 'wrap'
				}}>
					{['AC', '+-', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='].map((text, i) => {
						return (<div style={{
							minWidth: `${text === 0 ? '100px' : '50px'}`,
							height: `50px`,
							flexGrow: ``,
							border: '1px solid darkgray'
						}}>
							{text}
						</div>);
					})}
				</div>
			</div>
		</div>);
	}
}

const mapStateToProps = (state) => ({ });

const mapDispatchToProps = (dispatch) => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(Test);