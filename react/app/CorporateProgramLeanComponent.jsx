import React from 'react';

import Slider from 'react-slick';

import LeanHomeComponent from './offering_texts/LeanHomeComponent.jsx';
import BackButtonLogoComponent from './BackButtonLogoComponent.jsx';

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

class CorporateProgramLeanComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected_course: ""
		}
	};

	render() {	

		var current_path = "/corporate_program/lean_training";

		var activeLink = {textDecoration: 'none', color:'rgba(255,255,255,1)'};

		var settings = {
	      dots: true,
	      infinite: true,
	      prevArrow: true,
	      speed: 500,
	      slidesToShow: 1,
	      slidesToScroll: 1
	    };

	    var component_list = ["agile_fundamentals"];
	    
	    /*
	    var offering_links_list = (
	    	<div id="corporate-left-column-list-div">
	    		<h2 className="course-sub-offering-title" id={component_list[0]}><NavLink className="course-sub-offering-title" activeStyle={activeLink} to={{pathname:current_path+component_list[0]}}>Agile Fundamentals</NavLink></h2>
			</div>
	    );

	    var offering_links_carousel = (
	    	<div id="corporate-left-column-list-carousel">
	  			<Slider settings={settings}>
					<div>
						<h2 className="course-sub-offering-title" id={component_list[0]}><NavLink className="course-sub-offering-title" activeStyle={activeLink} to={{pathname:current_path+component_list[0]}}>Agile Fundamentals</NavLink></h2>
					</div> 
				</Slider>
	  		</div>
	    );
	    */

	    var routes = (
	    	<div className="right-column-content" id="corporate-right-column-content">
	  			<Route exact path="/corporate_program/lean_training" component={LeanHomeComponent}/>
	  		</div>
	    );

	  	return (
	  		<div className="page" id="LSSpage">
	  			<div className="page-content" style={{position:'relative'}}>
	  				<div className="left-column dark-tint-overlay" id="corporate-left-column" style={{backgroundImage:'url(./pics/six_sigma.jpg)', backgroundRepeat:'no-repeat', backgroundPosition:'left-top', backgroundClip:'content-box', backgroundSize:'cover'}}>
	  					<div className="page-title" id="offering-title"><Link id="Link" to={{pathname:current_path}}>Lean Training</Link></div>
	  					<div className="none" id="offering-list-left-column">
	  						<div className="anti-scroll">
				  						
		  						
	  						</div>
	  						
	  					</div>
	  				</div>
	  				<div className="right-column" id="corporate-right-column">
	  					{routes}
	  					<br/>
	  					<BackButtonLogoComponent history={this.props.history}/>
	  				</div>
	  			</div>	
	  		</div>
	    );
  	}

}

export default CorporateProgramLeanComponent;