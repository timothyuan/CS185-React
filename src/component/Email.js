import React, { Component } from 'react';

class Email extends Component{

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            alert: false
        };
    }

    updateInputValue = (e) => {
        this.setState({
            inputValue: e.target.value
        });
      }

    validateEmail = () => {
        var mailformat = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(this.state.inputValue.match(mailformat)){
            this.setState({
                alert: "Email successfully recorded"
            });
        }else{
            this.setState({
                alert: "Invalid email address"
            });
        }
    }

    render(){
        return(
            <div>
                <div className="center">
                <form style={{paddingTop:"30vh"}}>
                <label htmlFor="emailInput">E-mail:</label>
                <input type="text" id="emailInput" value={this.state.inputValue} onChange={this.updateInputValue}/><br/><br/>
                <input type="button" value="Submit" onClick={this.validateEmail}/>
                </form>
                </div>
                {this.state.alert && <div className="center">
                <p>{this.state.alert}</p>
                </div>}
            </div>
        );      
    }

}


export default Email;