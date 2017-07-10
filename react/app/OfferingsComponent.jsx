import React from 'react';

import BlockButtonComponent from './BlockButtonComponent.jsx';


class OfferingsComponent extends React.Component {
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
	  					<div id="homepage-title">#OFFERING NAME#</div>

	  					<div style={{marginTop:'20%', color:'orange'}}>//There will be a picture on the backround of this side of the page. Something with a feel that would resemble what is being offered.</div>
	  				</div>
	  				<div className="right-column">
	  					<div className="right-column-content">
	  						<div className="course-description">
	  							<h3>#Offering Description#</h3>
	  							<div style={{marginTop:'20%', color:'orange'}}>Each offering will have a descriptory text placed here</div>
	  						</div>
	  					</div>
	  				</div>
	  			</div>	
	  		</div>
	    );
  	}

}

export default OfferingsComponent;