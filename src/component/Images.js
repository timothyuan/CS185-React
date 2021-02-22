import React, { Component } from 'react';
import city from '../images/city.jpeg';
import lake from '../images/lake.jpeg';
import beach from '../images/beach.jpeg';
import lights from '../images/lights.jpeg';
import sunset from '../images/sunset.jpeg';
import waterfall from '../images/waterfall.jpeg';

class Images extends Component{

    constructor(props) {
        super(props);
        this.state = {
          is_visible: false,
          modal: null
        };
    }

    topFunction = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }

    componentDidMount = () => {
        var scrollComponent = this;
        document.addEventListener("scroll", function(e) {
            scrollComponent.handleScroll();
        });
    }

    vh = (v) => {
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        return (v * h) / 100;
    }

    handleScroll = () => {
        if (window.pageYOffset > this.vh(25)) {
            this.setState({
              is_visible: true
            });
          } else {
            this.setState({
              is_visible: false
            });
          }
    }

    openImage = (img) => () => {
        this.setState({
            modal: img
        });
    }

    closeImage = () => {
        this.setState({
            modal: null
        });
    }

    modalHandler = (e) => {
        if(e.target != e.currentTarget)
        return;
        this.closeImage();
    }


  render(){

    return (
    <div>
    <div className="grid-container">
        <div><img src={city} onClick={this.openImage(city)}/></div> 
        <div><img src={lake} onClick={this.openImage(lake)}/></div>
        <div><img src={beach} onClick={this.openImage(beach)}/></div>
        <div><img src={lights} onClick={this.openImage(lights)}/></div>
        <div><img src={sunset} onClick={this.openImage(sunset)}/></div>
        <div><img src={waterfall} onClick={this.openImage(waterfall)}/></div>
        <div><img src={city} onClick={this.openImage(city)}/></div> 
        <div><img src={lake} onClick={this.openImage(lake)}/></div>
        <div><img src={beach} onClick={this.openImage(beach)}/></div>
        <div><img src={lights} onClick={this.openImage(lights)}/></div>
        <div><img src={sunset} onClick={this.openImage(sunset)}/></div>
        <div><img src={waterfall} onClick={this.openImage(waterfall)}/></div>
        <div><img src={city} onClick={this.openImage(city)}/></div> 
        <div><img src={lake} onClick={this.openImage(lake)}/></div>
        <div><img src={beach} onClick={this.openImage(beach)}/></div>
        <div><img src={lights} onClick={this.openImage(lights)}/></div>
        <div><img src={sunset} onClick={this.openImage(sunset)}/></div>
        <div><img src={waterfall} onClick={this.openImage(waterfall)}/></div>
        <div><img src={city} onClick={this.openImage(city)}/></div> 
        <div><img src={lake} onClick={this.openImage(lake)}/></div>
        <div><img src={beach} onClick={this.openImage(beach)}/></div>
        <div><img src={lights} onClick={this.openImage(lights)}/></div>
        <div><img src={sunset} onClick={this.openImage(sunset)}/></div>
        <div><img src={waterfall} onClick={this.openImage(waterfall)}/></div>
    </div>
    {this.state.modal && <div id="imageModal" className="modal" onClick={this.modalHandler}>
            <span className="close" onClick={this.closeImage}>&times;</span>
            <div className="modal-content">
                <img id="modal-image" style={{width: "100%"}} src={this.state.modal}/>
            </div>
    </div>}
    {this.state.is_visible &&<button onClick={this.topFunction} id="btt" className="btt" title="Go to top">Top</button>}
    </div>
    );
             
      
  }

}

export default Images;