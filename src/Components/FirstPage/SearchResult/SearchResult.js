import React, { Component } from 'react'

export class SearchResult extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <h2>Results</h2>
                <div><p>Group1</p><button>add</button></div>
                <div><p>Group2</p><button>add</button></div>
                <div><p>Group3</p><button>add</button></div>
                <div><p>Group4</p><button>add</button></div>
                <div><p>Group5</p><button>add</button></div>
            </div>
        );
    }
}