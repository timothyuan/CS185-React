import React, { Component } from 'react';
import Text from './Text'
import Images from './Images'
import Videos from './Videos'
import Projects from './Projects'
import Email from './Email'
import Schedule from './Schedule'


export class Body extends Component{

  render(){
	
        var activeTab = this.props.activeTab

		if(activeTab===1)
			return <Text/>
		else if (activeTab==2) 
			return <Images/>

		else if (activeTab==3)
			return <Videos/>
		else if (activeTab==4)
			return <Projects/>
        else if (activeTab==5)
            return <Email/>
		else
			return <Schedule/>
             
      
  }

}


export default Body;