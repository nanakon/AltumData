import React from 'react';

import BlockButtonComponent from './BlockButtonComponent.jsx';
import BackButtonLogoComponent from './BackButtonLogoComponent.jsx';

import language_pack from './lang_packs/eng.json';

class AboutUsComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	};

	render() {	
	  	return (
	  		<div className="page" id="aboutus-page" style={{backgroundImage:'url(./pics/about_2.jpg)', backgroundRepeat:'no-repeat', backgroundPosition:'left-top', backgroundClip:'content-box', backgroundSize:'cover'}}>
	  		<div className="page-content">
	  		<div className="dark-tint-overlay"/>
	  			<div style={{position:'relative'}}>
	  				<div className="page-title">{language_pack["about-us"]["title"]}</div>
	  			</div>	
	  			<div className="course-description-text" id="aboutus-content">
	  				<div>{language_pack["about-us"]["content"]["div-1"]}</div><br/>
	  				<div>{language_pack["about-us"]["content"]["div-2"]}</div>
	  			</div>
	  			<br/>
	  			<BackButtonLogoComponent history={this.props.history}/>
	  		</div>
	  		</div>
	    );
  	}

}

export default AboutUsComponent;