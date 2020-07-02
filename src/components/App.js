import React from 'react';
import Card from './Card';
import '../fintek.css';

class App extends React.Component {
	state = {
		chosenPerson: [],
		person: [],
	}

	componentDidMount = () => {
		this.jsonReader();
	}

	jsonReader = async () => {
		try {
			const res = await fetch('staff.json')
			const json = await res.json()
			this.setState({person: json})
		} catch (err) {
			console.log(err)
		}
		
		this.randomPerson();
	}
	


	randomPerson = () => {
		let arr = [];
		for(let i = 0; i < 6; i++) {
			
			let item = this.state.person[Math.floor(Math.random() * this.state.person.length)];
			console.log('item is: ', item);
			arr.push(item);
	
		}
		this.setState({ chosenPerson: arr});
		console.log('random array: ',this.state.chosenPerson);
		
		
	}

	render() {
		return (
			<div className="container">
				<div className="column left">
					<div className="url">
						<h4>Fintek.co.il</h4>
					</div>
					<div>
						<h1>Execution is everything</h1>
					</div>
					<div className="text">
						<div className="text-para">
							<h5>WHO ARE WE</h5>
							<p>
								We are team of creatively diverse,<br/>
								driven, and innovative individuals<br/>
								working to achieve the best we can.
							</p>
						</div>
						<div className="text-para">
							<h5>OUR MISSION</h5>
							<p>
								We want to give our clients the best<br/>
								and help their businesses succeed.<br/>
								Together we can make you inspire<br/>
								to growth to even more than where<br/>
								you are today.
							</p>
						</div>
					</div>
				</div>
				<div className="column right">
					<div className="row">

						
						{this.state.chosenPerson.map((chosenPerson) => {
							 
								return <Card 
									key={chosenPerson.id}
									firstName={chosenPerson.firstname}
									lastName={chosenPerson.lastname}
									// We add an id in order for browser to make different calls for each resource
									photo={chosenPerson.avatar  + chosenPerson.id}
									job={chosenPerson.job} />

							})
						}
					</div>
					
				</div>
			</div>

		)
	}
}

export default App;