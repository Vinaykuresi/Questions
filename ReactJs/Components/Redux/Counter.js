import React from 'react';

class Counter extends React.Component{
  constructor() {
    super()
    this.stepRef = React.createRef()
  }
  render(){
    return (
      <div className="container"><br/>
        Enter the step value: <input type="number" ref={this.stepRef}/><br/><br/>
        <button className="btn btn-primary" onClick={()=>{
          this.props.onIncrement(this.stepRef.current.value)}
        }>Increment Count</button>&nbsp;&nbsp;&nbsp;
        <button className="btn btn-primary" onClick={()=>{
          this.props.onDecrement(this.stepRef.current.value)}
        }>Decrement Count</button><br/><br/>
		    <h2>Incremented value:{this.props.inCount}</h2>
        <h2>Decremented value:{this.props.deCount}</h2>
      </div>
    )
  }
}
export default Counter;
 

   1.	import React from 'react';
	import ReactDOM from 'react-dom';
	import * as serviceWorker from './serviceWorker';
	import 'bootstrap/dist/css/bootstrap.min.css';
	import { createStore, applyMiddleware } from 'redux';
	import { Provider }  from 'react-redux';
	import  thunk  from 'redux-thunk';
	import reducer from './reducers/Reducer';
	import App from './components/App.js';
	
	var store = applyMiddleware(thunk)(createStore)(reducer);
	
	ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
	
	serviceWorker.unregister();
