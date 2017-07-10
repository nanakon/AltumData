import React from 'react';

import HomePageComponent from './HomePageComponent.jsx';
import BigDataComponent from './BigDataComponent.jsx';
import AboutUsComponent from './AboutUsComponent.jsx';
import ExpertisesComponent from './ExpertisesComponent.jsx';
import TeamComponent from './TeamComponent.jsx';
import CorporateProgramComponent from './CorporateProgramComponent.jsx';
import CognitiveTransformationComponent from './CognitiveTransformationComponent.jsx';
import OfferingsComponent from './OfferingsComponent.jsx';
import BioComponent from './BioComponent.jsx';

import {scaleRotate as Menu} from 'react-burger-menu';

class SideMenuComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			side_menu_open: false,
			active_page: "home"
		}
		this.onToggle = this.onToggle.bind(this);
		this.go_to_page = this.go_to_page.bind(this);
	};

	componentDidMount() {
		this.setState({side_menu_open: false});
	};

	onToggle(which_column) {
		this.setState({side_menu_open: true});
	};

	go_to_page(destination) {
		history.pushState({wut:'dunno'}, "", '/'+destination);
		//this.setState({active_page: destination});
		console.log(window.location.pathname);
		this.setState({active_page: window.location.pathname.substring(1)});
	};

	render() {	
		var styles = {
		  bmBurgerButton: {
		    position: 'fixed',
		    width: '36px',
		    height: '30px',
		    left: '36px',
		    top: '90px'
		  },
		  bmBurgerBars: {
		    background: '#373a47'
		  },
		  bmCrossButton: {
		    height: '24px',
		    width: '24px'
		  },
		  bmCross: {
		    background: '#bdc3c7'
		  },
		  bmMenu: {
		  	textAlign: 'left',
		    background: '#060606',
		    padding: '2.5em 1.5em 0',
		    fontSize: '1.15em',
		    height: '99%'
		  },
		  bmMorphShape: {
		    fill: '#373a47'
		  },
		  bmItemList: {
		    color: '#b8b7ad',
		    padding: '0.8em'
		  },
		  bmOverlay: {
		    background: 'rgba(0, 0, 0, 0.3)'
		  }
		};	

		var active_page;

		switch (this.state.active_page) {
			case "home":
				active_page = <HomePageComponent go_to_page={this.go_to_page}/>;
				break;	
			case "about":
				active_page = <AboutUsComponent go_to_page={this.go_to_page}/>;
				break;
			case "expertises":
				active_page = <ExpertisesComponent go_to_page={this.go_to_page}/>;
				break;
			case "team":
				active_page = <TeamComponent go_to_page={this.go_to_page}/>;
				break;
			case "bio":
				active_page = <BioComponent go_to_page={this.go_to_page}/>;
				break;
			case "big_data":
				active_page = <BigDataComponent go_to_page={this.go_to_page}/>;
				break;
			case "corporate_program":
				active_page = <CorporateProgramComponent go_to_page={this.go_to_page}/>;
				break;
			case "cognitive_transformation":
				active_page = <CognitiveTransformationComponent go_to_page={this.go_to_page}/>;
				break;
			case "dummy_offering":
				active_page = <OfferingsComponent go_to_page={this.go_to_page}/>;
				break;
			default:
				
		};
		//<div id="bar"></div>

	  	return (
	  		<div>
	  		<Menu styles={styles} isOpen={this.state.side_menu_open} pageWrapId={"page-wrap"} outerContainerId={"outer_container"}>
	  			<div id="nav-wrapper">
		  			<h4 className="nav-link" onClick={()=>this.go_to_page("home")}>HOME</h4>
		  			<h4 className="nav-link" onClick={()=>this.go_to_page("about")}>ABOUT US</h4>
		  			<h4 className="nav-link" onClick={()=>this.go_to_page("expertises")}>EXPERTISES</h4>
		  			<h4 className="nav-link" onClick={()=>this.go_to_page("team")}>TEAM</h4>
	  			</div>
	  			<p style={{marginTop:'5%', color:'orange', float:'left'}}>//Anything else to add here?</p>
	  			<div id="legal-in-sidebar">
	  				<div id="legal-in-sidebar-absolute">
		  				AltumData<br/>
		  				2017<br/>
	  				</div>
	  			</div>
	  		</Menu>

	  		<main id="page-wrap">
	  			{active_page}
	  		</main>
	  		</div>
	    );
  	}

}

export default SideMenuComponent;