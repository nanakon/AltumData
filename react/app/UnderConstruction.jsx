import React from 'react';


class UnderConstructionComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	};

	render() {	
	  	return (
	  		<div className="page" id="aboutus-page">
	  			<div style={{position:'relative'}}>
	  				<div id="homepage-title">Sorry, this page is under construction</div>
	  			</div>	
	  		</div>
	    );
  	}

}

export default UnderConstructionComponent;