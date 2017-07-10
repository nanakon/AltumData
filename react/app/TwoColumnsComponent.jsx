import React from 'react';

import BlockButtonComponent from './BlockButtonComponent.jsx';


class CorporateProgramComponent extends React.Component {
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
	  				<div className="left-column">
	  					<div id="homepage-title">CORPORATE ENABLEMENT PROGRAM</div>
	  				</div>
	  				<div className="right-column">
	  					<div className="right-column-content">
	  						<div className="course-description">
	  							<h3>Corporate enablement program description text</h3>
	  						</div>
	  					</div>
	  				</div>
	  			</div>	
	  		</div>
	    );
  	}

}

export default CorporateProgramComponent;