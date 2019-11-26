import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    // component level state
    state = {
        title: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.props);
        console.log(this.props);
        this.props.addTodo(this.state.title);
        // clear the field after submitting
        this.setState({ title:'' })
    }

    render() {
        return (
            <form onSubmit = {this.onSubmit} style = {{ display : 'flex' }}>
                <input 
                    type = "text" 
                    name = "title" 
                    style = {{ flex: '10', padding: '5px'}}
                    placeholder = "Add Todo ..."
                    value = {this.state.title} 
                    onChange = {this.onChange}
                />
                <input 
                    type = "submit"
                    value = "Submit"
                    className = "btn"
                    style = {{flex : '1'}}
                />
            </form>
        )
    }
}

export default AddTodo
