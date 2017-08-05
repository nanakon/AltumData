import React from 'react';

import BlockButtonComponent from './BlockButtonComponent.jsx';

import language_pack from './lang_packs/eng.json';

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
	  				<div className="page-title">{language_pack["about-us"]["title"]}</div>
	  			</div>	
	  			<div id="aboutus-content">
	  				{language_pack["about-us"]["content"]}
	  			</div>
	  		</div>
	    );
  	}

}

export default AboutUsComponent;