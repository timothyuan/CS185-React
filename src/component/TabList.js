import React, {Component} from 'react';
import Tab from './Tab';

class Tablist extends Component {
    render() {
        return this.props.tabs.map((tab) =>(
    		<Tab tab={tab} 
    		changeTab={this.props.changeTab}
    		activeTab={this.props.activeTab}/>
    	));
    }
}
export default Tablist;