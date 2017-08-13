import React from 'react';

import language_pack from './lang_packs/eng.json';
import ToggleShowHideComponent from './ToggleShowHideComponent.jsx';

class OfferingExampleComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	};

	render() {	
	  	return (
	  		<div className="offering-example">
	  			<ToggleShowHideComponent show={false} title="Data Envelopment Analysis Model (DEA)">
	  				<h3 className="offering-description-div ">Data Envelopment Analysis model is a linear programming based technique for measuring the relative performance of organizational units where the presence of multiple inputs and outputs makes comparison difficult. A common measure for relative efficiency is weighted sum of outputs divided by weighted sum of inputs. DEA model allows each unit to adopt a set of weight that shows it in the most favorable light in comparison to the other unit.
	  				</h3>
	  				<h3 className="offering-description-div">
	  					There is two basic type of DEA models. First is input oriented model and second is output oriented model. Both gives the same result of efficiency but using input oriented we can also get information of optimal combination of inputs of non-effective units, the same for output oriented model.
	  				</h3>
	  				<h3 className="offering-description-div">
	  					Read more: <a className="inline-hyperlink" target="blank" href="https://en.wikipedia.org/wiki/Data_envelopment_analysis">Data Envelopment Analysis</a> 
	  				</h3>
	  			</ToggleShowHideComponent>
	  			<ToggleShowHideComponent show={false} title={"Job Shop Scheduling"}>
	  				<h3 className="offering-description-div">		
	  					Job shop scheduling or the job-shop problem (JSP) is an optimization problem in computer science and operations research in which ideal jobs are assigned to resources at particular times. The most basic version is as follows: We are given n jobs J1, J2, ..., Jn of varying processing times, which need to be scheduled on m machines with varying processing power, while trying to minimize the makespan. The makespan is the total length of the schedule (that is, when all the jobs have finished processing). In most practical settings, the problem is presented as an online problem (dynamic scheduling), that is, the decision of scheduling a job can only be made online, when the job is presented to the algorithm. 
	  				</h3>
	  				<h3 className="offering-description-div">
	  					Production scheduling can be defined as the allocation of available production resources over time to perform a collection of tasks. It is an important decision-making process in the operation level. In a modern manufacturing environment, many scheduling problems occur. Most of the scheduling problems are very significant and hard to solve owing to the complex nature of the problems.
	  				</h3>
	  				<h3 className="offering-description-div">
	  					The scheduling problem is the classical quantitative combinatorial search problem of defining order over a set of N jobs as they proceed from one machine to another. Many industrial processes are characterized by this flow of work such as jobs in metallurgy, metal and automotive plants. A flowshop consists of M machines in series and N different jobs available for processing at time zero. Each machine can handle only one job at a time. Each job is continuously processed on M available machines in the same technological order. The processing time including a setup time of job performed on the machine depends on the amount of constrained resources allocated to these jobs. The processing time of job i on machine j is denoted by T[ij] for i = 1, 2, …, N and j = 1, 2, …, M.
	  				</h3>
	  				<h3 className="offering-description-div">
	  				Read more: <a className="inline-hyperlink" target="blank" href="https://en.wikipedia.org/wiki/Job_shop_scheduling">Job Shop Scheduling</a> 
	  				</h3>
	  			</ToggleShowHideComponent>
	  			<ToggleShowHideComponent show={false} title={"The Traveling Salesman Problem"}>
	  				<h3 className="offering-description-div">		
	  					The travelling salesman problem (TSP), or in recent years, the travelling salesperson problem, asks the following question: "Given a list of cities and the distances between each pair of cities, what is the shortest possible route that visits each city exactly once and returns to the origin city?". In these applications, the concept city represents, for example, customers, soldering points, or DNA fragments, and the concept distance represents travelling times or cost, or a similarity measure between DNA fragments. The TSP also appears in astronomy, as astronomers observing many sources will want to minimize the time spent moving the telescope between the sources. In many applications, additional constraints such as limited resources or time windows may be imposed.
	  				</h3>
	  				<h3 className="offering-description-div">
	  				Read more: <a className="inline-hyperlink" target="blank" href="https://en.wikipedia.org/wiki/Travelling_salesman_problem#Integer_linear_programming_formulation">The Traveling Salesman Problem</a> 
	  				</h3>
	  			</ToggleShowHideComponent>
	  			<ToggleShowHideComponent show={false} title={"The Traveling Purchaser Problem"}>
	  				<h3 className="offering-description-div">		
	  					The traveling purchaser problem (TPP) is an NP-hard problem studied in theoretical computer science. Given a list of marketplaces, the cost of travelling between different marketplaces, and a list of available goods together with the price of each such good at each marketplace, the task is to find for a given list of articles the route with the minimum combined cost of purchases and traveling.
	  				</h3>
	  				<h3 className="offering-description-div">
	  				Read more: <a className="inline-hyperlink" target="blank" href="https://en.wikipedia.org/wiki/Traveling_purchaser_problem">The Traveling Purchaser Problem</a> 
	  				</h3>
	  			</ToggleShowHideComponent>
	  			<ToggleShowHideComponent show={false} title={"The Vehicle Routing Problem"}>
	  				<h3 className="offering-description-div">		
	  					The vehicle routing problem (VRP) is a combinatorial optimization and integer programming problem which asks "What is the optimal set of routes for a fleet of vehicles to traverse in order to deliver to a given set of customers?". The objective function of a VRP can be very different depending on the particular application of the result but a few of the more common objectives are: Minimize the global transportation cost based on the global distance travelled as well as the fixed costs associated with the used vehicles and drivers, Minimize the number of vehicles needed to serve all customers, Least variation in travel time and vehicle load, Minimize penalties for low quality service.
	  				</h3>
	  				<h3 className="offering-description-div">
	  				Read more: <a className="inline-hyperlink" target="blank" href="https://en.wikipedia.org/wiki/Vehicle_routing_problem">The Vehicle Routing Problem</a> 
	  				</h3>
	  			</ToggleShowHideComponent>
	  		</div>
	    );
  	}

}

export default OfferingExampleComponent;