const { h, render, Component, Color } = require('ink')

class App extends Component {
	constructor(){
		super()
		this.state = { message: "Hello" }
	}

	render(){
		return <Color blue> {this.state.message} </Color>
	}
}

render(<App/>)
