import React, { Component } from 'react'

export class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {searchText: ''};
    }

    handleInputChange = () => {
        this.setState({searchText: this.search.value})
    }

    render() {
        return (
            <form>
                <input
                    placeholder="Search for Group"
                    ref = {input => this.search = input}
                    onChange = {this.handleInputChange}
                />
                <p>{this.state.query}</p>
                <button>search</button>
            </form>
        )
    }
}