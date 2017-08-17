import React from 'react';

import BlockButtonComponent from './BlockButtonComponent.jsx';
import BackButtonLogoComponent from './BackButtonLogoComponent.jsx';


class ExpertisesComponent extends React.Component {
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
	  		<div className="page" id="expertises-page">
	  			<div className="expertises-page-content" id="expertises-page-content-left" style={{position:'relative'}}>
	  				<div className="page-title blue expertises-title" id="expertises-title-1">Our Expertises</div><br/>
	  				<h3 className="expertises-page-content-div">
	  					Altum Data takes a holistic approach to facilitate 
	  					and sustain organizational transformation. Our team collaborates with stakeholders at 
	  					all levels to develop competencies aligned with two key indicators of organizational 
	  					success: <span className="oblique bold">Employee Engagement</span> and <span className="oblique bold">Process Excellence</span>. 
	  					The more an organization improves these leading indicators, the greater their business 
	  					success, as measured by the lagging indicators of <span className="oblique bold">Client Value</span> and <span className="oblique bold">Financial Results</span>.
	  				</h3>
	  				<h3 className="expertises-page-content-div">
	  					In the past 5 years this approach generated over <span className="oblique bold">$900M</span> in savings for our clients.
	  				</h3><br/>
	  			</div>	
	  			<div className="expertises-page-content" id="expertises-page-content-right">
	  				<div className="page-title blue expertises-title" id="expertises-title-1">Components of Successful and Sustainable Change</div><br/>
	  				<h3 className="expertises-page-content-div">
	  					<h4><span className="oblique bold blue">Transformational Leadership</span></h4><br/>
	  					<ul>
	  						<li>Senior leaders identify the compelling reasons for change and measures of success</li>
	  						<li>Identify key leadership styles and behaviors that affect business performance</li>
							<li>Improve leaders’ effectiveness by creating individual and team development plans</li>
							<li>Coach and mentor leaders to implement and sustain change</li>
						</ul><br/>
						<h4><span className="oblique bold blue">Adaptive Culture</span></h4><br/>
	  					<ul>
	  						<li>Create a baseline of the organization’s current and preferred culture</li>
	  						<li>Gain senior leaders’ commitment and define their role in leading change</li>
							<li>Develop a change plan with representative managers, supervisors, and employees</li>
							<li>Engage the entire organization to implement the change plan</li>
						</ul><br/>
						<h4><span className="oblique bold blue">Process Excellence</span></h4><br/>
	  					<ul>
	  						<li>Build skills in process analysis and process improvement techniques</li>
	  						<li>Develop team-based problem-solving and decision-making skills </li>
							<li>Transform processes to simplify, and standardize, and automate</li>
							<li>Certify / qualify participants in Lean, Lean Six Sigma, Agile and Change Management disciplines</li>
						</ul><br/>
	  				</h3>
	  				<BackButtonLogoComponent history={this.props.history}/>
	  			</div>	
	  		</div>
	    );
  	}

}

export default ExpertisesComponent;