import React from 'react';

import BlockButtonComponent from './BlockButtonComponent.jsx';


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
	  			<div className="dark-tint" id="home-page-overlay">
	  			<div style={{position:'relative'}}>
	  				<div id="homepage-title">ALTUM DATA</div>
	  			</div>	
	  				<div id="homepage-button-wrapper">
		  				<BlockButtonComponent text="BIG DATA" onClick={this.go_to_page} destination="big_data"/>
		  				<BlockButtonComponent text="CORPORATE ENABLEMENT PROGRAM" onClick={this.go_to_page} destination="corporate_program"/>
		  				<BlockButtonComponent text="IT COGNITIVE TRANSFORMATION" onClick={this.go_to_page} destination="cognitive_transformation"/>
	  				</div>
	  				<div style={{backgroundColor:'rgba(0,0,0,.5)', padding:'10px', color: 'white', fontWeight:'bold', width:'100%', marginLeft:'auto', marginRight:'auto'}}>Developer Note:
	  				<div style={{marginTop:'0%', color:'orange'}}>//This is the strawman for the AltumData and pathforward sites. All developer comments are written in this kind of orange writing. Things I want you to provide texts for are enclosed in '#' characters.</div>
	  				<div style={{marginTop:'0%', color:'orange'}}>The design is not final. Also the application is being developed on a fullHD screen and for now is only optimized for fullHD, device optimization will come after all the content has been decided.</div>
	  				<div style={{marginTop:'0%', color:'orange'}}>The picture on the background and all graphics found on this site ATM will change later (to be provided by Alan).</div>
	  				</div>
	  			</div>
	  		</div>
	    );
  	}

}

export default HomePageComponent;