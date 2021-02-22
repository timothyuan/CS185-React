import React, { Component } from 'react';
 


class Text extends Component{
  render(){

    return (
        <div className="center">
        <form action="submit">
            <label htmlFor="fname">First Name:</label>
            <input type="text" id="fname" value="Timothy"/> <br/>
            <label htmlFor="lname">Last Name:</label>
            <input type="text" id="lname" value="Yuan"/> <br/>
            <input type="submit" value="Submit"/>

            <h3>Gender</h3>
            <input type="radio" id="male" name="gender" value="male"/>
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" name="gender" value="female"/>
            <label htmlFor="female">Female</label><br/>
            <input type="radio" id="other" name="gender" value="other"/>
            <label htmlFor="other">Other</label>
        </form>
        </div>
    	);
             
      
  }

}


export default Text;