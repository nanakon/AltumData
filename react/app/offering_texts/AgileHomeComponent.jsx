import React from 'react';

class AgileHomeComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	};

	render() {	
	  	return (
	  		<div className="lss-right-column-wrapper">
	  			<div className="right-column-content">
	  				<div className="course-description">
	  					<h3 className="offering-description-title">
  							Agile Techniques
  						</h3><br/>
  						<h3 className="offering-description-div">
  							Originally, Agile was developed as a set of management practices relevant to software development. Today, Agile is spreading to all parts of business and to all types of companies. 
  						</h3>
  						<h3 className="offering-description-div">
  							Since its emergence years ago, Agile has extended beyond software development due to the need for organizations to cope with today’s constant changing, customer-driven marketplace. Agile enables organizations to master continuous change. It permits companies to grow in a world that is increasingly volatile, uncertain, complex and ambiguous.
  						</h3>
  						<h3 className="offering-description-div">
  							Our Agile training courses are highly interactive and offer a “hands on” learning approach. Participants will be able to successfully use and implement agile methodologies within your teams, departments, and organization upon course completion.
  						</h3>
	  				</div>
	  			</div>			
	  		</div>
	    );
  	}

}

export default AgileHomeComponent;