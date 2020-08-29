import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './VirtualHappyHourApp.css';
class VirtualHappyHourApp extends Component{
    constructor(props) {
        super(props);
        this.state = {
                one:0,
                two:0,
                three:0,
                four:0
        };
        this.dragGuest = this.dragGuest.bind(this)
    }
    
    dragGuest(guestId){
        const guest = document.getElementById(guestId);
        guest.onmousedown = (event) =>{ 
            event = event || window.event;
            event.preventDefault();
            this.setState({
                three: event.clientX,
                four: event.clientY
            })

            document.onmouseup = () =>{
                document.onmouseup = null;
                document.onmousemove = null;
            }
            
            document.onmousemove = (event) =>{    
                this.setState({
                    one: this.state.three - event.clientX,
                    two: this.state.four - event.clientY,
                    three: event.clientX,
                    four: event.clientY
                })
                guest.style.top = (guest.offsetTop - this.state.two) + "px";
                guest.style.left = (guest.offsetLeft - this.state.one) + "px";

            }
        }
    }
    
    render(){
        return (
            <div className="container">
                <div className="row">
                 
                        <div id="guest" className="guest" onClick={() => this.dragGuest('guest')}></div>
                   
                    
                </div>
            </div>
        
        )
    }
}

ReactDOM.render(<VirtualHappyHourApp/>, document.getElementById('app'));