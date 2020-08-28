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
        this.dragMouseDown = this.dragMouseDown.bind(this)
        this.dragElement = this.dragElement.bind(this)
        this.closeDragElement = this.closeDragElement.bind(this)
        this.dragGuest = this.dragGuest.bind(this)
      }
    

     dragElement(event){
         event = event || window.event;
         event.preventDefault();

         this.setState({one: this.state.three - event.clientX});
         this.setState({two: this.state.four - event.clientY});
         this.setState({three: event.clientX});
         this.setState({four: event.clientX});

         document.getElementById('guest').style.top = (document.getElementById('guest').offsetTop - this.state.two) + "px";
         document.getElementById('guest').style.left = (document.getElementById('guest').offsetLeft - this.state.one) + "px";

     }

    closeDragElement(){
         document.onmouseup = null;
         document.onmousemove = null;
     }

    
    dragGuest(guestDiv){
        if(document.getElementById(guestDiv.id)){
            
            document.getElementById(guestDiv).onmousedown = this.dragMouseDown();
        }
        else{
            guestDiv.onmousedown = this.dragMouseDown();
        }
        
    }

    dragMouseDown(event){
        event = event || window.event;
        event.preventDefault();
        this.setState({three: event.clientX})
        this.setState({four: event.clientY})
        document.onmouseup = this.closeDragElement();
        document.onmousedown = this.dragElement();
    }


    render(){
        return (
            <div className="container">
                <div className="row">
                 
                        <div id="guest" className="guest" onClick={this.dragGuest}></div>
                   
                    
                </div>
            </div>
        
        )
    }
}

ReactDOM.render(<VirtualHappyHourApp/>, document.getElementById('app'));