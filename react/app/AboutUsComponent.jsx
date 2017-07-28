import React from 'react';

import BlockButtonComponent from './BlockButtonComponent.jsx';


class AboutUsComponent extends React.Component {
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
	  		<div className="page" id="aboutus-page">
	  			<div style={{position:'relative'}}>
	  				<div className="page-title">ABOUT ALTUM DATA</div>
	  			</div>	
	  			<div id="aboutus-content">
	  				#Who we are what we do why we do that or whatever else that people should know about this project#
	  			</div>
	  		</div>
	    );
  	}

}

export default AboutUsComponent;