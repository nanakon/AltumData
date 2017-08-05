import React from 'react';

import BlockButtonComponent from './BlockButtonComponent.jsx';


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
	  				<div className="page-title blue" id="expertises-title-1">Our Expertises</div><br/>
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
	  				<div className="page-title blue" id="expertises-title-1">Components of Successful and Sustainable Change</div><br/>
	  				<h3 className="expertises-page-content-div">
	  					<h4><span className="oblique bold blue">Transformational Leadership</span></h4><br/>
	  					- Senior leaders identify the compelling reasons for change and measures of success<br/>
	  					- Identify key leadership styles and behaviors that affect business performance<br/>
						- Improve leaders’ effectiveness by creating individual and team development plans<br/>
						- Coach and mentor leaders to implement and sustain change<br/><br/>

						<h4><span className="oblique bold blue">Adaptive Culture</span></h4><br/>
	  					- Create a baseline of the organization’s current and preferred culture<br/>
	  					- Gain senior leaders’ commitment and define their role in leading change<br/>
						- Develop a change plan with representative managers, supervisors, and employees<br/>
						- Engage the entire organization to implement the change plan<br/><br/>

						<h4><span className="oblique bold blue">Process Excellence</span></h4><br/>
	  					- Build skills in process analysis and process improvement techniques<br/>
	  					- Develop team-based problem-solving and decision-making skills <br/>
						- Transform processes to simplify, and standardize, and automate<br/>
						- Certify / qualify participants in Lean, Lean Six Sigma, Agile and Change Management disciplines<br/><br/>
	  				</h3>
	  			</div>	
	  		</div>
	    );
  	}

}

export default ExpertisesComponent;