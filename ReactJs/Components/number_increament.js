	class Timer extends React.Component {
	    constructor() {
	        super ()
	        this.state = {
	            counter: 0
	        }
	    }
	    handleClick = (e) => {
	        this.setState({counter:this.state.counter+1})
	    }
	    render() {
	        return(<React.Fragment>
	            <h2> Seconds Elapsed: {this.state.counter} </h2>
	            <button onClick = {this.handleClick}> Increment Counter </button>
	        </React.Fragment>)
	    }
	}
   