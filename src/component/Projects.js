import React, { Component } from 'react';

class Projects extends Component{

  render(){
    return (
        <table>
            <tbody>
                <tr>
                    <th>Name/Link</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td><a style={{textDecoration: "none"}} href="https://paul-reactclient.herokuapp.com/">Paul, Polling Assistant</a></td>
                    <td>Data visualization tool that maps primary results to district demographics 
                    for California's 25th Assembly district.</td>
                </tr>
                <tr>
                    <td><a style={{textDecoration: "none"}} href="https://github.com/timothyuan/jarvis">Jarvis</a></td>
                    <td>Voice controlled NodeJS server on Raspberry Pi to play music with Spotify API, 
                    control temperature with Nest API, and turn lights on/off</td>
                </tr>
            </tbody>
        </table>
    );
  }
}


export default Projects;