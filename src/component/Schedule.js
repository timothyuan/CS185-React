import React, { Component } from 'react';
import TaskList from './TaskList';
 


class Schedule extends Component{
    constructor(props){
        super(props);
        this.state = {
            taskList: true,
            title: "",
            day: "",
            link: "",
            important: false,
            updateId: null
        };
    }

    componentDidMount = async () => {
        var tasks = await this.getTasks()
        this.setState({tasks})
    }

    getTasks = async () => {
        var res = await fetch("https://my-json-server.typicode.com/timothyuan/CS185-Server/tasks")
        var data = await res.json()
        return data
    }

    showCreate = () => {
        this.setState({title: "", day: "", link: "", important: false, taskList: false, updateId: null})
    }

    showSchedule = () => {
        this.setState({taskList: true})
    }

    showUpdate = (id) => {
        this.setState({title: "", day: "", link: "", important: false, updateId: id})
    }

    hideUpdate = (id) => {
        this.setState({updateId: null})
    }

    onSubmit = (e) => {
        e.preventDefault()
        if(this.state.title==""||this.state.title.length>30){
            alert("Meeting title needs to be non-empty and within 30 characters")
            return
        }
        var time = Date.parse(this.state.day)
        if(isNaN(time)||time < Date.now()){
            alert("Date needs to be greater than current date")
            return 
        }
        if(!this.state.link.includes("zoom")){
            alert("Zoom link must contain the string 'zoom'")
            return
        }
        this.addTask()
        this.setState({title: "", day: "", link: "", important: false})
    }

    onUpdateSubmit = (e) => {
        e.preventDefault()
        if(this.state.title==""||this.state.title.length>30){
            alert("Meeting title needs to be non-empty and within 30 characters")
            return
        }
        var time = Date.parse(this.state.day)
        if(isNaN(time)||time < Date.now()){
            alert("Date needs to be greater than current date")
            return 
        }
        if(!this.state.link.includes("zoom")){
            alert("Zoom link must contain the string 'zoom'")
            return
        }
        this.updateTask()
        this.setState({title: "", day: "", link: "", important: false, updateId: null})
    }

    addTask = async () => {
        var res = await fetch("https://my-json-server.typicode.com/timothyuan/CS185-Server/tasks", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: this.state.title, day: this.state.day, textInfor: this.state.link, important: this.state.important})
        })
        var data = await res.json()
        this.setState({tasks: [...this.state.tasks, data]})
    }

    deleteTask = async (id) => {
        await fetch(`https://my-json-server.typicode.com/timothyuan/CS185-Server/tasks/${id}`, {
            method: 'DELETE'
        })
        this.setState({tasks: this.state.tasks.filter((task) => task.id !== id)})
    }

    updateTask = async () => {
        var res = await fetch(`https://my-json-server.typicode.com/timothyuan/CS185-Server/tasks/${this.state.updateId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: this.state.title, day: this.state.day, textInfor: this.state.link, important: this.state.important})
        })
        var tasks = await this.getTasks()
        this.setState({tasks})
    }

    render(){

        return (
            <div>
                <div className="center">
                    <h1 style={{paddingRight:"10%"}}>Zoom Meeting Manager</h1>
                    {this.state.taskList && <button onClick={this.showCreate}>Create a meeting</button>}
                    {!this.state.taskList && <button onClick={this.showSchedule}>Full schedule</button>}
                </div>
                {this.state.taskList && <div className="center">
                    {this.state.tasks && <TaskList tasks={this.state.tasks} updateId={this.state.updateId} hideUpdate={this.hideUpdate.bind(this)} showUpdate={this.showUpdate.bind(this)} deleteTask={this.deleteTask.bind(this)}/>}
                </div>}
                {!this.state.taskList && <div className="center">
                    <form onSubmit = {this.onSubmit}>
                    <label>Title:</label>
                    <input type="text" id="title" value={this.state.title} onChange={(e)=>this.setState({title: e.target.value})}/><br/>
                    <label>Day:</label>
                    <input type="text" id="day" value={this.state.day} onChange={(e)=>this.setState({day: e.target.value})}/><br/>
                    <label>Link:</label>
                    <input type="text" id="link" value={this.state.link} onChange={(e)=>this.setState({link: e.target.value})}/><br/>
                    <label>Important:</label>
                    <input type="checkbox" id="important" checked={this.state.important} onChange={(e)=>this.setState({important: e.currentTarget.checked})}/><br/>
                    <input type="submit" value="Save meeting"/>
                    </form>
                </div>}
                {this.state.updateId && <div className="center">
                    <form onSubmit = {this.onUpdateSubmit}>
                    <label>Title:</label>
                    <input type="text" id="title" value={this.state.title} onChange={(e)=>this.setState({title: e.target.value})}/><br/>
                    <label>Day:</label>
                    <input type="text" id="day" value={this.state.day} onChange={(e)=>this.setState({day: e.target.value})}/><br/>
                    <label>Link:</label>
                    <input type="text" id="link" value={this.state.link} onChange={(e)=>this.setState({link: e.target.value})}/><br/>
                    <label>Important:</label>
                    <input type="checkbox" id="important" checked={this.state.important} onChange={(e)=>this.setState({important: e.currentTarget.checked})}/><br/>
                    <input type="submit" value="Save meeting"/>
                    </form>
                </div>}
            </div>
            );
                
        
    }

}


export default Schedule;