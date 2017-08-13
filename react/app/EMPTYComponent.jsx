import React from 'react';

class EMPTYComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	};

	render() {	
	  	return (
	  		<div className="page" id="aboutus-page">
	  			<div style={{position:'relative'}}>
	  				<div id="homepage-title">EMPTY</div>
	  			</div>	
	  		</div>
	    );
  	}

}

export default EMPTYComponent;