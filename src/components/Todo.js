import React, { Component } from "react";

export default class Todo extends Component {
    constructor() {
        super();
        this.state = {
            input: ""
        }
    }
    render() {
        console.log(this.props);
        <input className="userName"> Enter Username here:</input>
        return (
            <div className="Todo">

                <h1> To Do List:</h1>
                <div className="todo_list">
                    <ul>
                        {
                            this.props.todoList.map((item, i, arr) => {
                                return (
                                    <li onClick={()=> this.props.completedItem(i,item)} key={i} >{item}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="input_container">
                    <input type="text" value={this.state.input} onChange={(e) => this.setState({
                        input: e.target.value
                    })} />
                    <button className="input_button" onClick={() => this.props.addItem( this.state.input) }>Add ToDo item!</button>
                    
                </div>
            </div>
        )

    }
}
