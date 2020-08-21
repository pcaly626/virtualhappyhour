import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class VirtualHappyHour extends Component{

    render(){
        return <h1>VirtualHappyHour!</h1>
    }
}

ReactDOM.render(<VirtualHappyHour/>, document.getElementById('app'));