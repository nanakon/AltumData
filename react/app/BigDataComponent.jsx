import React from 'react';

import BlockButtonComponent from './BlockButtonComponent.jsx';


class BigDataComponent extends React.Component {
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
	  		<div className="page" id="big-data-page">
	  			<div style={{position:'relative'}}>
	  				<div id="homepage-title">BIG DATA</div>
	  			</div>	
	  		</div>
	    );
  	}

}

export default BigDataComponent;