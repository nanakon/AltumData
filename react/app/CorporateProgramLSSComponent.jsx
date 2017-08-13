import React from 'react';

import Slider from 'react-slick';

import UnderConstruction from './UnderConstruction.jsx';
import DummyComponent from './DummyComponent.jsx';
import YellowBeltStandardComponent from './lss_offerings/YellowBeltStandardComponent.jsx';
import YellowBeltVirtualComponent from './lss_offerings/YellowBeltVirtualComponent.jsx';
import GreenBeltStandardComponent from './lss_offerings/GreenBeltStandardComponent.jsx';
import GreenBeltVirtualComponent from './lss_offerings/GreenBeltVirtualComponent.jsx';
import BlackBeltStandardComponent from './lss_offerings/BlackBeltStandardComponent.jsx';
import BlackBeltVirtualComponent from './lss_offerings/BlackBeltVirtualComponent.jsx';
import LSSHomeComponent from './lss_offerings/LSSHomeComponent.jsx';

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

class CorporateProgramLSSComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected_course: "yellow_belt_standard"
		}
	};

	render() {	

		var current_path = "/corporate_program/lean_six_sigma";

		var activeLink = {textDecoration: 'none', color:'rgba(255,255,255,1)'};

		var settings = {
	      dots: true,
	      infinite: true,
	      prevArrow: true,
	      speed: 500,
	      slidesToShow: 1,
	      slidesToScroll: 1
	    };

	  	return (
	  		<div className="page" id="LSSpage">
	  			<div className="page-content" style={{position:'relative'}}>
	  				<div className="left-column dark-tint-overlay" id="corporate-left-column" style={{backgroundImage:'url(./pics/six_sigma.jpg)', backgroundRepeat:'no-repeat', backgroundPosition:'left-top', backgroundClip:'content-box', backgroundSize:'cover'}}>
	  					<div className="page-title" id="offering-title"><Link id="Link" to={{pathname:current_path}}>Lean Six Sigma Courses</Link></div>
	  					<div className="none" id="offering-list-left-column">
	  						<div className="anti-scroll">
		  						<div id="corporate-left-column-list-div">
				  						<h2 className="course-sub-offering-title" id="yellow_belt_standard"><NavLink className="course-sub-offering-title" activeStyle={activeLink} to={{pathname:current_path+"/yellow_belt_standard"}}>LSS Yellow Belt - Classroom Training</NavLink></h2>
				  						<h2 className="course-sub-offering-title" id="yellow_belt_virtual"><NavLink className="course-sub-offering-title" activeStyle={activeLink} to={{pathname:current_path+"/yellow_belt_virtual"}}>LSS Yellow Belt - Live Virtual Training</NavLink></h2>
										<h2 className="course-sub-offering-title" id="green_belt_standard"><NavLink className="course-sub-offering-title" activeStyle={activeLink} to={{pathname:current_path+"/green_belt_standard"}}>LSS Green Belt - Classroom Training</NavLink></h2>
										<h2 className="course-sub-offering-title" id="green_belt_virtual"><NavLink className="course-sub-offering-title" activeStyle={activeLink} to={{pathname:current_path+"/green_belt_virtual"}}>LSS Green Belt - Live Virtual Training</NavLink></h2>
										<h2 className="course-sub-offering-title" id="black_belt_standard"><NavLink className="course-sub-offering-title" activeStyle={activeLink} to={{pathname:current_path+"/black_belt_standard"}}>LSS Black Belt - Classroom Training</NavLink></h2>
										<h2 className="course-sub-offering-title" id="black_belt_virtual"><NavLink className="course-sub-offering-title" activeStyle={activeLink} to={{pathname:current_path+"/black_belt_virtual"}}>LSS Black Belt - Live Virtual Training</NavLink></h2>
		  						</div>
	  						</div>
	  						<div id="corporate-left-column-list-carousel">
	  							<Slider settings={settings}>
							       <div>
							       		<h2 className="course-sub-offering-title" id="yellow_belt_standard"><NavLink activeStyle={activeLink} to={{pathname:current_path+"/yellow_belt_standard"}}>LSS Yellow Belt - Classroom Training</NavLink></h2>
							       </div>
							        <div>
							       		<h2 className="course-sub-offering-title" id="yellow_belt_virtual"><NavLink className="course-sub-offering-title" activeStyle={activeLink} to={{pathname:current_path+"/yellow_belt_virtual"}}>LSS Yellow Belt - Live Virtual Training</NavLink></h2>
							        </div>
							        <div>
										<h2 className="course-sub-offering-title" id="green_belt_standard"><NavLink className="course-sub-offering-title" activeStyle={activeLink} to={{pathname:current_path+"/green_belt_standard"}}>LSS Green Belt - Classroom Training</NavLink></h2>
							        </div>
							        <div>
							        	<h2 className="course-sub-offering-title" id="green_belt_virtual"><NavLink className="course-sub-offering-title" activeStyle={activeLink} to={{pathname:current_path+"/green_belt_virtual"}}>LSS Green Belt - Live Virtual Training</NavLink></h2>
							        </div>
							        <div>
							        	<h2 className="course-sub-offering-title" id="black_belt_standard"><NavLink className="course-sub-offering-title" activeStyle={activeLink} to={{pathname:current_path+"/black_belt_standard"}}>LSS Black Belt - Classroom Training</NavLink></h2>
							        </div>
							        <div>
										<h2 className="course-sub-offering-title" id="black_belt_virtual"><NavLink className="course-sub-offering-title" activeStyle={activeLink} to={{pathname:current_path+"/black_belt_virtual"}}>LSS Black Belt - Live Virtual Training</NavLink></h2>
							        </div> 
							    </Slider>
	  						</div>
	  					</div>
	  				</div>
	  				<div className="right-column" id="corporate-right-column">
	  					<div className="right-column-content" id="corporate-right-column-content">
	  						<Route exact path="/corporate_program/lean_six_sigma" component={LSSHomeComponent}/>
	  						<Route path="/corporate_program/lean_six_sigma/yellow_belt_standard" component={YellowBeltStandardComponent}/>
	  						<Route path="/corporate_program/lean_six_sigma/yellow_belt_virtual" component={YellowBeltVirtualComponent}/>
	  						<Route path="/corporate_program/lean_six_sigma/green_belt_standard" component={GreenBeltStandardComponent}/>
	  						<Route path="/corporate_program/lean_six_sigma/green_belt_virtual" component={GreenBeltVirtualComponent}/>
	  						<Route path="/corporate_program/lean_six_sigma/black_belt_standard" component={BlackBeltStandardComponent}/>
	  						<Route path="/corporate_program/lean_six_sigma/black_belt_virtual" component={BlackBeltVirtualComponent}/>
	  					</div>
	  					<br/><img id="tiny-logo" src="./pics/logo_3.png"/>
	  				</div>
	  			</div>	
	  		</div>
	    );
  	}

}

export default CorporateProgramLSSComponent;