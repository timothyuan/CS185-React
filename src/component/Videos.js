import React, { Component } from 'react';
import video from '../videos/1.mp4';

export class Videos extends Component{

    constructor(props) {
        super(props);
        this.state = {
          video: null
        };
    }

    openVideo = (vid) => () => {
        this.setState({
            video: vid
        });
    }

    closeVideo = () => {
        this.setState({
            video: null
        });
    }

    modalHandler = (e) => {
        if(e.target != e.currentTarget)
        return;
        this.closeVideo();
    }

    render(){
        return(
            <div>
            <div className="grid-container">
            <div>
                <video width="320" height="240" onClick={this.openVideo(video)} controls>
                    <source src={video} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
            <div>
                <video width="320" height="240" onClick={this.openVideo(video)} controls>
                    <source src={video} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
            <div>
                <video width="320" height="240" onClick={this.openVideo(video)} controls>
                    <source src={video} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
            <div>
                <video width="320" height="240" onClick={this.openVideo(video)} controls>
                    <source src={video} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
            </div>  
            {this.state.video && <div id="videoModal" className="modal" style={{textAlign: "center"}} onClick={this.modalHandler}>
                <span className="close" onClick={this.closeVideo}>&times;</span>
                <video id="modal-video" width="640" height="480" controls>
                    Your browser does not support the video tag.
                    <source src={this.state.video} type="video/mp4"/>
                </video>
            </div>}
            </div>
        );  
    }

}


export default Videos;