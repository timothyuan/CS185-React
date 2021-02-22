import React, { Component } from 'react';

import './App.css'
import TabList from './component/TabList'
import Body from './component/Body'


export class App extends Component{
  constructor(){
    super();
    this.state ={
      activeTab: 1
    }
    this.changeTab = (id) => {
      this.setState({
        activeTab: id
      })
    }
  }
  render(){
    const tabs = [
    {
      id:1,
      title: 'Text'
    },

    {
      id:2,
      title: 'Images'
    },

    {
      id:3,
      title: 'Videos'
    },

    {
      id:4,
      title: 'Projects'
    },
    {
      id:5,
      title: 'E-mail'
    }

    ]


    return(
      <div>
        <div className ="nav-bar"> 
          < TabList tabs={tabs} 
          changeTab={this.changeTab}
          activeTab={this.state.activeTab} />
        </div>

       
        <div className ="main-body">
          <Body activeTab={this.state.activeTab}/>
        </div>
      </div>

      );
  }
}


export default App;
