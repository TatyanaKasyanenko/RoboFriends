import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scrol from '../components/Scrol';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			robots: [],
			serchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: users}));
	}

	onSearchChange = (event) => {	
		this.setState({serchfield: event.target.value})			
	}

	render(){
		const { robots, serchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(serchfield.toLowerCase())
		})
		return !robots.length ?
		<h1>Loading</h1> :
		(
			<div className='tc'>			
				<h1 className='f1'>RobotFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scrol>
					<CardList robots={filteredRobots} />
				</Scrol>
			</div>
		);				
	}	
}
export default App;