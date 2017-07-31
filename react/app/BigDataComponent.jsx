import React from 'react';

import BlockButtonComponent from './BlockButtonComponent.jsx';

import language_pack from './lang_packs/eng.json';

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
	  				<div className="page-title">{language_pack["homepage-block-buttons"]["big-data-analytics"]}</div>
	  			</div>
	  			<div className="course-description-text">
		  			<div className="">{language_pack["big-data-analytics"]["description"]["div1"]}</div><br/>	
		  			<div className="">{language_pack["big-data-analytics"]["description"]["div2"]}</div><br/>
		  			<div className="">{language_pack["big-data-analytics"]["description"]["div3"]}</div><br/>
		  			<div className="">{language_pack["big-data-analytics"]["description"]["div4"]}</div><br/>
	  			</div>
	  			<br/><img id="tiny-logo" src="./pics/logo_3.png"/>
	  		</div>
	    );
  	}

}

export default BigDataComponent;