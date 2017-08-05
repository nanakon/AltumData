import React from 'react';

import BlockButtonComponent from './BlockButtonComponent.jsx';

import language_pack from './lang_packs/eng.json';

class HomePageComponent extends React.Component {
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
	  		<div id="home-page">
	  		<video id="background-video" width="100%" height="auto" loop autoPlay>
			  <source src="/pics/sunset_skyscrapers.mp4" type="video/webm"/>
			Your browser does not support the video tag.
			</video>

	  			<div className="dark-tint" id="home-page-overlay">
	  			<div style={{position:'relative'}}>
	  				<div className="page-title" id="homepage-title">"{language_pack["homepage-quote"]}"<br/><span style={{fontSize:'10px'}}> {language_pack["homepage-quote-author"]}</span></div>
	  			</div>	
	  				<div id="homepage-button-wrapper">
		  				<BlockButtonComponent text={language_pack["homepage-block-buttons"]["corporate-enablement-program"]} onClick={this.go_to_page} destination="corporate_program"/>
		  				<BlockButtonComponent text={language_pack["homepage-block-buttons"]["big-data-analytics"]} onClick={this.go_to_page} destination="big_data"/>
		  				<BlockButtonComponent text={language_pack["homepage-block-buttons"]["it-cognitive-transformation"]} onClick={this.go_to_page} destination="cognitive_transformation"/>
	  				</div>
	  			<div id="global-warming-quote">
	  			</div>
	  			</div>
	  		</div>
	    );
  	}

}

export default HomePageComponent;