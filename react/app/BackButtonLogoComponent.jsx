import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

class BackButtonLogoComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	};

	render() {	
	  	return (
	  		<div onClick={this.props.history.goBack}>
	  			<img className="back-button" id="tiny-logo" src="./pics/logo_3.png"/>
	  		</div>
	    );
  	}

}

export default BackButtonLogoComponent;