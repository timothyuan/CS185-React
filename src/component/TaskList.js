import React, {Component} from 'react';

class TaskList extends Component {

    renderTable = () => {
        return this.props.tasks.map((task) =>(
            <tr>
                {task.important && <td><mark>{task.title}</mark></td>}
                {!task.important && <td>{task.title}</td>}
                <td>{task.day}</td>
                <td><a href={task.textInfor}>{task.textInfor}</a></td>
                <td>
                {task.id != this.props.updateId && <button onClick={this.props.showUpdate.bind(this, task.id)}>Update</button>}
                {task.id == this.props.updateId && <button onClick={this.props.hideUpdate.bind(this)}>Hide</button>}
                <button onClick={this.props.deleteTask.bind(this, task.id)}>Delete</button>
                </td>
            </tr>
    	));
    }

    render() {
        return(
        <table>
            <tbody>
                <tr>
                    <th>Title</th>
                    <th>Day</th>
                    <th>Link</th>
                </tr>
                {this.renderTable()}
            </tbody>
        </table>
        );
    }
}
export default TaskList;