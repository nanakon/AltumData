import React from 'react';

import BlockButtonComponent from './BlockButtonComponent.jsx';


class CognitiveTransformationComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	this.go_to_page = this.go_to_page.bind(this);
	};

	go_to_page(destination) {
		this.props.go_to_page(destination);
	};

	render() {	
	  	return (
	  		<div className="page" id="team-page">
	  			<div style={{position:'relative'}}>
	  				<div id="homepage-title">IT COGNITIVE TRANSFORMATION</div>
	  			</div>	
	  		</div>
	    );
  	}

}

export default CognitiveTransformationComponent;