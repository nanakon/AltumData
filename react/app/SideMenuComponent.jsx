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

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import language_pack from './lang_packs/eng.json';

class SideMenuComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			side_menu_open: false
		}
		this.onToggle = this.onToggle.bind(this);
	};

	componentDidMount() {
		this.setState({side_menu_open: false});
	};

	onToggle(which_column) {
		this.setState({side_menu_open: true});
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
		    background: '#7044d6'
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
		    background: 'rgba(0,0,0,1)',
		    padding: '2.5em 1.5em 0',
		    fontSize: '1.15em',
		    height: '100vh'
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

	  	return (
	  		<div>
	  		<Menu id="menuComponent" styles={styles} isOpen={this.state.side_menu_open} pageWrapId={"page-wrap"} outerContainerId={"outer_container"}>
	  			<div id="nav-wrapper">
		  			<Link to="/" className="nav-link"><h4>{language_pack["nav-links"]["home"]}</h4></Link>
		  			<Link to="about" className="nav-link">{language_pack["nav-links"]["about"]}</Link>
		  			<Link to="/expertises" className="nav-link"><h4>{language_pack["nav-links"]["expertises"]}</h4></Link>
		  			<Link to="/team" className="nav-link"><h4>{language_pack["nav-links"]["team"]}</h4></Link>
	  			</div>
	  			<div id="legal-in-sidebar">
	  				<div id="legal-in-sidebar-absolute">
		  				AltumData<br/>
		  				2017<br/>
	  				</div>
	  			</div>
	  		</Menu>

	  		<main id="page-wrap">
	  			<Route exact path="/" component={HomePageComponent}/>
	  			<Route path="/about" component={AboutUsComponent}/>
	  			<Route path="/expertises" component={ExpertisesComponent}/>
	  			<Route exact path="/team" component={TeamComponent}/>
	  			<Route path="/team/:person_name" component={BioComponent}/>
	  			<Route path="/big_data" component={BigDataComponent}/>
	  			<Route path="/corporate_program" component={CorporateProgramComponent}/>
	  			<Route exact path="/cognitive_transformation" component={CognitiveTransformationComponent}/>
	  			<Route path="/cognitive_transformation/:offering_id" render={(props)=>(<OfferingsComponent {...props} course="it-cognitive-transformation-page"/>)}/>
	  			<Route path="/bio" component={BioComponent}/>
	  			<Route path="/dummy_offering" component={OfferingsComponent}/>
	  		</main>
	  		</div>
	    );
  	}

}

export default SideMenuComponent;