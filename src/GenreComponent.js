import React, { Component } from 'react'

function Todo(props) {
    function handleChange() {
        props.onValueToggle(props)
    }
    return (<div><input type="checkbox" checked={props.checked} onChange={handleChange} /> <label>{props.name}</label></div>)
}

class GenreComponent extends Component {
    constructor() {
        super();
        this.state = {
            todos: [{ name: 'Terror', checked: false }, { name: 'Horror', checked: true }, { name: 'Romance', checked: false }, { name: 'Comedy', checked: true }],
            open: false
        }

        this.handleToggle = this.handleToggle.bind(this)
        this.onValueToggle = this.onValueToggle.bind(this)
    }

    onValueToggle({ name }) {
        this.setState((prev) =>
        ({
            todos: prev.todos.map(x => {
                return x.name === name ? { name: x.name, checked: !x.checked } : x
            })
        })
        )
    }

    handleToggle() {
        this.setState(prev => ({ open: !prev.open }))
    }

    render() {
        return (
            <div>
                <h3>Select Genre</h3>
                <button onClick={this.handleToggle}>
                    Select Genre <span className="open">{this.state.open ? '-' : '+'}</span>
                </button>
                {this.state.open &&
                    this.state.todos.map((x, i) => <Todo key={i} name={x.name} checked={x.checked} onValueToggle={this.onValueToggle} />)
                }
                <p>Selected: {this.state.todos.filter(x => x.checked).map(x => x.name).join(", ")}</p>
            </div>
        )
    }
}

export default GenreComponent