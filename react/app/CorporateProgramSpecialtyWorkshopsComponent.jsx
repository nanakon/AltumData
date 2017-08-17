import React from 'react';

import Slider from 'react-slick';

import RootCauseAnalysisComponent from './offering_texts/RootCauseAnalysisComponent.jsx';
import ValueStreamMappingComponent from './offering_texts/ValueStreamMappingComponent.jsx';
import BackButtonLogoComponent from './BackButtonLogoComponent.jsx';

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

class CoroporateProgramSpecialtyWorkshopsComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected_course: "root_cause_analysis"
		}
	};

	render() {	

		var current_path = "/corporate_program/specialty_workshops";

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
	  					<div className="page-title" id="offering-title">Specialty Workshops</div>
	  					<div className="none" id="offering-list-left-column">
	  						<div className="anti-scroll">
		  						<div id="corporate-left-column-list-div">
				  						<h2 className="course-sub-offering-title" id="root_cause_analysis"><NavLink className="course-sub-offering-title" activeStyle={activeLink} to={{pathname:current_path+"/root_cause_analysis"}}>Root Cause Analysis</NavLink></h2>
				  						<h2 className="course-sub-offering-title" id="value_stream_mapping"><NavLink className="course-sub-offering-title" activeStyle={activeLink} to={{pathname:current_path+"/value_stream_mapping"}}>Value Stream Mapping</NavLink></h2>
		  						</div>
	  						</div>
	  						<div id="corporate-left-column-list-carousel">
	  							<Slider settings={settings}>
							       <div>
							       		<h2 className="course-sub-offering-title" id="root_cause_analysis"><NavLink className="course-sub-offering-title" activeStyle={activeLink} to={{pathname:current_path+"/root_cause_analysis"}}>Root Cause Analysis</NavLink></h2>
							       </div>
							        <div>
							       		<h2 className="course-sub-offering-title" id="value_stream_mapping"><NavLink className="course-sub-offering-title" activeStyle={activeLink} to={{pathname:current_path+"/value_stream_mapping"}}>Value Stream Mapping</NavLink></h2>
							        </div>
							    </Slider>
	  						</div>
	  					</div>
	  				</div>
	  				<div className="right-column" id="corporate-right-column">
	  					<div className="right-column-content" id="corporate-right-column-content">
	  						<Route exact path="/corporate_program/specialty_workshops" component={RootCauseAnalysisComponent}/>
	  						<Route exact path="/corporate_program/specialty_workshops/root_cause_analysis" component={RootCauseAnalysisComponent}/>
	  						<Route path="/corporate_program/specialty_workshops/value_stream_mapping" component={ValueStreamMappingComponent}/>
	  					</div>
	  					<br/>
	  					<BackButtonLogoComponent history={this.props.history}/>
	  				</div>
	  			</div>	
	  		</div>
	    );
  	}

}

export default CoroporateProgramSpecialtyWorkshopsComponent;