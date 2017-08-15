import React from 'react';

import Slider from 'react-slick';

import UnderConstruction from './UnderConstruction.jsx';

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

class CorporateProgramAgileComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	};

	render() {	
	  	return (
	  		<div className="page" id="LSSpage">
	  			<div className="page-content" style={{position:'relative'}}>
	  				<div className="left-column dark-tint-overlay" id="corporate-left-column" style={{backgroundImage:'url(./pics/six_sigma.jpg)', backgroundRepeat:'no-repeat', backgroundPosition:'left-top', backgroundClip:'content-box', backgroundSize:'cover'}}>
	  					<div className="page-title" id="offering-title">Agile Training</div>
	  				</div>
	  				<div className="right-column" id="corporate-right-column">
	  					<div className="right-column-content" id="corporate-right-column-content">
	  						<div className="lss-right-column-wrapper">
					  			<div className="right-column-content">
					  				<div className="course-description">
										<h3 className="offering-description-title">
											Agile Fundamentals
										</h3><br/>
										<h3 className="offering-description-div">
				  							Agile has been one of the big buzzwords of the IT development industry for the last 10 years. But exactly what <span className="italic">is</span> agile development?  Put simply, agile development is a different way of managing IT development teams and projects.
				  						</h3>
				  						<h3 className="offering-description-div">
				  							Agile is a time boxed, iterative approach that builds products or services incrementally from the start of the project, instead of trying to deliver it all at once near the end.  It works by breaking projects down into smaller sizes of user functionality, prioritizing them, and then continuously delivering them in short one to four-week cycles.
				  						</h3>
				  						<h3 className="offering-description-div">
				  							The focus of this 2-day hands-on workshop is to help individuals better relate to how the core Agile practices can be applied on any type of project and within their day-to-day jobs through a case study learning simulation. 
				  						</h3>
				  						<h3 className="offering-description-div">
				  							Individuals will apply Agile practices like writing effective User Stories, Relative Estimation, Backlog Grooming, Sprint Planning, Sprint Reviews, Burndown Charts, Feedback Gathering, Retrospectives, Course Correction and other core practices during this workshop.  
				  						</h3>
				  						<br/>
										<h3 className="offering-description-title">
				  							Who Should Attend
				  						</h3>
										<h3 className="offering-description-div">
											Business Analysts, Business Leaders, Managers, Developers, Operations, Project Managers, Team Leads, and anyone else interested in learning the basics of Agile values, principles, and terminology through simulation activities. 
										</h3>
										<h3 className="offering-description-div">
											Our virtual classes are interactive, giving students the chance to ask questions throughout the course and participate in team-based exercises.
										</h3><br/>
										<h3 className="offering-description-title text-align-left pad-left-right-column">
											Course Duration:
					  					</h3>
					  					<h3 className="offering-description-div">
				  							2 Days
				  						</h3>
				  						<h3 className="offering-description-title text-align-left pad-left-right-column">
											Course Pre-requisites:
					  					</h3>
					  					<h3 className="offering-description-div">
				  							There are no prerequisites to take this course.
				  						</h3><br/>
				  						<h3 className="offering-description-title text-align-left pad-left-right-column">
				  							Our course will cover the following topics:	
				  						</h3>
										<h3 className="offering-description-div">
											<ul>
				  								<li>Introduction to Agile development</li>
				  								<li>Agile Principles</li>
				  								<li>Difference between traditional waterfall approach and agile</li>
				  								<li>Overview of the Scrum Methodology</li>
				  								<li>Roles and Responsibilities of Agile teams</li>
				  								<li>Identifying project goals (user stories)</li>
				  								<li>Planning the Sprint</li>
				  								<li>Daily Stand-ups</li>
				  								<li>Creating and updating the burn down chart</li>
				  								<li>Conducting the Sprint Review and Sprint Retrospective</li>
												<li>Product and Sprint Release</li>
				  							</ul>
										</h3>
										<h3 className="offering-description-title text-align-left pad-left-right-column">
											Upon completion of this course you should be able to: 
					  					</h3>
					  					<h3 className="offering-description-div">
				  							<ul>
												<li>Understand scrum fundamentals- roles, process, artifacts and scrum meetings</li>
												<li>Perform project initiation in order to identify the agile project goals</li>
												<li>Prioritize epics and user stories using the initial product backlog</li>
												<li>Gather requirements and sprint planning to identify the user stories, write the user stories, estimate using story points, create and estimate the sprint backlog to plan the sprint</li>
				  							</ul>
				  						</h3><br/>
					  				</div>
					  			</div>			
					  		</div>
	  					</div>
	  					<br/><img id="tiny-logo" src="./pics/logo_3.png"/>
	  				</div>
	  			</div>	
	  		</div>
	    );
  	}

}

export default CorporateProgramAgileComponent;