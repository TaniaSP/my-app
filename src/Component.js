import React, { Component } from 'react'

class SearchComponent extends Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { value: '', search: false };
    }
    handleChange(event) {
        this.setState({ search: false });
        this.setState({ value: event.target.value });
    }
    handleSubmit(event) {
        this.setState({ search: true });
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <h3>Search Box</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" placeholder="Search..." value={this.state.value} onChange={this.handleChange} />
                    <button type="submit">Search</button>
                </form>
                {this.state.search && <p><i>Searching for {this.state.value} returned {Math.floor(Math.random() * 10)} results</i></p>}
            </div>
        )
    }
}

export default SearchComponent